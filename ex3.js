$(document).ready(function(){
    $('#growButton').click(function(){
        $('#square').animate({"width":"+=20px","height":"+=20px"},2000);
    })
    $('#shrinkButton').click(function(){
        $('#square').animate({"width":"-=20px","height":"-=20px"},2000);
    })
    var count = 0;
    $('#colorButton').click(function(){
        var tab = ["red","green","yellow"];
        $('#square').css("backgroundColor",tab[count]);
        if(count == 2){
            count = 0;
        }else{
            count += 1;
        }
    })
})