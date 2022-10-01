// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {emojiFace: true}

  onClickEmoji = () => {
    this.setState({emojiFace: false})
  }

  render() {
    const {resources} = this.props
    const {emojis} = resources
    const {emojiFace} = this.state

    const result = emojiFace ? (
      <div className="card-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="unorderList">
          {emojis.map(eachOne => (
            <li key={eachOne.id}>
              <img
                className="emojiImages"
                src={eachOne.imageUrl}
                alt={eachOne.name}
                onClick={this.onClickEmoji}
              />
              <p className="names">{eachOne.name}</p>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <div className="card-container">
        <img
          src={resources.loveEmojiUrl}
          className="emojiImages"
          alt="love emoji"
        />
        <h1 className="heading">Thank You!</h1>
        <p>
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )

    return <div className="bg-container">{result}</div>
  }
}

export default Feedback
