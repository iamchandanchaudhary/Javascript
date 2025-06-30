    let name = "Chandan"; // Global Scope  ==>  Can access from Enywhere in the code

    function changeName() { 
        let name = "Aman"; // Function Scope  ==> access only in the function
        console.log("Function Name :", name);

        function innerName() { 
            console.log("Lexical Name :", name); // Lexical Scope  ==> take the variable of thr outside function 
                                                // but outside function cat't do this from the inside function
        }

        innerName();
    }

    console.log("Global Name :", name);
    changeName();

    // Block scope
    {
        var number1 = 18;
        let number2 = 19; // block scope ==> can't be access outside the block
        const number3 = 21; // block scope
    }

    console.log("Block Number:", number1); // ==> Variable that is declere using 'var' can be access from outside the block
    