# UUtils

**U**seless **U**tils is my attempt at recreating various quality of life functionalities of jQuery into a more light weight format.
Currently contains: DOM selectors, DOM styles, DOM events.

# How to use: 
Selector works like jQuery = UU('.className') selects all elements of said class name

# Functions

### .html()
* param none
* return HTML collection with selected element
* example: ```UU('.className').html()```

### .on(event, function)
* @param event = string of an event type eg: "click"
* @param function = reference to a function to be executed upon event invocation
* @return none
* @example: ```UU('.className').on('click', event => { console.log(event.target) })```

### ajax(method, url, async)
* @param method = HTML request method eg 'GET'
* @param url = URL link to api
* @param async = boolean that determines synchronisation
* @return JSON/XML object
* @example: ```UU().ajax('GET','data.json',false)```


# Objects

### .style
* @example: ```UU('#idName').style.border("1px solid blue")```