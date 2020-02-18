import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Table from './Table';

class Admin extends Component {
    state={
        results: []
    }

componentDidMount() { 
    this.getFeedbackData();
}

getFeedbackData = () => { // GET request for information in feedback table
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

deleteFeedbackEntry = (id) => { // DELETE request for chosen entry from feedback table
    console.log(id);
    Swal.fire({ // Sweet Alert confirmation for entry deletion
        title: 'Are you sure you want to delete this entry?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => { 
        if (result.value) {// runs only if the delete was confirmed
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

flagFeedbackEntry = (id) => { // flag entry PUT request to feedback table
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
      <div className="admin">
        <h4>Feedback Results</h4>
        <Table results={this.state.results} deleteFeedbackEntry={this.deleteFeedbackEntry} flagFeedbackEntry={this.flagFeedbackEntry}/>
      </div> 
    );
  }
}
  
  export default Admin;
