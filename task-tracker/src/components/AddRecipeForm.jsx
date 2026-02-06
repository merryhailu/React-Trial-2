import React, { useState } from 'react';
import RecipeList from './RecipeList';
import useRecipeStore from '../store/useRecipeStore';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({
      id: Date.now(),
      title: title,
      description: description,
    });
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="Enter Recipe"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={description}
          placeholder="Enter the Description"
          onChange={(e) => setDescription(e.target.value)}
        >
          Enter Description
        </textarea>
        <button type="submit">Add Recipe</button>
      </form>

      <RecipeList />
    </div>
  );
};

export default AddRecipeForm;
