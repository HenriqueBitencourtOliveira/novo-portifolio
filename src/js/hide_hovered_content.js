
export default function hideHoveredContent(element) {
    const titleHardSkills = element.querySelector('#skill__title')
    const timeHardSkills = element.querySelector('#skill__time')

    if (titleHardSkills && timeHardSkills) {
        titleHardSkills.style.opacity = '0'
        timeHardSkills.style.opacity = '0'
        titleHardSkills.style.filter = 'none'
        
    }
    
}