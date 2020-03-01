# Syntax
$(selector).action() 

ex) 
$(this).hide()
$("p").hide()
$(".test").hide()
$("#this").hide()

$(document).ready(function(){
  $("#txt").css("color", "red");
});

$(function(){
  $("#txt").css("color", "red");
});

$(document).ready(function() 은 문서 객체를 먼저 불러온다는 뜻이다.


# 선택자
1. html 요소 선택 : $("p") // p태그 선택
2. html id 선택 : $("#test") // test id 선택
3. html class 선택 : $(".test") // test class 선택
4. $("p.intro") : p태그 + class=intro 인 태그만 선택
5. $("ul li:first") : ul태그의 li의 첫번째 요소만 선택
6. $("ul li:first-child") : ul태그의 li의 첫번째 자식들 선택
7. $("[href]") : href 속성이 있는 태그 모두 선택
8. $("a[target='_blank']") : a태그의 target속성이 _blank 인 것만 선택
9. $(":button") : 
10. $("tr:even") : 

# 이벤트 메소드
## mouse Event
click : 클릭
dblclick : 더블클릭
mouseenter : 마우스를 가져다댔을대
mouseleave : 요소에 마우스를 댔다가 벗어날 
mousedown : 요소를 왼쪽클릭 or 오른쪽 클릭할 
mouseup : 요소클릭후 땟을때
hover : mouseenter + mouseleave을 수행할 수 있다.
```
$(document).ready(function(){
  $("#p1").hover(function(){
    alert("You entered p1!");
  },
  function(){
    alert("Bye! You now leave p1!");
  }); 
});

hover일때는 enter을 적용한다. hover가 아닐때는 ,뒤의 function을 수행한다.
```

focus : form에서 포커스 될 때
blur : form에서 포커스되지 않을 때
on : 하나의 요소에 여러가지의 메소드를 입력할 때 사용한다.
```
$(document).ready(function(){
  $("p").on({
    mouseenter: function(){
      $(this).css("background-color", "lightgray");
    },  
    mouseleave: function(){
      $(this).css("background-color", "lightblue");
    }, 
    click: function(){
      $(this).css("background-color", "yellow");
    }  
  });
});

p태그에 enter, leave, click 메소드를 적용
```

## keyboard Event
keypress
keydown
keyup

## Form Event
submit
change
focus
blur

## Document/window event
load
resize
scroll
unload

# jQuery 효과
## hide and show
hide
show
toggle // $(selector).toggle(speed,callback); hide and show를 같이해준다.

## fade
fadeIn() // $(selector).fadeIn(speed,callback); 천천히 or 빠르게 보여준다.
fadeOut() // $(selector).fadeOut(speed,callback); 천천히 or 빠르게 없앤다.
fadeToggle() // $(selector).fadeToggle(speed,callback); 천천히 or 빠르게 보여주고 없앤다.
fadeTo() // $(selector).fadeTo(speed,opacity,callback); fadeOut인데, 투명도를 조절 할 수 있다.

## sliding
slideDown() // $(selector).slideDown(speed,callback); 천천히 or 빠르게 dropdown하여 보여줌
slideUp() // $(selector).slideUp(speed,callback); 천천히 or 빠르게 dropup함
slideToggle() // slideDown + slideUp, $(selector).slideToggle(speed,callback);

## animation
$(selector).animate({params},speed,callback);
- 선택자에 대해 params속성으로 speed의 속도로 바꾼다. 
Pre-defined Value : 'show', 'hide', 'toggle'가 있다.
height: 'toggle'이라고 하면 height가 접혔다가 펴졌다가 한다.

## stop animation
$(selector).stop(stopAll,goToEnd);

# Get Content - text, html, val
$(selector).text() : 선택자의 텍스트를 가져옴
$(selector).html() : 선택자의 html 코드를 가져옴
$(selector).val() : 선택자의 value값을 가져온다.

# Get Attributes - attr
$(selector).attr("속성이름ex(href)") : 선택자의 속성값을 가져옴

# Set Content - text, html, val
$(selector).text("내용") : 선택자의 텍스트를 바꾼다.
$(selector).html("내용") : 선택자의 html 코드를 바꾼다.
$(selector).val("내용") : 선택자의 value값을 바꾼다.

# Add Elements - append, prepend, after, before

