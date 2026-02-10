import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import Snackbar from './components/Snackbar';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import RecipeDetails from './components/RecipeDetails';
import Todo from './components/todo';

function App() {
  return (
    <>
      <Todo />

      {/* <Routes> */}
      {/* <div className="flex h-screen items-center justify-center">
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
      </div> */}
      {/* <Route path="/" element={<AddRecipeForm />} /> */}
      {/* <Route path="/" element={<RecipeList />} /> */}

      {/* <Route path="/recipedetail/:id" element={<RecipeDetails />} />
      </Routes> */}
    </>
  );
}

export default App;
