
let display = document.querySelector("input");
let button = document.querySelectorAll(".button1");
let string = "";


button.forEach((click)=>{
    click.addEventListener('click', (e)=>{

        let value = e.target.innerText;
        if(value === "="){
           string = eval(string);
            display.value=string;
        }
        else if(value === "AC"){
            string = "";
            display.value = string;
        }
        else if(value === "C"){
            string = string.slice(0,-1);
            display.value = string;
        }
        else{
            string = string + value;
            display.value = string ;
        }

    })
})
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        string = eval(string);
        display.value = string;
    }
    else if (e.key === "Backspace") {
        string = string.slice(0, -1);
        display.value = string;
    }
    else if (e.key === "Escape") {
        string = "";
        display.value = string;
    }
    else if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
        string += e.key;
        display.value = string;
    }
    else if (!isNaN(e.key)) {
        string += e.key;
        display.value = string;
    }
})




// let displayAnswer = document.querySelectorAll(".answer");
//     let question = document.querySelectorAll(".question");
//     let add = document.querySelectorAll(".ri-add-line");
//     let clickin = 0;
    // question.forEach((quest) =>{
    //     quest.addEventListener("click",()=>{
    //         if (clickin == 0) {
    //             question.forEach((quest)=>{
    //                 quest.style.backgroundColor = "#8888";
    //             });
    //             displayAnswer.forEach((ans)=>{
    //                 ans.style.display = "block";
    //             });
    //             add.forEach((plus)=>{
    //                 plus.style.transform = "rotate(45deg)";
    //             });
    //             clickin = 1;
    //         }
    //         else {
    //             question.forEach((quest)=>{
    //                 quest.style.backgroundColor = "#3838383";
    //             });
    //             displayAnswer.forEach((ans)=>{
    //                 ans.style.display = "none";
    //             });
    //             add.forEach((plus)=>{
    //                 plus.style.transform = "rotate(0deg)";
    //             });
    //             clickin = 0;
    //         }
    //     })
    // })




























// button.forEach((click)=>{
//     click.addEventListener("click",(input)=>{
//         let valuee = input.target.innerText;
//         if(valuee === "="){
//             string = eval(string);
//             display.value = string;
//         }
//         else if(valuee === "AC"){
//             string = "";
//             display.value=string;
//         }
//         else if(valuee === "C"){
//             string = string.slice(0,-1);
//             display.value = string;
//         }
//         else{
//             string += valuee;
//             display.value = string;
//         }
//     })
// })

// document.addEventListener("keydown", (e) => {
//     if (e.key === "Enter") {
//         string = eval(string);
//         display.value = string;
//     }
//     else if (e.key === "Backspace") {
//         string = string.slice(0, -1);
//         display.value = string;
//     }
//     else if (e.key === "Escape") {
//         string = "";
//         display.value = string;
//     }
//     else if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
//         string += e.key;
//         display.value = string;
//     }
//     else if (!isNaN(e.key)) {
//         string += e.key;
//         display.value = string;
//     }
// })




























// let display = document.querySelector("input");
// let button = document.querySelectorAll(".button1");
// let string = "";

// button.forEach((click)=>{
//     click.addEventListener("click",(clicks)=>{
//         let click = clicks.target.innerText;
//         if(click === "="){
//             display.value=eval(string);
//         }
//         else if(click === "AC")
//         {
//             string = "";
//             display.value= string;
//         }
//         else if(click === "C")
//         {
//             string = string.slice(0,-1);
//             display.value =  string;
//         }
//         else
//         {
//             string = string + click;
//             display.value = string;
//         }
//     })

// })


// let display = document.querySelector("input");
// let button = document.querySelectorAll(".button1");
// let string = "";

// button.forEach((click)=>{
//     click.addEventListener('click', (ee) => {
//         let e = ee.target.innerText;
//         if(e === "="){
//             string = eval(string)
//             display.value = string;
//         }
//         else if(e === "AC"){
//             string = "";
//             display.value = string;
//         }
//         else if(e === "C"){
//             string = string.slice(0,-1)
//             display.value = string;
//         }
//         else{
//             string = string + e;
//             display.value = string;
//         }
//     })
// })