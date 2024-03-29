import pymongo
import pickle


# Establish MongoDB connection
client = pymongo.MongoClient("mongodb://localhost:27017/")  # Update connection string as needed
db = client["bookstore"]  # Replace "your_database" with your actual database name
collection = db["books"]  # Replace "your_collection" with your actual collection name


def get_top_books_for_emotion(emotion, collection):
    query_conditions = {"emotions": emotion}
    print("Query conditions:", query_conditions)  # Debugging statement
    query = [
        {"$match": query_conditions},
        {"$sort": {"Avg_Rating": -1}},
        {"$limit": 5}
    ]
    return list(collection.aggregate(query))


def save_model(model, filepath):
    with open(filepath, 'wb') as file:
        pickle.dump(model, file)


def load_model(filepath):
    with open(filepath, 'rb') as file:
        return pickle.load(file)


# Model Training and Saving
model = get_top_books_for_emotion
model_filepath = 'book_recommendation_model.pkl'
save_model(model, model_filepath)

# Recommendation Process
# user_emotion = input("Enter an emotion: ").lower()

# Load the model
model = load_model(model_filepath)


def get_recommendation_books(emotion):
    # Fetch top 5 books for the entered emotion using the loaded model
    top_books = model(emotion, collection)
    if not top_books:
        return ["No recommended books found for this emotion."]

    return top_books
