import { create } from "zustand";

const useRecipeStore = create((set) => ({
recipes: [],

initializeRecipes : (recipeList) => set(() => ({
    recipes : recipeList
})),

addRecipe : (newRecipe) => set((state) => ({
    recipes : [...state.recipes, newRecipe]
}))
}))

export default useRecipeStore;
