from flask import Flask, render_template, request, redirect
import pymongo
from pymongo import MongoClient
from recommand_model import get_recommendation_books
import pickle

app = Flask(__name__, static_url_path='/static')

client = MongoClient("mongodb://localhost:27017")
global db
try:
    client.admin.command('ping')
    db = client.bookstore

    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)


# home route
@app.route("/", methods=["GET"])
def index():
    # Get the genre from the query string
    emotion = request.args.get('emotions')
    # If genre is provided, query MongoDB to find documents where the 'genres' array contains the provided genre
    books_list = get_recommendation_books(emotion)
    # print(books_list)
    # Pass the data to the HTML template for rendering
    return render_template('home.html', books=books_list)


# about route
@app.route("/about")
def about():
    return render_template('about.html')


# bookshelves route

@app.route("/bookshelves")
def bookshelves():
    sort_operation = ({"Avg_Rating": -1})
    limit = 50
    # Execute the query with sort and limit operations
    top_books = db.books.find().sort(sort_operation).limit(limit)

    # Convert the cursor to a list of dictionaries
    top_books_list = list(top_books)

    # Pass the top books to the HTML template for rendering
    return render_template('bookshelves.html', book=top_books_list)



# account route
@app.route("/account")
def account():
    return render_template('account.html')


@app.route("/terms")
def terms():
    return render_template('terms.html')


# privacy route
@app.route("/privacy")
def privacy():
    return render_template('privacy.html')


# help route
@app.route("/help")
def help():
    return render_template('help.html')


# login route
@app.route("/login")
def login():
    return render_template('login.html')


# for search books
@app.route("/search", methods=["POST"])
def search():
    searchParams = request.form['searchBook']

    



# for contact route
@app.route("/submit", methods=["POST"])
def submit():
    name = request.form['name']
    email = request.form['email']
    subject = request.form['subject']
    msg = request.form['message']

    db.contact.insert_one({
        "name": name,
        "email": email,
        "subject": subject,
        "message": msg
    })

    return redirect("/")


@app.route("/signupForm", methods=["POST"])
def submit_signup_form():
    username = request.form['username']
    fullname = request.form['fullname']
    email = request.form['email']
    phone = request.form['phone']
    password = request.form['password']
    confirmPassword = request.form['confirmPassword']
    terms = request.form.get('terms')  # Check if terms were agreed upon

    # Perform any necessary validation checks here

    if password != confirmPassword:
        return "Passwords do not match", 400

    # Assuming you have a MongoDB connection named db
    db.users.insert_one({
        "username": username,
        "fullname": fullname,
        "email": email,
        "phone": phone,
        "password": password,
        "terms_agreed": bool(terms)
    })

    return redirect("/")


if __name__ == '__main__':
    app.run(debug=True)
