import React, { Component } from 'react'
import axios from'axios'

class addQuestion extends Component {
    constructor () {
        super()
    
        this.onChangeQuestion = this.onChangeQuestion.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = 
        {
          question: ''
        }
    }

    onChangeQuestion(e) {
        this.setState({
          question: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
    
        const question = {
          question: this.state.question
        }

        axios.post('/api/questions/add', question)
             .then(alert('Terimakasih sudah bertanya!'))

        this.setState({
            question: ''
        })
      }
    
    render() {
        return (
            <div className="question">
                <form onSubmit={this.onSubmit}>
                    <input className="title-input"
                        type="text"
                        required
                        value={this.state.question}
                        onChange={this.onChangeQuestion}
                        placeholder="Masukkan Pertanyaan..."/>
                    <input type="submit" value="Tanyakan" className="btn"/>
                </form>
            </div>
        )
    }
}

export default addQuestion;
