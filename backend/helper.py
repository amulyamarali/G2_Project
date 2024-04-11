import csv
import os
import openai

from dotenv import load_dotenv
load_dotenv()  
API_KEY = os.getenv('API_KEY')
openai.api_key = API_KEY


def get_links(ele):
    # put the links in a csv file under the colums 
    with open('links.csv', mode='w') as file:
        writer = csv.writer(file)
        writer.writerow(["product_related_links", "answer_related_links"])
        for i in range(len(ele)):
            writer.writerow([ele[i]["relationships"]["product"]["links"]["related"], ele[i]["relationships"]["answers"]["links"]["related"]])   



def get_quest(ele, link):
    with open('questions.csv', mode='a', newline='') as file:
        writer = csv.writer(file)
        # writer.writerow(["q_id", "question", "question_type", "answer", "link"])
        for i in range(len(ele)):
            writer.writerow([ele[i]["attributes"]["question_id"], 
                             ele[i]["attributes"]["question_text"], 
                             ele[i]["attributes"]["question_type"], 
                             str(ele[i]["attributes"]["value"]).replace('\n', '').replace('\r', ' '), link])



def get_comp(ele):
    with open('competitors.csv', mode='w', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerow(["competitors_name", "domain", "link", "description", "start_rating"])
        for i in range(len(ele)):
            writer.writerow([ele[i]["attributes"]["name"],
                            ele[i]["attributes"]["domain"],
                            ele[i]["attributes"]["product_url"],
                            str(ele[i]["attributes"]["detail_description"]).replace('\n', '').replace('\r', ' '),
                            ele[i]["attributes"]["star_rating"]])


def get_feat(ele):
    with open('features.csv', mode='w', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerow(["feature_name", "description", "section_title"])
        for i in range(len(ele)):
            writer.writerow([ele[i]["attributes"]["text"],
                            str(ele[i]["attributes"]["description"]).replace('\n', '').replace('\r', ' '),
                            ele[i]["attributes"]["section_title"]])
            

def extra_quest(ele):
    with open('questions.csv', mode='a', newline='') as file:
        writer = csv.writer(file)
        for i in range(len(ele)):
            if "recommendations" in ele[i]["attributes"]["comment_answers"]:
                writer.writerow([0, 
                                 ele[i]["attributes"]["comment_answers"]["recommendations"]["text"], 
                                 "recommendations", 
                                 str(ele[i]["attributes"]["comment_answers"]["recommendations"]["value"]).replace('\n', '').replace('\r', ' ')])


def extra_q_2(ele):
    with open('questions.csv', mode='a', newline='') as file:
        writer = csv.writer(file)
        for i in range(len(ele)):
            if "ease_of_doing_business_with" in ele[i]["attributes"]["secondary_answers"]:
                writer.writerow([1000, 
                                 ele[i]["attributes"]["secondary_answers"]["ease_of_doing_business_with"]["text"], 
                                 "ease_of_doing_business_with", 
                                 str(ele[i]["attributes"]["secondary_answers"]["ease_of_doing_business_with"]["value"]).replace('\n', '').replace('\r', ' ')])



# Function to interact with OpenAI API
def query_openai_api(content, query):
    response = openai.completions.create(
        model="gpt-3.5-turbo-instruct",
        prompt=content + "User: " + query + "AI:",
        max_tokens=500,
        temperature=0.5
    )
    return response.choices[0].text