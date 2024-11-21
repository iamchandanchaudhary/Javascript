    let name = "Chandan"; // Global Scope

    function changeName() { 
        let name = "Aman"; // Function Scope
        console.log("Name :", name);

        function innerName() { 
            console.log("Name :", name); // Lexical Scope
        }

        innerName();
    }

    console.log("Name :", name);
    changeName();