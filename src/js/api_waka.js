export const leguagens = [];
const waka_url = 'https://wakatime.com/share/@HenriqueBitencourt/9d54586a-32f1-4e1b-8a37-1c44e5845c24.json';
export async function fetchLeguagens() {
    const response = await fetch(waka_url);
    const leguagen = await response.json();
    leguagens.push(leguagen);
    if (Array.isArray(leguagen.data)) {
        const linguagensFilter = leguagen.data.filter(leguagen => {
            const desired = ['JavaScript', 'TypeScript', 'HTML', 'CSS'];
            return desired.includes(leguagen.name);
        });
        linguagensFilter.forEach((obj, index) => {
            const titleElements = document.querySelectorAll('#skill__title');
            const timeElements = document.querySelectorAll('#skill__time');
            if (titleElements[index] && timeElements[index]) {
                titleElements[index].textContent = obj.name;
                timeElements[index].textContent = obj.text;
            }
        });
    }
}


