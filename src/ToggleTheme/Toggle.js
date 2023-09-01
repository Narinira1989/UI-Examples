import React, { useEffect, useState } from 'react';
import './toggle.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Toggle() {
    const [isLightTheme, setIsLightTheme] = useState(true);


    useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();

    if (currentHour >= 18 || currentHour < 6) {
      setIsLightTheme(false); // Устанавливаем тёмную тему после 18:00 и до 6:00
    }
    }, []);

    const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
    };

    return (
    <div className={`page ${isLightTheme ? 'light-theme' : 'dark-theme'}`}>
        <button className="theme-button" onClick={toggleTheme}>
        {isLightTheme ? 'black mode'.toUpperCase() : 'light mode'.toUpperCase()}
        </button>
    </div>
    );
}

export default Toggle;