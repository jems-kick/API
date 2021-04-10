import React from 'react';
import axios from 'axios';
import '../components_style/app.css';
import '../components_style/response.css';
import '../components_style/box.css';
import Radium, { StyleRoot } from 'radium';
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
            isDone: true
        }
    }

    getUserData = async () => {
        const data = axios.get("http://localhost:4500/")
        if (this.state.url === data.data.resource) {
            const dataa = data.data.scans
            this.setState({
                data: dataa,
                result: dataa,
                isDone: true,
                url: ''
            })
            const clean = []
            axios.post("http://localhost:4500/", { body: clean })
        }
        else {
            console.log("it should run again and again")
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
            axios.post("http://localhost:4500/cors", { body: url })
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
            alignItems: 'center',
            justifyContent: 'center',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            marginTop: '11.5%',
            marginLeft: '35%'
        }
        const style1 = {
            marginTop: '0%',
            marginLeft: '10%'
        }

        return (
            <StyleRoot>
                <div>
                    {
                        !this.state.isDone
                            ? (
                                <div style={style}>
                                    <strong style={{ color: "white", fontSize: "200%" }}>Loading your data...</strong>
                                    <div style={style1}>
                                        <ReactLoading
                                            type={'cylon'}
                                            color={'#009933'}
                                            height={166} width={93}
                                        />
                                    </div>
                                </div>
                            ) : (
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
                            )}
                </div>
            </StyleRoot>
        )
    }
}

export default Radium(API);