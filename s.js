function createTable()
{
rn = window.prompt("Zadejte počet řádků", 1);
cn = window.prompt("Zadejte počet sloupců",1);
  
 for(var r=0;r<parseInt(rn,10);r++)
  {
   var x=document.getElementById('myTable').insertRow(r);
   for(var c=0;c<parseInt(cn,10);c++)  
    {
     var y=  x.insertCell(c);
     y.contentEditable = true;
        y.classList.add(`row${r}-col${c}`);
        y.addEventListener("input", () => {
        });
    }
   }
}