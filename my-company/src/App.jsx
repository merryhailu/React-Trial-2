import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Service from './Component/Service';
import Contact from './Component/Contact';
import NavBar from './Component/NavBar';
import TaskForm from './Component/TaskForm';
import TaskList from './Component/TaskList';
import AddRecipeForm from './Component/AddRecipeForm';
import RecipeList from './Component/RecipeList';
import RecipeDetail from './Component/RecipeDetail';

function App() {
  return (
    <>
      <AddRecipeForm />

      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipedetail/:recipeId" element={<RecipeDetail />} />
      </Routes>
      {/* <TaskForm />
      <TaskList /> */}

      {/* <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </>
  );
}

export default App;
