export interface Character {
  id: string
  name:  string
  status: string
  image: string
  location: {
    name: string
  }
}

export interface CharacterDetails {
  id: string
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    id: string
    name: string
    dimension: string
  }
  location: {
    id: string
    name: string
  }
  image: string
}