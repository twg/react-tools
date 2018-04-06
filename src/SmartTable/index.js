import React, { Component } from 'react'
import css from './style.css'
import PropTypes from 'prop-types'

export const Table = ({ children }) => (
  <table className={css.table}>{children}</table>
)

export const TableHead = ({ children }) => (
  <thead className={css.tableHead}>{children}</thead>
)

export const TableBody = ({ children }) => <tbody>{children}</tbody>

export const TableRow = ({ customStyle, checked, children }) => {
  const rowClassNames = [
    css.tableRow,
    customStyle,
    checked ? css.checked : ''
  ].join(' ')

  return <tr className={rowClassNames}>{children}</tr>
}

export const TableData = ({ width, children }) => (
  <td className={css.tableData} style={{ width: width }}>
    {children}
  </td>
)

export class SmartTable extends Component {
  state = {}

  componentDidMount() {}

  render() {
    return <div className={css.smartTable} />
  }
}

SmartTable.propTypes = {}

export default SmartTable
