//to create new components(components are independent and reusable bits of code) in react, we do rfce and press enter

import { useEffect, useState} from "react";
import styled from "styled-components";
import {Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";

//usestate is used to save the data
function Popular() {
  const [popular, setPopular] = useState([]);
  //to get the getPopular function run soon as component is rendered, we use (use Effect)
   useEffect(() =>{
       getPopular();
   },[]); //empty array tells us that run only when component is rendered
   
  
  //fetching the random receipes from spoonacular API.
  //async is used here beacause we need to wait for the data and we have to make sure that we have data beforing trying to fetch
  const getPopular = async ()=> {  
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      ); //number indicates how many receipe we want to fetch
    const data = await api.json(); //providing a json format
    setPopular(data.recipes);
    console.log(data.recipes);
  };

  return(
    <div>
        <Wrapper>
          <h3>Popular Picks</h3>
          <Splide
             options={{
               perPage: 4,
               //arrows: false,
               //pagination: false,
               //drag: "free",
               //gap: "5rem",
            }} 
          >
           {popular.map((recipe) => //loop through all the recipe on the api
           {
             return(
              <SplideSlide>
              <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt="recipe.title" />
              </Card>
              </SplideSlide>
             );
           })}
           </Splide>
        </Wrapper>
    </div>
  );
}

//Styling
const Wrapper = styled.div`
   margin: 4rem 0rem;
`;

const Card = styled.div`

 min-height: 25rem;
 border-radius: 2rem;
 overflow: hidden;

 img{
  border-radius: 2rem;
 }

`;

export default Popular;
