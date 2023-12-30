import showHoveredContent from "./show_hovered_content.js"
import hideHoveredContent from "./hide_hovered_content.js"
import { leguagens, fetchLeguagens } from "./api_waka.js"
import effect_title from "./effect_title.js"

document.addEventListener('DOMContentLoaded', function() {
    const hoverableElements = document.querySelectorAll('.hoverable')

    hoverableElements.forEach(function(element) {
        element.addEventListener('mouseover', function() {
            showHoveredContent(element)
        })

        element.addEventListener('mouseout', function() {
            hideHoveredContent(element)
        })
    })

})

fetchLeguagens();

document.addEventListener('DOMContentLoaded', effect_title)