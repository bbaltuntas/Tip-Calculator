var billAmount, tip, totalTip, customTip, numberOP, tipPerson, total
let isValidate = false
let isClicked = false

$(".btn-calculate").on("click", function () {
    billAmount = Number($("#amount").val())
    customTip = Number($("#custom-tip").val())
    numberOP = Number($("#number-p").val())

    if (numberOP === 0) {
        $("#number-p").addClass("error-border")
        $(".error-text").css("display", "block")
        isValidate = false;
    } else {
        isValidate = true
        $("#number-p").removeClass("error-border")
        $(".error-text").css("display", "none")
    }
    if (!isClicked) {
        tip = customTip
    }
    if (isValidate) {
        totalTip = ((billAmount * tip) / 100)
        tipPerson = (totalTip / numberOP).toFixed(2)
        $("#tip-amount").text("$" + tipPerson)

        total = ((billAmount + totalTip) / numberOP).toFixed(2)
        $("#total").text("$" + total)
    }


})
$(".tip").on("click", function () {
    if (isClicked) {
        $(".tip").removeClass("selected-tip")
    }

    $(this).addClass("selected-tip")
    tip = Number(this.innerText.split("%", 1)[0])
    isClicked = true

    /*  if (!isClicked) {
          $(this).addClass("selected-tip")
          tip = Number(this.innerText.split("%", 1)[0])
          console.log(tip)
          isClicked = true
      } else {
          if ($(this).hasClass("selected-tip")) {
              $(this).removeClass("selected-tip")
              isClicked = false
          }
      }*/

})
$("#custom-tip").on("focus", function () {
    $(".tip").removeClass("selected-tip")
    isClicked = false
})
$(".btn-reset").on("click", function () {
    $("input").val("")
    $(".h1-amount").text("$0.00")
    $(".tip").removeClass("selected-tip")
    isClicked = false

})