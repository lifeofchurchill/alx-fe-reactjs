import React from 'react';
import { useRecipeStore } from "./recipeStoretemptemp";
import { useNavigate } from 'react-router-dom';

// Small reusable delete button.
// Props:
// - recipeId: id to delete
// - afterDelete: optional callback to run after deletion
const DeleteRecipeButton = ({ recipeId, afterDelete }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    // Confirm with the user (simple browser confirm)
    if (!window.confirm('Delete this recipe?')) return;

    deleteRecipe(recipeId);

    // Run afterDelete callback if provided, otherwise navigate to home
    if (typeof afterDelete === 'function') {
      afterDelete();
    } else {
      navigate('/');
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteRecipeButton;
