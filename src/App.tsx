import { useState, useEffect } from 'react';
import styled from 'styled-components';
import MonetArtworks from './components/MonetArtworks';
import { Artwork } from './interfaces/Artworks'; 

const ParentDiv=styled.div`
    width: 80vw;
    margin: 0px auto;
    border: 1px black solid;
`;

function App() {

  // useState Hook to store Data.
  const [data, setData] = useState<Artwork[]>([]);

  //The API is being used: https://api.artic.edu/docs/
  //Check which fields available:https://api.artic.edu/api/v1/artworks

  // useEffect Hook for error handling and re-rendering.
  useEffect(() => {
    async function fetchData(): Promise<void> {

      //https://api.artic.edu/api/v1/artworks/search?q=Claude+Monet&fields=id,title,artist_title,date_display,is_public_domain,image_id,artist_display,place_of_origin
      //Searching for Claude Monet artworks
      const searchURL = 'https://api.artic.edu/api/v1/artworks/search?q=Claude+Monet&fields=id,title,artist_title,date_display,is_public_domain,image_id,artist_display,place_of_origin,credit_line'

      // Call the API to find Claude Monet's artworks
      const searchResponse = await fetch(searchURL);
      const { data : artworks }: { data: Artwork[] } = await searchResponse.json();

      // Set the fetched artworks into the state
      setData(artworks);
    }

    fetchData()
      .then(() => console.log("Data fetched successfully"))
      .catch((e: Error) => console.log("There was the error: " + e));
  }, [data.length]);

  return (
    <ParentDiv style={{ backgroundColor: "#F8F9EE"}}>
        <MonetArtworks data={data}/>
    </ParentDiv>
)
}

export default App
