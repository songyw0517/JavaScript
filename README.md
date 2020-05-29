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

----
# 변수이름 규칙
	> 문자, 숫자, _, $ 사용이 가능하다.
	> 변수의 첫 글자는 문자, _, $만 가능하다. (숫자 사용불가)
	> 변수는 대소문자를 구분한다.
	> 키워드는 변수로 사용이 불가능하다.
	

# 데이터 형
	> Javascript의 데이터 형에는 크게 String, Number, Object로 구성된다.
	> Javascript의 데이터 형은 var밖에 없어서? 가진 값에 따라 타입이 달라진다.

1. 문자형(String) : ""나 ''로 문자열의 값을 가지는 변수이다.
	> var s = "javascript";
	> var num = "100";
	>
	> var tag=```"<h1>String</h1>"```;   
	> document.write(tag);
	> 로 작성하면 String이 출력된다.
  
  
2. 숫자형
	> var s=100;
	> var t=Number("500"); //문자열500을 숫자로 변경
  
3. 논리형(true, false)
	> var s = true;
	> var t=10 > 100; // false 저장
	> var k = Boolean("Hello"); // true 저장
  
4. null & undefined 데이터
	> var s; //undefined 데이터형
	>
	> var t = Hello;
	> var t = null; // t에 저장된 값을 비움
5. 배열
	> var cars = ["Saab", "Volvo", "BMW"];

6. 객체(Object)
	> var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
	
# 추가
	> var y = 123e5;      // 12300000
	> var z = 123e-5;     // 0.00123
	> var x = 34.00;	    // 34, 소수점 이하 필요없는 0은 출력안함
	> var car;    // Value is undefined, type is undefined
	> car = undefined;    // Value is undefined, type is undefined
	> var car = "";    // The value is "", the typeof is "string"
	> 
	> var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
	> person = null;    // Now value is null, but type is still an object // 값은 NULL이지만, 타입은 여전히 object이다.
	> 
	> var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
	> person = undefined;   // Now both value and type is undefined // 둘다 undefined가 된다.
	> 
	
# 연산자
1. 산술연산 : +, -, *, **, /, %, ++, --
2. 할당 : =, +=, -=, *=, /=, %=, **=
3. String 연산
	+연산
	> "John"+" "+"Doe" -> "John Doe"
	
	+=연산
	> var txt1 = "What a very "
	> txt1 += "nice day"
	> -> txt1 = "What a very nice day"
	
	String 과 Number의 연산 -> 문자열
	> var x = "Hello" + 16 + 4 -> Hello164
	> var x = 16 + 4 + "Hello" ->20Hello  // 연산 순서에 따라 연산 결과가 달라진다.
4. 비교연산 : ==, ===, !=, !==, >, <, >=, <=
5. 논리연산 : &&, ||, !
6. 타입연산 : typeof, instanceof
7. bitwise연산 : &, |, ~, ^, <<, >>, >>>

# 함수 (function)
	> function name(parameter1, parameter2, parameter3){
	//code
	}

# 객체
	> 하나의 변수에 여러개의 속성 및 메소드를 갖고 있는 데이터 타입이다.
	>
	> var person = {
  	firstName: "John",
	lastName : "Doe",
	id       : 5566,
	fullName : function() {
		return this.firstName + " " + this.lastName;
		}
	};
	> person 의 속성 : firstName, lastName, id
	> person 의 메소드 : fullName()
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
    
