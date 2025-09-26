// RecipeList.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  if (recipes.length === 0) return <p>No recipes found.</p>;

  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id} style={{ marginBottom: '12px' }}>
          <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
