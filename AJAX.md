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
- 주로 XMLHttpRequest가 보낸 request의 응답을 받았을 때 실행할 함수를 정의함.
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
- onreadystatechange 함수는 readyState가 바뀔 때 마다 호출이 된다. (1~4번 트리거 된다.)

# Using a Callback Function
- Callback Function : 다른 함수에 매개 변수로 전달된 함수
- 즉, 인자로 함수 이름이 들어간 것을 의미한다.
``` javascript
loadDoc("url-1", myFunction1); // myFunction1 실행

loadDoc("url-2", myFunction2);

function loadDoc(url, cFunction) { // 매개변수로 Function이 들어있음
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cFunction(this); // 서버의 response를 받으면, 인자로 받은 함수를 호출함.
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function myFunction1(xhttp) {
  // action goes here
}
function myFunction2(xhttp) {
  // action goes here
}
```
# Server Response Properties (Response 속성)
- responseText : response 데이터를 String으로 가져옴
``` javascript
  // response를 String으로 출력
  document.getElementById('demo').innerHTML = xhttp.responseText;
```
- responseXML : response 데이터를 XML로 가져옴
``` javascript
  xmlDoc = xhttp.responseXML; // XML 형식으로 받음
  txt = "";
  x = xmlDoc.getElementsByTagName("ARTIST"); // Tag이름이 ARTIST인 데이터 집합
  for (i = 0; i < x.length; i++) { // 반복문을 돌면서,
    txt += x[i].childNodes[0].nodeValue + "<br>"; 
    // 노드지정, 노드의 값을 가져와서 txt에 추가
  }
  document.getElementById("demo").innerHTML = txt;
  xhttp.open("GET", "cd_catalog.xml", true);
  xhttp.send();
```
# Server Response Methods
- getResponseHeader() : 서버 리소스로부터 특정 header의 정보를 반환
``` javascript
var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("demo").innerHTML =
    this.getResponseHeader("Last-Modified"); // header의 Last-Modified만 반환
    // Last modified: Tue, 18 Jul 2017 16:14:29 GMT
  }
};
xhttp.open("GET", "ajax_info.txt", true);
xhttp.send();
```
- getAllResponseHeaders() : 서버 리소스로부터 모든 header의 정보를 반환
``` javascript
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("demo").innerHTML =
    this.getAllResponseHeaders();
    /* <header 정보>
    accept-ranges: bytes age: 5308 cache-control: public,max-age=14400,public content-encoding: gzip content-length: 245 content-type: text/plain date: Thu, 11 Feb 2021 03:47:33 GMT etag: "15bfdeee0ffd21:0" last-modified: Tue, 18 Jul 2017 16:14:29 GMT server: ECS (hhp/9ADE) vary: Accept-Encoding x-cache: HIT x-frame-options: SAMEORIGIN x-powered-by: ASP.NE
    */
  }
};
xhttp.open("GET", "ajax_info.txt", true);
xhttp.send();
```

# AJAX XML Example
``` html
<!DOCTYPE html>
<html>
<style>
table,th,td {
  border : 1px solid black;
  border-collapse: collapse;
}
th,td {
  padding: 5px;
}
</style>
<body>

<h2>The XMLHttpRequest Object</h2>

<button type="button" onclick="loadDoc()">Get my CD collection</button>
<br><br>
<table id="demo"></table>

<script>
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "cd_catalog.xml", true);
  xhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Artist</th><th>Title</th></tr>"; // 테이블 태그 생성
  var x = xmlDoc.getElementsByTagName("CD"); // 태그 이름이 'CD'인 데이터에 접근
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue + // ARTIST 데이터
    "</td><td>" +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue + // TITLE 데이터
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table; //table 값 넣기
}
</script>

</body>
</html>

```

# AJAX PHP
``` html
  <!DOCTYPE html>
  <html>
  <body>

  <h2>The XMLHttpRequest Object</h2>

  <h3>Start typing a name in the input field below:</h3>

  <p>Suggestions: <span id="txtHint"></span></p> 

  <p>First name: <input type="text" id="txt1" onkeyup="showHint(this.value)"></p>
  <!--onkeyup 이벤트 : 키를 눌렀다가 땠을 때의 이벤트-->
  <script>
  function showHint(str) {
    var xhttp;
    if (str.length == 0) { // 입력받은 것이 없으면 -> 공백으로 처리
      document.getElementById("txtHint").innerHTML = "";
      return;
    }
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("txtHint").innerHTML = this.responseText;
        // 서버로부터 응답이 있으면, response를 String으로 바꾸어 출력
      }
    };
    xhttp.open("GET", "gethint.php?q="+str, true); 
    // request를 지정 (q=str로 받은값을 서버로 보냄.)
    xhttp.send(); // request를 보냄
  }
  </script>

  </body>
  </html>

```
``` PHP
<?php
// Array with names
$a[] = "Anna";
$a[] = "Brittany";
$a[] = "Cinderella";
$a[] = "Diana";
$a[] = "Eva";
$a[] = "Fiona";
$a[] = "Gunda";
$a[] = "Hege";
$a[] = "Inga";
$a[] = "Johanna";
$a[] = "Kitty";
$a[] = "Linda";
$a[] = "Nina";
$a[] = "Ophelia";
$a[] = "Petunia";
$a[] = "Amanda";
$a[] = "Raquel";
$a[] = "Cindy";
$a[] = "Doris";
$a[] = "Eve";
$a[] = "Evita";
$a[] = "Sunniva";
$a[] = "Tove";
$a[] = "Unni";
$a[] = "Violet";
$a[] = "Liza";
$a[] = "Elizabeth";
$a[] = "Ellen";
$a[] = "Wenche";
$a[] = "Vicky";

// get the q parameter from URL
$q = $_REQUEST["q"];

$hint = "";

// lookup all hints from array if $q is different from ""
if ($q !== "") {
  $q = strtolower($q);
  $len=strlen($q);
  foreach($a as $name) {
    if (stristr($q, substr($name, 0, $len))) {
      if ($hint === "") {
        $hint = $name;
      } else {
        $hint .= ", $name";
      }
    }
  }
}

// Output "no suggestion" if no hint was found or output correct values
echo $hint === "" ? "no suggestion" : $hint;
?>
```
- xhttp.send()를 통해 PHP 파일로 request를 보내면
- PHP 파일에서는 받은 값을 확인하고, 해당하는 이름을 browser로 보낸다.

