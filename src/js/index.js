
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

    function showHoveredContent(element) {
        const titleHardSkills = element.querySelector('#teste__title')
        const timeHardSkills = element.querySelector('#teste__time')


        const htmlcolor = element.querySelector('#html__img #teste__title')
        const csscolor = element.querySelector('#css__img #teste__title')
        const javascriptcolor = element.querySelector('#javascript__img #teste__title')
        const typescriptcolor = element.querySelector('#typescript__img #teste__title')


        if (timeHardSkills&&titleHardSkills) {
            titleHardSkills.style.opacity = '1';
            timeHardSkills.style.opacity = '1';
        } if (htmlcolor) {
            titleHardSkills.style.filter = 'drop-shadow(0px 2px 18px #eb4034)'
            timeHardSkills.style.filter = 'drop-shadow(0px 2px 18px #eb4034)'
        } if (csscolor) {
            titleHardSkills.style.filter = 'drop-shadow(0px 2px 18px #2d7aff)'
            timeHardSkills.style.filter = 'drop-shadow(0px 2px 18px #2d7aff)'
        } if (javascriptcolor) {
            titleHardSkills.style.filter = 'drop-shadow(0px 2px 18px #eafa00)'
            timeHardSkills.style.filter = 'drop-shadow(0px 2px 18px #eafa00)'
        }if (typescriptcolor) {
            titleHardSkills.style.filter = 'drop-shadow(0px 2px 18px #1b6ff7)'
            timeHardSkills.style.filter = 'drop-shadow(0px 2px 18px #1b6ff7)'
        } 

    }

    function hideHoveredContent(element) {
        const titleHardSkills = element.querySelector('#teste__title')
        const timeHardSkills = element.querySelector('#teste__time')

        if (titleHardSkills && timeHardSkills) {
            titleHardSkills.style.opacity = '0'
            timeHardSkills.style.opacity = '0'
            titleHardSkills.style.filter = 'none'
            
        }
    }
})

