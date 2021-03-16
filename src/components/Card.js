const Card = ({ data }) => {
  // add a way to check if kicks are singular or plural

  const { name, logo, kicks, longitude, latitude } = data;
  return (
    <li className="card">
      <img className="card__logo" src={logo} alt=""></img>
      <p className="card__name">{name}</p>
      <ul className="card__kicks">
        <li>
          <p>{kicks.walk_in} Walk-ins</p>
        </li>
        <li>
          <p>{kicks.receipt} Receipts</p>
        </li>
        <li>
          <p>{kicks.scan} Scans</p>
        </li>
      </ul>
    </li>
  )
}

export default Card;


