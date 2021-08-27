import React, { Component } from "react";


type HeaderProps = {
    brand: string
}
//React.Component <Props, State>
export class Header extends Component<HeaderProps, {}> {
    render() {
        const { brand } = this.props
        return(
            <nav>
                <h1>{brand}</h1>
            </nav>
        )
    }
}