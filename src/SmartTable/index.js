import React, { Component } from 'react'
import css from './style.css'
import PropTypes from 'prop-types'

export const TableHead = ({ children }) => (
  <thead className={css.tableHead}>{children}</thead>
)

export const TableBody = ({ data }) => (
  <tbody>
    {data.map(val => (
      <TableRow>
        {Object.values(val).map(val => <TableData>{val}</TableData>)}
      </TableRow>
    ))}
  </tbody>
)

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

const SmartTableHeader = ({ val, sortKey, sortAsc, onclick }) => (
  <th onClick={onclick} className={css.tableHead}>
    {val}
    {sortKey === val && !sortAsc && 'v'}
    {sortKey === val && sortAsc && '^'}
  </th>
)

export class SmartTable extends Component {
  state = { data: [], sortAsc: 'desc' }

  sort = sortKey => {
    let newSortAsc = this.state.sortAsc
    if (sortKey === this.state.sortKey) {
      newSortAsc = !newSortAsc
    } else {
      newSortAsc = false
    }

    const newData = this.state.data.sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return -1
      if (a[sortKey] > b[sortKey]) return 1
      return 0
    })

    this.setState({
      data: newSortAsc ? newData.reverse() : newData,
      sortKey,
      sortAsc: newSortAsc
    })
  }

  componentDidMount() {
    this.setState({ data: this.props.data })
  }

  render() {
    const { data, sortKey, sortAsc } = this.state
    const { sort } = this
    return data.length > 0 ? (
      <table className={css.table}>
        <TableHead>
          <TableRow>
            {Object.keys(data[0]).map(val => (
              <SmartTableHeader
                onclick={() => sort(val)}
                sortAsc={sortAsc}
                sortKey={sortKey}
                val={val}
              />
            ))}
          </TableRow>
        </TableHead>
        <TableBody data={data} />
      </table>
    ) : null
  }
}

export const Table = ({ data }) => (
  <table className={css.table}>
    <TableHead>
      <TableRow>
        {Object.keys(data[0]).map(val => <TableData>{val}</TableData>)}
      </TableRow>
    </TableHead>
    <TableBody data={data} />
  </table>
)

SmartTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}

export default SmartTable
