import React from 'react';
import { useDarkMode } from '../hook/useDarkMode';

export const DarkLightModeButton: React.FC = () => {
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    return (    
        <button
            className={`absolute w-12 h-12 text-2xl rounded-full right-0 m-2`}
            onClick={toggleDarkMode}
        >
            {isDarkMode ? '🌞' : '🌚'}
        </button>
    )
}
