import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types';


const Recipes = ({handleWantToCook}) => {

    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data));
    },[])

    // console.log(recipes)

    return (
        <div className="col-span-3 grid grid-cols-2 gap-6">
            {
                recipes.map((recipe, index) => <Recipe recipe={recipe} handleWantToCook={handleWantToCook} key={index}></Recipe>)
            }

        </div>
    );
};

Recipes.propType = {
    handleWantToCook : PropTypes.func.isRequired
}

export default Recipes;