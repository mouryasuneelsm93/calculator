

function res() 
         { 
             document.getElementById("result").value="0"; 
             displayval="";
             previousval=0;
             document.getElementById("result1").value="";
             opt='+';
             
             const button = document.querySelectorAll('.button1');
             for (var i = 0; i < button.length; i++)
            {     
                button[i].disabled =false; 
            }
         } 

// function result()
// 	{

// 			var x = document.getElementById("result").value 
            
//             for (var i = 0; i < x.length; i++) {
//                 if(x[i]=='+')
//                 {
//                     var y = eval(x) 
//             document.getElementById("result").value = y 
//                 }
//             }
// 	}


var displayval="";
var previousval=0;
var opt='+';
var result;
function calculate(operand)
{
    
    displayval+=operand; 
    document.getElementById("result").value=displayval;
    document.getElementById("result1").value=opt;
     

}
function dis()
    {
        document.getElementById("result").value="";
        const button = document.querySelectorAll('.button1');
        for (var i = 0; i < button.length; i++)
        {     
            button[i].disabled =true; 
        }
    }

function back() {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
    displayval=value.substr(0, value.length - 1);
}

function operation(operator)
{
    
    if(opt=='+')
    {
            result=parseFloat(parseFloat(previousval)+parseFloat(displayval));
            document.getElementById("result").value=result;
            document.getElementById("result1").value=opt;
            console.log(result);
    }
    else if(opt=='-')
    {
            result=parseFloat(parseFloat(previousval)-parseFloat(displayval));
            document.getElementById("result").value=result;
            document.getElementById("result1").value=opt;
            console.log(result);
    }
    else if(opt=='*')
    {
            result=parseFloat(parseFloat(previousval)*parseFloat(displayval));
            document.getElementById("result").value=result;
            document.getElementById("result1").value=opt;
            console.log(result);
    }
    else if(opt=="/")
    {
            result=parseFloat(parseFloat(previousval)/parseFloat(displayval));
            document.getElementById("result").value=result;
            document.getElementById("result1").value=opt;
            console.log(result);
    }
    else if(opt=='%')
    {
            result=parseFloat(parseFloat(previousval)%parseFloat(displayval));
            document.getElementById("result").value=result;
            document.getElementById("result1").value=opt;
            console.log(result);    
    }
    else if(opt=='=')
    {
            result=document.getElementById("result").value;
            document.getElementById("result").value=result;
            console.log(result);               
    }
    opt=operator;
    previousval=result;
    displayval="";
}

function display()
{
    document.getElementById("hide").style.visibility="hidden";
}

function displays()
{
    document.getElementById("hide").style.visibility="visible";
}
