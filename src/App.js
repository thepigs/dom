import React from 'react';
import logo from './logo.svg';
import './App.css';


const defaultPlayerStyles = {
  position: 'absolute',
  width: '100px',
  height: '100px'
}


class Player extends React.Component {


  constructor(props) {
    super(props)
    this.state = { left: 0, top: 0 }
  }

  handleClick = (e) => {
    //    console.log('this is:', e);
    switch (e.key) {
      case 'ArrowRight':
        this.setState({ left: this.state.left + 1 })
        break
      case 'ArrowLeft':
        this.setState({ left: this.state.left - 1 })
        break
      case 'ArrowUp':
        this.setState({ top: this.state.top - 1 })
        break
      case 'ArrowDown':
        this.setState({ top: this.state.top + 1 })
        break

    }

  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleClick, true)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleClick, true)
  }

  render() {
    let playerStyles = {
      ...defaultPlayerStyles,
      top: this.state.top + 'px',
      left: this.state.left + 'px',
    }
    return <div style={playerStyles}><svg >
      <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style={{
            stopColor: 'rgb(255,255,0)',
            stopOpacity: 1
          }} />
          <stop offset="100%" style={{ stopColor: 'rgb(128,128,0)', stopOpacity: 1 }} />
        </radialGradient>
      </defs>

      <circle cx="50" cy="50" r="40" stroke="#770" strokeWidth="4" fill="url(#grad1)" />
    </svg></div>
  }
}

function App() {
  return (
    <div className="App">
      <Player />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
