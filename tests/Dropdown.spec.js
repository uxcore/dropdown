import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-14';
import Dropdown from '../src';

Enzyme.configure({ adapter: new Adapter() });

describe('Dropdown', () => {
    it('has correct propTypes', () => {
        expect(Dropdown.propTypes.trigger).to.be(PropTypes.array);
        expect(Dropdown.propTypes.overlay).to.be(PropTypes.node);
        expect(Dropdown.propTypes.onVisibleChange).to.be(PropTypes.func);
        expect(Dropdown.propTypes.visible).to.be(PropTypes.bool);
    })   
    
    it('trigger click event', () => {
        const menu = <div />;
        const wrapper = mount(
            <Dropdown overlay={menu} trigger={['click']}> 
                <div className="click-btn">点击触发</div>
            </Dropdown>
        );
        wrapper.find('.click-btn').simulate('click')
        expect(Array.prototype.slice.call(document.getElementsByClassName('kuma-dropdown'))).to.have.length(1)
    })
});