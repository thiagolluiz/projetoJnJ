import React from 'react'
import styled from '@emotion/styled';
import Link from 'next/link';

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
              All Healthy
            </li>
            <li>
              <Link href='/causa'>Causa</Link>
            </li>
            <li>
              <Link href='/projeto'>Projeto</Link>
            </li>
            <li>
              <Link href='/implementacao'>Implementação</Link>
            </li>
            <li>
              <Link href='/melhoria'>Melhorias</Link>
            </li>
            <li>
              <Link href='/objetivo'>Objetivo</Link>
            </li>
            <li>
              <Link href='/futuro'>Futuro</Link>
            </li>
          </ul>

        </nav>
      </ListNav>
  )
}
