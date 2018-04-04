import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { checkA11y } from '@storybook/addon-a11y'

import { Radio } from '../src'
import StoryContainer from './storyContainer'

class RadioWrapper extends Component {
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
  const stories = storiesOf('Radio', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)

  stories
    .add(
      'General Overview',
      withInfo({
        inline: true,
        text: `A checkbox. The props value and onChange are required!`
      })(() => {
        return (
          <StoryContainer>
            <Radio
              id={text('id', 'sample_id')}
              label={text('label', 'Example Label')}
            />
          </StoryContainer>
        )
      })
    )
    .add(
      'All the props',
      withInfo({
        inline: true,
        text: `In this example you can view and modify all the props, but because the Radio onChange is controlled by the parent, checking the checkbox won't work here.`
      })(() => {
        return (
          <StoryContainer>
            <Radio
              id={text('id', 'sample_id')}
              label={text('label', 'Example Label')}
              checked={boolean('checked', false)}
              onChange={event => alert(event.target.checked)}
            />
          </StoryContainer>
        )
      })
    )
}
