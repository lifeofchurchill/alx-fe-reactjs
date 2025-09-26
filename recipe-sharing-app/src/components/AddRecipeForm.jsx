import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const AddRecipeForm = () => {
  // Get the addRecipe action from the store
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  // Local state for form inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Add a new recipe object with unique id, title, and description
    addRecipe({
      id: Date.now(),
      title,
      description,
    });

    // Reset form fields
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input for recipe title */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />

      {/* Input for recipe description */}
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />

      {/* Button to submit the form */}
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
