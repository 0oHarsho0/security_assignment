// const url = "https://api.unsplash.com/photos/random/?client_id=ur_yCmEOeXKJA6QSIznFEcVLoxYa5Weu7D_o_Fx79fI"
// const main = document.getElementById("main");
// let res;
// let arr=[];

// fetchData()
// async function fetchData(){
//     for(let i=0;i<5;i++){
//         try {
//             const response = await fetch(url);
//             const res = await response.json();
//             // return res;
//             console.log(res);
//             if(res.description)
//                 arr.push(res);
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

// console.log(arr);


const url = "https://api.unsplash.com/photos/?client_id=QQiIw_EGknt3EuMFh1jF6v4W5Z_SFnauYzObT9u2oSU"

const main = document.getElementById("main");
let res;

async function fetchData(){
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("Not getting data")
        }
        res = await response.json()
        res = res.slice(0, res.length-1)
        console.log(res)
        res = shuffle2(res)
        // for(let i=0;i<10;i++){
        //     let idx = Math.floor(Math.random()*10)
        //     console.log(res[idx]);
        //         if(idx!=9){
        //             const newDiv = document.createElement('div');

        //         //creating the card title
        //         const newH2 = document.createElement('p')
        //         newH2.innerHTML = res[idx].alt_description.toUpperCase();
        //         newH2.className = 'card--title'
        //         newDiv.appendChild(newH2) //appending card title to the card

        //         //creating the card image
        //         const newImg = document.createElement('img')
        //         newImg.src = res[idx].urls.thumb
        //         newImg.className = "card--img"
        //         newDiv.appendChild(newImg) //appending card img to the card 

        //         //creating the card description
        //         const newP = document.createElement('p')
        //         if(res[idx].description)
        //             newP.innerHTML = res[idx].description;
        //         else
        //             newP.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."; 
        //         newP.className = "card--desc"
                
        //         newDiv.appendChild(newP) //appending card description to the card

        //         newDiv.className = "card"
        //         main.appendChild(newDiv) //appending card to the main container
        //         }
        // }
        res.forEach((e) => {
            // console.log(e)
            // if(e.description){
                const newDiv = document.createElement('div');

                //creating the card title
                const newH2 = document.createElement('p')
                newH2.innerHTML = e.alt_description.toUpperCase();
                newH2.className = 'card--title'
                newDiv.appendChild(newH2) //appending card title to the card

                //creating the card image
                const newImg = document.createElement('img')
                newImg.src = e.urls.thumb
                newImg.className = "card--img"
                newDiv.appendChild(newImg) //appending card img to the card 

                //creating the card description
                const newP = document.createElement('p')
                if(e.description)
                    newP.innerHTML = e.description;
                else
                    newP.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."; 
                newP.className = "card--desc"
                
                newDiv.appendChild(newP) //appending card description to the card

                newDiv.className = "card"
                main.appendChild(newDiv) //appending card to the main container
            // }
        });
        

    } catch(e){
        console.log(e)
    }
}
fetchData();


const arr = [{name:"Harsh"}, {name:"Devang"}, {name:"Hitesh"}, {name:"Prakhar"}]

// isFilled(arr, idx){
//     arr[idx]==0?false:true;
// }
// function shuffle(arr){
//     let arr2 =[];
//     let res = [];
//     for(let i=0;i<arr.length;i++)
//         arr2.push(0);

//     console.log(arr2)

//     while(){
//         radIdx = Math.floor(Math.random()*arr.length);
//         if(!isFilled(arr2, radIdx))
//             res.push(arr[randIdx])
//     }
// }

function shuffle2(arr){
    let currIdx = arr.length, randIdx;

    randIdx = Math.floor(Math.random()*arr.length);

    arr.map((e,index) => {
        if(index+randIdx < currIdx)
            [arr[index] ,arr[index + randIdx]] = [arr[index + randIdx], arr[index]];
    })

    return arr
}

const arr2 = shuffle2(arr)
arr2.forEach(element => {
    console.log(element)
});
// [1,2,3,4,5] ----- [3,4,5,1,2]