import React, { useState } from 'react';
import { AddCategoryComponent } from './addcategorycomponent';
import { GifGridComponent } from './gifgridcomponent';

export const GifExpertComponent = () => {

    const [categories, setCategories] = useState(['Naruto']);
    
    // const handleAdd = () => {
    //     setCategories(categories.concat('Dragon Ball Z'));
    //     // setCategories(...categories, 'Dragon Ball Z');
    //     // setCategories(cate => [...cate, 'Dragon Ball Z']);
    // };

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategoryComponent setCategories={setCategories}/>
            <hr></hr>
            <ul>
                {
                    categories.map(category => {
                        return <GifGridComponent key={category} category={category}/>
                    })
                }
            </ul>
        </div>
    );
};