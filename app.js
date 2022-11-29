import dados from "./dados.js";


// CRIA UMA FUNCÃO PARA INTEIRAR UM CONTAINER (XO-MAIN) E UM BOTÃO. E PEGAR ID DO BOTÃO
//...CLICADO
(function(){

        const containerInterado = document.querySelector(".box-main");


        var btnMuscles = document.querySelectorAll(".btn-muscle");
        

        
        btnMuscles.forEach(muscle =>{ 
            //UMA NOVA VARIAVEL CHAMADA MUSCLE RECEBE UMA FUNÇÃO QUE RETORNA TODOS OS BOTÕES DENTRO DO FOREEACH
          muscle.addEventListener('click', (evt)=> {
            let identify = evt.currentTarget.id;
            
          
            containerInterado.innerHTML = carregarConteudo(identify);

          })
        }); 
}())


  function carregarConteudo(muscleID){//(TituloConteiner, nomeExercicio, descricaoExercicio, urlImgExercicio){

    let dataMuscle = dados.find(muscle => muscle.id === muscleID)// UÉ
    
    let itens =  function() {

      let boxes = '';


      for(let i=0; i < dataMuscle.itens.length; i++) 
      {
        console.log(dataMuscle.itens[i]);  

          boxes +=  `<div class="exercices-container">
  
  
                    <img src="${dataMuscle.itens[i].urlImgExercicio}" alt="">
            
                    <div class="itens-exercices-container"> 
                
                            <h2> ${dataMuscle.itens[i].nomeExercicio} </h2>
                                    <p> 
                                        ${dataMuscle.itens[i].descricaoExercicio}
                                    </p>
                    </div>
                  
                  </div>`
  
      }

      console.log(boxes);    
      return boxes;
    }













                  console.log(itens());          
    return  `<h1 class="title-box-main"> ${dataMuscle.itens[0].TituloConteiner} </h1>` + itens();
                         
  
}

