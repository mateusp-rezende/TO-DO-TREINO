//seleção de elementos 
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const exercicio = document.querySelector('#exercicio-select');
const imprimirBtn = document.getElementById('Imprimir-btn');
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const video = document.querySelector(".video")
const ferramentas = document.querySelector("#ferramentas");
const cancelarEdit = document.querySelector("#cancelar-edit");
const titulo = document.querySelector(".titulo")

let ValorInputAnterior;
//funções

//adiciona os elementos
 const salva = (text) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");
    const todoTitle = document.createElement("h2");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);
     
    
    const feitoBtn = document.createElement("button");
    feitoBtn.classList.add("feito-todo")
    feitoBtn.classList.add("button-verde")
    feitoBtn.classList.add("button-tamanho")
    
    feitoBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(feitoBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo")
    editBtn.classList.add("button-amarelo")
    editBtn.classList.add("button-tamanho")
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn);

    
    const cancelarBtn = document.createElement("button");
    cancelarBtn.classList.add("cancelar-todo")
    cancelarBtn.classList.add("button-vermelho")
    cancelarBtn.classList.add("button-tamanho")
    cancelarBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    todo.appendChild(cancelarBtn);

    todoList.appendChild(todo);

    todoInput.value = "";
    todoForm.focus();

 };

const inverterFormulario= ()=>{
      editForm.classList.toggle("none");
      todoForm.classList.toggle("none");
      todoList.classList.toggle("none");
 }

 const atualizaTodo = (text) =>{
    const todos = document.querySelectorAll(".todo");

    todos.forEach((todo) =>{
        let todoTitulo = todo.querySelector("h2")

        if(todoTitulo.innerText === ValorInputAnterior){
            todoTitulo.innerText = text
        }
    })
 }
 //selecionar treino pré definido
 const tipoSelect = event =>{
    console.log(event.target.value);
 }
 const treinoPadrao = () => {
    // Adicionar evento de mudança ao elemento <select>
    exercicio.addEventListener('change', (e) => {
        const selectValue = e.target.value;

        // Limpar a lista existente antes de adicionar um novo treino
        todoList.innerHTML = '';

        // Verificar o valor selecionado e adicionar o treino correspondente
        if (selectValue == '1') { // Valor '1' representa "Peito"
            todoList.innerHTML = treinoPeito();
        } else if (selectValue == '2') { // Valor '2' representa "Costas"
            todoList.innerHTML = treinoCostas();
        } else if (selectValue == '3') { // Valor '3' representa "Braços"
            todoList.innerHTML = treinoBracos();
        } else if (selectValue == '4') { // Valor '4' representa "Pernas"
            todoList.innerHTML = treinoPernas();
        } else if (selectValue == '5') { // Valor '5' representa "Completo"
            todoList.innerHTML = treinoCompleto();
            video.classList.toggle("none"); // Exibe o vídeo
            setTimeout(() => {
                video.classList.toggle("none"); // Oculta o vídeo após 14 segundos
            }, 9700);

            titulo.innerText = "FAKE NATTYYY"

        }
        
    });
};

 //imprimir
 const imprimeSelecionado = () => {
    const todos = document.querySelectorAll('.todo');
    
    todos.forEach(todo => {
        todo.classList.add('imprimir');
    });

    window.print();
};

 

//eventos

todoForm.addEventListener("submit", (e)=> {
    e.preventDefault();

    const inputValor = todoInput.value;
    if(inputValor){
        console.log("value")
        //salva o todo
        salva(inputValor);
    }


});

document.addEventListener("click", (e)=>{

    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let todoTitulo;

    if(parentEl && parentEl.querySelector("h2")){
        todoTitulo= parentEl.querySelector("h2").innerText;
    }
    if(targetEl.classList.contains("feito-todo")){
     parentEl.classList.toggle("pronto")
    }

    if(targetEl.classList.contains("cancelar-todo")){
        parentEl.remove();
       }

       if(targetEl.classList.contains("edit-todo")){
         inverterFormulario();

         editInput.value = todoTitulo;
         ValorInputAnterior = todoTitulo;
       }   


});

cancelarEdit.addEventListener("click", (e)=>{
    e.preventDefault();

    inverterFormulario();
})

editForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    const valorInputEditado = editInput.value;

    if(valorInputEditado){
        atualizaTodo(valorInputEditado);
    }

    inverterFormulario();
})

imprimirBtn.addEventListener("click", (e) => {
    e.preventDefault();
    imprimeSelecionado();
});

