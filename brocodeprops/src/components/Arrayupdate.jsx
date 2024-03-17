import React, { useState } from 'react'

function Arrayupdate() {

    const [food, setFood] = useState(['Apple', 'Orange', 'Banana']);

    return (
        <div>
            <h1>Update Array</h1>
            <ul>
                {food.map((food, index) => <li key={index}>{food}</li>)}
            </ul>
        </div>
    );
}

export default Arrayupdate;