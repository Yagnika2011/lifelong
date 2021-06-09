menu_list_array = ["Chicken Tandoori Pizza","Veg Suprem Pizza","Paneer Tikka Pizza","Extra Cheese Pizza"]
function getmenu (){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array..sort();
    For(var i=0;<menu_list_arraya.length;i++){
    }htmldata=htmldata+'<li' + menu_list_array[i] + '</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
}