import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import AddCategories from "../../components/AddCategories"


describe('Testing <AddCategories />', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategories setCategories={setCategories}/>);
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategories setCategories={setCategories}/>);
    });

    test('Component successful', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe cambiar la caja de texto "input"', () => {
        const input = wrapper.find('#search');
        const value = "Hello world";
        input.simulate('change', { target: { value } });
        const textInput = wrapper.find('#searchHidden').prop('value').trim();
        expect(textInput).toBe(value);
    })
    
    // test('No debe enviar ninguna información con submit', () => {
    //     wrapper.find('form').simulate('submit', { preventDefault: () => {} })
    //     expect(setCategories).not.toHaveBeenCalled();
    // })

    test('Debe ejecutar el setCategories y limpiar la caja de texto', () => {
        const input = wrapper.find('#search');
        const value = "Hello christian !!!😂";
        input.simulate('change', { target: { value } });

        wrapper.find('form').simulate('submit', { preventDefault: () => {} });
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('#search').prop('value')).toBe('');
    })
    
    
})
