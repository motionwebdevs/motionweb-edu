import React, { useState} from "react";

import TabMenu from "./tab-menu";
import items from "./all-direction-data";
import {Categories} from "./categories";


export const Programs = () => {
    const [menuItems, setMenuItems] = useState(items);
    const filterItems = (category) => {
        if (category === 'all'){
            setMenuItems(items)
            return;
        }
        const newItems = items.filter((item) => item.category === category )
        setMenuItems(newItems)
    }

    return (
        <div className='programs'>
            <div className="container">
                <h1>Окутуу программалары</h1>
                <div className='underline'/>
                <div className="programsContent">
                    <Categories filterItems={filterItems}/>
                    <TabMenu items={menuItems}/>
                </div>
            </div>
        </div>
    )
}
