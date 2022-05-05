let cricetus = chomik();
function chomik() {
    return(function (){
            let message = "";
            return function cricetus(){
            if(arguments.length === 0) return message;
            else {
                if(message !== "") message += " ";
                for (let i = 0 ;i<arguments.length; i++){
                    message += arguments[i];
                }
            }
            }
        }
    ) ();
}
/*
cricetus('gruszka');
cricetus('gruszka');
cricetus('jabłko');
console.log(cricetus());
 */