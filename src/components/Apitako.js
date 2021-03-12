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
            total: '',
            url: '',
        }
    }

    getUserData = async () => {
        const data = await axios.get("https://virus-detected.herokuapp.com/")
        if (data.data) {
            const dataa = data.data.scans
            this.setState({
                data: dataa,
                result: dataa,
            })
        }
        else {
            this.getUserData()
        }
    }

    AppEnginehendler() {
        this.setState({
            data: [],
            result: [],
        })
        const url = this.state.url
        axios.post("https://virus-detected.herokuapp.com/cors", { body: url })
        console.log(url)
        this.setState({
            url: ''
        })
        setTimeout(() => { this.getUserData() }, 10000);
    }

    onUrlChnagehendler = (event) => {
        this.setState({
            url: event.target.value
        })
    }

    render() {
        if (this.state.data) {
            var ForData = <View
                data={this.state.data}
                result={this.state.result}
            ></View>
        }

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