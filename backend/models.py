from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'


class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    school = db.Column(db.String(10))
    sex = db.Column(db.String(10))
    age = db.Column(db.Integer)
    address = db.Column(db.String(5))
    famsize = db.Column(db.String(5))
    Pstatus = db.Column(db.String(5))
    Medu = db.Column(db.Integer)
    Fedu = db.Column(db.Integer)
    Mjob = db.Column(db.String(50))
    Fjob = db.Column(db.String(50))
    reason = db.Column(db.String(50))
    guardian = db.Column(db.String(50))
    traveltime = db.Column(db.Integer)
    studytime = db.Column(db.Integer)
    failures = db.Column(db.Integer)
    schoolsup = db.Column(db.String(5))
    famsup = db.Column(db.String(5))
    paid = db.Column(db.String(5))
    activities = db.Column(db.String(5))
    nursery = db.Column(db.String(5))
    higher = db.Column(db.String(5))
    internet = db.Column(db.String(5))
    romantic = db.Column(db.String(5))
    famrel = db.Column(db.Integer)
    freetime = db.Column(db.Integer)
    goout = db.Column(db.Integer)
    health = db.Column(db.Integer)
    absences = db.Column(db.Integer)
    G1 = db.Column(db.Integer)
    G2 = db.Column(db.Integer)

    def __repr__(self):
        return f'<Student {self.id}>'
    
class TestEntry(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))