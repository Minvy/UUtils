class UU {
    static select(selector){
        const element = document.querySelectorAll(selector);
        const options = {
            html: () => {
                return element;
            },
            on: (event, callback) => {
                element.addEventListener(event, callback);
            },
            hide: () => {
                element.forEach((node) => {
                    node.style.display = "none";
                })
            },
            show: () => {
                element.forEach((node) => {
                    node.style.display = "";
                })
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
    //Can also read files
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
            delete:(url, callback) => {
                xhr.open('DELETE', url, true);
                xhr.onload = () => {
                    if(xhr.status === 200){
                        callback('Success: Object deleted');
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
            },
            put:(url, data, callback) => {
                xhr.open('PUT', url, true);
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