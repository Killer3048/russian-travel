document.getElementById("links__ru").onclick = function() {
    document.getElementById("links__ru").classList.toggle("links__active")
    document.getElementById("links__en").classList.remove("links__active")

}

document.getElementById("links__en").onclick = function() {
    document.getElementById("links__en").classList.toggle("links__active")
    document.getElementById("links__ru").classList.remove("links__active")
}