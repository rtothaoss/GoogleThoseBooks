import React, { Component, Fragment } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Container } from "../components/Grid";
import { Input } from "../components/Form";
import { FormBtn } from "../components/Buttons";
import Card from "../components/Card";

class Search extends Component {
  state = {
    title: '',
    books: [],
    message: 'Search for a book!'
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getBooks = () => {
    API.searchGoogleBooks(this.state.title)
      .then(res =>
        this.setState({
          books: res.data.items,
        }))
      .catch(() => this.setState({
        books: [],
        message: "No books found! Try Again!"
      })
      )
  }




  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  }


  //make book save 

  handleBookSave = id => {
   const book = this.state.books.find(book => book.id === id)
      API.saveBook({
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors[0],
        description: book.volumeInfo.description,
        link: book.volumeInfo.infoLink,
        image: book.volumeInfo.imageLinks.thumbnail
      })
        .then(() => alert('Book Saved!'))
        .catch(err => console.log(err));
  };





  render() {
    return (

      <Container fluid>

        <Jumbotron style={{ height: "175px" }}>
          <h1>&#40;React&#41;Google Books Search</h1>
          <h3>Search and Save Books of Interest</h3>
        </Jumbotron>
        <Jumbotron>
          <p className='text-left'>Book:</p>
          <Input
            value={this.state.title}
            onChange={this.handleInputChange}
            name="title"
            placeholder="Title (required)"
          />
          <FormBtn
            disabled={!(this.state.title)}
            onClick={this.handleFormSubmit}
          >
            Search
              </FormBtn>
        </Jumbotron>
        <Jumbotron>
          <p className='text-left'>Results</p>
            {this.state.books.map(book => (
            <Card
              key={book.id}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors.join(', ')}
              description={book.volumeInfo.description}
              image={book.volumeInfo.imageLinks.thumbnail}
              link={book.volumeInfo.infoLink}
              id={book.id}
              save={this.handleBookSave}
            />
          ))}

        </Jumbotron>
      </Container>
    );
  }
}

export default Search;

