import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Topic from './components/Topic.jsx';
import Result from './components/Result.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      answer: 'Click one of the help buttons!'
    };
    this.updateAnswer = this.updateAnswer.bind(this);
  }

  updateAnswer(newAnswer) {
    this.setState({answer: newAnswer});
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items', 
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render() {
    return (
      <div>
        <h1>Welcome to ConversationStarters.com!</h1>
        <h3>What can we help you with today?</h3>
        <Topic url='/convstarts' updateAnswer={this.updateAnswer}>
          I need a conversation starter!
        </Topic>
        <Topic url='/jokes' updateAnswer={this.updateAnswer}>
          I need a funny joke!
        </Topic>
        <Topic url='/quotes' updateAnswer={this.updateAnswer}>
          I need an inspirational quote!
        </Topic>
        <Topic url='/pickups' updateAnswer={this.updateAnswer}>
          I need a good pickup line!
        </Topic>
        <h3>Answer:</h3>
        <Result answer={this.state.answer}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));