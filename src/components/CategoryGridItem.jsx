import React from 'react';
import PropTypes from 'prop-types';

const CategoryGridItem = ({ url, title }) => {
    return (
        <article className='card-grid-item animate__animated animate__fadeInUp'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </article>
    )
}

CategoryGridItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default CategoryGridItem
