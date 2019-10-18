const searchInput = document.querySelector('#search');
const images = document.querySelectorAll('.load a');

searchInput.addEventListener('keyup', (e) => {
    for(let i = 0; i< images.length; i +=1) {
        if(images[i].dataset.title.includes(searchInput.value.toLowerCase()) || searchInput.value.lenght === 0){
            images[i].style.display = 'inline';
        }else{
            images[i].style.display = 'none';
        }
    }
});











    




    
