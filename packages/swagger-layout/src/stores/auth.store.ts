import type { StoredAuth } from "@/types/saved-auth.type";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface IAuthStore {
  storage: Record<string, StoredAuth>;
  setStorageItem: (key: string, value: StoredAuth) => void;
  clearStorageItem: (key: string) => void;
}

const useAuthStore = create<IAuthStore>()(
  persist(
    immer(set => ({
      storage: {},
      setStorageItem: (key, value) =>
        set(state => {
          state.storage[key] = value;
        }),
      clearStorageItem: key =>
        set(state => {
          delete state.storage[key];
        }),
    })),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthStore;
