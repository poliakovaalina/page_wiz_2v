$(document).ready(function () {
  $(".slider").slick({
    focusOnSelect: true,
    centerMode: true,
    infinite: false,
    arrows: false,
    adaptiveHeight: true,
    swipe: true,
    speed: 500,
    mobileFirst: true,
    slidesToShow: 1,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    touchThreshold: 30,
    responsive: [
      {
        breakpoint: 414,
        settings: {
          centerMode: true,
          swipe: true,
          focusOnSelect: true,
          infinite: false,
          arrows: false,
          adaptiveHeight: true,
          variableWidth: true,
          swipe: true,
          swipeToSlide: true,
          touchMove: true,
          touchThreshold: 30,
          speed: 500,
          mobileFirst: true,
        },
      },
    ],
  });
  $(".sliderbig").slick({
    centerMode: true,
    slidesToShow: 2,
    speed: 500,
    index: 2,
    variableWidth: true,
    adaptiveHeight: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    touchThreshold: 30,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          touchThreshold: 30,
          slidesToShow: 2,
          variableWidth: true,
          adaptiveHeight: true,
          touchMove: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          swipe: true,
          swipeToSlide: true,
          touchThreshold: 30,
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
          variableWidth: true,
          adaptiveHeight: true,
          touchMove: true,
        },
      },
    ],
  });
});

const checkbox = document.querySelector(".Switcher__checkbox");
console.dir(checkbox);
checkbox.addEventListener("change", function () {
  if (this.checked) {
    $(".container_ios").addClass("box-add");
    $(".container_ios").removeClass("box-rem");
    $(".container-android").addClass("box-rem");
    $(".container-android").removeClass("box-add");

    console.log("checked");
  } else {
    $(".container_ios").removeClass("box-add");
    $(".container_ios").addClass("box-rem");
    $(".container-android").addClass("box-add");
    $(".container-android").removeClass("box-rem");
    console.log("unchecked");
  }
  var hiddenElement = document.getElementById("formBtn");
  var btn = document.getElementById('sectionBtn'); 
  function handleButtonClick() {
     hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
  }
  btn.addEventListener('click', handleButtonClick);
  
  
});
const joinBtnIosRef = document.getElementById("joinBtnIos");
const joinBtnAndroidRef = document.getElementById("joinBtnAndroid");
joinBtnAndroidRef.addEventListener("click", () => {
  const checkbox = document.querySelector(".Switcher__checkbox");
  checkbox.click();
  $(".container_ios").removeClass("box-add");
  $(".container_ios").addClass("box-rem");
  $(".container-android").addClass("box-add");
  $(".container-android").removeClass("box-rem");
});

joinBtnIosRef.addEventListener("click", () => {
  const checkbox = document.querySelector(".Switcher__checkbox");

  if (checkbox.checked === false) {
    checkbox.click();
    $(".container_ios").addClass("box-add");
    $(".container_ios").removeClass("box-rem");
    $(".container-android").addClass("box-rem");
    $(".container-android").removeClass("box-add");
  }

});

$(".section-start-testing_btn").on("click", function () {
  $(".wrapper-form").removeClass("box-rem");
  $(".wrapper-form").addClass("box-add");
});

$(".testing-form_btn_false").on("click", function () {
  $(".wrapper-form").removeClass("box-add");
  $(".wrapper-form").addClass("box-rem");
  $("form[name=testingForm]").trigger("reset");
});

$('#email').bind('input', function(){  
  checkParams() 
});
$('#name').bind('input', function(){
checkParams()
});
$('#phone').bind('input', function(){
checkParams()
});

function checkParams() {
  var name = $("#name").val();
  var email = $("#email").val();
  var phone = $("#phone").val();
  if (name.length >= 2 && email.match(/@/) && phone.length >= 12) {
    $("#submit").removeAttr("disabled");
    $("#submit").addClass("testing-form_btn_true_color");
  } else {
    $("#submit").attr("disabled", "disabled");
    $("#submit").removeClass("testing-form_btn_true_color");
  }
}

// function checkParamsPhone() {
//   var phone = $("#phone").val();
//   var email = $("#email").val();
//   if (phone.length >= 12 && email.length != '') 
//   { $("#submit").removeAttr("disabled");
//     $("#submit").addClass("testing-form_btn_true_color");
//   } else {
//    $("#submit").attr("disabled", "disabled");
//     $("#submit").removeClass("testing-form_btn_true_color");
//   }
// }

$('#emailInput').bind('input', function(){ 
  checkParamsIos()
});
$('#nameInput').bind('input', function(){ 
  checkParamsIos()
});
$('#phoneInput').bind('input', function(){ 
  checkParamsIos()
}); 

function checkParamsIos() {
  var name = $("#nameInput").val();
  var email = $("#emailInput").val();
  var phone = $("#phoneInput").val();
  if (name.length >= 2 && email.match(/@/) && phone.length >= 12) {
    $("#submitInput").removeAttr("disabled");
    $("#submitInput").addClass("testing-form_btn_true_color");
  } else {
    $("#submitInput").attr("disabled", "disabled");
    $("#submitInput").removeClass("testing-form_btn_true_color");
  }
}
// function checkParamsIosPhone() {
//   var phone = $("#phoneInput").val();
// var email = $("#emailInput").val();
//   if (phone.length >= 12 && email.length != '') { 
//     $("#submitInput").removeAttr("disabled");
//     $("#submitInput").addClass("testing-form_btn_true_color");
//   } else {
//     $("#submitInput").attr("disabled", "disabled");
//     $("#submitInput").removeClass("testing-form_btn_true_color");
//   }
// }

function up() {
  var top = Math.max(
    document.body.scrollTop,
    document.documentElement.scrollTop
  );
  if (top > 0) {
    window.scrollBy(0, (top + 50) / -20);
    t = setTimeout("up()", 15);
  } else clearTimeout(t);
  return false;
}
const joinClickRef = document.getElementById("joinClick");
console.log(joinClickRef)
joinClickRef.addEventListener("click", (event) => {
  event.preventDefault();
  up();
});

$(function(){
  $("#phone").mask("389999999999", {placeholder: ""});
});
$(function(){
  $("#phoneInput").mask("389999999999", {placeholder: ""});
});


var hiddenElementInput = document.getElementById("formBtnInput");
var btnInput = document.getElementById('sectionBtnInput');
function handleButtonClick() {
   hiddenElementInput.scrollIntoView({block: "center", behavior: "smooth"});
}
btnInput.addEventListener('click', handleButtonClick);

