import create from 'zustand';

type FavoriteProps = {
  id: string;
  name: string;
  image: string;
}
type Props = {
  favorites: FavoriteProps[];
  setFavorites: (value: {}) => void;
};

export const useFavorites = create<Props>((set) => ({
  favorites: [],
  
  setFavorites:  (character: any) => {
    set((state) => ({
      favorites:  [...state.favorites, character] 
    }))
  },

}));
