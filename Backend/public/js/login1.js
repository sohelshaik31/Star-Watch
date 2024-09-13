function login()
{
    var username=document.getElementById("username-input")
    var password=document.getElementById("password-input")
    //console.log(password)
    var valid_username="nagarjuna"
    var valid_password="1234"
    if(valid_username===username.value){
        console.log("valid user")
    
    if(valid_password===password.value){
        console.log("logged in")
    }
    else{
        console.log("invalid password")
    }
    }
    else{
        
        console.log("invalid username")
    
    }
}
function Togglesidebar(){
    var sidebar2=document.getElementById("sidebar")
    
    if(sidebar2.style.display==="block"){
        sidebar2.style.display="none"
        

    }
    else{
    sidebar2.style.display="block"


}}

function Togglemodal(){
    var modal=document.getElementById("modal1")
    
    if(modal.style.display==="block"){
       modal.style.display="none"
        

    }
    else{
   modal.style.display="block"


}}
function addtion(){
    var arr=[10,20,30,40,50,60]
    var sum=0
    var num=5
    var i
    for(i=0;i<=num;i++)
    {
        sum=sum+arr[i]
    }
    console.log(sum)
}
addtion()
// function color()
// {
//     var col= document.getElementsByClassName("wow")
//     for(var i=0;i<=4;i++)
//         {
//             col[i].style.color="red"
//         }
// }
// color()

function marks(){

var marks={rohit:[10,20,25,85] ,ajay:[30,65,25,7]}
var  sum=0
for(var i=0;i<4;i++)
    {
        
        
        sum=sum+marks.rohit[i]
    }
    console.log(sum)
}
marks()
