import { useState } from "react";
import CookingRecipes from "./CookingRecipes/CookingRecipes";
import Recipes from "./Recipes/Recipes";
import PropTypes from "prop-types";


const OurRecipes = () => {

    const [wantCooks, setWantCooks] = useState([])

    const [cooked, setCooked] = useState([]);
    const [totalTime, setTotalTime] = useState(0)
    const [totalCalories, setTotalCalories] = useState(0)

    const handleWantToCook = (recipe) => {

        const isCooked = wantCooks.find(cookedRecipe => cookedRecipe.recipe_id === recipe.recipe_id)

        if (!isCooked) {
            const newWantCooks = [...wantCooks, recipe]
            setWantCooks(newWantCooks);
        } else {
            alert("Already cooked")
        }

    }

    const handleCooked = (id) => {
        // console.log(id)
        const readyRecipe = wantCooks.filter(recipe => recipe.recipe_id !== id)
        setWantCooks(readyRecipe);

        const newCookedRecipe = wantCooks.find(recipe => recipe.recipe_id === id)
        const newAllCooked = [...cooked, newCookedRecipe]
        setCooked(newAllCooked)

        console.log(newCookedRecipe)

        setTotalTime(totalTime + newCookedRecipe.preparing_time);
        setTotalCalories(totalCalories + newCookedRecipe.calories);
    }

    // console.log(wantCooks)
    // console.log(cooked)
    console.log(totalTime);
    console.log(totalCalories);

    return (
        <div className="my-12">
            {/* our-recipes-head-section */}
            <div className=" text-center w-4/5 mx-auto mb-6">
                <h2 className="text-2xl md:text-3xl mb-4 font-bold">Our Recipes</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>


            {/* Recipes main section  */}
            <div className="grid grid-cols-5 gap-6">
                <Recipes handleWantToCook={handleWantToCook}></Recipes>
                <CookingRecipes
                    wantCooks={wantCooks}
                    cooked={cooked}
                    handleCooked={handleCooked}
                    totalCalories={totalCalories}
                    totalTime={totalTime}
                ></CookingRecipes>
            </div>
        </div>
    );
};

OurRecipes.propTypes = {
    handleCooked: PropTypes.func.isRequired,
    wantCooks: PropTypes.object.isRequired
}

export default OurRecipes;