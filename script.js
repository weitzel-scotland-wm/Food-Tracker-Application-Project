val = 1;
function formChanged(){
    foodname = document.getElementsByName("food")[0].value;
    description = document.getElementsByName("description")[0].value;
    dateofpurchase = document.getElementsByName("purchase")[0].value;
    expiration = document.getElementsByName("expiration")[0].value;
}
function addCells(){
    var tbl = document.getElementById("table");
    var row = tbl.insertRow(val);
    var fn = row.insertCell(0);
    var d = row.insertCell(1);
    var dop = row.insertCell(2);
    var ep = row.insertCell(3);
    if (expiration <= 3){
        row.id = "danger"
    }
    if (val%2 === 1 && expiration > 3){
        row.id = "alternate"
    }
    fn.innerHTML = foodname;
    d.innerHTML = description;
    dop.innerHTML = dateofpurchase;
    ep.innerHTML = expiration;
    val = val + 1;
}

$(document).ready(function(){
  $("tr").click(function(){
      $(this).addClass("selected")
  })
    }
);
