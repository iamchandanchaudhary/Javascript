function getRandomNum() {
    return new Promise((resolve, rejected) => {
        let num = Math.floor(Math.random() * 10 + 1);
        
        setTimeout( () => {
            console.log("Random Number: ", num);
            resolve();
        }, 1000);
    })
}

async function demo() {
    await getRandomNum();
    await getRandomNum();
    await getRandomNum();
    await getRandomNum();
    await getRandomNum();
    await getRandomNum();

    console.log("Done!");
    return "done!";
}

demo();