const API_URL = "https://api.unsplash.com/search/photos?client_id=bda53b751e96c9756c990c782a94594f5514c043c4274f9ff2c48a9b2a867194";
const form = document.querySelector('form')
const input = document.querySelector('input')
const loadingImage = document.querySelector('#loadingImage')
const imageSection = document.querySelector('.images')

loadingImage.style.display = 'none'


form.addEventListener('submit', formSubmitted)

function formSubmitted(event){
    event.preventDefault();

    const searchTerm = input.value
    console.log(searchTerm);

    search(searchTerm)
        .then(displayImages)    
       
}

function search(searchTerm){
    const url = `${API_URL}&query=${searchTerm}`;
    
    loadingImage.style.display = '';
    imageSection.innerHTML = '';
    
    return fetch(url)
        .then(response => response.json())
        .then(result => {
           return (result.results);
            
        })
}

function displayImages(images){
    images.forEach(image => {
        console.log();
        const imageElement = document.createElement('img')
        imageElement.src = image.urls.small
        imageSection.appendChild(imageElement)
        
    })
    loadingImage.style.display = 'none'
    
}