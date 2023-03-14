const btn =  document.querySelector("button")
console.log(btn)
async function userGenerator(){
    try {
        const response = await fetch("https://randomuser.me/api/1.4")
        const {results:[user]} = await response.json()
        const container = document.querySelector('.container')
        const box = document.querySelector(".box")
        box.innerHTML = `
            <img src="${user.picture.medium}">
            <h1>${user.name.title} ${user.name.first} ${user.name.last}</h1>
            <p>${user.email}</p>
            <p>${user.gender}</p>
            <p>${user.nat}</p>
            <p>${user.cell}</p>
        `
        container.append(box)
        console.log(box)
        console.log(container)
    } catch (error) {
        console.log(error)
    }
}
userGenerator()
btn.addEventListener("click",userGenerator)