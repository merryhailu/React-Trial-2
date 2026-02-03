import { create } from 'zustand'




const authMiddleware = (config) => (set, get, api) => config((args) => {
  const state = get();
  if (state.isAuthenticated) {
    set(args)
  } else {
    console.warn("action blocked")
  }
}, get, api)


const useCounterStore = create(authMiddleware((set) => ({
  isAuthenticated: false,
  count: 0,
  login: () => set({ isAuthenticated: true }),
  increment: () => set((state) => ({ count: state.count + 1 })),
  incrementAsync: () => {
    setTimeout(() => {
      set((state) => ({ count: state.count + 1 }))
    }, 1000)
  },

  decrement: () => set((state) => ({ count: state.count - 1 })),
  resetCount: () => set({ count: 0 })

})))

export default useCounterStore