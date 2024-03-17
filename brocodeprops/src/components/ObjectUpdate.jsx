import React, { useState } from 'react'

function ObjectUpdate() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('');

    const handleAddCar = () => {
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        };

        setCars(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake('');
        setCarModel('');
    };

    const handleRemoveCar = (index) => {
        setCars(c => c.filter((_, i) => i !== index));
    };

    const handleYearChange = (e) => {
        setCarYear(e.target.value);
    };

    const handleMakeChange = (e) => {
        setCarMake(e.target.value);
    };

    const handleModelChange = (e) => {
        setCarModel(e.target.value);
    };


    return (
        <div>
            <h1 className="text-2xl font-semibold mb-4">List of car objects</h1>

            <ul>
                {cars.map((car, index) => (
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year}&nbsp;
                        {car.make}&nbsp;
                        {car.model}
                    </li>
                ))}
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange} />

            <input
                type="text"
                value={carMake}
                onChange={handleMakeChange}
                placeholder="Enter car make"
            />

            <input
                type="text"
                value={carModel}
                onChange={handleModelChange}
                placeholder="Enter car model"
            />

            <button onClick={handleAddCar}>
                Add car
            </button>
        </div>
    );
}

export default ObjectUpdate;