console.log('%c HI', 'color: firebrick')
let data;

document.addEventListener('DOMContentLoaded', async() => {
    await retrieveImages();
    data = await retrieveData();
    sortData()
    let dropdown = document.querySelector('#breed-dropdown')
    if (dropdown) {
        dropdown.addEventListener('change', function(e) {
            console.log(e.target.value)
        for (dog in data.message) {
            if (e.target.value.charAt(0) === dog.charAt(0)) {
                sortedData.push(dog)
            }
        }
        sortData() 
        sortedData = []
        })
    }
})

function retrieveImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl) 
        .then(resp => resp.json())
        .then(json => {
            json.message.forEach((image) => {
                let img = document.createElement('img');
                let div = document.querySelector('#dog-image-container');
    
                img.src = image;
                div.appendChild(img);
            })
        })
}

function retrieveData() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all"
    return fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => json)
}       
let sortedData = []

function sortData() {
    let option = document.querySelector('option')
    document.querySelector('#dog-breeds').remove();
    
    
    let newUl = document.createElement('ul')
    newUl.setAttribute('id', 'dog-breeds')
    
    document.body.appendChild(newUl)
    console.log(sortedData.length)
    if (sortedData.length === 0) {
        for (breed in data.message) {
            sortedData.push(breed)
        }
    }
    sortedData.forEach((breed) => {
        let li = document.createElement('li');
    
        li.innerHTML = breed;
        newUl.appendChild(li);
        
        li.addEventListener('click', function() {
            if (li.style.color === "pink") {
                li.style.color = "black";
            }
            
            else {li.style.color = "pink";}})
        })
        sortedData.length = 0
}

    




    