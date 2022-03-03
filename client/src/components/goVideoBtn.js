import React from 'react'
import { useHistory } from "react-router-dom";

export default function GoVideoBtn() {

    let history = useHistory();

    const requestCall = () => {
        history.push("/video")
    }

    return (
        <>
            <button onClick={requestCall}>Request Call</button>
        </>
    )
}
