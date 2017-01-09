import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      questions: '',
      score: null,
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/quizzes')
    .then((response, error) => {
      console.log(response);
    })
  }

  render() {
    return (
      <div className="app">
        <h1>Javascript Quiz</h1>
      </div>
    );
  }
}

export default App;
