// Write your code here
import './index.css'

const DestinationItem = props => {
  const {details} = props
  const {imgUrl, name} = details
  return (
    <li className="list">
      <div className="place-containerApp">
        <img src={imgUrl} alt={name} className="img" />
        <p>{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
