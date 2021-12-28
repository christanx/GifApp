import useFetchGif from '../hooks/useFetchGif';
import CategoryGridItem from './CategoryGridItem';

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

export default CategoryGrid
