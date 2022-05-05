'use strict';

function cached(cache, fun){
    return function recur(n){
        if (cache[n] !== undefined){
            return cache[n];
        }
        return cache[n] = fun(recur, n);
    }
}

//var fibonacci = cached([0, 1], function (recur, n) {
//return recur(n - 1) + recur(n - 2);
//});

// var factorial = cached([1], function (recur, n) {
//     return recur(n - 1) *n;
// });

//console.log(fibonacci(5));
