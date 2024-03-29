const emojiElements = document.querySelectorAll(".emoji-selector");
let customParam = ''
emojiElements.forEach(function(element) {
    element.addEventListener("click", function() {
        customParam = element.getAttribute("data-emotion");
    });
});

// injector function
function setUrlParam() {
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set("emotions", customParam)
    const newRelativePathQuery = window.location.pathname + "?" + searchParams.toString()
    history.pushState(null, "", newRelativePathQuery)
    location.reload()
}