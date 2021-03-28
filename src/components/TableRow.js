import { Component } from "react";

class TableRow extends Component {
    render() {
        return (

            <tr>
                <td>{this.props.item.id}</td>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.symbol}</td>
            </tr>

        );
    }
}

export default TableRow;