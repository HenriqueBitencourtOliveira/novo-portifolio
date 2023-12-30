
export default function showHoveredContent(element) {
    const titleHardSkills = element.querySelector('#skill__title')
    const timeHardSkills = element.querySelector('#skill__time')


    const htmlcolor = element.querySelector('#html__img #skill__title')
    const csscolor = element.querySelector('#css__img #skill__title')
    const javascriptcolor = element.querySelector('#javascript__img #skill__title')
    const typescriptcolor = element.querySelector('#typescript__img #skill__title')


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
