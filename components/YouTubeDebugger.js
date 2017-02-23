const React = require('react')

class YoutubeDebugger extends React.Component {
  constructor(props){
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }

    this.handleBitrate = this.handleBitrate.bind(this);
    this.handleResolution = this.handleResolution.bind(this);
  }

  handleBitrate(){
    this.setState({settings: Object.assign({}, this.state.settings, { bitrate: 12}) })
  }

  handleResolution(){
    this.setState({settings: Object.assign({}, this.state.settings, { video: {resolution: '720p'}}) })
  }

  render(){
    return(
      <div>
        <button class="bitrate" onClick={this.handleBitrate}>Change Bitrate</button>
        <button class="resolution" onClick={this.handleResolution}>Change Resolution</button>
      </div>
    )
  }
}

module.exports = YoutubeDebugger;