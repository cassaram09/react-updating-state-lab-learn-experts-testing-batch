const React = require('react')

class DigitalClicker extends React.Component {
  constructor(){
    super();

    this.state = {
      timesClicked: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    var count = this.state.timesClicked += 1
    this.setState({timesClicked: count })
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

module.exports = DigitalClicker;