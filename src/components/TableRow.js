import { Component } from "react";
import RowDetail from "./RowDetail";

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayComponent: false,
        }
        this.execute = this.execute.bind(this);
    }

    execute() {
        this.setState({
            displayComponent: !this.state.displayComponent,
        })
    }

    render() {
        return (

            <tr>
                <td >{this.props.sno}</td>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.symbol}</td>
                <td><a href="#" onClick={this.execute}>Show Details</a>
                    {this.state.displayComponent ? <RowDetail id={this.props.item.id} /> : null}
                </td>
            </tr>


        );
    }
}

export default TableRow;