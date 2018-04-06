import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { checkA11y } from '@storybook/addon-a11y'

import { Toggle } from '../src'
import StoryContainer from './storyContainer'

class ToggleWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.renderChildren = this.renderChildren.bind(this)
  }

  handleChange() {
    this.setState({
      checked: !this.state.checked
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
  const stories = storiesOf('Toggle', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)

  stories
    .add(
      'General Overview',
      withInfo({
        inline: true,
        header: false,
        text: `A toggle component with a slick animation ✨ `
      })(() => {
        return (
          <StoryContainer>
            <Toggle leftLabel="Off" rightLabel="On" />
          </StoryContainer>
        )
      })
    )
    .add(
      'All the props',
      withInfo({
        inline: true,
        text: `In this example you can view and modify all the props, but because the Toggle onChange is controlled by the parent, checking the checkbox won't work here.`
      })(() => {
        return (
          <StoryContainer>
            <Toggle
              leftLabel={text('Left Label', 'Off')}
              rightLabel={text('Right Label', 'On')}
              initialVal={true}
              onToggle={event => alert('changed')}
            />
          </StoryContainer>
        )
      })
    )
}
