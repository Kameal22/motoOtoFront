const rawToken = window.localStorage.getItem('userToken')

function getRawJwt() {
    console.log(rawToken);
}

function getParsedJwt(rawToken) {
    var base64Url = rawToken.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

function getUsersId(rawToken) {
    var base64Url = rawToken.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const parsedToken = JSON.parse(jsonPayload);

    const userId = parsedToken.id;

    return JSON.parse(userId);
}

getUsersId(rawToken);

function checkIfExpired(rawToken) {
    var base64Url = rawToken.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const objectToken = JSON.parse(jsonPayload);

    const tokenExp = new Date(objectToken.exp * 1000)

    const actualDate = new Date();

    if (tokenExp > actualDate) {
        console.log('Not expired')
    } else {
        console.log('Expired');
    }

    return JSON.parse(jsonPayload);
}