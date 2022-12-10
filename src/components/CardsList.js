
import "./Styles.css";
import Card from "./Card";


/* Card list*/
const CardsList = (props) => {
  return (
      
        <div className="container">
          {
            props.list.map(object => <Card object={object} />)
          }
        </div>     
  )
}

export default CardsList