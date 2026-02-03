import { create } from 'zustand'

const useBear = create((set) => ({
    bears: 0,
    increasePop: () => set((state) => ({ bears: state.bears + 1 })),
    removePop: () => set(() => ({ bears: 0 }))
}))

export default useBear;