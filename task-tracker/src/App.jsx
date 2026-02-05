import './App.css';
import Snackbar from './components/Snackbar';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-96 rounded-lg bg-white p-6 text-center shadow-md">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold">Task Tracker</h1>
          </div>
          <div className="mb-4">
            <TaskForm />
            <TaskList />
          </div>
          <Snackbar />
        </div>
      </div>
    </>
  );
}

export default App;
