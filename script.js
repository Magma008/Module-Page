const btn = document.querySelector(".hover")
const box = document.querySelector(".container")

function modulePage() {
    if (box.classList.contains("d-none")) {
        box.classList.remove("d-none")
    }
    else {
        box.classList.add("d-none")
    }
}