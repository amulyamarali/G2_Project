# for the questions.csv file, sort the questions by the question_id column
import csv

with open('questions.csv', mode='r') as file:
    csvFile = csv.reader(file)
    next(csvFile)  # Skip the header

    # Sort the rows by the question_id column
    sorted_rows = sorted(csvFile, key=lambda x: int(x[0]))

    # Write the sorted rows back to the file
    with open('new_q.csv', mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(["q_id", "question", "question_type", "answer", "link"])
        writer.writerows(sorted_rows)



