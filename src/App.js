import React from 'react';
import Header from './components/Header';
import './App.scss';

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
