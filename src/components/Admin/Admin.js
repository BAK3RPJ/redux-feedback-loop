import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

class Admin extends Component {

    state={
        results: []
    }

componentDidMount() {
    this.getFeedbackData();
}

getFeedbackData = () => {
    axios({
        method: 'GET',
        url: '/feedback'
    })
    .then((results) => {
        console.log(results);
        this.setState({
            results: results.data
        })
    })
    .catch ((err) => {
        console.log('error in GET', err);
    })
}

deleteFeedbackEntry = (id) => {
    console.log(id);
    Swal.fire({
        title: 'Are you sure you want to delete this entry?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          axios({
            method: 'DELETE',
            url: `/feedback/${id}`
        })
        .then((res) => {
            console.log(res);
            this.getFeedbackData();
        })
        .catch((err) => {
            console.log('error in delete', err);
        })
        }
      })
}

flagFeedbackEntry = (id) => {
    console.log(id);
    axios({
        method: 'PUT',
        url: `/feedback/${id}`
    })
    .then((res) => {
        console.log(res);
        this.getFeedbackData();
    })
    .catch((err) => {
        console.log('error in put', err);
    })
}

  render() {
    return (
      <div className="Success">
        <h4>Feedback Results</h4>
        <table>
            <thead>
                <tr>
                    <th>Feedback Id</th>
                    <th>Feeling Rating</th>
                    <th>Understanding Rating</th>
                    <th>Support Rating</th>
                    <th>Comments</th>
                </tr>
            </thead>
            <tbody>
                {this.state.results.map(result => (
                <tr key={result.id}>
                    <td>{result.id}</td>
                    <td>{result.feeling}</td>
                    <td>{result.understanding}</td>
                    <td>{result.support}</td>
                    <td>{result.comments}</td>
                    <td><button onClick = {() => this.deleteFeedbackEntry(result.id)}>DELETE</button></td>
                    <td><button onClick = {() => this.flagFeedbackEntry(result.id)}>FLAG</button></td></tr>))}
            </tbody>
        </table>
      </div> 
    );
  }
}
  
  export default Admin;
