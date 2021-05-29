import React from 'react';
import axios from 'axios';
import '../components_style/app.css';
import '../components_style/response.css';
import '../components_style/box.css';
import View from "../components/Render";
import ReactLoading from "react-loading";
const validator = require('validator')



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
            state: '',
            isDone: true,
        }
    }

    getUserData = async () => {
        const data = await axios.get("https://virus-detected.herokuapp.com/")
        if (this.state.url === data.data.resource) {
            const dataa = data.data.scans
            this.setState({
                data: dataa,
                result: dataa,
                isDone: true,
                url: ''
            })
            const clean = []
            axios.post("https://virus-detected.herokuapp.com/", { body: clean })
        }
        else {
            console.log("run again and again")
            this.getUserData()
        }
    }

    AppEnginehendler() {
        this.setState({
            data: [],
            result: [],
            isDone: false
        })
        const url = this.state.url
        if (!validator.isEmpty(this.state.url)) {
            axios.post("https://virus-detected.herokuapp.com/cors", { body: url })
            console.log(url)
            this.getUserData()
        } else {
            console.log("Please enter the URL")
            this.setState({
                isDone: true
            })
        }
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

        const style = {
            margin: "100px"
        }

        return (
            <div>
                <div className="Center">
                    <strong>
                        <input type="text" placeholder="Enetr URL" onChange={this.onUrlChnagehendler}></input>
                    </strong>
                    <div className="btn">
                        <button className="button" onClick={this.AppEnginehendler}>Submi</button>
                    </div>
                    <div>
                        {
                            !this.state.isDone
                                ? (
                                    <div style={style}>
                                        <ReactLoading
                                            type={'balls'}
                                            color={'#009933'}
                                            height={50}
                                        />
                                    </div>
                                ) : (
                                    <div className="users">
                                        {ForData}
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div >
        )
    }
}

export default API;