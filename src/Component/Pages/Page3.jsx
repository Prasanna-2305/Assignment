import React, { Component } from 'react'

export default class Page3 extends Component {
    state = {
        Hayabusa: false,
        Mt15: false,
        Pulsar: false,
        RoyalEnfield: false
    }
    onChange = e => {
        if (e.target.type === "checkbox")
            this.setState({ [e.target.name]: e.target.checked })
        else
            this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { Hayabusa, Mt15, Pulsar, RoyalEnfield } = this.state;
        return (
            <div>
                <center>
                    <h1>Bike purchased :</h1><br />
                    <form>
                        <h1>Hayabusa: {Hayabusa ? "yes" : "no"}</h1>
                        <h1>Mt15: {Mt15 ? "yes" : "no"}</h1>
                        <h1>Pulsar: {Pulsar ? "yes" : "no"}</h1>
                        <h1>RoyalEnfield: {RoyalEnfield ? "yes" : "no"}</h1><br /><br />
                        <label>
                            Hayabusa :
                            <input type="checkbox"
                                name="Hayabusa"
                                checked={Hayabusa}
                                onChange={this.onChange} />
                        </label><br />
                        <label>
                            Mt15 :
                            <input type="checkbox"
                                name="Mt15"
                                checked={Mt15}
                                onChange={this.onChange} />
                        </label><br />
                        <label>
                            Pulsar :
                            <input type="checkbox"
                                name="Pulsar"
                                checked={Pulsar}
                                onChange={this.onChange} />
                        </label><br />
                        <label>
                            RoyalEnfield :
                            <input type="checkbox"
                                name="RoyalEnfield"
                                checked={RoyalEnfield}
                                onChange={this.onChange} />
                        </label>
                    </form>
                </center>
            </div>
        )
    }
}
