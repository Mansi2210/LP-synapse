var shoppingList = Array();
var price = Array();
var i = 0;
function input() {
    document.getElementById("displays").innerHTML = " ";
    document.getElementById("displayp").innerHTML = " ";
    shoppingList[i] = document.getElementById("shop").value;
    price[i] = document.getElementById("priceval").value;
    i++;
    document.getElementById("shop").value = "";
    document.getElementById("priceval").value = "";
    document.getElementById("displays").innerHTML += shoppingList;
    document.getElementById("displayp").innerHTML += price;
    console.log(shoppingList);
    console.log(price)
    var tbval = document.getElementById("tablelist");
    var x = tbval.insertRow();
    x.insertCell(0);
    for (let i = 1; i <= shoppingList.length; i++) {
        tbval.rows[i].cells[0].innerHTML = shoppingList[i - 1];
    }
    x.insertCell(1);
    for (let i = 1; i <= price.length; i++) {
        tbval.rows[i].cells[1].innerHTML = price[i - 1];
    }
}
function sorting() {
    var list = [];
    for (var j = 0; j < shoppingList.length; j++)
        list.push({ 'items': shoppingList[j], 'prices': price[j] });
        console.log(list);
    
    list = list.sort((a,b) => a.prices < b.prices ? 1 : -1);
    
    console.log(list);
    for (var k = 0; k < list.length; k++) {
        shoppingList[k] = list[k].items;
        price[k] = list[k].prices;
    }
    var tbval = document.getElementById("tablelist");
    var x = tbval.insertRow();
    x.insertCell(0);
    for (let i = 1; i <= shoppingList.length; i++) {
        tbval.rows[i].cells[0].innerHTML = shoppingList[i - 1];
    }
    x.insertCell(1);
    for (let i = 1; i <= price.length; i++) {
        tbval.rows[i].cells[1].innerHTML = price[i - 1];
    }
}
console.log(shoppingList);