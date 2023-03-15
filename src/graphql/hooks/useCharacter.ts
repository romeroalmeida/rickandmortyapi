import { useQuery } from "react-query";
import { graphqlClient } from "../graphql";
import { getCharacter } from "../querys/getCharacter";


export function useCharacter(id: string) {

  return useQuery(['characeter', id], async () =>  await graphqlClient.request(getCharacter, { id: id })) 
}