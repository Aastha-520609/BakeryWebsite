import { useEffect,useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import React from 'react'

function Recipe() {
    
    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");

    const fetchDetails = async () => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        );
        const detailData = await api.json();
        setDetails(detailData);
        console.log(detailData); 
    };  

    useEffect(() => {
       fetchDetails();  
    }, [params.name]);  

  return (
   <DetailWrapper>
        <div>
           <h2>{details.title}</h2>
           <img src={details.image} alt="" /> 
       </div>
      <Info>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick = {() => setActiveTab('instructions')}>
            Instructions
        </Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick = {() => setActiveTab('ingredients')}>
            Ingredients
        </Button>

        {activeTab === "instructions" && (
          <div> 
            <h3 dangerouslySetInnerHTML={{ __html: details.summary}}></h3>
            <h5 dangerouslySetInnerHTML={{ __html: details.instructions}}></h5>
          </div>
        )}

        {activeTab === "ingredients" && (
           <ul>
              {details.extendedIngredients.map((ingredient) => (
               <li key={ingredient.id}>{ingredient.original}</li>
              ))}
          </ul>
        )};
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 5rem;
  display: flex;
  .active{
    background: linear-gradient(35deg, gray, black);
    color: white;
  }
  h2{
    margin-bottom: 2rem;
  }
  li{
    font-size: 1.2rem;
    line-height: 2rem;
  }
  ul{
    margin-top: 2rem;
  }
  h5{
    font-size: 1rem;
    line-height : 1.5rem;
  }
`;

const Button = styled.button`
  padding: 10px;
  color: black;
  background: white;
  border: 2px solid black;
  font-weight: 600;
  margin-right: 10px;

`;

const Info = styled.div`
   margin-left: 5rem;
   font-size: 2px;
`;

export default Recipe
