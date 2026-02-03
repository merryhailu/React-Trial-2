import { create } from 'zustand'
import { persist } from 'zustand/middleware';


const useStore = create(persist((set) => ({
    data: [],
    fetch: async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await response.json();
        set({ data: json })
    },

}),
    {
        name: 'fetch-storage',
        getStorage: () => localStorage,
    }

))
export default useStore; 