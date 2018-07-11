import React from 'react';
import Comment from './Comment';
import { shallow, mount, render } from 'enzyme'

describe('Testing the <Comment />', () => {
    const comment = {
        'comment': 'test'
    }

    const wrapper = shallow(<Comment comment={comment} />)
    it('Renders without crashing', () => {
        expect(wrapper.length).toBe(1)
    })

    it('Comment is a Card', () => {
        expect(wrapper.is('.card')).toBe(true)
    })

    it('Content is equal to comment state', () => {
        expect(wrapper.text()).toBe(comment.comment)
    })

})
