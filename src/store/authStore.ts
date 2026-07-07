import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  usuario: string;
  login: (usuario: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  usuario: "",

  login: (usuario) =>
    set({
      isAuthenticated: true,
      usuario,
    }),

  logout: () =>
    set({
      isAuthenticated: false,
      usuario: "",
    }),
}));