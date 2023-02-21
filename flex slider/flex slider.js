const slides = document.querySelector('.slides');
const li = slides.querySelectorAll('li');
li.forEach((item) => {
    item.addEventListener('click', function (event) {
        removeClasses(li);
        item.classList.add('active');
        event.preventDefault(); 
    });
});
function removeClasses(obj) {
    obj.forEach((ite) => {
       ite.classList.remove('active');
    });  
};