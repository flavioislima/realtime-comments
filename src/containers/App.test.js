import React from 'react';
import App from './App';
import { shallow, mount, render } from 'enzyme'

//On MacOsX we had to install watchman (brew install watchman) to jest to works

describe('Testing the <App />', () => {
  //Mocking the firebase tests
  const base = {
    syncState: jest.fn()
  }

  const wrapper = shallow(<App base={base} />)

  it('Renders without crashing', () => {
    expect(wrapper.length).toBe(1)
  })
  it('Should have a .container class', () => {
    expect(wrapper.is('.container')).toBe(true)
  })
  it('Shows the Comments', () => {
    expect(wrapper.find('Comments').length).toBe(1)
  })
  it('Shows the NewComment', () => {
    expect(wrapper.find('NewComment').length).toBe(1)
  })
});

describe('Testing Methods in <App />', () => {
  const base = {
    syncState: jest.fn()
  }
  const wrapper = mount(<App base={base} />)
  it('Adds a new comment with postNewComment method', () => {
    wrapper.instance().postNewComment({ comment: 'testing 1' })
    wrapper.instance().postNewComment({ comment: 'testing 2' })
    wrapper.instance().postNewComment({ comment: 'testing 3' })
    //creating and array with the testing comments
    const comments = Object.keys(wrapper.instance().state.comments)
    //Logging the comments
    //console.log(wrapper.instance().state)
    expect(comments.length).toBe(3)
  })
})

