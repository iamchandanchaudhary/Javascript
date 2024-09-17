    function calSum() {

        function innerFun() {
            console.log("A :", a);
            console.log("B :", b);

            let sum = a + b;
            console.log("Sum :", sum);
        }

        let a = 15;
        let b = 10;

        innerFun();
    }

    console.log("Lexical Scope :- \n");

    calSum();