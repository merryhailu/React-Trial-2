import { create } from "zustand"
import useMessageStore from "./useMessageStore"

const useTaskStore = create((set) => ({
    tasks: [],
    addTask: (task) => {
        set((state) => ({ tasks: [...state.tasks, task] }))
    },
    removeTask: (id) => {
        set((state) => ({ tasks: state.tasks.filter(task => task.id !== id) }))
    },
    toggleTask: (id) => {
        set((state) => ({
            tasks: state.tasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )

        }))
    },
    fetchTasks: async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await response.json();
            set({ tasks: data.slice(0, 5) });
            useMessageStore.getState().setMessage('Task fetched successfully', 'success');
        }
        catch (error) {
            console.error('Error fetching task', error);
            useMessageStore.getState().setMessage('Error fetching task', 'error');
        }
    }

}))

export default useTaskStore;