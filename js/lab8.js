//!LABORATOTY WORK 8!
//TASK 1
function getLastChar() {
    const inputText30 = document.getElementById("input-text30").value;
    const lastChar30 = String.fromCharCode(inputText30.charCodeAt(inputText30.length - 1));
    document.getElementById("last-char30").innerHTML = lastChar30;
}
//TASK 2
const checkboxes = document.querySelectorAll('input[type=checkbox]');
const textField = document.getElementById('text-field');

function updateCheckedCount() {
  const checkedCount = document.querySelectorAll('input[type=checkbox]:checked').length;
  textField.value = 'Вибрано: ' + checkedCount;
}

checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('click', updateCheckedCount);
});