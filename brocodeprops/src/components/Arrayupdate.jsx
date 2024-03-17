import React, { useState } from 'react'

function Arrayupdate() {

    const [foods, setFoods] = useState(['apple', 'orange', 'banana']);

    const handleAddFood = () => {
        const newFood = document.getElementById('foodInput').value;
        document.getElementById("foodInput").value = '';
        setFoods(f => [...f, newFood.toLowerCase()]);
    };

    const handleRemoveFood = (index) => {

        // using a separate button to remove the food
        // const removeFood = document.getElementById('foodInput').value;
        // document.getElementById("foodInput").value = '';
        // setFoods(f => f.filter(food => food !== removeFood));

        // using the index of the food to remove the food
        setFoods(f => f.filter((_, i) => i !== index));
    };

    return (
      <div>
        <h1 className='text-4xl font-semibold my-4'>Update Array</h1>
        <ul>
          {foods.map((food, index) => (
            <li className='bg-teal-600 w-fit border rounded my-1 py-1 px-2 text-white text-center font-semibold' key={index} onClick={() => handleRemoveFood(index)}>{food}</li>
          ))}
        </ul>
        <input
          type="text"
          id="foodInput"
          className="border-2 rounded mx-1 px-2 py-1"
          placeholder="Enter food name"
        />
        <button
          className="bg-teal-400 text-white border rounded px-2 py-1 mx-1"
          onClick={handleAddFood}
        >
          Add Food
        </button>
      </div>
    );
}

export default Arrayupdate;