document.addEventListener('DOMContentLoaded', () => {
    treinoPadrao();
});
//treinos
// treino de peito
const treinoPeito = () => {
    return `
     <div class="todo">
           <h2>Treino de Peito</h2>
            <button class="cancelar-todo button-tamanho button-vermelho">
               <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        
        <div class="todo">
            <h2>3 x 8-12 Supino Reto</h2>
            <button class="feito-todo button-tamanho button-verde">
                <i class="fa-solid fa-check"></i>
            </button>
            <button class="cancelar-todo button-tamanho button-vermelho">
               <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        <div class="todo">
            <h2>3 x 8-12 Supino Inclinado</h2>
            <button class="feito-todo button-tamanho button-verde">
                <i class="fa-solid fa-check"></i>
            </button>
            <button class="cancelar-todo button-tamanho button-vermelho">
               <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        <div class="todo">
            <h2>3 x 8-12 Crucifixo</h2>
            <button class="feito-todo button-tamanho button-verde">
                <i class="fa-solid fa-check"></i>
            </button>
            <button class="cancelar-todo button-tamanho button-vermelho">
               <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `;
};

// Função para gerar o HTML do treino de costas
const treinoCostas = () => {
    return `
        <div class="todo">
           <h2>Treino de Costas</h2>
            <button class="cancelar-todo button-tamanho button-vermelho">
               <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        <div class="todo">
            <h2>3 x 8-12 Barra Fixa</h2>
            <button class="feito-todo button-tamanho button-verde">
                <i class="fa-solid fa-check"></i>
            </button>
            <button class="cancelar-todo button-tamanho button-vermelho">
               <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        <div class="todo">
            <h2>3 x 8-12 Remada Curvada</h2>
            <button class="feito-todo button-tamanho button-verde">
                <i class="fa-solid fa-check"></i>
            </button>
            <button class="cancelar-todo button-tamanho button-vermelho">
               <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        <div class="todo">
            <h2>3 x 8-12 Pulldown</h2>
            <button class="feito-todo button-tamanho button-verde">
                <i class="fa-solid fa-check"></i>
            </button>
            <button class="cancelar-todo button-tamanho button-vermelho">
               <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `;
};

// Função para gerar o HTML do treino de braços
const treinoBracos = () => {
    return `
     <div class="todo">
           <h2>Treino de braços</h2>
            <button class="cancelar-todo button-tamanho button-vermelho">
               <i class="fa-solid fa-trash"></i>
            </button>
        </div>
         <div class="todo">
           <h2>Treino de Peito</h2>
            <button class="cancelar-todo button-tamanho button-vermelho">
               <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        <div class="todo">
            <h2>3 x 8-12 Rosca Direta</h2>
            <button class="feito-todo button-tamanho button-verde">
                <i class="fa-solid fa-check"></i>
            </button>
            <button class="cancelar-todo button-tamanho button-vermelho">
               <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        <div class="todo">
            <h2>3 x 8-12 Tríceps Pulley</h2>
            <button class="feito-todo button-tamanho button-verde">
                <i class="fa-solid fa-check"></i>
            </button>
            <button class="cancelar-todo button-tamanho button-vermelho">
               <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        <div class="todo">
            <h2>3 x 8-12 Rosca Martelo</h2>
            <button class="feito-todo button-tamanho button-verde">
                <i class="fa-solid fa-check"></i>
            </button>
            <button class="cancelar-todo button-tamanho button-vermelho">
               <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `;
};

// Função para gerar o HTML do treino de pernas
const treinoPernas = () => {
    return `
        <div class="todo">
           <h2>Treino de Pernas</h2>
            <button class="cancelar-todo button-tamanho button-vermelho">
               <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        <div class="todo">
            <h2>3 x 10-15 Agachamento</h2>
            <button class="feito-todo button-tamanho button-verde">
                <i class="fa-solid fa-check"></i>
            </button>
            <button class="cancelar-todo button-tamanho button-vermelho">
               <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        <div class="todo">
            <h2>3 x 10-15 Leg Press</h2>
            <button class="feito-todo button-tamanho button-verde">
                <i class="fa-solid fa-check"></i>
            </button>
            <button class="cancelar-todo button-tamanho button-vermelho">
               <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        <div class="todo">
            <h2>3 x 10-15 Extensão de Pernas</h2>
            <button class="feito-todo button-tamanho button-verde">
                <i class="fa-solid fa-check"></i>
            </button>
            <button class="cancelar-todo button-tamanho button-vermelho">
               <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `;
};

// Função para gerar o HTML com todos os treinos
const treinoCompleto = () => {
    return `
        ${treinoPeito()}
        ${treinoCostas()}
        ${treinoBracos()}
        ${treinoPernas()}
    `;
};