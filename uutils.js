class UU {
    static select(selector){
        const element = document.querySelector(selector);
        const options = {
            on: (event, callback) => {
                element.addEventListener(event, callback);
            },
            style: new Proxy({}, {
                get(target, property) {
                    if (element.style.hasOwnProperty(property)) {
                        return argument => {
                            if (argument) {
                                element.style[property] = argument;
                            } else {
                                return element.style[property];
                            }
                        }
                    }
                    throw Error("Property \"" + property + "\" doesn't exist");
                }
            }),
        };
        return options;
    }
    static ajax = () => {
        const xhr = new XMLHttpRequest();
        const options = {
            get:(url, callback) => {
                xhr.open('GET', url, true);
                xhr.onload = () => {
                    if(xhr.status === 200){
                        callback(JSON.parse(xhr.responseText));
                    }else{
                        callback('Error: ' + xhr.status);
                    };
                }
                xhr.send();
            },
            post:(url, data, callback) => {
                xhr.open('POST', url, true);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.onload = () => {
                    console.log(xhr.responseText);
                }
                xhr.send(JSON.stringify(data));
            }
        }
        return options;
    }
}