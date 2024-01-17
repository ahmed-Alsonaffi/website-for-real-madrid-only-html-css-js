function button(n){
    document.getElementById("hist1").style.display="none";
    document.getElementById("hist2").style.display="none";
    document.getElementById("hist3").style.display="none";
    document.getElementById("hist4").style.display="none";
    if(n==1){
        document.getElementById("hist1").style.display="block";
    }
    else if(n==2){
        document.getElementById("hist2").style.display="block";
    }
    else if(n==3){
        document.getElementById("hist3").style.display="block";
    }
    else if(n==4){
        document.getElementById("hist4").style.display="block";
    }
}
        