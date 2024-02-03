const quiz = document.querySelector('.quiz');




quiz.addEventListener('click',(e) =>{
    if(e.target.classList == 'soru'){
        const cevap = document.createElement('p')
        cevap.classList.add('p')
        cevap.innerText = 'Ronaldo Nazaryio'
        quiz.appendChild(cevap)
    }
    if(e.target.classList == 'p'){
        e.target.parentElement.remove()
    }
    
})
