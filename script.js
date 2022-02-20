

$('*').css({
	boxSizing : 'border-box'
});

$("#myInput").css({
	backgroundImage : "url(/css/searchicon.png)",
	backgroundPosition : "10px 12px",
	backgroundRepeat : "no-repeat",
	width : "100%",
	fontSize : "16px",
	padding : "10px 20px 10px 40px",
	border : "1px solid #ddd",
	marginBottom : "0px"
});

$("#myUL").css({
	listStyleType : "none",
	padding : "10px",
	margin : "10px"
});

$("#myUL li a").css({
	border : "1px solid #ddd",
	marginTop : "5px",
	backgroundColor : "#f6f6f6",
	padding : "12px",
	textDecoration : "none",
	fontSize : "18px",
	color : "black",
	display: "block"
});

$("#myUL li a:hover:not(.header)").css({
	backgroundColor : "#eee"
});


function mySearch() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


$(".card-img").css(
{
    height:"500px",
    width:"450px",
})

           
$(".card-img").mouseout(function()
{
       $(this).animate({
        height:"500px",
        width:"450px",
       
                        })
});
    
$(".card-img").mouseover(function()
{
    $(this).animate({
            height:"550px",
            width:"470px",
                        })
});
$(".leftimg").css("text-align", "center");
    
// $("#myInput").focus(function()
// {
//     $(this).css("background-color", "#F0E68C");
// });
//   $("#myInput").blur(function()
// {
//     $(this).css("background-color", "#2E8B57");
// });

$(".description").css( { 
    marginLeft : "15.5vw",
    marginRight : "15.5vw",
	fontSize :"1.2vw",
   textAlign: "center",
});
// $(".description").css( { 
// "font-family" : "Comic Sans MS", "Comic Sans": "cursive" });


$(".content").css({
	"position" : "absolute",
	"top" : "50%",
	"left" : "50%",
	"transform" : "translate(-50%, -50%)",
	"width" : "500px",
	"height" : "670px",
	"background-color" : "#2E8B57",
	"box-sizing" : "border-box",
	"padding" : "10px",
	"z-index" : "100",
	"display" : "none"
});

$(".close-btn").css({
	"position" : "absolute",
	"right" : "20px",
	"top" : "15px",
	"background-color" : "#f1d119",
	'color' : 'black',
	'border-radius' : '50%',
	'padding' : '4px'
});


function togglePopup() {
	$(".content").toggle();
}

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}
for(var i = 1; i < 9; i++){
	document.getElementById("id" + i).innerHTML = "Rating: " + getRandomArbitrary(8, 10).toFixed(2);
}

