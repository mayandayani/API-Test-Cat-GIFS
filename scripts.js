const img = document.querySelector('img');
fetch('https://api.giphy.com/v1/gifs/translate?api_key=mezLDCmuL81DufLkufDkHWFl69TmMb0B&s=cats', {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        img.src = response.data.images.original.url;
});

let refreshbtn = document.getElementById("btn");

const refreshPage = () => {
    location.reload();
}

refreshbtn.addEventListener('click', refreshPage)


