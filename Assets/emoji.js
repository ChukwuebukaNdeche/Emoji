let closeEmoji = document.querySelector(".closed")
let openEmoji = document.querySelector(".open")

closeEmoji.addEventListener("click",()=>{
    closeEmoji.classList.remove("active")
    openEmoji.classList.add("active")
})

openEmoji.addEventListener("click",()=>{
    openEmoji.classList.remove("active")
    closeEmoji.classList.add("active")
})