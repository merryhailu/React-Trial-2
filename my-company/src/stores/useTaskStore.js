import { create } from 'zustand';

const useTaskStore = create((set) => ({
    tasks: [],
    addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
    removeTask: (id) => set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
    toggleTask: (id) => set((state) => ({
        tasks: state.tasks.map((task) => (
            task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
        ))
    })),

    fetchTask: async () => {
        const responce = await fetch('');
        const data = await responce.json();
        set({ tasks: data })
    }


}))

export default useTaskStore;

