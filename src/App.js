import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import Title from './Components/Title.js'

class App extends Component {
  constructor() {
    super()

    this.state = {
      quizzes: [],
      score: {},
      feedback: '',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/quizzes')
    .then((response, error) => {
      this.setState({
        quizzes: response.data.quizzes
      })
      return response
    })
    .then((response, error) => {
      const obj = this.state.score;
      response.data.quizzes[0].questions.map(function(question,index) {
        return obj[question.id] = 0
      })
      this.setState({
        score: obj
      })
    }).catch(error => console.error('error with api call', error))
  }

  handleClick(id, score) {
    this.state.score[id] = score
    this.setState({
      score: this.state.score
    })
  }

  submit(score) {
    axios.post('http://localhost:3001/scores', {score: score})
    .then(response => this.setState({feedback: response.data.score}))
  }

  render() {
    const { quizzes, score, feedback } = this.state
    const title = quizzes.map((q, index) => {
      return <Title
              k={index}
              title={q.title}
            />
    })

    const questions = quizzes.map(quiz => {
       return quiz.questions.map((question, index) => {
        return question.answers.map((answer, index) => {
          if(question.answers.indexOf(answer) === 0) {
            return (
              <div>
                <h4>{question.title}</h4>
                <input
                  type="radio"
                  name={question.id}
                  onClick={() => this.handleClick(question.id, answer.score)}
                />
                <span>{answer.title}</span>
              </div>
            )
          }
          return (
            <div>
              <input
                type="radio"
                name={question.id}
                onClick={() => this.handleClick(question.id, answer.score)}
              />
              <span>{answer.title}</span>
            </div>
          )
        })
      })
    })

    const totalScore = Object.keys(score).reduce((acc, item) => {
      return acc + score[item]
    }, 0)

    return (
      <div className="app">
        {title}
        <section className="quiz">
          {questions}
          <section className="btn-container">
            <button
              onClick={() => this.submit(totalScore)}>Submit</button>
          </section>
          <h6>SCORE:</h6>
          <p>{totalScore}</p>
          {feedback ? <h6>FEEDBACK BASEED ON SCORE:</h6> : ''}
          <p>{feedback}</p>
        </section>
      </div>
    )
  }
}

export default App;
