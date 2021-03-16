const Card = ({ data }) => {
  

  const { name, logo, kicks, longitude, latitude } = data;
  const { walk_in, receipt, scan } = kicks

  // checks if kicks are singular or plural
  const checkPlural = (num) => {
    if (num === 1) {
      return ''
    } else {
      return 's'
    }
  }

  return (
    <li className="card">
      <img className="card__logo" src={logo} alt=""></img>
      <p className="card__name">{name}</p>
      <ul className="card__kicks">
        <li>
          <p>{walk_in} Walk-in{checkPlural(walk_in)}</p>
        </li>
        <li>
          <p>{receipt} Receipt{checkPlural(receipt)}</p>
        </li>
        <li>
          <p>{scan} Scan{checkPlural(scan)}</p>
        </li>
      </ul>
    </li>
  )
}

export default Card;


