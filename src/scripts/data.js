export let artworks = [
    {
        title: "Звездная ночь",
        image: require("../assets/vangog.jpg"),
        description: "Знаменитая картина Винсента Ван Гога, написанная в 1889 году.",
    },
    {
        title: "Мона Лиза",
        image: require("../assets/liza.jpg"),
        description: "Портрет, написанный Леонардо да Винчи, одно из самых известных произведений искусства.",
    },
    {
        title: "Крик",
        image: require("../assets/krik.jpg"),
        description: "Картина Эдварда Мунка, выражающая тревогу и беспокойство.",
    }
]

export function addArtwork(title, description, image) {
    artworks.push({ title, description, image })
}