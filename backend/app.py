from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager, create_access_token
from flask_cors import CORS
from models import db, User, Student, TestEntry

app = Flask(__name__)

# Enable CORS for all routes, allowing requests from localhost:3000
CORS(app, 
     resources={r"/*": {
         "origins": ["http://localhost:3000"],
         "methods": ["OPTIONS", "GET", "POST"],
         "allow_headers": ["Content-Type"]
     }}, supports_credentials=True)

# XAMPP MySQL configuration
# ✅ CORRECT
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:Rashad%402002@localhost:3306/auth_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'your-secret-key'  

# Initialize extensions
db.init_app(app)
jwt = JWTManager(app)

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    return response

# Routes
@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        if not data or 'email' not in data or 'password' not in data:
            return jsonify({'error': 'Missing email or password'}), 400
        user = User.query.filter_by(email=data['email']).first()
        if user and user.password == data['password']:  # Hash in production!
            token = create_access_token(identity=user.id)
            return jsonify({'token': token}), 200
        return jsonify({'error': 'Invalid credentials'}), 401
    except Exception as e:
        print(f"Login Error: {e}")  # Log to Flask terminal
        return jsonify({'error': 'Server error during login'}), 500

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    if User.query.filter_by(email=data['email']).first():
        return jsonify({'error': 'Email already exists'}), 400
    user = User(email=data['email'], password=data['password'])  # Hash in production!
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'Registered successfully'}), 201

@app.route('/forgot-password', methods=['POST'])
def forgot_password():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()
    if user:
        return jsonify({'message': 'Reset link sent'}), 200
    return jsonify({'error': 'Email not found'}), 404

@app.route('/verify', methods=['POST'])
def verify():
    data = request.get_json()
    if data['code'] == '123456':  # Dummy code
        return jsonify({'message': 'Verified'}), 200
    return jsonify({'error': 'Invalid code'}), 400

@app.route('/add-student', methods=['POST', 'OPTIONS'])
def add_student():
    if request.method == 'OPTIONS':
        return '', 200
    data = request.get_json()
    try:
        student = Student(
            school=data.get('school'),
            sex=data.get('sex'),
            age=data.get('age'),
            address=data.get('address'),
            famsize=data.get('famsize'),
            Pstatus=data.get('Pstatus'),
            Medu=data.get('Medu'),
            Fedu=data.get('Fedu'),
            Mjob=data.get('Mjob'),
            Fjob=data.get('Fjob'),
            reason=data.get('reason'),
            guardian=data.get('guardian'),
            traveltime=data.get('traveltime'),
            studytime=data.get('studytime'),
            failures=data.get('failures'),
            schoolsup=data.get('schoolsup'),
            famsup=data.get('famsup'),
            paid=data.get('paid'),
            activities=data.get('activities'),
            nursery=data.get('nursery'),
            higher=data.get('higher'),
            internet=data.get('internet'),
            romantic=data.get('romantic'),
            famrel=data.get('famrel'),
            freetime=data.get('freetime'),
            goout=data.get('goout'),
            health=data.get('health'),
            absences=data.get('absences'),
            G1=data.get('G1'),
            G2=data.get('G2')
        )
        db.session.add(student)
        db.session.commit()
        return jsonify({'message': 'Student added successfully'}), 201
    except Exception as e:
        db.session.rollback()
        print("Error:", e)  # Add this for debugging
        return jsonify({'error': str(e)}), 500

@app.route('/add-test', methods=['POST', 'OPTIONS'])
def add_test():
    if request.method == 'OPTIONS':
        return '', 200
    data = request.get_json()
    entry = TestEntry(name=data.get('name'))
    db.session.add(entry)
    db.session.commit()
    return jsonify({'message': 'Test entry added!', 'id': entry.id}), 201

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)