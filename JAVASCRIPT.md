# JAVASCRIPT

## document.getElementById
<br>

``` javascript
기본형 : document.getElementById("[ID이름]").['변경할 속성'] = ['변경할 내용']
스타일변경 : document.getElementById("[ID이름]").style.['스타일 속성'] = ["변경할 값"] 

document.getElementById("demo").innerHTML = "Hello JavaScript";
/* html 요소 중 id='demo'인 요소에 'Hello JavaScript'로 변경 */

document.getElementById("myImg").src="pic_bulcon.gif"; 
/* html 요소 중 id값이 myImg인 요소를 찾아서 src를 pic_bulcon.gif로 변경 */

document.getElementById('demo').style.fontSize='35px;
/* html 요소 중 id값이 demo인 요소를 찾아서 fontsize를 35px로 변경*/

document.getElementById('demo').style.display = 'none';
/* html 요소 중 id값이 demo인 요소를 찾아서 display를 none으로 변경 -> hide 기능 */

document.getElementById('demo').style.display = 'block';
/* html 요소 중 id값이 demo인 요소를 찾아서 display를 block으로 변경 -> show 기능 */
```

# \<script\> 태그
- 위치
  - \<head\> or \<body\>에 있는 경우 : \<body\>의 어느 곳에서든 호출이 가능하다.
    ``` html
    <!DOCTYPE html>
    <html>
    <head>
    <script>
    function myFunction() {
      document.getElementById("demo").innerHTML = "Paragraph changed.";
    }
    </script>
    </head>
    <body>

    <h1>A Web Page</h1>
    <p id="demo">A Paragraph</p>
    <button type="button" onclick="myFunction()">Try it</button>
    <button type="button" onclick="myFunction()">Try second it</button>

    <!-- <body>안에 넣을 경우 body의 모든 요소의 아래에 넣는 것이 속도면에서 좋다.
    <script>
    function myFunction() {
      document.getElementById("demo").innerHTML = "Paragraph changed.";
    }
    </script>
    -->
    </body>
    </html>
    ```
    위의 경우 Try it, Try second it 둘다 myFunction()이 호출이 된다.
  - External (외부 파일로 첨부) : 
    ``` javascript
    function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
    }
    ```
    위와 같은 myScript.js파일이 존재하는 경우
    ``` html
    <script src="myScript.js"></script>
    ```
    위의 코드를 \<head\>나 \<body\>에 넣어서 javascript를 적용시킬 수 있다.
    
    ### External로 js를 첨부할 때의 이점
    - HTML코드와 분리할 수 있다.
    - HTML, JavaScript 코드를 읽기 쉽게하여 유지보수에 이점이 있음
    - JavaScript를 캐쉬하면, 속도면에서 이점이 있음

  - External References : 'full URL'이나 '현재 웹 페이지에서 js로의 상대 경로'를 지정하여 사용 할 수 있다.
    ``` html
    <script src="https://www.w3schools.com/js/myScript.js"></script>
    <!-- Full URL로 지정하는 경우 -->

    <script src="/js/myScript1.js"></script>
    <!-- 현재 웹페이지가 있는 폴더로부터 js가 있는 상대경로로 지정하는 경우 -->

    <script src="myScript1.js"></script>
    <!-- 현재 웹페이지가 있는 폴더에 js가 같이 있는 경우 -->
    ```


# JavaScript Output
1. innerHTML 사용 
    ``` javascript
      document.getElementById("demo").innerHTML = 5 + 6;  
    ```
2. document.write () 사용 
    ``` javascript 
      document.write("hello world") 
      - 얘는 모든 HTML을 삭제하고, write한 것을 추가해서 다시 로드함 (속도가 느리다.)
    ```
    
3. window.alert () 사용 : 알람으로 알려 줌 
    ``` javascript
      window.alert("hello") 
      alert('hello')로 window를 생략할 수 있음
    ```
4.  console.log () 사용 : 콘솔에 알려 줌
    ``` javascript
      console.log(5+6)
    ```

# JavaScript Statement
- JavaScript는 Values, Operators, Expressions, Keywords, Comments 로 구성되어 있음
- 세미콜론 써야 함
- 80자 이내로 작성하는 것이 읽기에 좋다.
  ``` javascript
    document.getElementById("demo").innerHTML =
    "Hello Dolly!"; /* 일부로 줄을 바꿈*/
  ```

# JavaScript Nmaing
- 첫번째 글자는 문자, _, $로 시작 함
- 나머지는 문자, 숫자, _, $가 들어갈 수 있다.
- Case sensitive : 대소문자를 구분한다.
- Camel Case : FirstName (Upper Camel Case) / firstName (Lower Camel Case)

