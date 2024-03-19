import React, {useState, useEffect} from 'react';

function MyComponent() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(()=> {
        window.addEventListener('resize', handleResize);
        console.log('mounted');

        return ()=> {
            window.removeEventListener('resize', handleResize);
            console.log('unmounted');
        };
    }, []);

    useEffect(()=> {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);

    const handleResize = ()=> {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

  return (
    <>
        <p>width: {width}px</p>
        <p>height: {height}px</p>
    </>
  );
}

export default MyComponent;