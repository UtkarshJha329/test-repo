const tabs = document.querySelector(".tabs")
const btns = document.querySelectorAll(".button")
const articles = document.querySelectorAll(".content")
const images = document.querySelectorAll(".tabimagedead")

articles[0].classList.add("contentlive")
articles[0].classList.remove("content")

btns[0].classList.add("buttonlive")
btns[0].classList.remove("button")

images[0].classList.add("tabimagealive")
images[0].classList.remove("tabimagedead")

tabs.addEventListener('click', (event)=>{


    const id = event.target.dataset.id
    //console.log(id)

    if(id) {
        btns.forEach((btn)=>{
            btn.classList.remove("buttonlive")
            btn.classList.add("button")
        })
        event.target.classList.remove("button")
        event.target.classList.add("buttonlive")

        articles.forEach((article)=>{
            article.classList.remove("contentlive")
            article.classList.add("content")
        })
        const textElement = document.getElementById(id)
        textElement.classList.remove("content")
        textElement.classList.add("contentlive")

        
        images.forEach((image)=>{
            image.classList.remove("tabimagealive")
            image.classList.add("tabimagedead")
        })
        let tabimageele
        tabimageele = document.getElementById(id + "image")
        tabimageele.classList.add("tabimagealive")
        tabimageele.classList.remove("tabimagedead")

    }
})