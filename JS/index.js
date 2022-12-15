document.getElementById("links__ru").onclick = function() {
    document.getElementById("links__ru").classList.toggle("header__lang-link_active")
    document.getElementById("links__en").classList.remove("header__lang-link_active")

}

document.getElementById("links__en").onclick = function() {
    document.getElementById("links__en").classList.toggle("header__lang-link_active")
    document.getElementById("links__ru").classList.remove("header__lang-link_active")
}