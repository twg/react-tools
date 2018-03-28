import React from 'react'
import { Link } from 'react-router-dom'
import css from './style.css'
import { Heading } from 'common/components'

const Home = () => (
  <div className={css.container}>
    <Link to="/">
      <Heading>What is this thing?</Heading>
    </Link>
  </div>
)

export default Home
