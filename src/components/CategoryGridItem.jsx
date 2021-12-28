import React from 'react';

const CategoryGridItem = ({ url, title }) => {
    return (
        <article className='card-grid-item animate__animated animate__fadeInUp'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </article>
    )
}

export default CategoryGridItem
