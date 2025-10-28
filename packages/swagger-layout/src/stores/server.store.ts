import { create } from "zustand";

interface IServerStore {
  selectedServer: string;
  setSelectedServer: (server: string) => void;
}

const useServerStore = create<IServerStore>(set => ({
  selectedServer: "",
  setSelectedServer: server => set({ selectedServer: server }),
}));

export default useServerStore;
