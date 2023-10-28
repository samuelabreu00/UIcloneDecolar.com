// // script.js

// $(function() {
//     $("#datepicker").datepicker({
//         numberOfMonths: 1, // Mostrar dois meses ao mesmo tempo
//         showButtonPanel: true, // Exibir botões "Hoje" e "Fechar"
//         dateFormat: "dd/mm/yy", // Formato da data
//         minDate: 0, // A data mínima é hoje
//         maxDate: "+1y", // A data máxima é um ano a partir de hoje
//         showAnim: "slideDown", // Efeito de animação ao abrir o seletor de datas
//         onClose: function(selectedDate) {
//             // Ao selecionar uma data, você pode adicionar a lógica aqui
//         }
//     });
// });

// accordion 
const questions = document.querySelectorAll('.question-answer');

questions.forEach(function(question) {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener("click", function() {
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        })
        question.classList.toggle("show-text");
    })
})
// accordion end

// modal

const abrir = document.querySelector(".icon-input");
const modaal = document.querySelector(".destino-modal")
const fechar = document.querySelector(".fechar")

abrir.addEventListener("click", () =>{
    modaal.classList.toggle("aberto");

fechar.addEventListener("click", () =>{
    modaal.classList.remove("aberto")
})  
});

// -------

const a = document.querySelector(".icon-inpuut");
const m = document.querySelector(".origem-modal")
const f = document.querySelector(".fechaar")

a.addEventListener("click", () =>{
    m.classList.toggle("abra");

f.addEventListener("click", () =>{
    m.classList.remove("abra")
})  
});

// ------


const o = document.querySelector(".input-quarto");
const q = document.querySelector(".modal-quarto")
const c = document.querySelector(".icon-input")
const c2 = document.querySelector(".close")

o.addEventListener("click", () =>{
    q.classList.toggle("open");

c.addEventListener("click", () =>{
    q.classList.remove("open")
})  
c2.addEventListener("click", () =>{
    q.classList.remove("open")
})  
});
// modal end


