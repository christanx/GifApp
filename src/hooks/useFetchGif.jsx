import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

const useFetchGif = (category) => {
    const [state, setstate] = useState({ data: [], loading: true });

    useEffect(() => {
        getGifs(category)
        .then(images => {
            setstate({
                data: images,
                loading: false
            })
        })
    }, [category])

    return state;
}

export default useFetchGif
