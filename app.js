
var mylistItem= document.createElement("li")
for(var i=0; i<mylistItem.length;i++)
{
    var span= document.createElement("span");
    var txt= document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt)
    mylistItem[i].appendChild(span);

}

var close=document.getElementsByClassName("close")
for(var i=0 ; i<close.length; i++)
{
    close[i].onclick=function(){
        var div= this.parentElement;
        div.style.display="none"
    }
}

function add () {
    var inputValue= document.getElementById("myinput").value;
    var li = document.createElement("li")
    var t= document.createTextNode(inputValue)
    li.appendChild(t)
    if(inputValue==="")
    {
        alert("You must write something!")
    }
    else
    {
        document.getElementById("myul").appendChild(li)
    }
    document.getElementById("myinput").value="";

    var span =document.createElement("span")
    var txt= document.createTextNode("\u00D7")
    span.className="close"
    span.appendChild(txt)
    li.appendChild(span)

    for(var i=0; i<close.length;i++ )
    {
        close[i].onclick= function (){
            var div = this.parentElement
            div.style.display="none"
        }
    }
}

