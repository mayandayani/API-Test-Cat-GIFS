const img = document.querySelector('img');

async function getCats() {
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=mezLDCmuL81DufLkufDkHWFl69TmMb0B&s=cats', {mode: 'cors'})
    const catData = await response.json();
    img.src = catData.data.images.original.url;
}

getCats();

let refreshbtn = document.getElementById("btn");

const refreshPage = () => {
    location.reload();
}

refreshbtn.addEventListener('click', refreshPage)


