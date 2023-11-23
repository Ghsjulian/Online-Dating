"use strict";
import __API__ from "./__ghs__.js";
function Selector(tag) {
    return document.querySelector(tag);
}

var book_btn = Selector("#book-btn");

book_btn.onclick = e => {
    e.preventDefault();
    // get all input values
    var name = Selector("#user-name").value.trim();
    var email = Selector("#user-email").value.trim();
    var phone = Selector("#user-phone").value.trim();
    var name = Selector("#user-name").value.trim();
    var select = Selector("#select-person");
    var person = select.options[select.selectedIndex].text;
    var startDate = Selector("#start-date").value;
    var endDate = Selector("#end-date").value;
    // Check The Values
};

__API__.get({
    url: "index.json",
    data: res => {
        console.log(res);
    }
});
