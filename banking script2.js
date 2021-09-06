
// =====================================deposite============================================


document.getElementById("depo-btn").addEventListener('click',function(event){
// console.log("click me")
const getOldDeposite=document.getElementById("deposite");
const depoInput= document.getElementById("depo-input");

// getOldDeposite.innerText=depoInput.value;
 let oldValue =getOldDeposite.innerText;
 oldValue=parseFloat(oldValue);
//  console.log(oldValue);
 let newValue=depoInput.value;
 newValue=parseFloat(newValue);
//  console.log(newValue);


// ========================================balance increase==============================================


getOldDeposite.innerText=oldValue+newValue;
depoInput.value="";

const getOldBalance=document.getElementById("Balance");
let oldBal =getOldBalance.innerText;
// console.log(newValue);
oldBal=parseFloat(oldBal);

getOldBalance.innerText=oldBal+newValue;


})

    // ========================================withdraw=============================================



document.getElementById("Withdraw-btn").addEventListener('click',function(event){
    const getwithdrawNew=document.getElementById("withdraw-input");
    const getwithdrawOldValue=document.getElementById("Withdraw");
    let getNew=getwithdrawNew.value;
    getNew=parseFloat(getNew);
    let getOld=getwithdrawOldValue.innerText;
    getOld=parseFloat(getOld);

    getwithdrawOldValue.innerText= getOld+getNew;

// ========================================balance decrese==============================================
const getOldBalance=document.getElementById("Balance");
let OldBal=getOldBalance.innerText;

   let OldBaal=parseFloat(OldBal);

   getOldBalance.innerText=OldBaal-getNew;




    getwithdrawNew.value="";

    
    
    })


