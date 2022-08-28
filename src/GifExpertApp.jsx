import { useState } from 'react'
import AddCategories from './components/AddCategories';
import CategoryGrid from './components/CategoryGrid';

const GifExpertApp = ({ defaultCategories = ['Spiderman'] }) => {
    const [categories, setCategories] = useState(defaultCategories);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategories setCategories={setCategories} />
            <hr />
            <ul>
            {
                categories.map(category => (
                    <CategoryGrid key={category} category={category}/>
                ))
            }
            </ul>
            
        </>
    )
}

export default GifExpertApp
