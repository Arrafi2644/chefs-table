import PropTypes from 'prop-types';

const ToCook = ({wantCooks, handleCooked}) => {
  console.log(wantCooks)

  // const {recipe_name, preparing_time, calories} = wantCooks;

    return (
        <div>
            <h2 className="text-xl font-bold text-center pb-2 border-b-2">Want to cook: {wantCooks.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
   
    {
      wantCooks.map((recipe, index) => (
        <tr className='hover' key={index}>
        <td>{index + 1}</td>
        <td>{recipe.recipe_name}</td>
        <td>{recipe.preparing_time} min</td>
        <td>{recipe.calories}</td>
        <td><button onClick={()=>handleCooked(recipe.recipe_id)} className='p-3 bg-green-400 rounded-xl'>Processing</button></td>
      </tr> 
      ))
    }
     
   

    </tbody>
  </table>
</div>
        </div>
    );
};

ToCook.propTypes = {
  wantCooks: PropTypes.array.isRequired,
  // handleCooked: PropTypes.func.isRequired
}

export default ToCook;