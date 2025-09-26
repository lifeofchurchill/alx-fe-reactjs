import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetailsWrapper from './components/RecipeDetailsWrapper';
import EditRecipeFormWrapper from './components/EditRecipeFormWrapper';

function App() {
  return (
    <Router>
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
            <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} />

            {/* edit form */}
            <Route path="/recipes/:id/edit" element={<EditRecipeFormWrapper />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
