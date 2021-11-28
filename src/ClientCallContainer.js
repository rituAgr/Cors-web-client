import React, {useState} from 'react';
import axios, {Axios} from "axios";

const ClientCallContainer = () => {
    const [clientGetResponse, setClientGetResponse] = useState('')
    const [clientPostResponse, setClientPostResponse] = useState('')

    function getClickHandler() {
      const url = "http://localhost:8080/get1";
        axios.get(url)
            .then(response => {
                console.log(response)
                setClientGetResponse(response.data)
                }
            )
    }

    function postClickHandler() {
        const url = "http://localhost:8080/post";

        axios.post(url, { a: "sample post body" })
            .then(response => {
                console.log(response)
                setClientPostResponse(response.data)
            })
    }
    return(
        <div>
            <button onClick={getClickHandler}>GET</button>
            <button onClick={postClickHandler}>POST</button>
            <div>{clientGetResponse}</div>
            <div>{clientPostResponse}</div>
        </div>


    )

}

export default ClientCallContainer;
