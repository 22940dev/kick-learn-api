import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWalking, faReceipt, faQrcode } from '@fortawesome/free-solid-svg-icons';


const StoreCard = ({ data }) => {
  
  const { name, logo, kicks } = data;
  const { walk_in, receipt, scan } = kicks

  // checks if kicks are singular or plural, and adds suffix 's' if they are plural
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
          <div className="card__kicks-icon-container">
            <FontAwesomeIcon 
              className="card__kicks-icon" 
              icon={faWalking} 
              aria-hidden="true"/>
          </div>
          <p><span className="card__kicks-count">{walk_in}</span> Walk-in{checkPlural(walk_in)}</p>
        </li>

        <li>
          <div className="card__kicks-icon-container">
            <FontAwesomeIcon 
              className="card__kicks-icon" 
              icon={faReceipt} 
              aria-hidden="true" />
          </div>
          <p><span className="card__kicks-count">{receipt}</span> Receipt{checkPlural(receipt)}</p>
        </li>

        <li>
          <div className="card__kicks-icon-container">
            <FontAwesomeIcon 
              className="card__kicks-icon" 
              icon={faQrcode} 
              aria-hidden="true" />
          </div>
          <p><span className="card__kicks-count">{scan}</span> Scan{checkPlural(scan)}</p>
        </li>

      </ul>
    </li>
  )
}

export default StoreCard;