# Scope와 let
- JavaScript도 C와 같이 전역변수, 지역변수의 개념이 존재하는 것 같다.
  ``` javascript
    var carName = "Volvo"; // carName은 전역변수이므로
    // carName 사용가능
    function myFunction() {
      // carName 사용가능
    }
    /*-------------------------------------------------*/
    
    // carName이 선언되지 않았으므로 사용불가

    function myFunction() {
      var carName = "Volvo"; // myFunction() 안에서만 사용가능한 지역변수 carName
      // carName 사용가능
    }

    // carName은 myFunction의 지역변수이므로 사용불가
    /*-------------------------------------------------*/
    {
      var x = 2;
      /*
      그런데 이렇게 선언하는 경우는 전역변수로 처리한다.
      왜냐하면 var은 Block Scope의 영향을 받지 않기 때문이다.
      -> 이때 x를 지역변수로 바꾸려면 let을 사용하면 된다.
      */
    }
    // x는 var로 선언되어 전역변수로 처리, 따라서 x 사용가능

    /*-------------------------------------------------*/
    {
      let x = 2;
      /*
      let으로 선언되어 block의 지역변수로 적용된다.
      */
    }
    // x는 let으로 선언되어 지역변수로 처리, 따라서 x 사용불가
  ```
- let은 선언이 된 이후에 다시 정의할 수 없다.
  ``` javascript
    var x = 2;       // Allowed
    let x = 3;       // Not allowed

    {
      var x = 4;   // Allowed
      let x = 5   // Not allowed
    }
    /*-------------------------------------------------*/
    let x = 2;       // Allowed
    let x = 3;       // Not allowed

    {
      let x = 4;   // Allowed
      let x = 5;   // Not allowed
    }
    /*-------------------------------------------------*/
    let x = 2;       // Allowed
    var x = 3;       // Not allowed

    {
      let x = 4;   // Allowed
      var x = 5;   // Not allowed
    }
    /*-------------------------------------------------*/
    let x = 2;       // Allowed

    {
      let x = 3;   // Allowed
    }

    {
      let x = 4;   // Allowed
    }

  ```
# JavaScript와 Hoisting
- JavaScript의 Hoisting : 변수를 정의하는 모든 코드를 코드의 맨 위로 올려주는 기능이다.
  ``` JAVASCRIPT
  x = 5; // Assign 5 to x

  elem = document.getElementById("demo"); // Find an element
  elem.innerHTML = x;                     // Display x in the element

  var x; // Declare x -> Hoisting으로 인해 코드의 맨위로 이동한다.

  /// 위의 코드는 아래의 코드와 같다.

  var x; // Declare x
  x = 5; // Assign 5 to x

  elem = document.getElementById("demo"); // Find an element
  elem.innerHTML = x;                     // Display x in the element
  ```
# let과 const
- 둘 다 
  - block Scope로 적용
  - 변수를 선언한 후에 값을 할당해야 함. // 반대로 적용시 tdz 에러 발생
  - Hoising 됨
  - 재선언 불가
  - 선언시 초기화 되지 않음
- let : 
  - 재할당 가능
- const:
  - 재할당 불가
  - 만약 배열인 경우 변형이 가능하다.
    ``` javascript
    const cars = ["Saab", "Volvo", "BMW"];

    // You can change an element:
    cars[0] = "Toyota";

    // You can add an element:
    cars.push("Audi");
    ```

# JavaScript Loop
  ``` javascript
  var i = 5;
  for (var i = 0; i < 10; i++) {
    // some statements
  }
  // Here i is 10
  /*-------------------------------------------------*/
  let i = 5;
  for (let i = 0; i < 10; i++) { // let을 사용하는 경우
    // some statements
  }
  // Here i is 5

  ```
# JavaScript 연산자
- 산술 : +, -, *, **, /, %, ++, --
- 할당 : =, +=, -=, *=, /=, %=, **=
- 문자열 : +, +=, 하나라도 문자열이 들어가면 숫자도 문자열로 계산됨
- 비교 : ==, ===, !=, !==, >, <, >=, <=, ? 
  - ==은 값 비교, ===은 타입도 비교함,
  - > 1=="1"은 true고 1==="1"은 false임
- 논리 : &&, ||, !
- 유형 : type, instanceof
- 비트 : &, |, ~, ^, <<, >>, >>>

# JavaScript 데이터 타입
- undefined
- Number
- String
- Booleans
- Arrays
- Objects
  ``` javascript
    var person = {
      firstName:"John", 
      lastName:"Doe", age:50,
      eyeColor:"blue"};

    NULL 은 JavaScript에서 객체이다.
    따라서 typeof NULL은 object를 반환한다. 
  ```
- Function


