$(document).ready(function() {
  var currentCalcField = $('#calcNum1'),
      currentTotal = 0,
      currentOperator = ' ',
      calcNum1 = Number($('#calcNum1').val()),
      input = $('#numInput'),
        calcBtn = $('#calcBtn'),
       plus = $('calcBtnPlus')
       minus = $('calcBtnMinus')
       multiply = $('calcBtnMult'),
       divide = $('calcBtnDvd'),
       clear = $('calcBtnClr'),
      answer  = '0',



      //This computes the Answer
  $('#calcBtn').on('click', function() {



    if (currentOperator === '+') {
      currentTotal = currentTotal + calcNum1
    }
    else if (currentOperator === '-') {
      currentTotal = currentTotal - calcNum1

    }
    else if (currentOperator === '*') {
      currentTotal = currentTotal * calcNum1

    }
    else if (currentOperator === '/') {
      currentTotal = currentTotal / calcNum1
    }


    $('#calcAnswerOutput').html(currentTotal)
    // currentCalcField.html('#calcAnswerOutput')

  })
// The Buttons
  $('#calcBtnPlus').on('click', function(){
    var calcNum1 = $('#calcNum1')
      currentOperator = '+'
      currentTotal = currentTotal + Number(calcNum1.val())
  alert(currentTotal)
    calcNum1.val('')
  })

  $('#calcBtnMinus').on('click', function(){
    var calcNum1 = $('#calcNum1')
      currentOperator = '-'
      currentTotal = currentTotal - Number(calcNum1.val())
  alert(currentTotal)
    calcNum1.val('')
  })
  $('#calcBtnMult').on('click', function(){
    var calcNum1 = Number($('#calcNum1').val())
      currentOperator = '*',
      currentTotal = Number(calcNum1.val()),
      currentTotal = currentTotal * Number(calcNum1.val())

      alert(currentTotal)
      alert(calcNum1.val(''))


    calcNum1.val('')
  })
  $('#calcBtnDvd').on('click', function(){
    var calcNum1 = $('#calcNum1')
      currentOperator = '/'
      currentTotal = currentTotal / Number(calcNum1.val())
        alert(currentTotal)
    calcNum1.val('')
  })

  $('#calcBtnClr').on('click', function(){

    currentCalcField.val('')
    $('#calcAnswerOutput').html('')
  })

  $('#calcBtn1').on('click', function(){
    var calcBtnValue = 1

    currentCalcField.val(currentCalcField.val() + calcBtnValue)
  })
  $('#calcBtn2').on('click', function(){
    var calcBtnValue = 2

    currentCalcField.val(currentCalcField.val() + calcBtnValue)
  })
  $('#calcBtn3').on('click', function(){
    var calcBtnValue = 3

    currentCalcField.val(currentCalcField.val() + calcBtnValue)
  })
  $('#calcBtn4').on('click', function(){
    var calcBtnValue = 4

    currentCalcField.val(currentCalcField.val() + calcBtnValue)
  })
  $('#calcBtn5').on('click', function(){
    var calcBtnValue = 5

    currentCalcField.val(currentCalcField.val() + calcBtnValue)
  })
  $('#calcBtn6').on('click', function(){
    var calcBtnValue = 6

    currentCalcField.val(currentCalcField.val() + calcBtnValue)
  })
  $('#calcBtn7').on('click', function(){
    var calcBtnValue = 7

    currentCalcField.val(currentCalcField.val() + calcBtnValue)
  })
  $('#calcBtn8').on('click', function(){
    var calcBtnValue = 8

    currentCalcField.val(currentCalcField.val() + calcBtnValue)
  })
  $('#calcBtn9').on('click', function(){
    var calcBtnValue = 9

    currentCalcField.val(currentCalcField.val() + calcBtnValue)
  })
  $('#calcBtn0').on('click', function(){
    var calcBtnValue = 0

    currentCalcField.val(currentCalcField.val() + calcBtnValue)
  })

})
