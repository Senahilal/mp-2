import { useState, useEffect } from 'react';
import styled from 'styled-components';
import MonetArtworks from './components/MonetArtworks';
import { Artwork } from './interfaces/Artworks'; 

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px darkgoldenrod solid;
`;

function App() {

  // useState Hook to store Data.
  const [data, setData] = useState<Artwork[]>([]);

  // useEffect Hook for error handling and re-rendering.
  useEffect(() => {
    async function fetchData(): Promise<void> {

      //Searching for Claude Monet artworks
      const searchURL = 'https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&q=Claude%20Monet'

      // Call search API to find Claude Monet's artworks
      const searchResponse = await fetch(searchURL);
      // Parse the response as JSON inside the try block
      const { objectIDs }: { objectIDs: number[] } = await searchResponse.json();

      //Fetching objects of each artwork, one by one
      const artworkObjects: Artwork[] = [];
      for (let id of objectIDs) {
        const object = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
        const artworkObject = await object.json();
        artworkObjects.push(artworkObject); // Adding each artwork object to the array
      }

      // Set the fetched artworks into the state
      setData(artworkObjects);
    }

    fetchData()
      .then(() => console.log("Data fetched successfully"))
      .catch((e: Error) => console.log("There was the error: " + e));
  }, [data.length]);

  return (
    <ParentDiv>
        <MonetArtworks data={data}/>
    </ParentDiv>
)
}

export default App
