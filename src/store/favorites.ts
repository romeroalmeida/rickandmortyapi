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
    set((state) => {
      const indice = state.favorites.findIndex(
        (item) => item.id === character.id
      );
      if (indice == -1) {
        return { favorites: [...state.favorites, character] };
      } else {
        const newFavorites = state.favorites.filter(
          (item) => item.id !== character.id
        );
        return { favorites: newFavorites };
      }
    });
  },
}));
