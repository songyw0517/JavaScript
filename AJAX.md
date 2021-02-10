# AJAX
## AJAX Example Explained
``` html
<!DOCTYPE html>
<html>
<body>

<div id="demo">
  <h2>Let AJAX change this text</h2>
  <button type="button" onclick="loadDoc()">Change Content</button>
</div>

</body>
</html>
```
``` javascript
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}
```
코드설명:
- HTML 페이지는 \<div> section과 \<button>을 포함한다.
- \<div> section은 서버로부터 정보를 보여주는데 사용된다.
- \<button>은 클릭이 될 때 loadDoc()함수를 호출한다.
- loadDoc()함수는 웹 서버에게 데이터를 요청하고 받은 데이터를 보여준다.

# What is AJAX? (AJAX란?)
- AJAX = <b>A</b>synchronous <b>J</b>avaScript <b>A</b>nd <b>X</b>ML.
- 프로그래밍 언어가 아니다.
- Browser built-in인 <b>XMLHttpRequest</b>객체와 같이 사용한다.
- JavaScript와 HTML DOM과 같이 사용한다.
- 즉, "<b>XMLHttpRequest</b>", "<b>JavaScript</b>", "<b>HTML DOM</b>" 과 같이 사용함.
- AJAX는 백그라운드에서 웹 서버와 데이터를 교환하여 웹 페이지를 비동기식으로 업데이트 할 수 있다.
- <em>즉, 전체 페이지를 다시 로드하지 않고 웹 페이지의 일부를 업데이트할 수 있다.</em>

# How AJAX Works? (작동원리)
- ![](https://www.w3schools.com/js/pic_ajax.gif)
1. 웹 페이지로부터 이벤트가 발생 (web page load나 button click 등의 이벤트)
2. JavaScript에 의해 XMLHttpRequest 객체가 생성된다.
3. XMLHttpRequest 객체가 웹 서버에게 request를 보낸다.
4. 서버가 요청을 처리한다.
5. 서버가 웹 페이지로 response를 보낸다.
6. JavaScript에서 response를 읽는다.(받는다.)
7. JavaScript에서 response를 적절하게 처리한다. (Like page update)
