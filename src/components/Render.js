import React from 'react';
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";
import '../components_style/response.css';
import '../components_style/app.css'

function View(props) {
    const green =
    {
        background: '#20B2AA',
        paddingBottom: '0px',
        paddingTop: '0px',
        fontFamily: 'Trirong',
        fontWeight: 'bold',
        textAlign: "center"
    }
    const red = {
        background: '#E50305',
        paddingBottom: '0px',
        paddingTop: '0px',
        fontWeight: 'bold',
        textAlign: "center"
    }
    const yellow = {
        background: 'yellow',
        paddingBottom: '0px',
        paddingTop: '0px',
        fontWeight: 'bold',
        textAlign: "center"
    }

    const blue = {
        background: '#2C5E8D',
        paddingBottom: '0px',
        paddingTop: '0px',
        fontWeight: 'bold',
        textAlign: "center"
    }

    const font = {
        fontFamily: 'Roboto',
        fontSize: '35px'
    }

    let sitename;
    if (props.data) {
        sitename = Object.keys(props.data).map((key) => {
            if (props.result[key].detected) {
                if (props.result[key].result !== 'clean site') {
                    return (
                        sitename =
                        <Zoom>
                            <div key={key} style={red} className="users">
                                <h3 style={font}>
                                    {key}
                                </h3>
                                <p>
                                    Result : {props.result[key].result}
                                </p>
                                <p>
                                    Detected : {props.result[key].detected ? "Yes" : "No"}
                                </p>
                            </div>
                        </Zoom>
                    )
                }
            } else {
                if (props.result[key].result !== 'clean site') {
                    if (props.result[key].result == 'suspicious site') {
                        return (
                            sitename =
                            <Zoom>
                                <div key={key} style={blue} className="users">

                                    <h3 style={font}>
                                        {key}
                                    </h3>
                                    <p>
                                        Result : {props.result[key].result}
                                    </p>
                                    <p>
                                        Detected : {props.result[key].detected ? "Yes" : "No"}
                                    </p>
                                </div>
                            </Zoom>
                        )
                    } else {
                        return (
                            sitename =
                            <Zoom>
                                <div key={key} style={yellow} className="users">

                                    <h3 style={font}>
                                        {key}
                                    </h3>
                                    <p>
                                        Result : {props.result[key].result}
                                    </p>
                                    <p>
                                        Detected : {props.result[key].detected ? "Yes" : "No"}
                                    </p>
                                </div>
                            </Zoom>
                        )
                    }

                } else {
                    return (
                        sitename =
                        <Flip right cascade>
                            <div key={key} style={green} className="users">
                                <h3 style={font}>
                                    {key}
                                </h3>
                                <p>
                                    Result : {props.result[key].result}
                                </p>
                                <p>
                                    Detected :  {props.result[key].detected ? "Yes" : "No"}
                                </p>
                            </div>
                        </Flip>
                    )
                }
            }
        })
    } else {
        sitename = <div><h1>Loding...</h1></div>
        View()
    }
    return sitename
}

export default View;