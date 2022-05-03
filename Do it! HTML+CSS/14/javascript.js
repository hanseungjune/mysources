// var heading = document.getElementById('heading');
// heading.onclick = function(){
//   heading.style.color = "red";
// }

// var name = prompt("이름을 입력하세요.");
// console.log(name + "님 안녕하세요.");

// document.write("<b>" + name + "</b>님 안녕하세요");

// var currentYear = 2022;
// var birthYear;

// birthYear = prompt("태어난 년도를 작성하시오.");
// var age = currentYear - birthYear + 1;

// document.write("현재 년도는 " + currentYear +"년!<br>");
// document.write(birthYear + "년도에 태어난 당신의 나이는 " + age + "입니다.");

// var userNumber = prompt("숫자를 입력하시오.");

// if(userNumber % 3 === 0 ) {
//     alert("3의 배수가 맞습니다.");
// }
// else alert("3의 배수가 아닙니다.");

// var userNumber = prompt("숫자를 입력하시오.");

// if ( userNumber !== null) {
//     if ( userNumber % 3 === 0 ) {
//         alert("3의 배수입니다.")
//     }
//     else alert("3의 배수가 아닙니다.")
// }
// else alert("입력이 취소되었습니다.")

// var userNumber = prompt("숫자를 입력하시오.");

// if( userNumber !== null ) {
//     ( userNumber % 3 === 0 ) ? alert("3의 배수입니다.") : alert("3의 배수가 아닙니다.");3
// }
// else alert("입력이 취소되었습니다.")

// var numberOne = prompt("50미만인 숫자를 입력하시오.");
// var numberTwo = prompt("50미만인 숫자를 입력하시오.");

// if ( numberOne < 10 || numberTwo < 10 ) {
//     alert("숫자 2개 중 최소 하나는 10 미만입니다.");
// } else
//     alert('숫자 2개 중 10 미만인 수가 없습니다.');

// var numberOne = prompt("50미만 숫자");
// var numberTwo = prompt("50미만 숫자");

// if ( numberOne < 10 && numberTwo < 10 ) {
//     alert("숫자 둘다 10미만 숫자임");
// }
// else alert("둘중 하나는 10이상 숫자");

// var session = prompt("관심 세션을 선택해 주세요. 1-마케팅, 2-개발, 3-디자인");

// switch(session) {
//     case "1" : document.write("<p>마케팅 세션은 <b>201호</b>에서</p>");
//     break;
//     case "2" : document.write("<p>개발 세션은 <b>203호</b>에서</p>");
//     break;
//     case "3" : document.write("<p>디자인 세션은 <b>205호</b>에서</p>");
//     break;
//     default: alert("잘못 입력했습니다.");
// }

// var memNum = prompt("총 몇명인가요?");
// var colNum = prompt("한 줄에 몇명앉을 예정?");

// if (memNum % colNum == 0)
//     rowNum = parseInt(memNum / colNum);
// else
//     rowNum = parseInt(memNum / colNum) + 1;

// document.write("<table>");
// for (var i = 0; i < rowNum; i++) {
//     document.write("<tr>");
//     for (var j = 1; j < colNum + 1; j++) {
//         seatNum = i * colNum + j;
//         if (seatNum > memNum) break;
//         document.write("<td> 좌석" + seatNum + "</td>");
//     }
//     document.write("</tr>");
// }
// document.write("</table>");

// var sum = 0;

// sum += 1;
// sum += 2;
// sum += 3;
// sum += 4;
// sum += 5;
// document.write("1부터 5까지 더하면, 나오는 값은 <b>" + sum + "</b> 이다.");

// var i;
// var sum = 0;

// for ( i = 1; i < 6; i++) {
//     sum += i;
// }
// document.write("1부터 5까지의 합은<b> " + sum + " </b>입니다.");

// var i;
// var sum = 0;

// for ( i = 0 ; i < 1001 ; i ++ ) {
//     sum += i;
// }

// document.write("1부터 1000까지의 합은 <b> " + sum + "</b>이다.");

// var i, j;
// for ( i = 2 ; i < 10 ; i++ ) {
//     document.write("<div>");
//     document.write("<h3>" + i + "단</h3>")
//     for ( j = 1 ; j < 10 ; j++ ) {
//         document.write(i + "X" + j + "=" + (i*j) + "<br>");
//     }
//     document.write("</div>");
// }

// var n = prompt("숫자를 입력하세요.");
// var msg = "";

// if(n !== null) {
//     var facto = 1;
//     var i = 1;

//     while (i <= n) {
//         facto *= i;
//         i++;
//     }
//     msg = n + "! = " + facto; 
// }
// else document.write("값을 입력하지 않았습니다.");

// document.write( msg );

// var i, j;

// for (i = 2; i < 10; i++) {
//     document.write("<div>");
//     document.write("<h3>" + i + "단</h3>");
//     for (j = 1; j < 10; j++) {
//         document.write(i + "x" + j + "=" + (i * j) + "<br>");
//     }
//     document.write("</div>");


// if (i === 3) break;
// }

// var i;
// var n = 10;
// var sum = 0;

// for ( i = 2 ; i <= 10 ; i++ ) {
//     if ( i % 2 === 0 ) {
//         sum += i;
//     }
//     else continue;
//     document.write(i + "------" + sum + "<br>");
// }

// document.write("1부터 10까지 짝수끼리의 합은 " + sum + "입니다.");

var memNum = prompt("총 몇명이 오셨나여?");
var colNum = prompt("한 줄에 몇명 앉으시겠어요?");

if (memNum !== null || colNum !== null) {
    if (memNum % colNum == 0) {
        rowNum = memNum / colNum; }
    else rowNum = (memNum / colNum) + 1;
}
else document.write("값을 입력해 주십시오.");

document.write("<table>");
for ( var i = 0 ; i < rowNum ; i ++ ) {
    document.write("<tr>");
    for ( var j = 1 ; j <= colNum ; j++ ) {
        seatNo = i * colNum + j;
        if ( seatNo > memNum ) {
            break;
        } else 
        document.write("<td>좌석" + seatNo + "</td>");
    }
    document.write("</tr>")
}
document.write("</table>");







