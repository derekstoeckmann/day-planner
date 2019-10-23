// Get stored textarea values from localStorage
$('#9a .text-val').val(localStorage.getItem('9a'));
$('#10a .text-val').val(localStorage.getItem('10a'));
$('#11a .text-val').val(localStorage.getItem('11a'));
$('#12p .text-val').val(localStorage.getItem('12p'));
$('#1p .text-val').val(localStorage.getItem('1p'));
$('#2p .text-val').val(localStorage.getItem('2p'));
$('#3p .text-val').val(localStorage.getItem('3p'));
$('#4p .text-val').val(localStorage.getItem('4p'));
$('#5p .text-val').val(localStorage.getItem('5p'));
// Add event listener to buttons that references their parent div
$('button').on('click', function () {
  let time = $(this).parent().attr('id');
  let text = $(this).siblings('textarea').val();
  // Store key: values for time and text
  localStorage.setItem(time, text);
});