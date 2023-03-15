export const getCharacters = `
query($page: Int!){
  characters(page: $page) {
    info {
      count
      pages
      next
      prev
    }
    results {
      id
      name
      status
      image
      location{
        name
      }
    }
  }
}
`;