# 함수 (function)
``` javascript
기본형 : 

function [함수이름] ([파라미터]){
  [함수 내용]
}

예제1)
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
예제2)
function myFunction(p1, p2){
  return p1 * p2;
}

생략형 :

[변수 이름] = ([인자]) => {
   [함수 내용]
}

예제1)
hello = () => {
  return "Hello World!";
}

로 더욱 간단하게 할 수 있다., 한줄일 경우 중괄호 안써도 된다.

변수형 : 

var [함수 이름] = new Function(인자, 인자, 반환 값)

예제1)
var myFunction = new Function("a", "b", "return a * b");

예제2)
var [함수이름] = function (a, b) {return a * b};
var x = myFunction(4, 3);

- 함수이름을 출력하면, 함수내용이 출력된다.


function toCelsius(f) {
  return (5/9) * (f-32);
}
document.getElementById("demo").innerHTML = toCelsius; // 함수의 이름을 넣으면

>>> function toCelsius(f) { return (5/9) * (f-32); } 출력됨
```

- 함수를 리턴하면(return this;) object window가 반환되며, use strict;를 사용할 경우, undefined가 반환된다.

- 함수 자동 호출 : 웹 페이지를 로드하면서 자동으로 함수를 호출한다.
``` javascript

(function () {
  document.getElementById("demo").innerHTML = "Hello! I called myself";
})();

```

# 객체
  ``` javascript
  var person = {name:"song", age:"??", height:"??"};
  ```
- cf) = 이 아니다. : 임

- 속성 접근 : 
  - 방법 1)
  objectName.propertyName
  ``` javascript
  var person = {name:"song", age:"??", height:"??"};
  document.getElementByID('demo').innerHTML = person.name // song 출력
  ```
  - 방법 2)
  objectName['propertyName']
  ``` javascript
  document.getElementById("demo").innerHTML =
  person["firstName"] + " " + person["lastName"];
  ```
- 함수 호출
  objectName.methodName()
  ``` javascript
  document.getElementById("demo").innerHTML = person.fullName();
  ```

# 이벤트
## HTML의 주된 이벤트
- HTML 웹 페이지 로딩이 끝난 이벤트
- HTML의 input 필드가 바뀐 이벤트
- HTML의 버튼이 클릭 된 이벤트
``` HTML
HTML에서는 특정 javascript를 event속성으로 지정할 수 있다.
<element event='some JavaScript'>
이때의 javascript는 실행시킬 함수를 의미한다.

ex1) event가 onclick일 때
<button onclick="함수이름 or 함수 내용">

ex2) 버튼을 누르면 'demo'요소에 시간을 출력
<button onclick="document.getElementById('demo').innerHTML = 
Date()">The time is?</button>
```

여러가지 이벤트 : https://www.w3schools.com/jsref/dom_obj_event.asp

# 문자열 함수
``` javascript
var text="This is Practice Text."
```
## [문자열 길이]
``` javascript
text.length; // 문자열 길이 반환
```
## [단어 찾기]
- indexOf(찾을 단어, [검색 시작 위치]) :
  ``` javascript
  text.indexOf("is"); //-> 5 반환, 못 찾을경우 -1   
  ```
- lastIndexOf(찾을 단어, [검색 시작 위치]) : 
  ``` javascript
  text.lastIndexOf("is"); // -> 5반환 뒤에서부터 단어를 찾음 못 찾을경우 -1
  ```
- search(찾을 단어): 
  ``` javascript
  text.search("is"); //-> 5반환
  ```
## [문자열 부분 추출]
- slice(start, end) : 
  ``` javascript
  text.slice(5,7) // -> is 반환, 5 ~ 6까지 반환, 음수도 가능 
  ```
- substring(start, end) : 
  ``` javascript
  text.substring(5,7) // -> is반환 slice와 같지만 음수 사용 불가
  ```
- substr(start, length) : 
  ``` javascript
  text.substr(5, 2) // -> is반환, 인덱스5부터 2개 문자 추출
  ```
## [문자열 내용 변경]
- replace(찾을 단어(정규식 가능), 바꿀 단어); 
  - [찾을 단어]의 서식문자 (정규식)
    - /IS/i : IS의 대소문자 구별없이 찾음
    - /is/g : 중복되는 is를 모두 선택함
  ``` javascript
  text.replace("is", "are"); // -> var text="this are Practice Text."
  ```
- 정규식
  ``` javascript
  str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
  ```
- String.prototype 사용
  ``` javascript
  if (!String.prototype.trim) {
    String.prototype.trim = function () {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
  }
  ```
## [대문자, 소문자 변환]
- toUpperCase() : 대문자로 변경, 
``` javascript
  text.toUpperCase(); // -> 모두 대문자로 변경
```
- toLowerCase() : 소문자로 변경, 
  ``` javascript
  text.toLowerCase(); // -> 모두 소문자로 변경
  ```



## [문자열 조인] : 두개 이상의 문자열을 합친다.
- concat(넣을 문자열, 합칠 문자열)
  ``` javascript
  var text1 = "Hello";
  var text2 = "World";
  var text3 = text1.concat(" ", text2);

  >>> Hello World
  ```

