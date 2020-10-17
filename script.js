document.onreadystatechange = function(){
    if (document.readyState == "complete") {
        const navchk = document.querySelector('nav')

        navchk.addEventListener('click', () => {
            navchk.classList.toggle('show-nav')
        })
    }
}