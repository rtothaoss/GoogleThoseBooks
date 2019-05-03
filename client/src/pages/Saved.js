import React, { Component, Fragment } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import {Container } from "../components/Grid";
import Card from "../components/Card";

class Saved extends Component {
  state = {
    books: [],
    title: "",
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data}, console.log(res.data))
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };


  render() {
    return (
    
       <Container fluid>
       
            <Jumbotron style={{height: "175px"}}>
              <h1>&#40;React&#41;Google Books Search</h1>
              <h3>Search and Save Books of Interest</h3>
            </Jumbotron>
              <Jumbotron>
              <p className='text-left'>Saved Books</p>
              {this.state.books.map(book => (
            <Card
              key={book._id}
              title={book.title}
              author={book.author}
              description={book.description}
              image={book.image}
              link={book.link}
              id={book._id}
              remove={this.deleteBook}
              deleteStyle={{display: "block"}}
              saveStyle={{display: "none"}}
            />
            ))}
            </Jumbotron>
              </Container>
    );
  }
}

export default Saved;

