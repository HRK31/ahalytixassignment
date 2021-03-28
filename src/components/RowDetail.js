import { Component } from "react";


class RowDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            data: []
        };
    }

    componentDidMount() {
        console.log("URL in fetch: ", "https://api.coinpaprika.com/v1/coins/" + this.props.id);
        fetch("https://api.coinpaprika.com/v1/coins/" + this.props.id, {
            method: 'get',
            mode: 'cors'
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    render() {

        console.log('Data: ', this.state.data);
        const { isLoaded, data, error } = this.state;
        const temp = this.state.data;
        if (error) {
            return <div>Error: {error.message}</div>;
        }
        else if (!isLoaded)
            return <div>Loading...</div>;
        return (
            <div>
                <p>{temp.description}<br />
                    <h4>Rank:{temp.rank}</h4>
                    <h4>Is it active?  :    {temp.is_active ? "  YES" : "  NO"}<br /></h4>
                    <h4>Is it new? :   {temp.is_new ? "  YES" : "  NO"}<br /></h4>
                    <h4>Type: {temp.type}<br /></h4>
                    <h4>Type of software: {temp.open_source ? "  Open Source" : "  Closed Source"}<br /></h4>
                    <h4>Teams:</h4>
                    <table id="coinTable">
                        <thead>
                            <tr>
                                <th style={{ backgroundColor: "green" }}>Name</th>
                                <th style={{ backgroundColor: "green" }}>Position</th>
                            </tr>
                        </thead>
                        {temp.team.map((item) => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.position}</td>
                            </tr>
                        ))}
                    </table>
                </p>
            </div>

        )
    }
}

export default RowDetail;