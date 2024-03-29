import { renderHook } from '@testing-library/react-hooks';
import useFetchGif from '../../hooks/useFetchGif';

describe('Testing hook useFetchGif', () => {

    test('Debe retornar el estado inicial correctamente', async () => {
        const { result: { current }, waitForNextUpdate } = renderHook(() => useFetchGif('vegeta'));
        await waitForNextUpdate();
        const { data, loading } = current;
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

    test('Debe retornar un arreglo de imagenes y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGif('vegeta'));
        await waitForNextUpdate();
        const { data, loading } = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })
    
})
