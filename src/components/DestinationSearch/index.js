import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="input-element">
          <input
            type="text"
            placeholder="Search"
            className="input"
            onChange={this.onChangeSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="icon"
          />
        </div>
        <DestinationItem/>
      </div>
    )
  }
}

export default DestinationSearch
