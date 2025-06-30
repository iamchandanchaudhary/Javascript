    console.log("Default Parameter :- \n");

    // 1st Condition 
    let sum = function(a, b = 3) {
        console.log("Sum :", a + b);
    }

    sum(5);
    sum(4, 2);
    sum(45, 18);
    sum(45, -18);
    sum(-45, 18)
    sum(-45, -18);

    // 2nd Condition
    let add = function(a = 3, b) {
        return a + b;
    }

    add(5); // a = 5, b = undefiend ==> NaN
    add(2, 4); // a = 2, b = 4 ==> 6
    add(); // a = 3, b = undefined ==> NaN

