// check intersection between element to its root elements
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
        console.log(entry);
        // check viewport intersecting
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            // remove class of those elements which are out of viewport
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));