    console.log("Set Timeout Problem :- \n");

    const object = {
        massage : "Chandan Chaudhary",

        logMassage() {
            console.log(this.massage);
        }
    }

    object.logMassage();

    setTimeout(object.logMassage, 1000);