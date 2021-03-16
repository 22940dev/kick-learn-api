const Card = (props) => {

  // console.log(props.data);
  return (
    <li className="card">
      <img className="card__logo" alt=""></img>
      <p className="card__name">Big store</p>
      <ul className="card__kicks">
        <li>
          <p>3 Walk-ins</p>
        </li>
        <li>
          <p>2 Receipts</p>
        </li>
        <li>
          <p>2 Scans</p>
        </li>
      </ul>
    </li>
  )
}

export default Card;


