import CurrentlyCooking from "./CurrentlyCooking/CurrentlyCooking";
import ToCook from "./ToCook/ToCook";
import PropTypes from 'prop-types';

const CookingRecipes = ({wantCooks, handleCooked, totalCalories, totalTime, cooked}) => {
    return (
        <div className="col-span-2 p-6 border rounded-lg flex flex-col gap-6">
           <ToCook wantCooks={wantCooks} handleCooked={handleCooked}></ToCook>
           <CurrentlyCooking 
           cooked={cooked}
           totalCalories={totalCalories}
           totalTime={totalTime}
           ></CurrentlyCooking>
        </div>
    );
};

CookingRecipes.propTypes = {
    wantCooks: PropTypes.object.isRequired,
    handleCooked: PropTypes.func.isRequired
}

export default CookingRecipes;