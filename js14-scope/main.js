var i = 5;

// var func = function() {
//     var i = 10;
//     console.log(i);
//     var innerFunc = function() {
//         var i = 15;
//         console.log(i);
//     };
//     innerFunc();
// };

//--Histing--

var func = function() {
    var i = 10;
    console.log(i);
    var innerFunc = function() {
        console.log(i); // return undefined!
        // it´s like if was defined var i; before console.log 
        var i = 15;
    };
    innerFunc();
};

func();