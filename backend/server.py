# here is the Chatbot server
from flask import Flask, request, jsonify
from flask_cors import CORS

from dotenv import load_dotenv
import os
import openai


from helper import query_openai_api

load_dotenv()  
API_KEY = os.getenv('API_KEY')

openai.api_key = API_KEY



app = Flask(__name__)
CORS(app)

@app.route('/chat', methods=['POST'])   
def chat():
    # data = request.get_json()
    # message = data['message']
    # return jsonify({'message': message})

    # read content from content.txt
    with open('content.txt', 'r') as file:
        content = file.read()
    
    data = request.json
    query = data.get('query')

    response = query_openai_api(content, query)
    
    return jsonify({'message': response})

if __name__ == '__main__':
    
    app.run(debug=True, port="3000")