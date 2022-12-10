
import "./Styles.css";
import React from 'react';


/* Cards */
const Card = (props) => {
  
  return (

    /* Card container */
    <a class="cardLink" href= {props.object.link}>
      
      <div class="cardContainer"> 

        {/* Image container */}        
        <div class="imageContainer">
          <image>{props.object.image}</image>
        </div>  

        {/* Data container */}    
        <div class= "dataContainer">
          
          {/* Flight container */}
          <div class="flightLogoContainer">
              <div><mb-icon _ngcontent-tbe-c99="" class="mb-icon"><svg id="mb-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M7.192 22.957h-.256a1.99 1.99 0 01-1.024-.768l-1.536-2.56-2.56-1.408c-.384-.128-.64-.512-.768-.895-.128-.384 0-.896.384-1.152l1.408-1.28a2.46 2.46 0 011.536-.512h1.152l3.711-4.224-5.12-3.072c-.383-.256-.767-.768-.895-1.408 0-.64.128-1.28.64-1.663l.64-.64c.512-.512 1.28-.64 1.92-.512l8.063 2.175 2.816-2.815c.64-.768 1.664-1.024 2.688-1.024 1.024.128 1.92.64 2.431 1.408.896 1.408.768 3.327-.512 4.48l-2.687 2.687 2.175 8.063c.128.64 0 1.408-.511 1.92l-.64.64c-.384.384-1.024.64-1.664.512-.64-.128-1.152-.384-1.536-.896l-3.072-5.12-4.096 3.84v1.152c0 .512-.128 1.152-.64 1.664l-1.152 1.152c-.128.128-.512.256-.895.256zM5.912 4.015c-.128 0-.384.128-.512.255l-.64.64a.978.978 0 00-.256.64c0 .256.128.384.384.512l5.76 3.456c.127.128.255.256.255.512 0 .128 0 .384-.128.512l-4.351 4.992c-.128.128-.256.256-.512.256H4.504c-.512 0-.64 0-.768.128l-1.408 1.28 2.688 1.535c.128 0 .128.128.256.256l1.92 2.688 1.28-1.152c.127-.128.255-.256.255-.768V18.35c0-.128.128-.384.256-.512l4.864-4.48c.128-.127.384-.255.512-.127.128 0 .384.128.512.256l3.456 5.76c.128.255.256.255.512.383.256 0 .384 0 .64-.256l.64-.64c.128-.128.256-.512.128-.64l-2.432-8.447c0-.256 0-.512.128-.64l2.944-2.944c.767-.768.895-1.92.383-2.815-.383-.384-.895-.768-1.535-.768-.64 0-1.28.128-1.664.64L14.999 6.19c-.128.128-.256.128-.512.128L6.04 4.015h-.128z"></path></svg></mb-icon><span _ngcontent-tbe-c99=""> Vuelo </span></div>
          </div>
   
          <div class="locationContainer">  
             <h2>{props.object.location}</h2>
        
          <div class="flightTypeContainer">
            <p>{props.object.type}</p>
          </div>
          
          </div>

          <div class="blankContainer"></div>

            {/* Price conditions container*/}
              <div class="priceConditionsContainer">
                <div class="pricePerPerson">
                  <p>Precio por persona desde</p>
                </div>

                <div class="priceContainer">
                  <p>{props.object.price}</p>
                </div>

                <div class="conditionsContainer">
                  <p> Incluye impuestos, tasas y cargos</p>
                </div>
        
              </div>
          </div>
        </div>
    </a>          
  )
}

export default Card