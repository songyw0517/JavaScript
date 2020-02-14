Do it 자바스크립트+제이쿼리 입문
=================================
목적
----
javaScript 공부

방법
----
* 소스코드 작성
* 필요한 개념 정리
* 문법 정리
* 팁 정리

2장
----
# 데이터 형
- 문자형 : string형, "", ''으로 감싼다.
  > var s = "javascript";
  
  > var num = "100";

  > var tag=```"<h1>String</h1>"```;   
  > document.write(tag);
  > 로 작성하면 String이 출력된다.
  
  
- 숫자형
  > var s=100;
  
  > var t=Number("500"); //문자열500을 숫자로 변경
  
- 논리형(true, false)
  > var s = true;
  
  > var t=10 > 100; // false 저장
  
  >var k = Boolean("Hello"); // true 저장
  
- null & undefined 데이터
  > var s; //undefined 데이터형
  
  > var t = Hello;
  > var t = null; // t에 저장된 값을 비움
  
- typeof [변수 or 데이터] // 자료형을 알려줌
  > str="문자열";
  > typeof str;
  > 결과 : string

# 연산자
  - C언어와 비슷함
  - 문자결합 가능 (숫자형이 포함되어도 문자열로 결합됨)
    - ex) "do it " + "javascript" = "do it javascript"
    
3장(제어문)
-----------
- 조건문
  - if/else/else if
- 선택문
  - switch
- 반복문
  - while/for

C언어와 같다

4장(객체)
---------
# 객체 사용법
  - 객체.메소드();   //메소드 실행
  - 객체.속성;       //속성 가져옴
  - 객체.속성=값;    //속성 바꿈
  
# 객체 종류
  - 내장 객체
    - 문자, 날짜, 배열, 수학 객체 등
    
  - 브라우저 객체 모델 (BOM, Browser Object Model)
    - window : document, location 객체의 상위 객체
    - screen
    - location
    - history
    - navigator 등
    
  - 문서 객체 모델 (DOM, Document Object Model)
    HTML문서 구조를 말함,
# 객체 생성
참조 변수 = new 생성함수() //java, python 객체 생성과 같다
cf) 생성하는 문법이 조금 다르다!
```javascript
var tv=new Object();
tv.color="white";
tv.price=30000;
tv.info=function(){
	document.write("tv색상 : "+this.color,"<br>");
	document.write("tv가격 : "+this.price,"<br>");
}

var car={
	color:"black",
	price:50000,
	info:function(){
		document.write("tv색상 : "+this.color,"<br>");
		document.write("tv가격 : "+this.price,"<br>");
	}
};



document.write("<h1>tv 객체 메서드 호출</h1>");
tv.info();
document.write("<h1>car 객체 메서드 호출</h1>");
car.info();
```
  
# confirm객체
# location.href = "주소" //주소로 이동
