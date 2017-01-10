import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      quizzes: [],
      score: null,
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/quizzes')
    .then((response, error) => {
      console.log(response);
      this.setState({
        quizzes: response.data.quizzes
      })
    }).catch(error => console.error('error with api call', error))
  }

  render() {
    const { quizzes } = this.state
    const title = quizzes.map((q, index) => {
      return (
        <h4 key={index}>{q.title}</h4>
      )
    })

    const questions = quizzes.map(quiz => {
       return quiz.questions.map((question, index) => {
        return question.answers.map((answer, index) => {
          return (
            <div>
              <li>{answer.title}</li>
            </div>
          )
        })
      })
    })

    return (
      <div className="app">
        {title}
        {questions}
      </div>
    )
  }
}

export default App;
