const postData = (url, data) => {
    return fetch(url,{
             method: 'POST',
             headers: {
                'Content-Type': 'application/json',
                "user-agent" : "Example"
             },
             body: JSON.stringify(data),
             cache: "no-cache",
             credentials: "same-origin",
             mode: "cors",
             redirect: "follow",
             referrer: "no-referrer"
           })
               .then(response => response.json())
}

export default postData;