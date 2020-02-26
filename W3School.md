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
  
  >>> arr=[a,b,c,d,e,f];
}
```

기타 문자열 메소드
https://www.w3schools.com/jsref/jsref_obj_string.asp

# 숫자
- 자바스크립트는 int, short, long, float, double등의 타입을 정하지 않는다. 
- 항상 부동 소수점 숫자로 저장된다.
- 소수점 아래의 0은 표시되지 않는다.

# 숫자 메소드
문자열로 변경 : toString();

소수점 아래 어디까지 표현 : toExponential("자리수") ->
```
var x = 9.656;
x.toExponential(2);     // returns 9.66e+0
x.toExponential(4);     // returns 9.6560e+0
x.toExponential(6);     // returns 9.656000e+0
```

숫자를 문자열로 표현, 소수점 아래부터 반올림해서 보여줌 : toFixed("소수점 아래 어디까지?")
숫자를 지정된 길이로 표현함 : toPrecision("몇자리까지 표현")

변수를 숫자로 변경
The Number() method
The parseInt() method
The parseFloat() method

숫자 예약어
NaN : 유효한 숫자가 아님을 나타냄, 숫자를 문자열로 나누면 출력됨
- isNaN("변수") : NaN일경우 true 출력
 Infinity or -Infinity : 자바스크립트가 리턴 가능한 최대, 최소 값이다. 
MAX_VALUE : 최대값
MIN_VALUE : 최솟값

# 배열
배열.length : 배열의 길이 반환
배열의 마지막 값 : 배열[배열.length -1]
배열 마지막에 추가 : 배열.push("값") | 배열[배열.length] = 값 | 배열[원하는곳] = 값

함수
Array.isArray(배열) : 배열이 배열인지 확인
배열.toString(); : 배열을 문자열로 바꿈 (콤마도 들어간다)
배열.join("묶을때 사용할 문자") : 배열을 문자로 묶어서 문자열로 만든다.
배열.pop() : 배열의 마지막 값 반환 & 삭제
배열.push("값") : 배열의 마지막에 값 추가
배열.shift() : 배열의 첫번째 값을 반환하고, 삭제함
배열.unshift() : 배열의 첫번째에 값을 추가함
배열.splice(2,0,"lemon", "kiwi") : 배열 2인덱스부터 lemon과 kiwi 값을 중간에 추가한다. (0은 삭제할 요소가 없다는 뜻이다. 1이면 그 요소를 삭제하여 반환한다.)

splice함수 : 배열의 중간 요소를 없앨때 유용한 함수이다.
splice(0, 1) : 배열[0]에서부터 1개를 삭제하고 배열을 연결한다.
배열.concat(배열2, ...) : 배열에 배열2, ...을 연결한다.
배열.slice(1, 2) : 배열[1] ~ 배열[2]까지 선택함
배열.sort() : 배열 정렬 // (문자열에서만 잘 작동한다.)
배열.reverse() : 배열 반전

숫자 정렬
오름차순 sort() : points.sort(function(a, b){return a - b});
내림차순 sort() : points.sort(function(a, b){return b - a});
랜덤으로 sort() : points.sort(function(a, b){return 0.5 - Math.random()});

배열에서 최댓값 찾기
Math.max.apply(null, arr);

배열에서 최솟값 찾기
Math.min.apply(null, arr);

배열의 각각의 값에 함수적용
배열.forEach(함수이름);


