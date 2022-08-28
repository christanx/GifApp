import '@testing-library/jest-dom';
import { shallow } from "enzyme"
import CategoryGrid from "../../components/CategoryGrid"
import useFetchGif from "../../hooks/useFetchGif";
jest.mock("../../hooks/useFetchGif");


describe('Testing <CategoryGrid />', () => {
    const category = 'Goku';

    test('Component successful', () => {
        useFetchGif.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<CategoryGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('El useFetchGif debe retornar items', () => {
        const gifs = [
            {
                id: '01',
                url: 'http://localhost',
                title: 'testing'
            },
            {
                id: '02',
                url: 'http://localhost',
                title: 'testing'
            }
        ]
        
        useFetchGif.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<CategoryGrid category={category} />);
        expect(wrapper).toMatchSnapshot();

        const boxLoading = wrapper.find('span').exists();
        expect(boxLoading).toBe(false);

        const gridItems = wrapper.find('CategoryGridItem');
        expect(gridItems.length).toBe(gifs.length)
    })
    
    
})
