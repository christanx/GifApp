import '@testing-library/jest-dom'
import {shallow} from 'enzyme';
import CategoryGridItem from '../../components/CategoryGridItem';

describe('Testing CategoryGridItem', () => {
    const images = {
        id: 1,
        url: '/',
        title: 'Testing'
    }
    let wrapper = shallow(<CategoryGridItem { ...images } />);

    test('Component successful', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('El parrafo debe tener un titulo', () => {
        const title = wrapper.find('p').text().trim();
        expect(title).toBe(images.title)
    })
    
    test('La imagen debe tener las props src y alt que le corresponda', () => {
        const { src, alt } = wrapper.find('img').props();
        expect(src).toBe(images.url);
        expect(alt).toBe(images.title);
    })

    test('Debe tener la clase animate__fadeInUp', () => {
        const className = wrapper.find('article').prop('className');
        expect(className.includes('animate__fadeInUp')).toBe(true)
    })
    
    
    
})
