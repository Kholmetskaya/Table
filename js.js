
function table(rows,columns){
    var table = document.querySelector('table');
    
    for (var i = 0; i < rows; i++) {
        tr = document.createElement("tr");
        for (var j = 0; j < columns; j++) {
          td = document.createElement("td");
          tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    styleTd(); 

  
}


function styleTd(){
    var  contentTd = document.querySelectorAll("td");
    var count = 0;
    for(var k = 0; k < contentTd.length; k++){
        var num = Math.floor(Math.random() * contentTd.length);
        contentTd[num].classList.add("background");
     
    }
    for(var m=0; m < contentTd.length; m++){
        if(contentTd[m].classList.contains("background")){
            count++         
        } else{
            var a = Math.random().toString(36).slice(-5);
            text = document.createTextNode(a);
            contentTd[m].appendChild(text); 
        }
    } 
    var percent = Math.floor(count * 100 / contentTd.length);
    document.querySelector(".percent").innerHTML = `Процент ячеек, которому присвоен класс "background" : ${percent}`
}

table(7,5);
   