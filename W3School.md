# document.getElementById
==========================
document.getElementById("myH").innerHTML = "Hello World!"; // html요소 중 id값이 myH인 요소를 찾아서 Hello World!로 변경해라<br>
document.getElementById("myImg").src="pic_bulcon.gif"; // html요소중 id값이 myImg인 요소를 찾아서 src를 pic_bulcon.gif로 변경해라<br>
즉, document.getElementById("[ID이름]").[변경할 속성] = [변경할 내용]으로 변경할 수 있다.<br>
그러나 스타일 변경의 경우는 document.getElementById('demo')<b>.style.fontSize='35px</b>' 으로 지정해야한다.<br>

# 출력
======
1. innerHTML 사용 (위와 같다)
2. document.write () 사용
  document.write ([내용])
3. window.alert () 사용
  window.alert ([내용]) // 알람으로 알려줌
4.  console.log () 사용
  console.log([내용])

# 연산자
산술 : +, -, *, **, /, %, ++, --
할당 : =, +=, -=, *=, /=, %=, **=
문자열 : +, +=, 하나라도 문자열이 들어가면 숫자도 문자열로 계산됨
비교 : ==, ===, !=, !==, >, <, >=, <=, ? // ==은 값 비교, ===은 타입도 비교함, 1=="1"은 true고 1==="1"은 false임
논리 : &&, ||, !
유형 : type, instanceof
비트 : &, |, ~, ^, <<, >>, >>>


# 함수 (function)
=================
function [함수이름] ([파라미터]){
  [함수 내용]
}

function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

- 함수이름을 출력하면, 함수내용이 출력된다.
```
function toCelsius(f) {
  return (5/9) * (f-32);
}
document.getElementById("demo").innerHTML = toCelsius;

>>> function toCelsius(f) { return (5/9) * (f-32); } 출력됨
```

# 객체
var person = {name:"song", age:"??", height:"??"};
cf) = 이 아니다. : 임

속성접근 : person.name

# 이벤트
<element event='some JavaScript'>
-> <button onclick="함수이름 or 함수 내용">
여러가지 이벤트 : https://www.w3schools.com/jsref/dom_obj_event.asp

# 문자열 함수
var text="This is Practice Text."

문자열 길이 : text.length;
 
문자열 중 단어 찾기
indexOf(찾을 단어, [검색 시작 위치]) : text.indexOf("is"); -> 5 반환, 못 찾을경우 -1
lastIndexOf(찾을 단어, [검색 시작 위치]) : text.lastIndexOf("is"); -> 5반환 but 중복될 경우 뒤에있는 단어가 선택된다. , 못 찾을경우 -1
search(찾을 단어): text.search("is"); -> 5반환

## indexOf()와 search()와의 차이점
search는 두번째 매개변수를 갖지 못함, indexOf는 정규식을 사용할 수 없음

문자열 부분 추출
slice(start, end) : text.slice(5,7) -> is 반환, 5 ~ 6까지 반환, 음수도 가능 
substring(start, end) : slice와 같지만 음수 사용 불가
substr(start, length) : text.substr(5, 2) -> is반환, 인덱스5부터 2개 문자 추출

문자열 내용 변경
replace(찾을 단어, 바꿀 단어); -> text.replace("is", "are"); -> var text="this are Practice Text."
찾을 단어의 서식문자
  /IS/i : IS의 대소문자 구별없이 찾음
  /is/g : 중복되는 is를 모두 선택함
  
대문자, 소문자 변환
toUpperCase() : 대문자로 변경, text.toUpperCase(); -> 모두 대문자로
toLowerCase() : 소문자로 변경, text.toLowerCase(); -> 모두 소문자로

문자열 조인
concat(넣을 문자열, 합칠 문자열)
```
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);

>>> Hello World
```

공백 제거
- trim()
- 정규식
```
str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
```
- String.prototype 사용
```
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}
var str = "     Hello World!    ";
alert(str.trim());
```

문자 추출
charAt(position index) : 해당 인덱스에 있는 문자 추출
charCodeAt(position) : 해당 인덱스에 있는 문자의 유니코드 추출
Property access [ ] : 배열로 접근

문자열을 배열로 변환
split("나눌 기준 문자") : 문자열을 파라미터를 기준으로 나누어 배열에 저장함
```
function myFunction() {
  var str = "a,b,c,d,e,f";
  var arr = str.split(",");
  document.getElementById("demo").innerHTML = arr[0];
}

기타 문자열 메소드
https://www.w3schools.com/jsref/jsref_obj_string.asp

#
>>> arr=[a,b,c,d,e,f]; 저장
```
