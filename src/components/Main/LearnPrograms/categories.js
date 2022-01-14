import React from 'react';

export  const Categories = ({filterItems}) => {
    return (
        <div className='programsBtn'>
            <button className='filterBtn' onClick={() => filterItems('all')}>
                Бардык багыттар
            </button>
            <button className='filterBtn' onClick={() => filterItems('programming')}>
                Программало
            </button>
            <button className='filterBtn' onClick={() => filterItems('design')}>
                Дизайн
            </button>
            <button className='filterBtn' onClick={() => filterItems('motionDesign')}>
                Моушн дизайн
            </button>
            <button className='filterBtn' onClick={() => filterItems('business')}>
                Бизнес
            </button>
        </div>
    )
};