## [공백 제거]
- trim()
  ``` javascript
    var str = "       Hello World!        "; // 공백 제거
    alert(str.trim());

    >> Hello World 알람
  ```
## JavaScript String 패딩 (2017부터 적용)
- padStart(자릿수, 채울 문자)
  ``` javascript
    let str = "5";
    str = str.padStart(4,'ㅇ');

    // ㅇㅇㅇ5 출력
  ```
- padEnd(자릿수, 채울 문자)
  ``` javascript 
    let str = "5";
    str = str.padEnd(4,'t');

    //5ttt 출력
  ```

## String 문자 추출
- charAt(position) : position의 문자를 추출
  ``` javascript
    var str = "HELLO WORLD";
    str.charAt(0);            // returns H
  ```

- charCodeAt(position) : position의 문자의 아스키 코드 넘버를 추출
  ``` javascript
    var str = "HELLO WORLD";
    str.charCodeAt(0);         // returns 72
  ```
- Property access [ ]
  ``` javascript
    var str = "HELLO WORLD";
    str[0];                   // returns H
  ```
## String을 Array로 바꾸기
- split('구분할 문자') : 구분할 문자로 나누어 배열에 담음
  ``` javascript
    var txt = "a,b,c,d,e";   // String
    var arr = txt.split(",");          // Split on commas
    document.getElementById("demo").innerHTML = arr[0];

    // a 출력
  ```


