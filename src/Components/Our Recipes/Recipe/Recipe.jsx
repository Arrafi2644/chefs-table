import PropTypes from 'prop-types';
import { CiClock2} from "react-icons/ci";
import { FaFire } from "react-icons/fa";

const Recipe = ({recipe, handleWantToCook}) => {
    const {recipe_id, recipe_name, recipe_img, short_description, preparing_time, calories, ingredients} = recipe;
    return (
        <div className="flex flex-col gap-4 p-6 border rounded-lg">
            <img className="rounded-lg w-full md:h-48 object-cover" src={recipe_img} alt="" />
            <h2 className='font-bold '>{recipe_name}</h2>
            <p className='text-gray-600 text-sm'> {short_description}</p>
            <h2 className='font-semibold'>Ingredients: {ingredients.length}</h2>
            <div className='ml-6 text-gray-600 text-sm'>
            {
                ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
            }
            </div>
            <div className='flex gap-3'>
                <div className='flex gap-1 items-center'>
                <CiClock2 />
                <p className='text-sm'>{preparing_time} min</p>
                </div>
                <div className='flex gap-1 items-center'>
                <FaFire />
                <p className='text-sm'>{calories} calories</p>
                </div>
            </div>
            <div>
            <button onClick={()=> handleWantToCook(recipe)} className="btn px-6 py-4 bg-green-400 rounded-xl h-auto min-h-0">Want to cook</button>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleWantToCook: PropTypes.func.isRequired
}

export default Recipe;