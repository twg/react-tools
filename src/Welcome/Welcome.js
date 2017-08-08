import React from 'react'
import PropTypes from 'prop-types'

const Welcome = props =>
  <div>
    <h1>Welcome to the React Component Library</h1>
    <p>
      This is a visual library and playground for common components used by
      TWGers that leverages <a href="https://storybook.js.org/">Storybook</a>
    </p>
    <p>
      A story is a single state of one or more UI components. You can have as
      many stories as you want.
      <br />
      (Basically a story is like a visual test case.)
    </p>
    <p>
      This component library is most effective when used hand in hand with TRT,
      which you can find additional documentation for on{' '}
      <a href="https://github.com/twg/react-component-library">
        {' '}our github page
      </a>.
    </p>
    <p>
      Components in this library are typically smaller UI pieces that are very
      agnostic and should be easy to override / customize.
    </p>
    <p>
      Have a look at the{' '}
      <a
        href="https://storybook.js.org/basics/writing-stories"
        target="_blank"
        rel="noopener noreferrer"
      >
        Writing Stories
      </a>{' '}
      section in the storybook documentation for story examples.
    </p>
  </div>

Welcome.displayName = 'Welcome'
Welcome.propTypes = {
  showApp: PropTypes.func
}

Welcome.defaultProps = {
  showApp: () => console.log('Welcome to storybook!')
}

export default Welcome
