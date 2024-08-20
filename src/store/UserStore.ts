import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface UserStore {
  id: string | null;
  email: string | null;
  nickname: string | null;
  joinType: string | null;
  setId: (id: string) => void;
  setEmail: (email: string) => void;
  setNickname: (nickname: string) => void;
  setJoinType: (joinType: string) => void;
}

const userStore = devtools<UserStore>((set) => ({
  id: null,
  email: null,
  nickname: null,
  joinType: null,
  setId: (id) => set({ id }),
  setEmail: (email) => set({ email }),
  setNickname: (nickname) => set({ nickname }),
  setJoinType: (joinType) => set({ joinType }),
}));

const useUserStore = create(userStore);

export default useUserStore;
