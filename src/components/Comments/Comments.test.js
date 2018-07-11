import React from 'react';
import Comments from './Comments';
import { shallow, mount, render } from 'enzyme'

describe('Testing the <Comments />', () => {
    const comments = {
        1: {
            comment: 'test 1'
        },
        2: {
            comment: 'test 2'
        },
        3: {
            comment: 'test 3'
        }
    }
    const wrapper = shallow(<Comments comments={comments} />)

    it('Renders without crashing', () => {
        expect(wrapper.length).toBe(1)
    })

    it('Count elements correctly', () => {
        expect(wrapper.find('Comment').length).toBe(3)
    })

})
