import React from 'react';
import { useDarkMode } from '../hook/useDarkMode';

export const DarkLightModeButton: React.FC = () => {
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    return (
        <button
            className={`${isDarkMode ? 'bg-slate-100': 'bg-slate-700'} absolute top-0 right-0 m-4 p-2 text-2xl rounded-full`}
            onClick={toggleDarkMode}
        >
            {isDarkMode ? '🌞' : '🌚'}
        </button>
    )
}
