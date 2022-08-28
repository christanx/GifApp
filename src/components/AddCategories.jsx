import { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategories = ({ setCategories }) => {
    const [searchText, setSearchText] = useState('')

    const handleChange = (e) => setSearchText(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
       
        if (searchText.trim().length && searchText !== '') {
            setCategories(categories => [searchText, ...categories]);
            setSearchText('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input id='search' type="text" placeholder='Search' onChange={handleChange} value={searchText} />
            <input id='searchHidden' type="hidden" value={searchText} />
        </form>
    )
}

AddCategories.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategories
