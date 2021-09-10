import React, { FormEventHandler } from 'react'

type TransactionFormProps = {
  handleSubmit(amount: number): void
}
type TransactionFormState = {
  amount: number
}
// React.Component<Props, State>
export class TransactionForm extends React.Component<TransactionFormProps, TransactionFormState> {
  state = {
    amount: 0
  }

  submitTransaction = (e:React.FormEvent) => {
        e.preventDefault()
        this.props.handleSubmit(this.state.amount)
  }

  render() {
    return (
      <form onSubmit={ this.submitTransaction }>
        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {this.setState({ amount: +e.currentTarget.value})}} type="number"></input>

        <button>Submit</button>
      </form>
    )
  }
}