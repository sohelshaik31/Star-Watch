
var http=require('http')
http.createServer(function(req,res){
    const{url,method}=req;
   
    if(url==="/Login")
        {
            res.write("login")
        }
        else if(url==="/Signin")
            {
                res.write("signin")
            }
    else{
        res.write("home")
    }
    

res.end()

}).listen(8080)