    console.log("Nested For of Loop :- \n");

    let names = [ ["Aman", "Chandan", "Ayush"], ["Deepanshu", "Dev", "Harshit"] ];

    for(list of names) {
        console.log(list);
    }

    for(list of names) {
        for(name of list) {
            console.log(name);
        }
    }