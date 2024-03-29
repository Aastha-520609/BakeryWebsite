import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import React from 'react'

function Category() {
  return (
    <List>

      <Slink to={"/Cuisine/Italian"}> 
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Slink> 

      <Slink to={"/Cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </Slink>

      <Slink to={"/Cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </Slink>

      <Slink to={"/Cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </Slink>

    </List>
  );
}

const List = styled.div`
   display: flex;
   justify-content: center; 
   margin: 2rem 0rem;
`;

const Slink = styled(NavLink)`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border-radius: 50%;
   margin-right: 2rem;
   text-decoration: none;
   background: linear-gradient(35deg, gray, black);
   width: 6rem;
   height: 6rem;
   cursor: pointer;
   transform: scale(0.8);
   //padding: 8px;

   h4{
    color: white;
    font-size: 0.8rem;
   }

   svg{
    color: white;
    font-size: 1.5rem;
   }
` 

export default Category;


