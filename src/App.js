import Section from "./components/Section";

/* Flight information */
const list = [

{
  id: 1,
  image: <img src="https://images.almundo.com/205/image/fetch/fl_progressive,q_auto,w_385,h_240,f_jpg/https://almundo-com-res.cloudinary.com/image/upload/v1549564331/BANCO%20DE%20IMAGENES%202019/Fortaleza/shutterstock_1107939677.jpg" alt={"Fortaleza"} width={"auto"} height={168}/>,
  location:"Foz de Iguazú / Fortaleza",
  type: "Ida y vuelta",
  price: "$ 75.868",
  link: "https://almundo.com.ar/vuelos/vuelos-a-fortaleza/IGU-FOR"
},

{
  id: 2,
  image: <img src="https://images.almundo.com/205/image/fetch/fl_progressive,q_auto,w_385,h_240,f_jpg/https://almundo-com-res.cloudinary.com/image/upload/v1549895170/BANCO%20DE%20IMAGENES%202019/Rio%20de%20Janeiro/shutterstock_345109298.jpg" alt={"Rio de Janeiro"} width={"auto"} height={168}/>,
  location:"Buenos Aires / Río de Janeiro",
  type: "Ida y vuelta",
  price: "$ 68.318",
  link: "https://almundo.com.ar/vuelos/vuelos-a-rio-de-janeiro/BUE-RIO"
},

{
  id: 3,
  image: <img src="https://images.almundo.com/205/image/fetch/fl_progressive,q_auto,w_385,h_240,f_jpg/https://almundo-com-res.cloudinary.com/image/upload/v1549899449/BANCO%20DE%20IMAGENES%202019/San%20Andres/shutterstock_164015156.jpg" alt={"San Andres"} width={"auto"} height={168}/>,
  location:"Buenos Aires / San Andrés",
  type: "Ida y vuelta",
  price: "$ 184.915",
  link:"https://almundo.com.ar/vuelos/vuelos-a-isla-de-san-andres/BUE-ADZ"
},

{
  id: 4,
  image: <img src="https://images.almundo.com/205/image/fetch/fl_progressive,q_auto,w_385,h_240,f_jpg/https://almundo-com-res.cloudinary.com/image/upload/v1552408082/BANCO%20DE%20IMAGENES%202019/Miami/shutterstock_408399817.jpg" alt={"Miami"} width={"auto"} height={168}/>,  
  location:"Buenos Aires / Miami",
  type: "Ida y vuelta",
  price: "$ 198.158",
  link: "https://almundo.com.ar/vuelos/vuelos-a-miami/BUE-MIA?airlines=OB"  
}
]

/* App returns Section with card list */
function App() {
  return (
   <>
     <Section list={list}/>
   </>
  );
}

export default App;
