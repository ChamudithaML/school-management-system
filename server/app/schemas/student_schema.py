from app import ma

class StudentSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'age', 'letter', 'date')
