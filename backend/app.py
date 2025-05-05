
from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)  # Allow requests from React

# Load your trained model
model = joblib.load('student_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json

    columns = [
        'Unnamed: 0',  # Remove if you retrain without it!
        'school', 'sex', 'age', 'address', 'famsize', 'Pstatus', 'Medu', 'Fedu',
        'Mjob', 'Fjob', 'reason', 'guardian', 'traveltime', 'studytime', 'failures',
        'schoolsup', 'famsup', 'paid', 'activities', 'nursery', 'higher', 'internet',
        'romantic', 'famrel', 'freetime', 'goout', 'health', 'absences', 'G1', 'G2'
    ]

    int_columns = [
        'Unnamed: 0', 'age', 'Medu', 'Fedu', 'traveltime', 'studytime', 'failures',
        'famrel', 'freetime', 'goout', 'health', 'absences', 'G1', 'G2'
    ]

    input_dict = {}
    for col in columns:
        val = data.get(col, 0 if col in int_columns else "")
        if col in int_columns:
            try:
                input_dict[col] = int(val)
            except Exception:
                input_dict[col] = 0
        else:
            input_dict[col] = str(val)  # Ensure categorical fields are strings

    input_df = pd.DataFrame([input_dict])

    # Debug: print types and values
    print("==== DataFrame dtypes ====")
    print(input_df.dtypes)
    print("==== DataFrame values ====")
    print(input_df)
    print("==== Individual values ====")
    for col in input_df.columns:
        print(f"{col}: {input_df[col].values[0]!r}")

    print("==== DataFrame columns ====")
    print(list(input_df.columns))

    prediction = model.predict(input_df)
    return jsonify({'prediction': float(prediction[0])})

if __name__ == '__main__':
    app.run(port=5000)