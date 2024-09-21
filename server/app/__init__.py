from flask import Flask
from pymongo import MongoClient
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

ma = Marshmallow(app)

client = MongoClient('mongodb://localhost:27017/')
db = client['students_db']  
students_collection = db['students']

from app import api 
