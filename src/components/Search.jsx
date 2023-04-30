import styled from 'styled-components';
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import React from 'react'

function Search() {
  //get value of text
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  //on enter load up another page
  const load = (e) => {
    e.preventDefault(); //prevents the browser from reloading
    navigate("/Searched/" + input);
  };

  return (
    <FormStyle onSubmit = {load}>
      <div>
        <FaSearch></FaSearch>
        <input onChange= {(e) => setInput(e.target.value)} type="text"  value= {input}/> 
      </div>  
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 0rem 15rem;
    div{
      position: relative;
      width: 100%;
    }
    input{
        border: none;
        background: linear-gradient(35deg, gray, black);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }

    svg{
      position: absolute;
      top: 50%;
      left: 0%;
      transform: translate(100%, -50%);
      color: white;
    }
`
export default Search
