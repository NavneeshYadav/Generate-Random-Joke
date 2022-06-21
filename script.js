const jokes = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

//With the help of promises.
// const generateJokes=()=>{
//     const setHeader={
//         headers:{
//             Accept: "application/json"
//         }
//     }
//     fetch("https://icanhazdadjoke.com",setHeader)   this part returns promises
//.then((res) => res.json())     //this part get the promises.
//.then((data)=>{jokes.innerHTML=data.joke; 
//}).catch((error) => {          //agr error hota hai to catch karta ye wala part 
//         console.log(error);   
//     })
// }

//async -await with error handling (try-catch)

const generateJokes=async ()=>{
   try{
    const setHeader={
        headers:{
            Accept: "application/json"
        }
    }
 const res= await fetch("https://icanhazdadjoke.com",setHeader);
 const data= await res.json();
 jokes.innerHTML=data.joke; 
   }catch(err){
    console.log(`the error is ${err}`);
   }
}
jokeBtn.addEventListener("click", generateJokes);
generateJokes();
