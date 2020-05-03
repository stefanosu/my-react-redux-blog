import ReactDOM from 'react-dom';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    store.subscribe(() => this.setState(store.getState()));
  }

  render() {
    return (
      <div>
        <h1>To-dos</h1>
        <div>
          Learn Redux&nbsp;
          <input
            type="checkbox"
            checked={!!this.state.checked} 
          />
        </div>
        {
          this.state.checked ? (<h2>Done!</h2>) : null
        }
      </div>
    );
  }

ReactDOM.render((
  <App />
), document.getElementById('root'));
