import React, { useState } from 'react';
import useRecipeStore from '../store/useRecipeStore';
import { useNavigate, useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { updateRecipe, deleteRecipe } = useRecipeStore();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const startEditing = () => {
    setTitle(recipe.title);
    setDescription(recipe.description);
    setIsEditing(true);
  };
  if (!recipe) {
    return (
      <>
        <p>Recipe Not Found</p>
        <button onClick={() => navigate('/')}>Back to list</button>
      </>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipe.id, {
      title: title.trim(),
      description: description.trim(),
    });

    setIsEditing(false);
  };

  const handleCancel = () => {
    setTitle(recipe.title);
    setDescription(recipe.description);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div>
        <h1>Edit Recipe</h1>
        <form onSubmit={handleSubmit}>
          <input
            id="edit-title"
            type="text"
            value={title}
            placeholder="Enter Recipe"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            id="edit-description"
            value={description}
            placeholder="Enter the Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h1>Recipe detail</h1>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <button onClick={startEditing}>Edit</button>
      <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
      <button onClick={() => navigate('/')}>Back to list</button>
    </div>
  );
};

export default RecipeDetails;
