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
    with open('content_1.txt', 'r') as file:
        content_1 = file.read()
    
    with open('content_2.txt', 'r') as file:
        content_2 = file.read()
    
    with open('content_3.txt', 'r') as file:
        content_3 = file.read()
    
    with open('content_4.txt', 'r') as file:
        content_4 = file.read()
    
    with open('content_5.txt', 'r') as file:
        content_5 = file.read()
    
    with open('content.txt', 'r') as file:
        content = file.read()

    data = request.json
    query = data.get('query')

    if "features" in query or "feature" in query:
        print("features")
        response = query_openai_api(content_1, query)

    if "recommendation" in query or "recommend" in query or "recommendations" in query:
        print("recommendation")
        response = query_openai_api(content_2, query)
    
    if "love" in query or "like" in query :
        print("love")
        response = query_openai_api(content_3, query)
    
    if "hate" in query or "dislike" in query:
        print("hate")
        response = query_openai_api(content_4, query)
    
    if "benefits" in query or "benefit" in query:
        print("benefits")
        response = query_openai_api(content_5, query)
    
    else: 
        print("else")
        response = query_openai_api(content, query)
    
    return jsonify({'message': response})

    return jsonify({'message': query})

if __name__ == '__main__':
    
    app.run(debug=True, port="3000")