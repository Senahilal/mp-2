// import { useState, useEffect } from 'react';
import styled from "styled-components";
import { Artwork } from '../interfaces/Artworks';

const AllArtworksDiv=styled.div`
    font-family: "Ideal Sans A","Ideal Sans B",Helvetica,Arial,sans-serif;
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: #FBFCF8;
    //align-items: flex-start; //gives asymetrical look
`;

const SingleArtworkDiv=styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center; 
    max-width: 33%;
    height: auto;
    padding-top: 1%;
    padding-bottom: 2%;
    //border: 1px black solid;
    color: gray;
    text-align: center;
    border-bottom: 1px #D4D3D3 solid;
    border-left: 2px solid solid;
`;

const StyledImage = styled.img`
    max-width: 40%;
    height: auto;
    margin: auto;
`;


const StyledInfo = styled.div`
    color: gray;
    text-align: center;
    font-size: 60%;
`;

function MonetArtworks(props: { data: Artwork[] }) {
    return (
    <AllArtworksDiv>
    {
        props.data.map((artwork: Artwork) => (
        <SingleArtworkDiv key={artwork.id}>
            <StyledImage src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`} alt={`image of ${artwork.title}`} />
            
            <StyledInfo>
                <h3>{artwork.title}</h3>
                <p>{artwork.date_display}</p>
                <p>{artwork.artist_display}</p>
                <p><strong>Credit Line:</strong> {artwork.credit_line}</p> 
            </StyledInfo>
        </SingleArtworkDiv>
        ))
    }
    </AllArtworksDiv>
);
}

export default MonetArtworks;