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

# XMLHttpRequest Object
## Create an XMLHttpRequest Object (생성)
``` javascript
  var xhttp = new XMLHttpRequest(); // 객체 생성
```

# Access Across Domains (도메인에 접근)
- 보안적인 이유로, modern browsers는 Access Across Domains을 허용하지 않음
- <b>즉, 웹 페이지와 XML파일이 모두 동일한 서버에 있어야 한다.</b>
- W3Schools의 예제는 W3Schools domain에 있는 open XML files이다.

# Modern Browsers (Fetch API)
- Modern Browsers는 XMLHttpRequest 객체 대신, Fetch API를 사용할 수 있다.
- Fetch API 인터페이스는 웹 브라우저가 웹 서버에게 HTTP requests를 보내게 할 수 있다.
- Fetch는 XMLHttpRequest 보다 더 심플하게 request를 보낼 수 있다.

# Old Browsers (IE5, IE6)
- Old Browsers는 XMLHttpRequest 객체 대신, ActiveX 객체를 사용해야 한다.
``` javascript
  var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
```

# Modern Browsers와 Old Browsers를 모두 고려한 코드
``` javascript
  if (window.XMLHttpRequest) { // XMLHttpRequest를 지원할 경우
    // code for modern browsers
    xmlhttp = new XMLHttpRequest();
  } else { // 지원하지 않을 경우
    // code for old IE browsers
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
```

# XMLHttpRequest Object Methods
- new XMLHttpRequest() : XMLHttpRequest 객체 생성
- abort() : 현재 request를 취소
- getAllResponseHeaders() : header 정보 반환
- getResponseHeader() : 특정 header 정보 반환
- open(method, url, async, user, psw) : Specifies the request (request 설정)
  - method : request type -> GET | POST
  - url : 파일 경로
  - async : true(비동기) | false(동기)
  - user : 옵션, 유저 이름
  - psw : 옵션, 패스워드
- send() : GET request를 서버에 보낸다.
- send(<em>string</em>) : POST request를 서버에 보낸다.
- setRequestHeader() : label/value 쌍을 보낼 header에 추가한다.

#  XMLHttpRequest Object Properties
- onreadystatechange : readyState 속성이 변경되었을 때 호출되는 함수 정의
- readyState : XMLHttpRequest의 status
  - 0 : request가 초기화 되지 않음
  - 1 : 서버와 연결이 됨
  - 2 : request를 받음
  - 3 : request를 처리 중
  - 4 : request 완료, response 준비
- responseText : response 데이터를 string으로 반환
- responseXML : response 데이터를 XML 데이터로 반환
- status : request의 status-number 반환
  - 200 : "OK"
  - 403 : "Forbidden"
  - 404 : "Not Found"
  - [Etc Http Messages](https://www.w3schools.com/tags/ref_httpmessages.asp)
- statusText : status-text를 반환, ex) // "OK" or "Not Found"

# AJAX - Send a Request To a Server
``` javascript
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send(); // GET방식이므로, send()메소드가 적절하다.
```

# GET or POST
- GET
  - POST보다 간단하고 속도가 빠름
- POST
  - 서버의 업데이트 파일 또는 데이터베이스와 같은 cached file 일 경우
  - 파일의 크기가 큰 경우 (POST는 크기 제한이 없다.)
  - GET보다 보안적으로 좋다.

# GET Request
``` html
<!DOCTYPE html>
<html>
<body>

<h2>The XMLHttpRequest Object</h2>

<button type="button" onclick="loadDoc()">Request data</button>

<p id="demo"></p>

<script>
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  
  // demo_get.asp의 파일에 GET방식의 비동기식 request
  xhttp.open("GET", "demo_get.asp", true); 

  // demo_get2.asp의 파일에 fname=Henry, lname=Ford를 전달
  xhttp.open("GET", "demo_get2.asp?fname=Henry&lname=Ford", true);
  xhttp.send();
}
</script>
 
</body>
</html>
```
# POST Request
``` html
<!DOCTYPE html>
<html>
<body>

<h2>The XMLHttpRequest Object</h2>

<button type="button" onclick="loadDoc()">Request data</button>

<p id="demo"></p>
 
<script>
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  // demo_post.asp파일에 POST방식의 비동기식 request
  xhttp.open("POST", "demo_post.asp", true);
  xhttp.send();
  
  // HTML form과 같이 POST 데이터는 setRequestHeader() 메소드로 HTTP header에 추가할 수 있다.
  xhttp.open("POST", "ajax_test.asp", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("fname=Henry&lname=Ford"); // send에 데이터를 추가하여 요청
}
</script>

</body>
</html>
```

# The url - 서버의 파일
- open()메소드의 url 인자는 서버 안의 파일의 경로를 의미한다.
- 모든 파일의 형식(.txt, .xml, .asp, .php)을 지원한다.
``` javascript
  xhttp.open("GET", "ajax_test.asp", true);
```

# Asynchronous - True or False
- 서버 request는 asynchronously(비동기식)으로 보내야 한다. (true)
``` javascript
  xhttp.open("GET", "ajax_test.asp", true);
```
- 비동기식으로 보냄으로써 JavaScript는 서버의 response를 기다리지 않고 다른 일을 할 수 있다.

# Synchronous Request
- async = false로 동기식으로 요청을 보낼 수 있다. 
- 하지만 JavaScript가 중지될 수 있으므로, 사용하지 않는 것을 추천한다.

# The onreadystatechange Property
- XMLHttpRequest가 보낸 request의 응답을 받았을 때 실행할 함수를 정의함.
``` javascript  
  xhttp.onreadystatechange = function() { // request에 대한 응답을 받으면, 
    if (this.readyState == 4 && this.status == 200) { 
      // readyState 4 : 요청 완료, 응답 대기 중
      // status 200 : "OK" - 문제 없음
      // 응답을 받았을 때 실행할 코드 작성
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
```
