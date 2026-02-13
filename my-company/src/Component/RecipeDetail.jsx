import React from 'react';
import useRecipeStore from '../stores/useRecipeStore';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(recipeId))
  );

  if (!recipe) {
    return <p>recipe not found</p>;
  }

  return (
    <>
      <div>
        <h1>recipe detail</h1>
        <h2>{recipe.title}</h2>
        <p>{recipe.description}</p>
      </div>
    </>
  );
};

export default RecipeDetail;
