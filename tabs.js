let mylead = []

const inputEl = document.getElementById("input-el")
const saveEl = document.getElementById("save-btn")
const deleleEl = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
let unLi = document.getElementById("unli")

const saveL = JSON.parse(localStorage.getItem("mylead"))
if(saveL) {
        mylead = saveL
        saveLead(mylead)
    }

function saveLead(leads){
        let listItems = ""
        for (let i = 0 ; i < leads.length ; i++){
            listItems += `
                <li>
                    <a target = '_blank' href = '${leads[i]}'>  
                        ${leads[i]} 
                    </a>
                </li>`
        }
        unLi.innerHTML = listItems
    }

saveEl.addEventListener("click", function(event){
    mylead.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("mylead",JSON.stringify(mylead))
    saveLead(mylead)
})

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        mylead.push(tabs[0].url)
        localStorage.setItem("mylead",JSON.stringify(mylead))
        saveLead(mylead) 
    });

})

deleleEl.addEventListener("click", function(){
    localStorage.clear()
    mylead = []
    saveLead(mylead)
})



// let saveLead = JSON.parse(localStorage.getItem("mylead"))
// if(saveLead) {
//     mylead = saveLead
// }

// function newlead(){
//         mylead.push(inputEl.value)
       
    
//         document.getElementById("input-el").value = ""

//         localStorage.setItem("mylead" , JSON.stringify(mylead))
    
//         printlead()

//         i++     
    
// }

// saveEl.addEventListener("click", function(){
  
//     newlead()
// })
// function printlead(){
//     unLi.innerHTML += `
//     <li>
//         <a target = '_blank' href = '${mylead[i]}'>  
//             ${mylead[i]} 
//         </a>
//     </li>`
// }
