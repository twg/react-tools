import React from 'react'
import styles from './style.css'

const Combo = props => {
  return (
    <div className={getComboClasses(props)}>
      {props.children}
    </div>
  )
}

const ComboFirst = props => {
  return (
    <div className={styles.first}>
      {props.children}
    </div>
  )
}

const ComboLast = props => {
  return (
    <div className={styles.last}>
      {props.children}
    </div>
  )
}

function getComboClasses(props) {
  const classes = [styles.combo]
  if (props.rev) classes.push(styles.rev)
  if (props.middle) classes.push(styles.middle)
  if (props.bottom) classes.push(styles.bottom)
  return classes.join(' ')
}

export { Combo, ComboFirst, ComboLast }
