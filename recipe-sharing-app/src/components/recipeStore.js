// recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  // --- Recipe CRUD ---
  addRecipe: (recipe) => {
    set((state) => {
      const updatedRecipes = [...state.recipes, recipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    });
  },

  updateRecipe: (updatedRecipe) => {
    set((state) => {
      const updatedRecipes = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    });
  },

  deleteRecipe: (id) => {
    set((state) => {
      const updatedRecipes = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
        favorites: state.favorites.filter((favId) => favId !== id),
      };
    });
  },

  // --- Search ---
  setSearchTerm: (term) => {
    const { recipes } = get();
    set({
      searchTerm: term,
      filteredRecipes: recipes.filter((r) =>
        r.title.toLowerCase().includes(term.toLowerCase())
      ),
    });
  },

  // --- Favorites ---
  addFavorite: (recipeId) => {
    const { favorites } = get()
