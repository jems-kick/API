import React from 'react';

function View(props) {
    const green =
    {
        background: 'green',
        paddingBottom: '0px',
        paddingTop: '0px',
        fontFamily: 'Trirong',
        fontWeight: 'bold',
        textAlign: "center"
    }
    const red = {
        background: 'red',
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

    const font = {
        fontFamily: 'Roboto',
        fontSize: '35px'
    }

    let sitename;
    if (props.data) {
        sitename = Object.keys(props.data).map((key) => {
            if (props.result[key].detected) {
                if (props.result[key].result != 'clean site') {
                    return (
                        sitename =
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
                    )
                }
            } else {
                if (props.result[key].result != 'clean site') {
                    return (
                        sitename =
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
                    )
                } else {
                    return (
                        sitename =
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
                    )
                }
            }
        })
    } else {
        sitename = <div><h1>Loding...</h1></div>
    }
    return sitename
}

export default View;