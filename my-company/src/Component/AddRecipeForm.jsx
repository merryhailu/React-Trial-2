import React, { useState } from 'react';
import useRecipeStore from '../stores/useRecipeStore';

const AddRecipeForm = () => {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');
  const newRecipe = { id: Date.now(), title: text, description: description };

  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe(newRecipe);
    setText('');
    setDescription('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          placeholder="enter the recipe"
          onChange={(e) => setText(e.target.value)}
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter the description"
        />

        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddRecipeForm;
