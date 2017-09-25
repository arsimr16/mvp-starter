import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Topic from './components/Topic.jsx';
import Result from './components/Result.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      answer: 'Click the help button for a conversation starter!'
    }
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

  render () {
    return (
      <div>
        <h1>Welcome to ConversationStarters.com!</h1>
        <h3>What can we help you with today?</h3>
        <Topic url='/convstart'>
          I need a conversation starter!
        </Topic>
        <Result/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));