// Write your code here
import {Component} from 'react'
import './index.css'

class SpeedOmeter extends Component {
  state = {count: 0}

  accelerate = () => {
    this.setState(prevState =>
      prevState.count < 200 ? {count: prevState.count + 10} : {count: 200},
    )
  }

  break = () => {
    this.setState(prevState =>
      prevState.count > 0 ? {count: prevState.count - 10} : {count: 0},
    )
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading1">SPEEDOMETER</h1>
        <img
          className="img"
          alt="speedometer"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
        />
        <h2 className="heading2">
          Speed is <span>{count}mph</span>
        </h2>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-container">
          <button
            className="accelerate-btn"
            type="button"
            onClick={this.accelerate}
          >
            Accelerate
          </button>
          <button className="break-btn" type="button" onClick={this.break}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default SpeedOmeter
