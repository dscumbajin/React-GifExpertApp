import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategorias }) => {

    const [inputValue, setInputValue] = useState(''); // String vacio
    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setCategorias(cats => [inputValue, ...cats]);
        setInputValue('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputValue}
            />

        </form>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}