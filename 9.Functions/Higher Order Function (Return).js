    console.log("Higher Order Function (Return) :- ");

    let number = "odd";

    function oddEvenFactory(number) {
        if(number == "odd") {
            let odd = function(n) {
                console.log(!(n % 2 == 0));
            }

            return odd;
        } 
        else if(number == "even") {
            let even = function(n) {
                console.log(n % 2 == 0);
            }

            return even;
        }
        else {
            console.log("Wrong Thing");
        }
    }

    let check = oddEvenFactory(number);
    console.log(check(2));