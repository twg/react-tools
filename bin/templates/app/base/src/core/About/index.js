import React from 'react'
import css from './style.scss'
import spinr from './spinr.png'
import { Toggler } from 'common/components'

const About = () => (
  <div>
    <div className={css.container}>
      <p>
        This is a sample React app that is intended to be used as a reference
        for <span className={css.twg}>TWG</span> projects.
      </p>

      <p>
        It is not, however, meant to be a boilerplate app, in other words, it's
        not intended to be used as a way to scaffold or start new projects.
      </p>

      <p>
        For better or worse, the React ecosystem continues to evolve at a pretty
        rapid clip. For that reason, we feel it would be too much a burden to
        keep a boilerplate project up to date. Instead, use the sample app as a
        working example of how to put into practice the recommendations laid out
        in this repository.
      </p>

      <p>
        You might find bits of config that you want to copy and paste into your
        app, and that's fine too.
      </p>
    </div>

    <Toggler more={<img alt="Fidget Spinner" src={spinr} width="50px" />}>
      Ok?
    </Toggler>
  </div>
)

export default About
