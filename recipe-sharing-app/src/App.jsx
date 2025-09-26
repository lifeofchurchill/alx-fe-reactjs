import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';

function App() {
  return (
    <div style={{ padding: 16 }}>
      <header>
        <h1><Link to="/">🍲 Recipe Sharing App</Link></h1>
      </header>

      {/* put the add form at the top so users can add from anywhere */}
      <AddRecipeForm />

      <main style={{ marginTop: 24 }}>
        <Routes>
          {/* main list */}
          <Route path="/" element={<RecipeList />} />

          {/* recipe details */}
          <Route path="/recipes/:id" element={<RecipeDetails />} />

          {/* edit form */}
          <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
