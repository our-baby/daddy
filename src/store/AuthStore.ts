import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface AuthState {
  accessToken: string | null;
  refreshToken?: string | null;
}

interface AuthAction {
  setAccessToken: (token: string) => void;
  setRefreshToken: (token: string) => void;
  resetTokens: () => void;
}

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
};

const authStore = persist<AuthState & AuthAction>(
  (set) => ({
    ...initialState,
    setAccessToken: (token) => set({ accessToken: token }),
    setRefreshToken: (token) => set({ refreshToken: token }),
    resetTokens: () => set(initialState),
  }),
  {
    name: 'auth-storage',
  },
);

const useAuthStore = create(devtools(authStore));

export default useAuthStore;
