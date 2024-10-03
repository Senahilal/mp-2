
export interface Artwork {
    objectID: number;           // This is the ID of the artwork (objectID in the API response)
    title: string;              // The title of the artwork (title in the API response)
    artistDisplayName: string;  // The artist's name (artistDisplayName in the API response)
    objectDate: string;         // The date or year of the artwork (objectDate in the API response)
    primaryImageSmall: string;  // The URL for the image of the artwork (primaryImageSmall in the API response)
}