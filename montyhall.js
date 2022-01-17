
const portas = ['cabra', 'cabra', 'cabra'];
var tentativa = 0;

var caixa_apresentador = document.querySelector('.comentario p');



function trocamensagem(){
    if(tentativa === 0){
        let texto = document.getElementsByClassName('mostrador')[0];
        texto.innerText = 'Escolha um das portas!';
        caixa_apresentador.innerText = "Só vou deixar duas portas, uma com a cabra e outra com o ouro, tente!";
        document.querySelector('.comentario').style.opacity = '1';
    }
    else {
        let texto = document.getElementsByClassName('mostrador')[0];
        texto.innerText = 'Agora que já viu onde não está, você deve clicar em qual porta acha que está o prêmio';
        caixa_apresentador.innerText = "Quer mudar?  Escolha a porta com cuidado!";
        document.querySelector('.comentario').style.opacity = '1';
    }
    
    //console.log(document.getElementsByClassName('mostrador')[0]);

}


function embaralha() {

    let ouro;
    
    while(ouro === undefined){
        
        let valor = Math.floor(Math.random() * 10 ); 

        if( valor < 3 && valor >-1 ){
            ouro = valor;
            portas.splice(ouro, 1, "ouro");
        }
        
    }
    console.log(ouro);
}


embaralha();
trocamensagem();
console.log(portas);




function verifica_ganhador(elemento, id){
    
    
    if(tentativa ===1){
        let ouro = portas.indexOf('ouro');

    var img_porta = document.querySelectorAll('img');
    console.log(img_porta);

    if(id === ouro){//ganhador
        
        //altera o texto
        let texto = document.getElementsByClassName('mostrador')[0];
        texto.innerText = 'PARABÉNS VOCê GANHOU O TESOURO!!';
        caixa_apresentador.innerText = "PUTA QUE PARIU! TU GANHOU!!";
        document.querySelector('.comentario').style.opacity = '1';

        //abre a porta
        
        let vetor_porta = document.querySelectorAll('img');
        vetor_porta[0] = null;
        console.log(vetor_porta[0]);

            for(let i = 0; i < vetor_porta.length; i++){
                if(vetor_porta[i].alt === 'porta' && i != id+1){
                        vetor_porta[i].src = './img/porta_cabra.png'
                }else if(i != 0){
                    vetor_porta[i].src = './img/porta_tesouro.png'
                }
            }
            tentativa++;
    }
    else{ //perdeu

        let texto = document.getElementsByClassName('mostrador')[0];
        texto.innerText = 'HAAA, QUE PENA, VOCÊ NÃO GANHOU';
        caixa_apresentador.innerText = "SE FUDEU, VAI LEVAR A CABRA!";
        document.querySelector('.comentario').style.opacity = '1';

        let vetor_porta = document.querySelectorAll('img');
        vetor_porta[0] = null;
        console.log(vetor_porta[0]);

            for(let i = 0; i < vetor_porta.length; i++){
                if(vetor_porta[i].alt === 'porta' && i == ouro+1){
                        vetor_porta[i].src = './img/porta_tesouro.png'
                }else if(i 
                    != 0){
                    vetor_porta[i].src = './img/porta_cabra.png'
                }
            }
    }

    }


    
}


function abreporta(elemento){
    
    if(tentativa === 0){
        
        let id = elemento.id.replace('p','');
        id = parseInt(id) - 1;
        //console.log("nao vai poder ser essa",id);


        let index = (Math.floor(Math.random() * 10 )%2); 
        let indice = portas.indexOf('ouro');

        //console.log("nao vai poder ser " + id + " nem " + indice);

        let contador = 0;
        do {
           console.log('tá ruim');
            index = (Math.floor(Math.random() * 10 )%2); 

            
            if(contador> 50){
               return -1;
            }

            contador++;
            

        } while(index === indice || index === id);

        

/*
        console.log(typeof(index), index);
        console.log(typeof(indice), indice);
        console.log(index !== indice);
*/        
/*
        do {
           
         } while (index !=);
*/        
         //console.log('new functino ', index);
         return index;
    }
    else{

        if(tentativa===1){
        
         console.log(elemento);
        
        let id = elemento.id.replace('p','');
        id = parseInt(id) - 1;
        //console.log("--> id/ "+id);

        verifica_ganhador(elemento, id);

        //elemento.setAttribute('src', '')
        
        }
        
        return 'retorno do ELSE';
    }

}


function verifica_porta(elemento){
    if(tentativa === 0){
        
        var index = abreporta(elemento);
        
        if(index === -1){
            document.location.reload(true)
            return 0;
        }
        //console.log(index);
        
        //console.log("index retornado ->", abreporta(elemento));
        
        //console.log(document.getElementById(`p${index+1}`));
        document.getElementById(`p${index+1}`).setAttribute("src", "./img/porta_cabra.png");
        
        tentativa++;
        trocamensagem();
        
        
    }
    else{
        
        abreporta(elemento);

    }
}



document.body.addEventListener('click', (e)=>{
    

    //console.log(e.target.tagName);

    if(e.target.id === 'p1' || e.target.id === 'p2' || e.target.id === 'p3'){
        verifica_porta(e.target);
    }
})




