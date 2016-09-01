import React from 'react';
import { connect } from 'react-redux';
import BookForm from './BookForm';
import { Link } from 'react-router';
import * as bookActions from '../../actions/bookActions';

class Book extends React.Component{
  constructor(props){
    super(props);
  }

  submitBook(input){
    this.props.createBook(input);
  }

  render(){
    let titleInput;
    return(
      <div className="row">
        <div className="col-md-6">
          <h3>Books</h3>
          <table className="table">
            <thead>
              <th>
                <td>Title</td>
                <td></td>
              </th>
            </thead>
            <tbody>
            {this.props.books.map((b, i) => {
              return(
                <tr key={i}>
                  <td>{b.title}</td>
                  <td><Link to={`/books/${b.id}`}>View</Link></td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <h3>New Book</h3>
         <BookForm submitBook={this.submitBook.bind(this)} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    books: state.books
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBook: book => dispatch(bookActions.createBook(book))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
