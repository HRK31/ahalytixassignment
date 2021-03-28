import { Component } from "react";
import TableRow from "./TableRow";
import "./views/cointable.css";



class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: [],
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
        this.state.data.splice(20, this.state.data.length);
        console.log(this.state.data);
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <h1>CryptoCurrency Details</h1>
                    <table id="coinTable">
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Name</th>
                                <th>Symbol</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        {data.map(
                            (item, index) => (
                                <TableRow item={item} sno={index + 1}></TableRow>
                            )
                        )}
                    </table>
                </div>
            );
        }
    }

}
export default Table;