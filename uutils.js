function UU(selector) {
    const self = {
        element: document.querySelector(selector),
        html: () => self.element,
        on: (event, callback) => {
            self.element.addEventListener(event, callback);
        },
        style: new Proxy({}, {
            get(target, property) {
                if (self.element.style.hasOwnProperty(property)) {
                    return argument => {
                        if (argument) {
                            self.element.style[property] = argument;
                        } else {
                            return self.element.style[property];
                        }
                    }
                }
                throw Error("Property \"" + property + "\" doesn't exist");
            }
        }),
        ajax: (method, url, async) => {
            const xhr = new XMLHttpRequest();
            let response = ""; 
            xhr.open(method, url, async);
            xhr.onload = function (){
                if(this.status === 200){
                   response = JSON.parse(this.responseText);
                };
            }
            xhr.send();
            return response;
        }
    };
    return self;
}