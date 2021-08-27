import { Component } from "react";
import { TransactionHistory } from "./TransactionHistory";

type TransactionFormProps = {
    handleSubmit(amount: number): void
}
export class TransactionForm extends Component <TransactionFormProps, {}> {
    render() {
        const { handleSubmit } = this.props

        return(
            <form onSubmit={(e) => {
                e.preventDefault()
                handleSubmit(100)}}>
                <button>Submit</button>
            </form>
        )
    }
}