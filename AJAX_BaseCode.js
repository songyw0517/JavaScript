if (window.XMLHttpRequest) { // XMLHttpRequest를 지원할 경우
    // code for modern browsers
    var xmlhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          
        }
      };
  } else { // 지원하지 않을 경우
    // code for old IE browsers
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }