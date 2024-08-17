    console.log("String Method(Trim) :- \n");

    let name = "   Chandan   ";

    // trim method remove Spaces from both side
    console.log("Trim Method : " + name.trim());

    // name = name.trim();
    // console.log("Normal Method : " + name);

    // but not effect on Original String
    console.log("Normal Method : " + name);


    let passward = prompt("Enter your passward : ");
    let modifiedPass = passward.trim();

    console.log("Normal Passward : " + passward);
    console.log("Modified Passward : " + modifiedPass);

