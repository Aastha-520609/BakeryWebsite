//to create new components(components are independent and reusable bits of code) in react, we do rfce and press enter

import { useEffect } from "react";

function Popular() {
  //to get the getPopular function run soon as component is rendered, we use (use Effect)
   useEffect(() =>{
       getPopular();
   },[]); //empty array tells us that run only when component is rendered
  
  //fetching the random receipes from spoonacular API.
  //async is used here beacause we need to wait for the data and we have to make sure that we have data beforing trying to fetch
  const getPopular = async ()=> {  
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.API_KEY_OF_REACT_APP}&number=9`) //number indicates how many receipe we want to fetch
    const data = await api.json(); //providing a json format
    console.log(data);
  }
  return (
    <div>
      PopularItem
    </div>
  );
}

export default Popular;
