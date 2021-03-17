import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWalking, faReceipt, faQrcode } from '@fortawesome/free-solid-svg-icons';


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

  //TODO: REFACTOR KICKS INTO A COMPONENT IF THERES TIME
  return (
    <li className="card">
      <img className="card__logo" src={logo} alt=""></img>
      <p className="card__name">{name}</p>

      <ul className="card__kicks">

        <li>
          <div className="card__kicks-icon-container">
            <FontAwesomeIcon 
              className="card__kicks-icon" 
              icon={faWalking} 
              aria-hidden="true"/>
          </div>
          <p>{walk_in} Walk-in{checkPlural(walk_in)}</p>
        </li>

        <li>
          <div className="card__kicks-icon-container">
            <FontAwesomeIcon 
              className="card__kicks-icon" 
              icon={faReceipt} 
              aria-hidden="true" />
          </div>
          <p>{receipt} Receipt{checkPlural(receipt)}</p>
        </li>

        <li>
          <div className="card__kicks-icon-container">
            <FontAwesomeIcon 
              className="card__kicks-icon" 
              icon={faQrcode} 
              aria-hidden="true" />
          </div>
          <p>{scan} Scan{checkPlural(scan)}</p>
        </li>
        
      </ul>
    </li>
  )
}

export default Card;


