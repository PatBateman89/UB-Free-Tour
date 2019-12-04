import React from 'react';
import Header from './components/Header';
import './App.css';

class App extends React.Component {

  handleClick = (e) => {
    e.preventDefault()
  }


  render() {
    return (
      <div>
        <Header click={this.handleClick}/>
      </div>
    )
  }
}

export default App;
