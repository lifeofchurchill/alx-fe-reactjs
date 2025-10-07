import { useState, useEffect } from "react";
import data from '../data.json'

function Homepage() {
    const [recipes, setRecipes] = useState([])
    useEffect( () => {
        setRecipes(data)
    }, []);

    return (
        <div className="flex-wrap flex gap-4 justify-center">
            {
                recipes.map(recipe => (
                    <div key={recipe.id} className="bg-white shadow-md rounded-lg p-4 w-64">
                        <h1 className="text-xl font-bold mt-2 text-black">{recipe.title}</h1>
                        <p className="text-gray-600 mt-1">{recipe.summary}</p>
                        <img src={recipe.image} className="w-full h-40 object-cover rounded-md"/>
                    </div>
                ))
            }
        </div>
    )

}

export default Homepage;
