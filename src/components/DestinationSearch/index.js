// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeEvent = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResult = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="app-container">
        <h1 className="Heading">Destination Search</h1>
        <div className="search-icon-container">
          <input
            type="search"
            placeholder="Search"
            className="input-search"
            onChange={this.onChangeEvent}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul>
          <div className="place-container">
            {searchResult.map(each => (
              <DestinationItem details={each} key={each.id} />
            ))}
          </div>
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
