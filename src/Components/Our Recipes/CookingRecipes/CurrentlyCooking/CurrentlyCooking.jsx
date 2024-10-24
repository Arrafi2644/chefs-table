import PropTypes from "prop-types";

const CurrentlyCooking = ({ cooked, totalCalories, totalTime }) => {
    return (
        <div>
            <h2 className="text-xl font-bold text-center pb-2 border-b-2">Currently Cooking: {cooked.length}</h2>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        cooked.map((recipe, index) => (
                            <tr className='hover' key={index}>
                                <td>{index + 1}</td>
                                <td>{recipe.recipe_name}</td>
                                <td>{recipe.preparing_time} min</td>
                                <td>{recipe.calories}</td>
                            </tr>
                        ))
                    }

                    <tr className="border-none">
                        <td></td>
                        <td></td>
                        <td>Total Time = {totalTime} minutes</td>
                        <td>Total Calories = {totalCalories}</td>
                    </tr>



                </tbody>
            </table>
        </div>
    );
};


CurrentlyCooking.propTypes = {
    cooked: PropTypes.object.isRequired
}

export default CurrentlyCooking;