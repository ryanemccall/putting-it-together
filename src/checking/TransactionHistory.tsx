import React from 'react'

import { Transaction } from './Checking'

type TransactionHistoryProps = {
  transactions: Transaction[]
}
// React.Component<Props, State>
export class TransactionHistory extends React.Component<TransactionHistoryProps, {}> {
  render() {
    const { transactions } = this.props
    return (
        <ul>
          {transactions.map((t, index) => {
            return (
              <li key={index}>
                {`Type:${t.type} ... Amount: ${t.amount}`}
              </li>
            )
          })}
        </ul>
    )
  }
}