import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import { Checkbox } from '../src'
import StoryContainer from './storyContainer'

class CheckboxWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.renderChildren = this.renderChildren.bind(this)
  }

  handleChange(value) {
    this.setState({
      checked: value
    })
  }

  renderChildren() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        checked: this.state.checked,
        onChange: this.handleChange
      })
    })
  }

  render() {
    return <div>{this.renderChildren()}</div>
  }
}

export default function() {
  const stories = storiesOf('Checkbox', module)
  stories.addDecorator(withKnobs)
  stories
    .addWithInfo(
      'General Overview',
      `A checkbox. The props value and onChange are required! `,
      () => {
        return (
          <StoryContainer>
            <CheckboxWrapper>
              <Checkbox
                id={text('id', 'sample_id')}
                disabled={boolean('disabledValue', false)}
                label={text('label', 'Example Label')}
              />
            </CheckboxWrapper>
          </StoryContainer>
        )
      },
      { inline: true }
    )
    .addWithInfo(
      'All the props',
      `In this example you can view and modify all the props, but because the Checkbox onChange is controlled by the parent, checking the checkbox won't work here.`,
      () => {
        return (
          <StoryContainer>
            <Checkbox
              id={text('id', 'sample_id')}
              disabled={boolean('disabledValue', false)}
              label={text('label', 'Example Label')}
              value={boolean('checked', false)}
              onChange={event => alert(event.target.checked)}
            />
          </StoryContainer>
        )
      },
      { inline: true }
    )
}
