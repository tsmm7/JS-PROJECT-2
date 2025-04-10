import { artworks } from "./data.js"
import { openEditModal } from "./modal.js"
import { renderGallery } from "./main.js"
import defaultImg from "../assets/defaultImg.jpg"

// Функция создания карточки
export function createCard(art, index) {
  const template = document.getElementById("artCardTemplate")
  const card = template.content.cloneNode(true).querySelector(".art-card")

  // Установка изображения
  const photo = card.querySelector(".photo")
  const imageUrl = art.image?.trim()
  const isValidImage = imageUrl && imageUrl.includes(".")
  const finalUrl = isValidImage ? imageUrl : defaultImg
  photo.style.backgroundImage = `url(${finalUrl})`

  // Установка текста
  card.querySelector(".title").textContent = art.title
  card.querySelector(".description").textContent = art.description

  // Кнопка лайка
  const likeBtn = card.querySelector(".like-btn")
  likeBtn.addEventListener("click", () => {
    card.classList.toggle("highlighted")
  })

  // Кнопка редактирования
  const editBtn = card.querySelector(".edit-btn")
  editBtn.addEventListener("click", () => openEditModal(index))

  // Кнопка удаления
  const deleteBtn = card.querySelector(".delete-btn")
  deleteBtn.addEventListener("click", () => {
    artworks.splice(index, 1)
    document.getElementById("gallery").innerHTML = ""
    renderGallery()
  })

  return card
}
