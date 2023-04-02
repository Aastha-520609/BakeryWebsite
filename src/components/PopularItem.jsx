//to create new components(components are independent and reusable bits of code) in react, we do rfce and press enter

import { useEffect, useState} from "react";
import styled from "styled-components";
import { Splide,SplideTrack,SplideSlide } from "@splidejs/react-splide";
//import "@splidejs/splide/dist/css/splide.min.css";
import '@splidejs/react-splide/css';

//usestate is used to save the data
function PopularItem() {  
  const [popularItem, setPopularItem] = useState([]);
  //to get the getPopular function run soon as component is rendered, we use (use Effect)
   useEffect(() =>{
       getPopularItem();
   },[]); //empty array tells us that run only when component is rendered
   
  
  //fetching the random receipes from spoonacular API.
  //async is used here beacause we need to wait for the data and we have to make sure that we have data beforing trying to fetch
  const getPopularItem = async ()=> {  
    //here we want to check if there is anything in the local storage
    //checks if there is anything in local storage or not
    const check = localStorage.getItem('popularItem');
    //if item is present, set it
    if(check)
    {
      setPopularItem(JSON.parse(check)); //parse takes the data(which is in string) and parse it into array
    }
    //if not then we will fetch the data
    else{
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
        ); //number indicates how many receipe we want to fetch
      const data = await api.json(); //providing a json format
      localStorage.setItem("popular", JSON.stringify(data.recipes));//stringify takes array and converts it into string and pushes the data
      setPopularItem(data.recipes);
      console.log(data.recipes);
    }
    
  };

  return(
    <div>
        <Wrapper>
          <h3>Popular Picks</h3>
          <Splide
             options={{
               perPage: 2,
               //arrows: false,
               pagination: false,
               drag: 'free',
               gap: "3rem",
            }} 
          >
           {popularItem.map((recipe) => //loop through all the recipe on the api
           {
             return(
              <SplideSlide key={recipe.id}>
              <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
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

  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-context: center;
    align-items: center;
    
  }
`;
const Gradient = styled.div`{
  z-index: 3;
  position: absoulte;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));

}
   
`;
export default PopularItem;
