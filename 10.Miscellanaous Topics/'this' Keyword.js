    console.log("'this' Keyword in JS :- \n");

    const student = {
        name: "Aman",
        age: 19,
        maths: 92,
        english: 94,
        physics: 91,
        chemistry: 90,
        biology: 100,

        getAvg() {
            console.log(this);
            let avg = (this.maths + this.english + this.physics + this.chemistry + this.biology) / 5;
            console.log("Average Marks :", avg);
        }
    }

    student.getAvg();

    function thisKey() {
        console.log(this);
    }

    thisKey();