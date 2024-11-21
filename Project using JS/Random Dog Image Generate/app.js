let url = "https://dog.ceo/api/breeds/image/random";

let dogImg = document.querySelector(".dog-img");
let generateBtn = document.querySelector(".gen-btn");
let clearBtn = document.querySelector(".clear-btn");

async function getDogImg() {
    try {
        let result = await axios.get(url);
    
        let image = result.data.message;
    
        // Generating Image
        dogImg.src = image;
        console.log(image);

        // Clear Image
        clearBtn.addEventListener("click", () => {
            dogImg.src = "";
        })
    } 
    catch(error) {
        console.log("Error -", error);
    }
}

// getDogImg();

generateBtn.addEventListener("click", async () => {
    getDogImg();

})