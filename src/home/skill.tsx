import React from 'react';

const Skill = ({ children }: React.PropsWithChildren<{}>) => {

    return (
        <p className="hover:scale-105 inline-block px-4 py-2 mr-2 text-yellow-900 bg-yellow-300 rounded-full dark:bg-yellow-400 dark:text-gray-900 shadow-md dark:shadow-slate-800">
            { children }
        </p>
    );
}

export default Skill;