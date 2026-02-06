import React from 'react';
import useRecipeStore from '../store/useRecipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <>
      <h1>RecipeList</h1>
      <div>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <h2>{recipe.title}</h2>

            <Link to={`/recipedetail/${recipe.id}`}>Recipe Detail</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecipeList;
