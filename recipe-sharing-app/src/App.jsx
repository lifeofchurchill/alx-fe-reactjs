// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetailsWrapper from './components/RecipeDetailsWrapper';
import EditRecipeFormWrapper from './components/EditRecipeFormWrapper';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router>
      <div style={{ padding: 16 }}>
        <header>
          <h1><Link to="/">🍲 Recipe Sharing App</Link></h1>
        </header>

        <AddRecipeForm />

        <main style={{ marginTop: 24 }}>
          <SearchBar />
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} />
            <Route path="/recipes/:id/edit" element={<EditRecipeFormWrapper />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
