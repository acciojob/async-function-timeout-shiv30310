const output = document.getElementById("output")

const userInput = document.getElementById("text")
const delay = document.getElementById("delay")

const submitBtn = document.getElementById("btn")

submitBtn.addEventListener('click', onSubmit);


function resPromise(){
    const text = userInput.value
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve(text)
        }, delay)
    })
}

async function onSubmit(){
    const res = await resPromise()
    return res
}