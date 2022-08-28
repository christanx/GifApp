import useFetchGif from '../hooks/useFetchGif';
import CategoryGridItem from './CategoryGridItem';
import PropTypes from 'prop-types'

const CategoryGrid = ({ category }) => {
    const { data: images, loading } = useFetchGif(category);

    return (
        <>
            <h3 className='animate__animated animate__fadeInDown'>{category}</h3>
            {
                loading && <span>loading...</span>
            }
            <div className='card-grid'>
                {
                    images.map(img => (
                        <CategoryGridItem key={img.id} {...img} />
                    ))
                }
            </div>
        </>
    )
}

CategoryGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default CategoryGrid
