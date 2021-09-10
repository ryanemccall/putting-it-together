import React from 'react'
import { BalanceView } from './BalanceView'
import { TransactionForm } from './TransactionForm'
import { TransactionHistory } from './TransactionHistory' 

type CheckingProps = {}
type CheckingState = {
  balance: number,
  transactions: Transaction[]
}

export type Transaction = {
  amount: number,
  type: "Deposit" | "Withdrawl"
}
// React.Component<Props, State>
export class Checking extends React.Component<CheckingProps, CheckingState> {
  constructor(props: CheckingProps){
    super(props)
    this.state = {
      balance: 0,
      transactions: []
    }
    this.updateBalance = this.updateBalance.bind(this)
  }

  updateBalance(amount: number){
    let transaction: Transaction = {
        amount: amount,
        type: amount > 0 ? "Deposit" : "Withdrawl" 
    }

    this.setState({
      balance: this.state.balance + amount,
      transactions: [...this.state.transactions, transaction]
    })
  }

  render() {
    const { balance, transactions } = this.state
    return (
      <>
        <section>
          <BalanceView balance={ balance }/>
          <TransactionForm handleSubmit={this.updateBalance}/>
        </section>
        <section>
          <TransactionHistory transactions={transactions}/>
        </section>
      </>
    )
  }
}