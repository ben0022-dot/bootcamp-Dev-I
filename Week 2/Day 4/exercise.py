import random

# Step 1: Read words from file
def get_words_from_file(file_path):
    try:
        with open(file_path, "r") as file:
            content = file.read()
            words = content.split()
            return words
    except FileNotFoundError:
        print("Error: File not found.")
        return []
    except Exception as e:
        print(f"Error: {e}")
        return []


# Step 2: Generate random sentence
def get_random_sentence(length, file_path="words.txt"):
    words = get_words_from_file(file_path)

    if not words:
        return "No words available."

    sentence_words = [random.choice(words) for _ in range(length)]
    sentence = " ".join(sentence_words).lower()
    return sentence


# Step 3: Main function
def main():
    print("This program generates a random sentence from a word list.")

    user_input = input("Enter sentence length (2–20): ")

    # Input validation
    try:
        length = int(user_input)
        if length < 2 or length > 20:
            print("Error: Length must be between 2 and 20.")
            return
    except ValueError:
        print("Error: Please enter a valid integer.")
        return

    sentence = get_random_sentence(length)
    print("Generated sentence:")
    print(sentence)


# Run program
if __name__ == "__main__":
    main()
    import json

sampleJson = """{ 
   "company":{ 
      "employee":{
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

# Step 1: Load JSON
data = json.loads(sampleJson)

# Step 2: Access salary
salary = data["company"]["employee"]["payable"]["salary"]
print("Salary:", salary)

# Step 3: Add birth_date
data["company"]["employee"]["birth_date"] = "1995-06-15"

# Step 4: Save to file
with open("modified_data.json", "w") as file:
    json.dump(data, file, indent=4)

print("Modified JSON saved to 'modified_data.json'")
