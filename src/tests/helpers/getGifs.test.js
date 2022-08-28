import { getGifs } from "../../helpers/getGifs"


describe('Testing getGifs', () => {

    test('Debe traer 10 elementos', async () => {
        const gifs = await getGifs('Broly');
        expect(gifs.length).toBe(10);
    })

    test('Debe devolver 0 elementos', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
    
})
