
const submit=document.getElementById("submit");

//get items input by id
itemInput1=document.getElementById("input1");
itemInput2=document.getElementById("input2");
itemInput3=document.getElementById("input3");
itemInput4=document.getElementById("input4");

//get items error by class
itemError1=document.getElementsByClassName("error1");
itemError2=document.getElementsByClassName("error2");
itemError3=document.getElementsByClassName("error3");
itemError4=document.getElementsByClassName("error4");
 //get items in node list of errors message under input

 messageError=document.getElementsByClassName("finish");

////////////////////////
let error=[false,false,false,false];



//////////////////////////////////////

submit.addEventListener("click",function(event){
    if(itemInput1.value==""){
        itemInput1.style.borderColor="red";
        itemError1[0].style.display="block";
        messageError[0].style.display="block";
        error[0]=true;
    }
    if(itemInput2.value==""){
        itemInput2.style.borderColor="red";
        itemError2[0].style.display="block";
        messageError[1].style.display="block";
        error[1]=true;
    }
    if(itemInput3.value=="" || ! testEmail()){
        itemInput3.style.borderColor="red";
        itemInput3.value="";
        itemInput3.placeholder="email@example/com";
        itemInput3.classList.add("sameh");
        itemError3[0].style.display="block";
        messageError[2].style.display="block";
        error[2]=true;
    }
    if(itemInput4.value==""){
        itemInput4.style.borderColor="red";
        itemError4[0].style.display="block";
        messageError[3].style.display="block";
        error[3]=true;
    }
})

itemInput1.addEventListener("input",function(){
    if(error[0]===true){
        itemError1[0].style.display="none";
        itemInput1.style.borderColor="lightgray";
        messageError[0].style.display="none";
        error[0]=false;
    }
})


itemInput2.addEventListener("input",function(){
    if(error[1]===true){
        itemError2[0].style.display="none";
        itemInput2.style.borderColor="lightgray";
        messageError[1].style.display="none";
        error[1]=false;
    }
})

itemInput3.addEventListener("input",function(){
    if(error[2]===true){
        itemError3[0].style.display="none";
        itemInput3.style.borderColor="lightgray";
        itemInput3.placeholder="Email Address";
        itemInput3.classList.remove("sameh");
        messageError[2].style.display="none";
        error[2]=false;
    }
})

itemInput4.addEventListener("input",function(){
    if(error[3]===true){
        itemError4[0].style.display="none";
        itemInput4.style.borderColor="lightgray";
        messageError[3].style.display="none";
        error[3]=false;
    }
})

function testEmail(){
    let test=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(itemInput3.value.match(test)){
        return true;    
    }
    else{
        return false;
    }
}
//that code without loop





//input[0].value=warrn