
show = () => {
    var checkBox = document.getElementById("connect");
    var text = document.getElementById("links");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}