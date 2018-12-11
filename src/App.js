import React, { Component } from 'react';
import './App.css';

let books = [
  {
    'title': 'The Grinch',
    'id': 101,
    'author': 'Dr. Seuss',
    'url': 'https://www.imdb.com/title/tt0170016/'
  },
  {
    'title': 'Red Fish Blue fish',
    'id': 102,
    'author': 'Dr. Seuss',
    'url': 'https://www.amazon.com/Fish-Blue-Myself-Beginner-Books/dp/0756921333'
  },
  {
    'title': 'Green Eggs and Ham',
    'id': 103,
    'author': 'Dr. Seuss',
    'url': 'https://www.amazon.com/Green-Eggs-Ham-Dr-Seuss/dp/0394800168'
  }
];

class App extends Component {
  // first lifecycle method - constructor
  // only runs when component gets instantiated
  constructor(){
    // gives us ability from Component class to use state
    super();

    // use state t hold variables attached to instances of component
    this.state = {
      books: [],
      name: 'Josh Hall'
    }
  }

  // second life cycle method - componentWillMount()
  // generally good for initializing variablees or the state
  // gets hit before each render
  componentWillMount() {
    // use setState() to alter books variable
    this.setState({
      books: books
    });
  }

  // third life cycle method, decides what gets returned and rendered on the browser
  // gets hit every render
  render() {
    // this is javascript
    // const s = 'Hello, World!';

    // below this line,within the RETURN is JSX
    return (
      <div className="App">
        <h2>{this.state.name}</h2>
        {/* Ay yo bish, this is a JSX Comment */}
        {this.state.books.map(book =>
            <div key={book.id}>
              <span>
                <a href={book.url} target= "_blank">{book.title}</a> -
              </span>
              <span>{book.author}</span>
            </div>
          )}
      </div>
    ); // this is javascript again
  }
}

export default App;
