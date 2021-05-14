export const getSomething = (onSuccess) => {
    const promise = fetch('https://22.javascript.pages.academy/code-and-magick/data');
    promise.then((res) => {
        return res.json();
    })
    .then((data) => {
        onSuccess(data);
    })
    .catch((error) => {})
}

export const sendData = (data, onSuccess, onError) => {
    const promise = fetch('https://22.javascript.pages.academy/code-and-magi', {
        method: 'POST',
        body: data
    });
    
    promise.then((res) => {
        if (res.ok) {
            onSuccess(res);
        } else {
            throw new Error(`Error: ${res.status} - ${res.statusText}`)
        }
    })
    .catch((error) => {
        onError(error)
    })
}