[기타 문자열 메소드](https://www.w3schools.com/jsref/jsref_obj_string.asp)

# 숫자
- 자바스크립트는 int, short, long, float, double등의 타입을 정하지 않는다. 
- 항상 부동 소수점 숫자로 저장된다.
- 소수점 아래의 0은 표시되지 않는다.

# 숫자 메소드
## 문자열로 변경 : 
- toString();
  ``` javascript
    var x = 123;
    x.toString();            // returns 123 from variable x
    (123).toString();        // returns 123 from literal 123
    (100 + 23).toString();   // returns 123 from expression 100 + 23
  ```


## 소수점 아래 어디까지 표현 : 
- toExponential("자리수");
  ``` javascript
  var x = 9.656;
  x.toExponential(2);     // returns 9.66e+0
  x.toExponential(4);     // returns 9.6560e+0
  x.toExponential(6);     // returns 9.656000e+0
  ```
- toPrecision("자리수");
  ``` javascript
  var x = 9.656;
  x.toPrecision();        // returns 9.656
  x.toPrecision(2);       // returns 9.7
  x.toPrecision(4);       // returns 9.656
  x.toPrecision(6);       // returns 9.65600
  ```
## 반올림
- toFixed('반올림할 자리') : String 반환, 소수점 아래부터 반올림
  ``` javascript
  var x = 9.656;
  x.toFixed(0);           // returns 10
  x.toFixed(2);           // returns 9.66
  x.toFixed(4);           // returns 9.6560
  x.toFixed(6);           // returns 9.656000
  ```

## 변수를 숫자로 변경
- The <b>Number()</b> method
- The <b>parseInt()</b> method
- The <b>parseFloat()</b> method

## 숫자 예약어
- NaN : 유효한 숫자가 아님을 나타냄, 숫자를 문자열로 나누면 출력됨
- isNaN("변수") : NaN일경우 true 출력
- Infinity or -Infinity : 자바스크립트가 리턴 가능한 최대, 최소 값이다. 
- MAX_VALUE : 최대값
- MIN_VALUE : 최솟값

# 배열 메소드
- Array<b>.length</b> : 배열의 길이 반환
  ``` javascript
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.length // return 4
  ```
- Array<b>.isArray(배열)</b> : 배열인지 확인
  ``` javascript
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  Array.isArray(fruits);   // returns true
  ```
- Array<b>.toString()</b> : 배열을 문자열로 바꿈 (콤마도 들어간다)
  ``` javascript
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.toString() // return "Banana,Orange,Apple,Mango"
  ```
- Array<b>.join("묶을때 사용할 문자")</b> : 배열을 문자로 묶어서 문자열로 만든다.
  ``` javascript
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.join('*'); // return "Banana * Orange * Apple * Mango"
  ```
- Array<b>.pop()</b> : 배열의 마지막 값 반환 & 삭제
  ``` javascript
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.pop() // return "Mango" and delete
  ```
- Array<b>.push("값")</b> : 배열의 마지막에 값 추가
  ``` javascript
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.push("Melon") // return 5 and fruits = ["Banana", "Orange", "Apple", "Mango", "Melon"]
  document.getElementById("demo").innerHTML = fruits; // Banana, Orange, Apple,Mango,Melon 출력
  ```
- Array<b>.shift()</b> : 배열의 첫번째 값을 반환하고, 삭제함
    ``` javascript
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.shift() // return "Banana" and delete
    ```
- Array<b>.unshift()</b> : 배열의 첫번째에 값을 추가함
  ``` javascript
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.unshift("Lemon"); // 'Lemon'을 배열의 첫번째에 추가 
  ```
- Array<b>.splice(first_index, number of remove element, new elements)</b>
  : first_index로부터 number of remove element를 삭제하고 거기에 new elements를 삽입함
  ``` javascript
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.splice(2,0,"lemon", "kiwi")

  /*
  인덱스 2부터 0개 원소를 삭제
  "lemon", "kiwi"원소를 삽입
  >>> "Banana", "Orange", "lemon", "kiwi", "Apple", "Mango"
  */

  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.splice(2,1)

  // 인덱스 2부터 1개 원소를 삭제

  ```
- Array1.concat(Array2, ...) : 배열1에 배열2, ...을 연결한다.
  ``` javascript
    var myGirls = ["Cecilie", "Lone"];
    var myBoys = ["Emil", "Tobias", "Linus"];
    var myChildren = myGirls.concat(myBoys); 
    // ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]
    var myParent = ["Tom", "Elies"]
    
    var Three_array = myGirls.concat(myBoys, myParent)
    // ["Cecilie", "Lone", "Emil", "Tobias", "Linus", "Tom", "Elies"]
  ```
- Array.slice(start_index, last_index) : Array[start_index : last_index]로 추출
  ``` javascript
    var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    var sliceOneArguments = fruits.slice(1) // ["Orange", "Lemon", "Apple", "Mango"]
    var sliceTwoArguments = fruits.slice(1, 3) // ["Orange", "Lemon"]
  ```
- Array.sort() : 알파벳 순으로 정렬 (문자열에서만 잘 작동 됨)
  ``` javascript
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();        // Sorts the elements of fruits
    // ['Apple','Banana','Mango','Orange']
  ```
- Array.reverse() : 배열 순서를 거꾸로 만듦
  ``` javascript
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.reverse(); // reverse the elements of furits
    // ['Mango','Apple','Orange','Banana']
  ```

## 숫자 정렬
- Array.sort(function(a, b){return a - b) : 오름차순 정렬
- Array.sort(function(a, b){return b - a) : 내림차순 정렬
- Array.sort(function(a, b){return 0.5 - Math.random()}) : 랜덤 정렬

## 배열의 Max, Min
- Math.max.apply(null, array); : 최댓값
- Math.min.apply(null, arr); : 최솟값

## 배열의 각각의 원소에 함수적용 (python의 map)
- Array.forEach(함수이름);
- Array.map(함수이름) : 배열의 각각의 원소에(빈 원소 제외) 함수를 적용시켜서 새로운 배열을 만듦
- Array.filter(함수 이름) : 배열의 원소중 함수의 조건을 만족하는 새 배열을 만듦

## 이외의 기타 배열 메소드
- Array.reduce()
- Array.reduceRight()
- Array.every(함수이름) : 배열의 모든 원소가 조건을 통과했는지 알려줌 (and느낌)
- Array.some(함수이름) : 배열의 일부 원소가 조건을 통과했는지 알려줌 (or느낌)
- Array.indexOf(찾을 원소 이름) : 배열에서 원소를 찾아 위치 반환 
- Array.lastIndexOf(찾을 원소 이름) : 배열에서 찾을 원소가 마지막으로 나타나는 위치를 찾아 반환
- Array.find(함수이름) : 조건을 통과한 첫번째 원소의 값을 반환
- Array.findIndex(함수이름) : 조건을 통과한 첫번째 원소의 위치 반환 

# Date()
Date객체 생성
- new Date()
- new Date(year, month, day, hours, minutes, seconds, milliseconds)
- new Date(milliseconds)
- new Date(date string)

Date 메소드
- Date().toString(); // Thu Feb 27 2020 16:35:16 GMT+0900 (대한민국 표준시)
- Date().toUTCString(); // Thu, 27 Feb 2020 07:35:28 GMT
- Date().toDateString(): // Thu Feb 27 2020

Date input
2015-03-25 : ISO 형식 // 만약 03으로 안쓰고 3으로쓰면 오류날 수 있다.
03/25/2015 : Short Date 형식
Mar 25 2015 or "25 Mar 2015" : Long Date 형식

Date Get Method
- getFullYear() : 연도 4자리 반환
- getMonth() : 월을 0 ~ 11로 반환, cf)12가 없다., 월이름이 적혀있는 배열을 이용하여 이름으로 반환할 수 있다.
- getDate() : 날짜를 1~31로 반환
- getHours() : 시간을 0~23으로 반환
- getMinutes() : 분을 0~59로 반환
- getSeconds() : 초를 0~59로 반환
- getMilliseconds() : 밀리초를 0~999로 반환
- getTime() : 1970년1월1일 이후의 밀리초를 반환
- getDay() : 요일을 0~6으로 반환
- Date.now() : Date객체 생성할 필요없이, Date().getTime과 같음

Date Set Method
- setFullYear()
- setMonth()
- setDate()
- setHours()
- setMinutes()
- setSeconds()
기타 날짜 메소드
https://www.w3schools.com/jsref/jsref_obj_date.asp

# Math
- Math.round(x) : x의 값을 정수로 반올림
- Math.ceil(x) : x의 값을 정수로 올림
- Math.floor(x) : x의 값을 정수로 내림
- Math.pow(x, y) : x의 y제곱 값
- Math.sqrt(x) : x의 제곱근 값
- Math.abs(x) : x의 절댓값

삼각 함수
```
들어가는 x값은 각도 값이 아니다!
각도로 바꾸기 위해서는 (X * Math.PI /180)을 해줘야 한다.
```
Math.sin(x) : x의 sin값
Math.cos(x) : x의 cos값
Math.tan(x) : x의 tan값

Math.min(1,2,3,4,5,...) : 들어간 값 중 최솟값을 찾음
Math.max(1,2,3,4,5,...) : 들어간 값 중 최댓값을 찾음
Math.random() : 0과 1 사이의 난수를 반환합니다.

기타 수학 함수 : https://www.w3schools.com/jsref/jsref_obj_math.asp

# 반복문
C와 비슷하다. 다른 점만 적을 것이다.

- for()문의 초기값에 여러값을 정의할 수 있다.
``` javascript
for (i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
}
```

- for/in : 객체의 속성 수 만큼 반복한다.
``` javascript
var person = {fname:"John", lname:"Doe", age:25}; 
var x;
for (x in person) {
  txt += person[x] + " ";
}
```

- for/of : 모르겠음;

while
0또는 undefined가 되면 종료
++) 배열의 길이가 넘어가면 undefined타입이다.

break, continue


# 비트 연산자
&	AND	Sets each bit to 1 if both bits are 1
|	OR	Sets each bit to 1 if one of two bits is 1
^	XOR	Sets each bit to 1 if only one of two bits is 1
~	NOT	Inverts all the bits
<<	Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
>>	Signed right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
>>>	Zero fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off


# 정규식
========
검색 패턴을 형성하는 일련의 문자
검색 패턴은 텍스트를 찾거나 텍스트를 바꾸는 연산이 될 수 있음
```
웹페이지에서 원하는 내용을 추출, 확인, 치환 하는데 사용된다.
```


생성
- var reg = /[찾고자하는 것]/[수정자]
- var reg = new RegExp('찾고자 하는것');

메소드
- reg객체.exec('정규식을 실행할 대상')  : reg객체에 저장된 값을 찾는다. 없으면 null
- reg객체.test('정규식을 실행할 대상') : reg객체에 저장된 값이 있는지 확인한다. 있으면 true, 없으면 false 반환

문자열 메소드에서의 정규식 사용
- str.match(reg객체) : str에 reg객체에 저장된 값이 있다면 반환함
- str.replace(reg객체, '바꾸려는 문자') : str에 reg객체에 저장된 값을 찾아 두번째 인자로 바꿈


특수 문자
```
/a./ : a와 뒤의 문자 하나를 찾음, 만약 실행할 대상에 a만 있다면 null이다.
() : 그룹
\w : word (A~Z, a~z, 0~9 중 문자 하나), 한글은 안된다.
\s : space, 공백
\b : 첫번째 단어 or 마지막 단어를 찾을때 씀, ex) \bLO : LO가 마지막에 나온것을 찾음, LO\b : LO가 처음에 나온것을 찾음


수량자
+ : 하나 이상인 것을 모두 선택함. ex) /\w+/면 하나 이상의 문자를 찾음
*
?

ex) /(\w+)\s(\w+)/ 이면, "adsFckj fdKj" 를 선택한다는 뜻이다.


```

옵션
없음 : 대소문자를 구분함
i : 대소문자를 구분하지 않음
g (global) : 찾는 문자를 모두 찾음 (중복되면 배열에 계속 넣음)
ig : i + g

캡처


# Error (try, catch, throw, finally)
try : 코드 블록에 오류가 있는지 테스트함
catch : 오류처리
throw : 사용자 정의 오류만들 수 있음
finally : try부분이 종료된 후 실행하는 코드

전체적으로 try-catch-finally로 예외를 처리한다.
1. try에서는 코드를 실행하는데, 예외가 발생하면 catch문으로 예외를 처리한다.
2. try에서 예외 발생시, throw로 사용자 지정 오류 메시지를 만들 수 있다. 
try{
...
if(x==0) // 예외인경우
  throw "x=0";
}
catch(err)
{
  message.innerHTML = "Input is" + err; // err은 throw값을 말한다.
}



```
JAVASCRIPT
try {
	/**
	 * 정상이라면 이 코드는 아무런 문제없이 블록의 시작부터 끝까지 실행된다.
	 * 하지만 경우에 따라 예외가 발생할 수 있다.
	 * 예외는 throw 문에 의해 직접적으로 발생할 수도 있고,
	 * 또는 예외를 발생시키는 메서드의 호출에 의해 발생할 수도 있다.
	 */
} catch (e) {
	/**
	 * 이 블록 내부의 문장들은 오직 try 블록에서 예외가 발생할 경우에만 실행된다.
	 * 이 문장들에선 지역 변수 e를 사용하여 Error 객체 또는 앞의 throw 다른 값을 참조할 수 있다.
	 * 이 블록에서는 어떻게든 그 예외를 처리할 수도 있고,
	 * 그냥 아무것도 하지 않고 예외를 무시할 수도 있고,
	 * 아니면 throw 를 사용해서 예외를 다시 발생시킬 수도 있다.
	 */
} finally {
	/**
	 * 이 블록에는 try 블록에서 일어난 일에 관계없이 무조건 실행될 코드가 위치한다.
	 * 이 코드는 try 블록이 어떻게든 종료되면 실행된다.
	 * try 블록이 종료되는 상황은 다음과 같다.
	 *   1) 정상적으로 블록의 끝에 도달했을 때
	 *   2) break, continue 또는 return 문에 의해서
	 *   3) 예외가 발생했지만 catch 절에서 처리했을 때
	 *   4) 예외가 발생했고 그것이 잡히지 않은 채 퍼져나갈 때
	 */
}


출처: https://webclub.tistory.com/71 [Web Club]
```

use strict : 엄격모드?로 실행되어야 함을 나타냄 (문법이 제약적이다)
- 왜 사용하는가? 보안성, 안좋은 코드를 바로 잡음

다른 객체의 메소드를 또다른 객체에 적용 시킬수 있다. call(), apply()
```
var person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person2 = {
  firstName:"John",
  lastName: "Doe",
}
person1.fullName.call(person2);  // Will return "John Doe"
```

# 클래스
class를 작성함, constructor()메소드 작성해야한다. 메소드는 "메소드 이름"()으로 시작한다.
static 메소드 : 프로토타입이 아닌 클래스 자체에 정의되어있음을 나타낸다.

# javascript Tip
- new, ==, eval() 을 피해라
- 지역변수를 사용하라
- 변수는 상단에 정의
Use {} instead of new Object()
Use "" instead of new String()
Use 0 instead of new Number()
Use false instead of new Boolean()
Use [] instead of new Array()
Use /()/ instead of new RegExp()
Use function (){} instead of new Function()

# 나쁜 코드
var i;
for (i = 0; i < arr.length; i++) { 
# 좋은 코드
var i;
var l = arr.length;
for (i = 0; i < l; i++) {

DOM의 접근 줄이기
var obj;
obj = document.getElementById("demo"); // 한번 접근한 걸로 족하다.
obj.innerHTML = "Hello";

# Form API (DOM Method)
checkValidity()	: 입력값이 유효한 값을 가졌는지 참, 거짓으로 반환
setCustomValidity()	Sets the validationMessage property of an input element.
validity : Contains boolean properties related to the validity of an input element.
  customError	Set to true, if a custom validity message is set.
  patternMismatch	Set to true, if an element's value does not match its pattern attribute.
  rangeOverflow	Set to true, if an element's value is greater than its max attribute.
  rangeUnderflow	Set to true, if an element's value is less than its min attribute.
  stepMismatch	Set to true, if an element's value is invalid per its step attribute.
  tooLong	Set to true, if an element's value exceeds its maxLength attribute.
  typeMismatch	Set to true, if an element's value is invalid per its type attribute.
  valueMissing	Set to true, if an element (with a required attribute) has no value.
  valid	Set to true, if an element's value is valid.
validationMessage : Contains the message a browser will display when the validity is false.
willValidate : Indicates if an input element will be validated.


# JavaScript Objects
====================
- 불, 숫자, 문자열은 new를 사용할경우 객체가 될 수 있다.
- 날짜, 수학, 정규식, 배열, 함수, 객체는 객체이다.
 
 Primitive : 기본 타입
 string, number, boolean, null, undefined이 있다.

set / get 을 사용할 수 있다.
```
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "",
  set lang(lang) {
    this.language = lang.toUpperCase();
  }
};

// Set an object property using a setter:
person.lang = "en";

// Display data from the object:
document.getElementById("demo").innerHTML = person.language;
```
Prototype : Date, Array, Person 등 이 있고, 객체와 같이 속성, 메소드가 있음


<hr>
# HTML DOM
JavaScript는 페이지의 모든 HTML 요소를 변경할 수 있습니다
JavaScript는 페이지의 모든 HTML 속성을 변경할 수 있습니다
JavaScript는 페이지의 모든 CSS 스타일을 변경할 수 있습니다
JavaScript는 기존 HTML 요소 및 속성을 제거 할 수 있습니다
JavaScript는 새로운 HTML 요소 및 속성을 추가 할 수 있습니다
JavaScript는 페이지의 모든 기존 HTML 이벤트에 반응 할 수 있습니다
JavaScript는 페이지에서 새로운 HTML 이벤트를 만들 수 있습니다

DOM 메소드
- 요소 찾기
document.getElementById : 태그를 아이디로 찾음
document.getElementsByTagName(name) : 태그를 태그 네임(div, p, span, ...)으로 찾음
document.getElementsByClassName(name) : 클래스 이름을 찾음
- 수정
element.innerHTML : 태그 안의 내용 변경
element.attribute = new value : 속성 변경
element.style.property = new style : 스타일 변경
element.setAttribute(attribute, value) : 속성 변경
- 생성 삭제
document.createElement(element)	: 새로운 HTML요소 생성
document.removeChild(element)	: HTML요소 삭제
document.appendChild(element)	: HTML 요소 추가
document.replaceChild(new, old) :	HTML 요소 대체
document.write(text)	: Write into the HTML output stream
- 이벤트핸들러
document.getElementById(id).onclick = function(){code}

[ HMTL 요소 찾기
document.anchors	Returns all <a> elements that have a name attribute	1
document.applets	Returns all <applet> elements (Deprecated in HTML5)	1
document.baseURI	Returns the absolute base URI of the document	3
document.body	Returns the <body> element	1
document.cookie	Returns the document's cookie	1
document.doctype	Returns the document's doctype	3
document.documentElement	Returns the <html> element	3
document.documentMode	Returns the mode used by the browser	3
document.documentURI	Returns the URI of the document	3
document.domain	Returns the domain name of the document server	1
document.domConfig	Obsolete. Returns the DOM configuration	3
document.embeds	Returns all <embed> elements	3
document.forms	Returns all <form> elements	1
document.head	Returns the <head> element	3
document.images	Returns all <img> elements	1
document.implementation	Returns the DOM implementation	3
document.inputEncoding	Returns the document's encoding (character set)	3
document.lastModified	Returns the date and time the document was updated	3
document.links	Returns all <area> and <a> elements that have a href attribute	1
document.readyState	Returns the (loading) status of the document	3
document.referrer	Returns the URI of the referrer (the linking document)	1
document.scripts	Returns all <script> elements	3
document.strictErrorChecking	Returns if error checking is enforced	3
document.title	Returns the <title> element	1
document.URL	Returns the complete URL of the document
]

# animate
setInterval
clearInterval

# BOM (Browser Object Model)
window객체는 모든 브라우저에 지원되고 브라우저의 창으로 나타난다.
모든 자바스크립트의 객체, 함수, 변수들은 자동으로 윈도우 객체의 멤버가 된다.
전역변수, 전역함수들은 윈도우객체의 속성, 메소드가 된다.
문서 객체도 윈도우의 객체이다. (window.document.getElementById("header")) == (document.getElementById("header"))

## window객체
window.innerHeight : 브라우저 창의 내부 높이
window.innerWidth : 브라우저 창의 내부 너비
window.open() : 새로운 창 열기
window.close() : 현재 창 닫기
window.moveTo() : 현재 창으로 이동
window.resizeTo() : 사이즈 재조정

## window.screen객체
window.screen.width : 방문자의 스크린 너비 픽셀
window.screen.height : 방문자의 스크린 높이 픽셀
window.screen.availWidth : 방문자의 사용가능한(최대 너비) 너비
window.screen.availHeight : 방문자의 사용가능한(최대 높이) 높이
window.screen.colorDepth : 디스플레이의 색상비트(24bit or 32bit) 반환
window.screen.pixelDepth : 

## window.location 객체
window.location.href : 현재 페이지의 URL반환
window.location.hostname : 웹 호스트의 도메인 이름을 반환
window.location.pathname : 현재 페이지의 경로와 파일 이름을 반환한다. (C:\\이런식)
window.location.protocol : 사용된 웹 프로토콜을 반환한다.
window.location.port : 인터넷 호스트 포트를 반환한다.
window.location.assign() : 새 문서 로드

## window.history 객체
- window. 의 접두사 없이 사용가능하다.
history.back() : 브라우저의 뒤로가기 기능
history.forward() : 브라우저의 앞으로가기 기능

## window.navigator
- window. 의 접두사 없이 사용가능하다.
navigator.appName
navigator.appCodeName
navigator.platform
navigator.cookieEnabled
navigator.product
navigator.appVersion
navigator.userAgent
navigator.language
navigator.onLine

## Timing Event
setTimeout(function, milliseconds)
setInterval(function, milliseconds)
clearTimeout()
clearInterval()
