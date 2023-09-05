const img = document.querySelector("img");
const botoes = document.querySelectorAll("button");
let intervalid = null;
let automaticoAtivo = false;
let cont = 0;

for (const botao of botoes){
  botao.addEventListener("click", ()=>{
    
    if (botao.classList.contains("automatico")){
    if (automaticoAtivo){
        clearInterval(intervalid);
        automaticoAtivo = false;
    }else {
        automaticoAtivo = true;
        intervalid = setInterval(() => {
            if (cont === 0){
                img.setAttribute("src", `.img/vermelho.png`);
            }else if (cont === 1){
                img.setAttribute("src", `.img/amarelo.png`);
            }else if (cont === 2){
                img.setAttribute("src", `img/verde.png`);
            }
            cont++;
            if (cont === 3){
                cont = 0;
            }
        
        },1000);

        }
    }
           clearInterval(intervalid);
            automaticoAtivo = false;
        img.setAttribute("src", `./img/${botao.id}.png`);
    }
});


}

  