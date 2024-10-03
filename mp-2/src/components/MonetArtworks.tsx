import { useState, useEffect } from 'react';
import styled from "styled-components";
import { Artwork } from '../interfaces/Artworks';

const AllArtworksDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: bisque;
`;

const SingleArtworkDiv=styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    border: 3px darkred solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
`;

function MonetArtworks(props: { data: Artwork[] }) {
    return (
      <AllArtworksDiv>
        {
          props.data.map((artwork: Artwork) => (
            <SingleArtworkDiv key={artwork.objectID}>
              <h1>{artwork.title}</h1>
              <p>{artwork.artistDisplayName}</p>
              <p>{artwork.objectDate}</p>
              <img src={artwork.primaryImageSmall} alt={`image of ${artwork.title}`} />
            </SingleArtworkDiv>
          ))
        }
      </AllArtworksDiv>
    );
  }

export default MonetArtworks;