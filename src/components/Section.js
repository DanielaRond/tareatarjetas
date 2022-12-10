
import "./Styles.css";
import CardsList from "./CardsList";


/* Section */
const Section = (props) => {
  return (
    <CardsList list={props.list}/> 
  )
}

export default Section