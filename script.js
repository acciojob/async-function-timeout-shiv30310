//your JS code here. If required.
const output = document.getElementById("output")

const userInput = document.getElementById("text")
const delay = document.getElementById("delay")

const submitBtn = document.getElementById("btn")

submitBtn.addEventListener('click', onSubmit);

function onSubmit(){
    return new Promise(resolve => {
        setTimeout(()=>{
            output.innerText = userInput.value
        }, delay)
        submitBtn.removeEventListener('click', onSubmit);
    })

}
