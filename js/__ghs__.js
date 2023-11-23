"use strict";

class __Fetch__ {
    constructor() {
        this.name = "Ghs Julian";
        console.log(this.name);
    }
    get(obj) {
        fetch(obj.url)
            .then(res => {
                return res.json();
            })
            .then(response => {
                obj.data(response);
            });
    }
}

var __API__ = new __Fetch__();
export default __API__;
