export const getCharacter = `
query($id: ID!){
  character(id: $id) {
    id
   name
   status
   species
   type
   gender
   origin {
     id
     name
     dimension
   }
   location{
     id
     name
   }
   image
  }
}
`;