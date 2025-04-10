import { createCard } from "./dom.js"
import { artworks, addArtwork } from "./data.js"
import "../styles.css"

const gallery = document.getElementById("gallery")
const addArtworkBtn = document.getElementById("addArtwork")
const clearAllBtn = document.getElementById("clearAll")
const titleInput = document.getElementById("titleInput")
const descInput = document.getElementById("descInput")
const imageUrlInput = document.getElementById("imageUrlInput")

//Эта функция отвечает за обновление карточек ( очищает все и заполняет заново )
export function renderGallery() {
    gallery.innerHTML = ""
    artworks.forEach((art, index) => {
        const card = createCard(art, index)
        gallery.appendChild(card)
    })
}

//Добавить - кнопка
addArtworkBtn.addEventListener("click", () => {
    const title = titleInput.value.trim()
    const description = descInput.value.trim()
    const image = imageUrlInput.value.trim()

    if (!title || !description || !image) {
        alert("Заполните все поля!")
        return
    }

    addArtwork(title, description, image)
    renderGallery()

    titleInput.value = ""
    descInput.value = ""
    imageUrlInput.value = ""
});

// Очистить все кнопка
clearAllBtn.addEventListener("click", () => {
    artworks.length = 0
    renderGallery()
})

renderGallery()
