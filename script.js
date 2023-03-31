const mesa=document.querySelector(".container")
const cards=[...document.querySelectorAll(".cards")]
const jogadas=document.querySelector(".p")
const num=[1,1,2,2,3,3,4,4,5,5,6,6]
let ale=Math.floor((Math.random())*12)
let control=[ale]
let cont=true
let numJogadas=0
let empedirClick=[]


function button(){
    for(let i=0; i<12; i++){
        while(cont){
            cont=false
            ale=Math.floor((Math.random())*12)
            control.map((el)=>{
                if(el==ale) cont=true
            })
        }
        cont=true
        control[i]=ale
        cards[i].innerHTML=num[ale]
    }
    control.length=0
    cards.map((el)=>{
        el.classList.remove("concluido")
        el.style.color="black"
    })
    numJogadas=0
    jogadas.innerHTML=`JOGADAS: ${numJogadas}`
    empedirClick.length=0
}

button()

let processando=[]
let ocultar=false
let liberarClick=true
let liberarClick2=true
let continuar=true

cards.map((el)=>{
    el.addEventListener("click",(evt)=>{
        let elemento=evt.target
        let concluidos=[...document.querySelectorAll(".concluido")]
        concluidos.map((element)=>{
            if(element.id==elemento.id){
                continuar=false
            }
        })
        if(continuar){
            empedirClick.push(elemento.id)
            if(empedirClick[empedirClick.length-2]==empedirClick[empedirClick.length-1]){
                liberarClick=false
            }
            if(liberarClick){
            if(ocultar){
                cards.map((el)=>{
                    el.style.color="black"
                })
                ocultar=false
            }
            elemento.style.color="white"
            if(processando.length > 0){
                processando.map((elem)=>{
                    if(elem.innerHTML==elemento.innerHTML){
                        processando[0].classList.add("concluido")      
                        elemento.classList.add("concluido")
                        processando.length=0
                        numJogadas++
                    }else{
                        processando.length=0
                        ocultar=true
                    }
                })
            }else{
                processando.push(el)
            }  
            let completo=[...document.querySelectorAll(".concluido")]
            if(completo.length>0){
                completo.map((elm)=>{
                    if(elm.id==elemento.id){
                        liberarClick2=false
                    }
                })
            }
            if(liberarClick2){numJogadas++}
                jogadas.innerHTML=`JOGADAS: ${numJogadas}` 
            }           
        }
        liberarClick=true
        liberarClick2=true
        continuar=true
    })
})
