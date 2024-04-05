import csv


def get_links(ele):
    # put the links in a csv file under the colums 
    with open('links.csv', mode='w') as file:
        writer = csv.writer(file)
        writer.writerow(["product_related_links", "answer_related_links"])
        for i in range(len(ele)):
            writer.writerow([ele[i]["relationships"]["product"]["links"]["related"], ele[i]["relationships"]["answers"]["links"]["related"]])   


def get_feature_links(ele):

    # add a new column to the links.csv file and dont add anything to the prv column
    with open('links.csv', mode='w') as file:
        writer = csv.writer(file)
        writer.writerow(["features_related_links"])
        for i in range(len(ele)):
            writer.writerow(ele[i]["relationships"]["product_features"]["links"]["related"])

    return 0



def get_features(ele):

    with open('features.csv', mode='w') as file:
        writer = csv.writer(file)
        # writer.writerow(["features_name", "description","section_title"])
        for i in range(len(ele)):
            writer.writerow([ele[i]["relationships"]["product"]["links"]["related"], ele[i]["relationships"]["answers"]["links"]["related"]])  

    return 0


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