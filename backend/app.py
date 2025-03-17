from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager, create_access_token
from flask_cors import CORS
from models import db, User

app = Flask(__name__)

# Enable CORS for all routes, allowing requests from localhost:3000
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# XAMPP MySQL configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost:3306/auth_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'your-secret-key'  

# Initialize extensions
db.init_app(app)
jwt = JWTManager(app)

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

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Create tables in auth_db
    app.run(debug=True)