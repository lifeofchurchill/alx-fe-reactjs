// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Components
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetailsWrapper from './components/RecipeDetailsWrapper';
import EditRecipeFormWrapper from './components/EditRecipeFormWrapper';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <Router>
      <div style={{ padding: 16 }}>
        {/* Header */}
        <header style={{ marginBottom: 24 }}>
          <h1><Link to="/">🍲 Recipe Sharing App</Link></h1>
        </header>

        {/* Add Recipe Form */}
        <AddRecipeForm />

        {/* Main Content */}
        <main style={{ marginTop: 24 }}>
          {/* Search Bar */}
          <SearchBar />

          {/* Routes */}
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} />
            <Route path="/recipes/:id/edit" element={<EditRecipeFormWrapper />} />
          </Routes>

          {/* Favorites and Recommendations */}
          <section style={{ marginTop: 40 }}>
            <FavoritesList />
            <RecommendationsList />
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
