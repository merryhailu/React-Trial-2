import { create } from 'zustand'


const useStore = create((set) => ({
    data: [],
    fetch: async () => {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        set({ data })
    }

}))

export default useStore;