import create from 'zustand';

type FavoriteProps = {
  id: string;
  name: string;
  image: string;
};
type Props = {
  favorites: FavoriteProps[];
  setFavorites: (value: FavoriteProps) => void;
};

export const useFavorites = create<Props>((set) => ({
  favorites: [],

  setFavorites: (character: FavoriteProps) => {
    set((state) => ({
      favorites: [...state.favorites, character],
    }));
  },
}));
