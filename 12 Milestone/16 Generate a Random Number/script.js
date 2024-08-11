// Random Number Generator using Self Invoking Function


// Named Self-Invoking Function
(function generate(){

    let generate = Math.random();  // value = [0,1)
    let result = generate*100;     // Increasing range to [0, 100)
    console.log( "Random Number :- " + result);

})();