# AJAX ASP
``` html
  <!DOCTYPE html>
  <html>
  <body>

  <h2>The XMLHttpRequest Object</h2>

  <h3>Start typing a name in the input field below:</h3>

  <p>Suggestions: <span id="txtHint"></span></p> 

  <p>First name: <input type="text" id="txt1" onkeyup="showHint(this.value)"></p>

  <script>
  function showHint(str) {
    var xhttp;
    if (str.length == 0) { 
      document.getElementById("txtHint").innerHTML = "";
      return;
    }
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("txtHint").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "gethint.asp?q="+str, true);
    xhttp.send();
  }
  </script>

  </body>
  </html>

```
``` asp
<%
response.expires=-1
dim a(30)
'Fill up array with names
a(1)="Anna"
a(2)="Brittany"
a(3)="Cinderella"
a(4)="Diana"
a(5)="Eva"
a(6)="Fiona"
a(7)="Gunda"
a(8)="Hege"
a(9)="Inga"
a(10)="Johanna"
a(11)="Kitty"
a(12)="Linda"
a(13)="Nina"
a(14)="Ophelia"
a(15)="Petunia"
a(16)="Amanda"
a(17)="Raquel"
a(18)="Cindy"
a(19)="Doris"
a(20)="Eve"
a(21)="Evita"
a(22)="Sunniva"
a(23)="Tove"
a(24)="Unni"
a(25)="Violet"
a(26)="Liza"
a(27)="Elizabeth"
a(28)="Ellen"
a(29)="Wenche"
a(30)="Vicky"

'get the q parameter from URL
q=ucase(request.querystring("q"))

'lookup all hints from array if length of q>0
if len(q)>0 then
  hint=""
  for i=1 to 30
    if q=ucase(mid(a(i),1,len(q))) then
      if hint="" then
        hint=a(i)
      else
        hint=hint & " , " & a(i)
      end if
    end if
  next
end if

'Output "no suggestion" if no hint were found
'or output the correct values
if hint="" then
  response.write("no suggestion")
else
  response.write(hint)
end if
%>
```

# AJAX DATABASE
``` HTML
  <!DOCTYPE html>
  <html>
  <style>
  table,th,td {
    border : 1px solid black;
    border-collapse: collapse;
  }
  th,td {
    padding: 5px;
  }
  </style>
  <body>

  <h2>The XMLHttpRequest Object</h2>

  <form action=""> 
    <select name="customers" onchange="showCustomer(this.value)">
      <option value="">Select a customer:</option>
      <option value="ALFKI">Alfreds Futterkiste</option>
      <option value="NORTS ">North/South</option>
      <option value="WOLZA">Wolski Zajazd</option>
    </select>
  </form>
  <br>
  <div id="txtHint">Customer info will be listed here...</div>

  <script>
  function showCustomer(str) { // this.value를 통해 str을 받음 (드롭다운식의 옵션)
    var xhttp;  
    if (str == "") { // 선택X
      document.getElementById("txtHint").innerHTML = "";
      return;
    }
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("txtHint").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "getcustomer.php?q="+str, true);
    xhttp.send();
  }
  </script>
  </body>
  </html>

```
``` PHP
<?php
$mysqli = new mysqli("servername", "username", "password", "dbname");
if($mysqli->connect_error) {
  exit('Could not connect');
}

$sql = "SELECT customerid, companyname, contactname, address, city, postalcode, country
FROM customers WHERE customerid = ?";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($cid, $cname, $name, $adr, $city, $pcode, $country);
$stmt->fetch();
$stmt->close();

echo "<table>";
echo "<tr>";
echo "<th>CustomerID</th>";
echo "<td>" . $cid . "</td>";
echo "<th>CompanyName</th>";
echo "<td>" . $cname . "</td>";
echo "<th>ContactName</th>";
echo "<td>" . $name . "</td>";
echo "<th>Address</th>";
echo "<td>" . $adr . "</td>";
echo "<th>City</th>";
echo "<td>" . $city . "</td>";
echo "<th>PostalCode</th>";
echo "<td>" . $pcode . "</td>";
echo "<th>Country</th>";
echo "<td>" . $country . "</td>";
echo "</tr>";
echo "</table>";
?>
```
- AJAX로 PHP파일에 요청을 하면
- PHP 파일에서 데이터베이스에 접근하여, 테이블을 만들어 반환해준다.
- JavaScript에서 response를 받으면, HTML파일에 넣어준다.