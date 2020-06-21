import React from 'react';
import './App.css';
import CounterView from "./components/CounterView";
import CounterSet from "./components/CounterSet";

class App extends React.Component {

  state = {
    count: 0,
    minValue: 0,
    maxValue: 5,
    setValue: true,
    settings: true
  };

  addCount = () => {
    this.setState({
        count: this.state.count + 1
      }, () => {
        this.saveState()
      }
    );
  };

  resetCount = () => {
    this.setState({
        count: Number(this.state.minValue)
      }, () => {
        this.saveState()
      }
    );
  };

  showSetings = () => {
    this.setState({
      settings: true
    }, () => {
      this.saveState()
    })
  }

  setCount = () => {
    this.setState({
        count: Number(this.state.minValue),
        setValue: true,
        settings: false
      }, () => {
        this.saveState()
      }
    )

  };


  onInputChangedMax = (e) => {
    this.setState({
      maxValue: Number(e.currentTarget.value),
      setValue: false
    })
  };

  onInputChangedMin = (e) => {
    this.setState({
      minValue: Number(e.currentTarget.value),
      setValue: false
    })
    // console.log(typeof(Number(e.currentTarget.value)));
  };

  saveState = () => {
    let stateAsString = JSON.stringify(this.state);
    localStorage.setItem('count', stateAsString);
  }

  restoreState = () => {
    let stateAsString = localStorage.getItem('count');
    if (stateAsString) {
      let state = JSON.parse(stateAsString);
      this.setState(state);
    }
  }

  componentDidMount() {
    this.restoreState();
  }

  render() {
    return (
      <div className="App">
        {this.state.settings === true && <CounterSet state={this.state}
                                                     addCount={this.addCount}
                                                     onInputChangedMax={this.onInputChangedMax}
                                                     onInputChangedMin={this.onInputChangedMin}
                                                     setCount={this.setCount}/>}
        {!this.state.settings === true && <CounterView state={this.state}
                                                       addCount={this.addCount}
                                                       resetCount={this.resetCount}
                                                       showSetings={this.showSetings}/>}
      </div>
    );
  }
}
export default App;