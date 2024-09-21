from flask import jsonify, request
from bson.objectid import ObjectId
import datetime
from app import app, students_collection  
from app.schemas import StudentSchema

student_schema = StudentSchema()
students_schema = StudentSchema(many=True)

@app.route('/listusers', methods=['GET'])
def list_users():
    all_users = students_collection.find()
    results = []

    for user in all_users:
        user_data = student_schema.dump(user)
        user_data['id'] = str(user['_id'])  
        results.append(user_data)

    return jsonify(results)

@app.route('/userdetails/<id>', methods=['GET'])
def userdetails(id):
    user = students_collection.find_one({'_id': ObjectId(id)})
    
    if user:
        result = student_schema.dump(user)
        result['id'] = str(user['_id']) 
        return jsonify(result)
    else:
        return jsonify({'error': 'User not found'}), 404

@app.route('/userupdate/<id>', methods=['PUT'])
def userupdate(id):
    user = students_collection.find_one({'_id': ObjectId(id)})
    
    if user:
        name = request.json.get('name')
        age = request.json.get('age')

        if name:
            user['name'] = name
        if age:
            user['age'] = age

        students_collection.update_one({'_id': ObjectId(id)}, {'$set': user})

        updated_user = students_collection.find_one({'_id': ObjectId(id)})
        result = student_schema.dump(updated_user)
        result['id'] = str(updated_user['_id']) 
        return jsonify(result)
    else:
        return jsonify({'error': 'User not found'}), 404


@app.route('/userdelete/<id>', methods=['DELETE'])
def userdelete(id):
    result = students_collection.delete_one({'_id': ObjectId(id)})

    if result.deleted_count > 0:
        return jsonify({'result': 'User deleted successfully'})
    else:
        return jsonify({'error': 'User not found'}), 404


@app.route('/useradd', methods=['POST'])
def useradd():
    name = request.json['name']
    age = request.json['age']
    date = datetime.datetime.now()

    new_user = {
        'name': name,
        'age': age,
        'date': date
    }

    user_id = students_collection.insert_one(new_user).inserted_id

    added_user = students_collection.find_one({'_id': ObjectId(user_id)})
    result = student_schema.dump(added_user)
    result['id'] = str(added_user['_id']) 

    return jsonify(result), 201
