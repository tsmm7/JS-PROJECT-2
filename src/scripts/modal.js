import { artworks } from "./data.js"
import { renderGallery } from "./main.js"

const modal = document.getElementById("editModal")
const closeModalBtn = document.querySelector(".close")
const editTitle = document.getElementById("editTitle")
const editDescription = document.getElementById("editDescription")
const editImageUrl = document.getElementById("editImageUrl")
const saveEditBtn = document.getElementById("saveEdit")

//чтоб модальное окно могло понять к кому обращаться я сделал способ через индекс
let currentIndex = null

export function openEditModal(index) {
    currentIndex = index
    const art = artworks[index]

    editTitle.value = art.title
    editDescription.value = art.description
    editImageUrl.value = art.image

    modal.style.display = "flex"
}

function closeModal() {
    modal.style.display = "none"
}

closeModalBtn.addEventListener("click", closeModal)

//Для закрытия модалки по кнопке ESC
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal()
    }
})

saveEditBtn.addEventListener("click", (event) => {
    event.preventDefault()

    if (currentIndex !== null) {
        artworks[currentIndex].title = editTitle.value
        artworks[currentIndex].description = editDescription.value
        artworks[currentIndex].image = editImageUrl.value
                
        renderGallery()
    }
    
    closeModal()
})
