import React from 'react'
import styled from '@emotion/styled';

const ListNav = styled.header`
    width: 100%;
    height: 80px;
    font-family: sans-serif;
    background-color: #242424;
    box-shadow: 0px 2px rgba(85, 83, 83, 0.498);
    nav{
      width: 100%;
    }
    ul{    
      display: flex;
      justify-content: space-around;
      line-height: 80px;
      margin: 0;
      padding: 0;
    }li{
      list-style: none;
      }a{
        list-style: none;
        padding: 5px;
          &:hover{
          padding: 15px;
          border-radius: 10%;
          background-color: #333;
          cursor: pointer;      
          }
      }
`
export default function Navbar() {
  return (
    <ListNav>
        <nav>
          <ul>
            <li>
              <a href="#">All Healthy</a>
            </li>
            <li>
              <a href="/causa">Causa</a>
            </li>
            <li>
              <a href="/projeto">Projeto</a>
            </li>
            <li>
              <a href="/implementacao">Implementação</a>
            </li>
            <li>
              <a href="/melhoria">Melhorias</a>
            </li>
            <li>
              <a href="/objetivo">Objetivo</a>
            </li>
            <li>
              <a href="/futuro">Futuro</a>
            </li>
          </ul>

        </nav>
      </ListNav>
  )
}
