import { useQuery } from "react-query";
import { graphqlClient } from "../graphql";
import { getCharacters } from "../querys/getCharacters";

export function useCharacters(page: number) {

  return useQuery(['characeters', page], async () =>  await graphqlClient.request(getCharacters, { page: page })) 
}