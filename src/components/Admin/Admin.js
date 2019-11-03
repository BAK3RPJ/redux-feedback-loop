import React, { Component } from 'react';
import axios from 'axios';

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
                {this.state.results.map(result => (<tr key={result.id}><td>{result.id}</td><td>{result.feeling}</td><td>{result.understanding}</td><td>{result.support}</td><td>{result.comments}</td></tr>))}
            </tbody>
        </table>
      </div> 
    );
  }
}
  
  export default Admin;
