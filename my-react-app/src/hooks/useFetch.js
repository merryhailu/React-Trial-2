import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [responses, setResponses] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setResponses(data))

    }, []);

    return (
        responses
    )
}

export default useFetch