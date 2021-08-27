
import React, { Component } from "react";
import { BalanceView } from "./BalanceView";
import { TransactionForm } from "./TransactionForm";
import { TransactionHistory } from "./TransactionHistory";


//React.Component <Props, State>
export class Checking extends Component {
    render() {
        return(
            <>
            <section>
                    <BalanceView />
                    <TransactionForm />
            </section>
            <section>
                <TransactionHistory />
            </section>

        </>
        )
    }
}