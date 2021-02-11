# JSON (<b>J</b>ava<b>S</b>cript <b>O</b>bject <b>N</b>otation)

## Exchanging Data
- browser와 server 사이에서 데이터를 바꿀 때 데이터가 텍스트일 수 있다.
- JavaScript의 Object를 JSON으로 변환하여 server로 보낼 수 있다.

## Sending Data
- JavaScript의 Object를 JSON으로 변환
``` javascript
    var myObj = { name: "John", age: 31, city: "New York" };
    var myJSON = JSON.stringify(myObj); // myObj를 JSON으로 변환
    window.location = "demo_json.php?x=" + myJSON;
```

## Receiving Data
- JSON을 JavaScript의 Object로 변환
``` javascript
    var myJSON = '{"name":"John", "age":31, "city":"New York"}';
    var myObj = JSON.parse(myJSON);
    document.getElementById("demo").innerHTML = myObj.name;
```

## Storing Data
- data를 저장하기 위해서는 특정 형식을 갖추어야한다.
- text는 특정 형식 중 하나임 -> JSON으로 맞출 수 있다.
``` javascript
    // Storing data:
    myObj = {name: "John", age: 31, city: "New York"}; // object
    myJSON = JSON.stringify(myObj); // object -> JSON
    localStorage.setItem("testJSON", myJSON); // 로컬 저장소의 testJSON에 myJSON을 저장

    // Retrieving data:
    text = localStorage.getItem("testJSON"); // 로컬 저장소의 testJSON의 값을 가져옴
    obj = JSON.parse(text); // JSON -> object
    document.getElementById("demo").innerHTML = obj.name;
```
- JSON은 text이기 때문에 server에 보내기 쉽다
- 모든 프로그래밍 언어에서 text를 사용하기 때문에 좋다.
- 즉, 서버에 보낼 때는 JSON으로, 서버에서 받아 JavaScript로 사용할 때는 Object로 바꾸어 사용할 수 있다.

# JSON 문법
- Data는 name/value의 쌍으로 이루어짐
- Data는 콤마로 구분 됨
- 중괄호 안에는 object가 들어있음
- 대괄호 안에는 arrays가 들어있음

## keys
- 큰 따옴표로 감싸진 문자열이어야 한다.
## values
- string/number/object/array/boolean/null 중에 하나의 타입이어야 한다.
- 큰 따옴표로 감싸야 한다.

## JSON 파일
- 형식 : .json
- MIME 형식 : application/json

# JSON vs XML
``` json
JSON

{"employees":[
  { "firstName":"John", "lastName":"Doe" },
  { "firstName":"Anna", "lastName":"Smith" },
  { "firstName":"Peter", "lastName":"Jones" }
]}
```
``` xml
XML

<employees>
  <employee>
    <firstName>John</firstName> <lastName>Doe</lastName>
  </employee>
  <employee>
    <firstName>Anna</firstName> <lastName>Smith</lastName>
  </employee>
  <employee>
    <firstName>Peter</firstName> <lastName>Jones</lastName>
  </employee>
</employees>
```
- 둘 다 "self describing"이다. // 사람이 읽을 수 있음
- 둘 다 hierarchical 이다. (계층적 구조)
- 둘 다 많은 프로그래밍 언어에서 사용됨
- 둘다 XMLHttpRequest에서 사용됨

## JSON이 XML과 다른점
- end tag를 사용하지 않음
- 짧음
- 읽고 쓰기가 빠름
- array사용이 가능함
- -> XML보다 JSON이 더 좋다!

## JSON, XML 과정비교
- Using XML
    - Fetch an XML document&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;: XML 문서 패치
    - Use the XML DOM to loop through the document&emsp;: XML 문서 사용
    - Extract values and store in variables&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;: 변수 추출 및 저장
- Using JSON
    - Fetch a JSON string&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;: JSON 패치
    - JSON.Parse the JSON string&emsp;: JSON 변환

# JSON Data Type
- String
``` json
    {"name":"song"}
```
- Number
``` json
    {"age":25}
```
- Object
``` json
    {
        "employee":{"name":"John", "age":30, "city":"New York"}
    }
```
- Array
``` json
    {
        "employees":[ "John", "Anna", "Peter" ]
    }
```
- Boolean
``` json
    { "sale":true }
```
- Null
``` json
    { "middlename":null }
```


