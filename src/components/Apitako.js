import React from 'react';
import axios from 'axios';
import '../components_style/app.css';
import '../components_style/response.css';
import '../components_style/box.css';
import Radium, { StyleRoot } from 'radium';
import View from "../components/Render";

class API extends React.Component {
    constructor(props) {
        super(props);

        this.onUrlChnagehendler = this.onUrlChnagehendler.bind(this)
        this.AppEnginehendler = this.AppEnginehendler.bind(this)

        this.state = {
            data: [],
            result: [],
        }
    }

    getUserData = async () => {
        try {
            const data = await axios.get(
                "https://www.virustotal.com/vtapi/v2/url/report",
                {
                    params:
                    {
                        'apikey': 'ff02e67ab0c13c9967eb18f2d685a16e2ec6f064b3ed8d7a7d76d5d586f201d5',
                        'resource': this.state.url
                    }
                })
            return data
        } catch (err) {
            console.log(err)
        }
    }

    async AppEnginehendler() {
        this.setState({
            data: [],
            result: [],
        })
        const userdata = await this.getUserData();
        const data = userdata.data.scans

        this.setState({
            data: data,
            result: data,
        })
    }

    onUrlChnagehendler = (event) => {
        this.setState({
            url: event.target.value
        })
    }

    render() {
        const ForData = <View
            data={this.state.data}
            result={this.state.result}
        ></View>

        return (
            <StyleRoot>
                <div className="Center">
                    <strong>
                        <input type="text" placeholder="Enetr URL" onChange={this.onUrlChnagehendler}></input>
                    </strong>
                    <div className="btn">
                        <button className="button" onClick={this.AppEnginehendler}>Submit</button>
                    </div>
                    <div className="users">
                        {ForData}
                    </div>
                </div>
            </StyleRoot>
        )
    }
}

export default Radium(API);