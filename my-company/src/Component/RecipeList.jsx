import React from 'react';
import useRecipeStore from '../stores/useRecipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <Link to={`/recipedetail/${recipe.id}`}>recipe detail</Link>
        </div>
      ))}
    </>
  );
};

export default RecipeList;
