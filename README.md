# GoogleThoseBooks
*A webpage that allows users to search for books and save the ones they would like to read.*

![alt text](https://i.imgur.com/4ESTZg9.png 'harry potter books')

Deployed Page: [here](https://googlethesebooks.herokuapp.com/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

A user can enter in the title of a book to search for via Google Books API. A list of books is returned and held in React's state. This is done so a database won't have to be cluttered with information and end up getting deleted later on. The user can see descriptions of all the books along with the direct link view the book. The user also has the choice of saving a book to a Mongo database which will display on the 'saved' page. This page will function almost exactly the same except there is a delete button for the user to remove books from the database.

### Follow these steps to use the app:

#### Clone Repository
Paste this line of code into your terminal

`` git clone git@github.com:rtothaoss/GoogleThoseBooks.git ``

#### Install Dependencies 
Install all the necessary packages for the app to run correctly.

``` npm install ```

#### Usage

Start up the app by using

`` npm start ``

The running app is available in your browser on 

`` http://localhost:3000 ``

### Technologies Used:
* ReactJS
* MongoDB
* Express
* Node
* Bootstrap
* ORM
* routes


