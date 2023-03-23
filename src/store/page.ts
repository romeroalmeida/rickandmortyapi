import create from 'zustand';

type Props = {
  page: number;
  setPage: (value: number) => void;
};

export const usePagination = create<Props>((set) => ({
  page: 1,

  setPage: (page: number) => {
    set((state) => ({
      page: page,
    }));
  },
}));
