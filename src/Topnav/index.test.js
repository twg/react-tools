/* eslint-env jest */
import React from 'react'
import { TopNav } from './'
import renderer from 'react-test-renderer'

describe('TopNav', () => {
  it('matches snapshot', () => {
    let component = renderer.create(
      <div
        style={{
          height: '300px',
          maxWidth: '740px',
          width: '100%',
          border: '1px solid grey'
        }}
      >
        <TopNav
          left={
            <img
              src="https://twg.io/954c24bb4bbfe909730f85f6c55c8e9e.svg"
              width="175px"
            />
          }
          center={<h4>Page Title</h4>}
          links={['item', 'item2', 'item2', 'item2', 'item2']}
          right={
            <img
              class="avatar js-action-profile-avatar"
              src="https://pbs.twimg.com/profile_images/608742547272290304/vl4pXqqG_bigger.png"
              style={{ borderRadius: '50%', height: '58px' }}
              alt=""
            />
          }
        />
      </div>
    )

    expect(component.toJSON()).toMatchSnapshot()
  })
})
