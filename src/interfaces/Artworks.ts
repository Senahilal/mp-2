
export interface Artwork {
    id: number;                 //ID of the artwork 
    title: string;              // The title of the artwork (title in the API response)
    artist_title: string;       // The artist's name
    artist_display: string;     // The name, origin and the dob-dod of the artist
    date_display: string;       // The date or year of the artwork 
    image_id: string;           //Image id -> will use to construct url to get image
    credit_line: string;

    //fields=id,title,artist_title,date_display,is_public_domain,image_id,artist_display,place_of_origin,image_id'

}