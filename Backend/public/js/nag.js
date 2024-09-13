function check()
{
valid_username="hello"
valid_password="123"
user_username="hello"
user_password="456"
if(valid_username===user_username){
    console.log("valid user")

if(valid_password===user_password){
    console.log("logged in")
}
else{
    console.log("invalid password")
}
}
else{
    
    console.log("invalid username")

}}
check()