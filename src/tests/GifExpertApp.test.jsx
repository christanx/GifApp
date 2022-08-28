import { shallow } from "enzyme"
import GifExpertApp from "../GifExpertApp"


describe('Testing <GifExpertApp />', () => {

    test('Component successful', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe mostrar las categorias en la grid', () => {
        const categories = ['goku', 'broly'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
        expect(wrapper).toMatchSnapshot();
    })
    
    
})
