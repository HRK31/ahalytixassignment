import { Component } from "react";
import TableRow from "./TableRow";


class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: []
        };
    }

    componentDidMount() {

        fetch("https://api.coinpaprika.com/v1/coins/", {
            method: 'GET',
            mode: 'cors'
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
        //console.log('Data: ', this.state.data);
    }

    render() {
        const { error, isLoaded, data } = this.state;
        this.state.data.splice(11, this.state.data.length);
        console.log(this.state.data);
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <h1>Coin Details</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Symbol</th>
                            </tr>
                        </thead>
                        {data.map((item) => (
                            <TableRow item={item}></TableRow>
                        ))}
                    </table>
                </div>
            );
        }
    }

}
export default Table;