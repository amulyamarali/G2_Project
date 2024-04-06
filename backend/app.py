# Import necessary modules
from flask import Flask, jsonify
import requests
import json
from helper import get_links, get_quest, get_comp, get_feat, extra_quest, extra_q_2
import csv

import os
secret_key = os.getenv('SECRET_KEY')

# Initialize Flask application
app = Flask(__name__)

# Define route to get data
@app.route('/get_data', methods=['GET'])
def get_data():
    # Define headers for the request
    headers = {
        "Authorization": f"Token token={secret_key}",
        "Content-Type": "application/vnd.api+json"
    }
    # Send GET request to the specified URL
    response = requests.get('https://data.g2.com/api/v1/survey-responses?page[size]=100', headers=headers)
    # Parse the JSON response
    data = response.json()
    ele = data["data"]
    # Call helper function to get links
    get_links(ele)
    # Return the data as JSON
    return jsonify(data)


# Define route to get features
@app.route('/get_features', methods=['GET'])
def get_features():
    # Define headers for the request
    headers = {
        "Authorization": f"Token token={secret_key}",
        "Content-Type": "application/vnd.api+json"
    }

    # Define URLs for competitors and features
    competitors = "https://data.g2.com/api/v1/products/a7d324a4-06eb-4be2-ad8e-65938bce5fd5/competitors"
    features = "https://data.g2.com/api/v1/products/a7d324a4-06eb-4be2-ad8e-65938bce5fd5/product-features"

    # Send GET requests to the URLs and parse the responses
    response_f = requests.get(features, headers=headers)
    data_f = response_f.json()
    ele_f = data_f["data"]

    response_c = requests.get(competitors, headers=headers)
    data_c = response_c.json()
    ele_c = data_c["data"]

    # Call helper functions to get features and competitors
    get_feat(ele_f)
    get_comp(ele_c)

    # Return a success message
    return jsonify({"message": "Features are printed in the console"})


# Define route to get all the questions along with the answers
@app.route('/get_questions', methods=['GET'])
def get_questions():
    # Define headers for the request
    headers = {
        "Authorization": f"Token token={secret_key}",
        "Content-Type": "application/vnd.api+json"
    }

    # Open the CSV file
    with open('links.csv', mode='r') as file:
        csvFile = csv.reader(file)
        next(csvFile)  # Skip the header

        # Loop through each row in the CSV file
        for row in csvFile:
            if row:  # Check if row is not empty
                # Get the answer link from the second column
                answer_link = row[1]

                # Send a GET request to the answer link
                response = requests.get(answer_link, headers=headers)

                # Parse the JSON response
                data = response.json()

                # Get the 'data' field from the JSON response
                ele = data["data"]

                # Call the get_quest function with the data and the answer link
                get_quest(ele, answer_link)

                # Print a message to indicate that the operation is done
                print("done")

    # Return a JSON response with a success message
    return jsonify({"message": "Questions are printed in the console"})

@app.route('/get_extra', methods=['GET'])
def get_extra():
    # Define headers for the request
    headers = {
        "Authorization": f"Token token={secret_key}",
        "Content-Type": "application/vnd.api+json"
    }

    # Send GET request to the specified URL
    response = requests.get('https://data.g2.com/api/v1/survey-responses?page[size]=100', headers=headers)
    # Parse the JSON response
    data = response.json()
    ele = data["data"]
    # Call helper function to get links
    extra_quest(ele)
    extra_q_2(ele)

    # Return a JSON response with a success message
    return jsonify({"message": "Extra questions are printed in the console"})


# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True)