import { useState, useEffect } from 'react';
import styled from "styled-components";
import { Artwork } from '../interfaces/Artworks';

const AllArtworksDiv=styled.div`
    font-family: "Ideal Sans A","Ideal Sans B",Helvetica,Arial,sans-serif;
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: #FBFCF8;
`;

const SingleArtworkDiv=styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center; 
    max-width: 40%;
    height: auto;
    padding: 2%;
    margin: 1%;
    border: 1px black solid;
    color: gray;
    text-align: center;
`;

const StyledImage = styled.img`
    max-width: 40%;
    height: auto;
    margin: auto;
    padding: 2% 0;
`;


const StyledInfo = styled.div`
    color: gray;
    text-align: center;
    font-size: 60%;
    padding: 2%;
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
                <p> Artist: {artwork.artist_display}</p>
                <p>Date: {artwork.date_display}</p>
                <p><strong>Credit Line:</strong> {artwork.credit_line}</p> 
            </StyledInfo>
        </SingleArtworkDiv>
        ))
    }
    </AllArtworksDiv>
);
}

export default MonetArtworks;