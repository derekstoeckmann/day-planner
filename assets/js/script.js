const today = $('#today');

updatePage();

setInterval(function () {
  updatePage();
}, 1000);

// Get stored textarea values from localStorage
$('#9a').children('textarea').val(localStorage.getItem('9a'));
$('#10a').children('textarea').val(localStorage.getItem('10a'));
$('#11a').children('textarea').val(localStorage.getItem('11a'));
$('#12p').children('textarea').val(localStorage.getItem('12p'));
$('#1p').children('textarea').val(localStorage.getItem('1p'));
$('#2p').children('textarea').val(localStorage.getItem('2p'));
$('#3p').children('textarea').val(localStorage.getItem('3p'));
$('#4p').children('textarea').val(localStorage.getItem('4p'));
$('#5p').children('textarea').val(localStorage.getItem('5p'));
// Add event listener to buttons that references their parent div
$('button').on('click', function () {
  let time = $(this).parent().attr('id');
  let text = $(this).siblings('textarea').val();
  // Store key: values for time and text
  localStorage.setItem(time, text);
});

function updatePage() {
  today.text('It is ' + moment().format('MMMM Do YYYY, h:mm:ss a') + '.');

  switch (moment().format('h')) {
    case '9':
      $('#9a').prevAll().children('textarea').css('background-color', '#ccccff');
      $('#9a').children('textarea').css('background-color', '#ffccff');
      $('#9a').nextAll().children('textarea').css('background-color', '#ffffcc');
      break;
    case '10':
      $('#10a').prevAll().children('textarea').css('background-color', '#ccccff');
      $('#10a').children('textarea').css('background-color', '#ffccff');
      $('#10a').nextAll().children('textarea').css('background-color', '#ffffcc');
      break;
    case '11':
      $('#11a').prevAll().children('textarea').css('background-color', '#ccccff');
      $('#11a').children('textarea').css('background-color', '#ffccff');
      $('#11a').nextAll().children('textarea').css('background-color', '#ffffcc');
      break;
    case '12':
      $('#12p').prevAll().children('textarea').css('background-color', '#ccccff');
      $('#12p').children('textarea').css('background-color', '#ffccff');
      $('#12p').nextAll().children('textarea').css('background-color', '#ffffcc');
      break;
    case '1':
      $('#1p').prevAll().children('textarea').css('background-color', '#ccccff');
      $('#1p').children('textarea').css('background-color', '#ffccff');
      $('#1p').nextAll().children('textarea').css('background-color', '#ffffcc');
      break;
    case '2':
      $('#2p').prevAll().children('textarea').css('background-color', '#ccccff');
      $('#2p').children('textarea').css('background-color', '#ffccff');
      $('#2p').nextAll().children('textarea').css('background-color', '#ffffcc');
      break;
    case '3':
      $('#3p').prevAll().children('textarea').css('background-color', '#ccccff');
      $('#3p').children('textarea').css('background-color', '#ffccff');
      $('#3p').nextAll().children('textarea').css('background-color', '#ffffcc');
      break;
    case '4':
      $('#4p').prevAll().children('textarea').css('background-color', '#ccccff');
      $('#4p').children('textarea').css('background-color', '#ffccff');
      $('#4p').nextAll().children('textarea').css('background-color', '#ffffcc');
      break;
    case '5':
      $('#5p').prevAll().children('textarea').css('background-color', '#ccccff');
      $('#5p').children('textarea').css('background-color', '#ffccff');
      $('#5p').nextAll().children('textarea').css('background-color', '#ffffcc');
      break;
  }
}