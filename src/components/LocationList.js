import Card from './Card';



const Locations = (props) => {
  const {data, isLoading} = props

  // creates a list of Card components that accept a location object as props. This list will be rendered on the page
  const locationList = data.map((item, i) => {
    return (
      <Card data={item} key={i}/> 
    )
  })

  return (
    <ul>
      {isLoading ?
        <p>Hold On...</p>
        :
        locationList
      }
    </ul>
  )
}

export default Locations;


