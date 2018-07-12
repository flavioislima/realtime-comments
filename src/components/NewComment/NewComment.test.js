import React from 'react';
import NewComment from './NewComment';
import { shallow, mount, render } from 'enzyme'

describe('Testing the <NewComment />', () => {
    const mockFunc = jest.fn()
    const wrapperMount = mount(<NewComment postNewComment={mockFunc} />)
    const wrapperShallow = shallow(<NewComment postNewComment={mockFunc} />)
    const eventMock = {
        keyCode: 13,
        preventDefault: jest.fn()
    }

    it('Renders without crashing', () => {
        expect(wrapperShallow.length).toBe(1)
    })

    it('Test HandleEnter method', () => {
        wrapperMount.instance().refs.comment.value = 'test'
        wrapperMount.instance().handleEnter(eventMock)
        // expect(eventMock.preventDefault.mock.calls.length).toBe(1)
        expect(mockFunc.mock.calls.length).toBe(1)
        expect(wrapperMount.instance().refs.comment.value).toBe('')
        expect(mockFunc.mock.calls[0][0].comment).toBe('test')
    })
})
