import React, { useState } from 'react';

function ColorPicker() {

    const [color, setColor] = useState('#FFFFFF');

    const handleOnChange = (e) => {
        setColor(e.target.value);
    };

    return (
        <>
            <div className='w-full h-screen flex flex-col justify-center items-center'>
                <h1 className='m-2 text-4xl font-semibold'>Color Picker</h1>
                <p className='text-2xl h-[10rem] w-[10rem] my-4 flex justify-center items-center rounded-xl' style={{ backgroundColor: color }}>{color}</p>
                <label className='text-2xl font-semibold'>
                    Select Color
                    <input type="color" value={color} onChange={handleOnChange} className='rounded px-1 m-1' />
                </label>
            </div>
        </>
    );
}

export default ColorPicker;