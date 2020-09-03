import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategoryComponent = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInput = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cate => [inputValue, ...cate]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleInput}></input>
            <button type="submit">Añadir</button>
        </form>
    )
}

AddCategoryComponent.propTypes = {
    setCategories: PropTypes.func.isRequired
};