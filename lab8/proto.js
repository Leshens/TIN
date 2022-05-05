"use strict";

String.prototype.equals_pl = function (str) {
    if (typeof str === "string" && str.trim() !== "") {
        return (
            this.valueOf() ==
            str
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/\u0142/g, "l")
        );
    }
    return false;
};
/*
console.log(test.equals_pl("żółć"));
console.log(test.equals_pl("Żółć"));
 */