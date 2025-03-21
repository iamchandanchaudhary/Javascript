// ==> var datatype
    var x = 10;
    console.log(x); // 10

    var x = 20; // Redeclaration allowed
    console.log(x); // 20

// ==> let datatype
    let y = 10;
    y = 20; // Allowed (reassignment)
    console.log(y); // 20

    // let y = 30; // Error: Cannot redeclare 'y' in the same scope

// ==> const datatype
    const z = 100;
    // z = 200; // Error: Assignment to constant variable
    console.log(z);