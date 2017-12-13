/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import cases from 'jest-in-case'
import { Truncate } from './'

describe('Truncate', () => {
  cases(
    'matches snapshots',
    opts => {
      expect(
        renderer
          .create(
            <Truncate>
              "The quick brown fox jumps over the lazy dog" is an
              English-language pangram—a sentence that contains all of the
              letters of the alphabet. It is commonly used for touch-typing
              practice, testing typewriters and computer keyboards, displaying
              examples of fonts, and other applications involving text where the
              use of all letters in the alphabet is desired. Owing to its
              brevity and coherence, it has become widely known.
            </Truncate>
          )
          .toJSON()
      ).toMatchSnapshot()
    },
    [
      { name: 'basic', props: {} },
      { name: 'inline', props: { inline: true } },
      { name: 'custom truncate point', props: { length: 10 } },
      { name: 'custom fudge factor', props: { fudgeFactor: 1.5 } }
    ]
  )
})
