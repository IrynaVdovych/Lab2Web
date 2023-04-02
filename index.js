//!LABORATORY WORK 3!
//TASK 1
alert("Колірна роздільна здатність екрану: " + screen.colorDepth + " біт на піксель.");
//TASK 2
function sayHello() {
  // Запитати користувача ввести ім'я
  var name = prompt("Enter your name:");

  // Перевірити, чи користувач ввів ім'я
  if (name != null && name != "") {
    // Показати повідомлення з привітанням
    alert("The dog's name is " + name + "!");

    // Занести введене ім'я у текст абзацу
    document.getElementById("student").textContent = name;
  }
}
//TASK 3
function redirectToGoogle() {
  // відкриваємо діалогове вікно з запитанням про перехід на сторінку Google
  var result = confirm("Open Gorgi Wiki?");

  if (result) {
    // якщо користувач натиснув на кнопку ОК, то переходимо на сторінку Google
    window.location.href = "https://en.wikipedia.org/wiki/Welsh_Corgi";
  } else {
    // якщо користувач натиснув на кнопку Cancel, то виводимо повідомлення і залишаємося на поточній сторінці
    alert("Request was denied");
  }
}
//TASK 4
let newWindow; //оголошуємо змінну
function firstFunction() {
  newWindow = window.open("https://www.akc.org/expert-advice/health/puppy-shots-complete-guide/", "_blank");
}
function secondFunction() {
  newWindow.close();
}





//!LABORATOTY WORK 4!
//TASK 11
window.onload = function () { // Відкриваємо нове вікно після завантаження сторінки
  setTimeout(function () { //Щоб відкрити нове вікно через 3 секунди після завантаження сторінки
    var newWindow = window.open('', '', 'width=300,height=600');
    newWindow.document.write('The window is opened.');

    // Змінюємо напис через 3 секунди після відкривання вікна
    setTimeout(function () {
      newWindow.document.body.innerHTML = '3 seconds have lasted';
    }, 3000);
  }, 3000);
};

//TASK 5
function showWindow() { // Обробник події для кнопки
  // Затримка для відображення вікна після натискання на кнопку
  setTimeout(function () {
    var input = document.getElementById("myInput");
    var text = input.value;
    alert(text);
    // Очистка рядка вводу
    input.value = "";
  }, 3000);
}

//TASK 17
let counter = 0;
let intervalId = null;
function startTimer() {
  intervalId = setInterval(incrementCounter, 1000);
}
function incrementCounter() {
  counter++;
  document.getElementById("counter").innerText = counter;
}
document.getElementById("btn").addEventListener("click", startTimer);


//TASK 3 
const image = document.querySelector('img'); // Отримуємо елемент <img> зі сторінки
// Створюємо масив з URL-адресами картинок
const imageUrls = [
  'lovelyCorgi.jpg',
  'lovelyCorgiOne.jpg',
  'lovelyCorgiTwo.jpg'
];
let index = 0; // Початковий індекс для масиву URL-адресів картинок
setInterval(() => {
  index = (index + 1) % imageUrls.length; // Обчислюємо індекс наступної картинки
  const nextImageUrl = imageUrls[index];
  // Створюємо новий об'єкт Image для наступної картинки
  const nextImage = new Image();
  nextImage.src = nextImageUrl;
  nextImage.onload = () => {
    // Анімація зміни картинки
    image.style.opacity = 2;
    setTimeout(() => {
      image.src = nextImageUrl;
      image.style.opacity = 2;
    }, 2000); // Тривалість анімації: 1 секунда
  };
}, 2000); // Зміна картинки кожні 2 секунди




//!LABORATOTY WORK 5!
//TASK 1
function checkNumbers() {
  const input1 = document.getElementById("input1").value.trim();
  const input2 = document.getElementById("input2").value.trim();

  // перетворення введеного рядка в масив чисел
  const numbers1 = input1.split(" ").map(Number);
  const numbers2 = input2.split(" ").map(Number);

  // перевірка, чи містяться числа з другого рядка в першому масиві чисел
  const found = numbers2.some(number => numbers1.includes(number));

  // виведення результату
  const resultElement = document.getElementById("demo");
  resultElement.textContent = found ? "Так" : "Ні";
}

//TASK 30
function mergeArrays() {
  // Отримуємо значення з полів введення
  const input3 = document.getElementById("input3").value;
  const input4 = document.getElementById("input4").value;
  // Розділяємо рядки на масиви за допомогою коми та видаляємо зайві пробіли
  const array3 = input3.split(",").map((item) => item.trim());
  const array4 = input4.split(",").map((item) => item.trim());
  // Об'єднуємо масиви та видаляємо повторювані значення
  const mergedArray = [...new Set([...array3, ...array4])];
  // Виводимо результат у абзац з id="result"
  document.getElementById("result").innerHTML = mergedArray.join(", ");
}

//TASK 21
function processInput() {
  const input = document.getElementById("inputField").value;
  const values = input.split(",").map(Number);
  if (values.length % 2 !== 0) {
    alert("Помилка: Кількість чисел має бути парним числом");
    return;
  }
  const numRows = values.length / 2;
  let count = 0;
  const table = document.getElementById("myTable");
  for (let i = 0; i < numRows; i++) {
    const row = table.insertRow();
    for (let j = 0; j < 2; j++) {
      const cell = row.insertCell();
      cell.innerHTML = values[count];
      count++;
    }
  }
}


//TASK 26
function getInputArray() {  // Функція для формування масиву з введених даних
  const input = document.getElementById("input5").value;
  const inputArray = input.split(",").map(item => item.trim());
  return inputArray;
}
// Функція для виводу результату у абзац
function setResult(result) {
  const output = document.getElementById("result26");
  output.textContent = result;
}
// Функція для виводу результату першої функції у абзац
function setFirstResult(result) {
  const output = document.getElementById("firstResult");
  output.textContent = result;
}
// Функція, яка повертає перших n елементів масиву
function getFirst(array, n) {
  if (n < 0) {
    n = array.length + n;
  }
  return array.slice(0, n);
}
// Функція, яка формує масив з введених даних та викликає getFirst
function getFirstResult() {
  const inputArray = getInputArray();
  const n = document.getElementById("n").value;
  const result = getFirst(inputArray, n);
  setFirstResult(result);
}
// Функція, яка формує масив з введених даних та викликає getFirst
function getResult() {
  const inputArray = getInputArray();
  const result = inputArray;
  setResult(result);
}

//TASK 29
function countDuplicates() {
  // Отримуємо введені дані з поля вводу
  const input = document.getElementById("input7").value;
  // Розділяємо введений рядок на масив за допомогою коми
  const array = input.split(",");
  // Створюємо об'єкт, який буде містити кількість повторюваних елементів
  const counts = {};
  // Проходимось по кожному елементу масиву і збільшуємо значення в об'єкті counts
  array.forEach((element) => {
    counts[element] = (counts[element] || 0) + 1;
  });
  // Лічильник повторюваних елементів
  let count = 0;
  // Проходимось по кожному елементу в об'єкті counts і збільшуємо лічильник, якщо значення > 1
  for (const key in counts) {
    if (counts.hasOwnProperty(key)) {
      if (counts[key] > 1) {
        count++;
      }
    }
  }
  // Виводимо результат
  alert(`Кількість повторювальних елементів: ${count}`);
}


//!LABORATOTY WORK 6!
//TASK 30
function checkTimeFormat() {
  const input8 = document.getElementById("input8").value;
  const pattern = /^([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/;
  if (pattern.test(input8)) {
    alert("Time inputed in the right format HH:MM:SS");
  } else {
    alert("Time inputed in the wrong format");
  }
}
//TASK 28
function checkDate() {
  const input9 = document.getElementById("inputDate").value;
  const regex = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/;

  if (regex.test(input9)) {
    const [day, month, year] = input9.split("/");
    const dateObj = new Date(`${month}/${day}/${year}`);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = dateObj.toLocaleDateString('en-US', options);
    document.getElementById("output3").innerHTML = `Valid date: ${formattedDate}`;
  } else {
    document.getElementById("output3").innerHTML = "Invalid date format!";
  }
}

//TASK 24
function checkIPAddress() {
  const ipInput = document.getElementById("ip_address").value;
  const ipPattern = /^(\d{1,3}\.){3}\d{1,3}$/;
  if (ipPattern.test(ipInput)) {
    const ipNumbers = ipInput.match(/\d+/g);
    let validIP = true;
    for (let i = 0; i < ipNumbers.length; i++) {
      const num = parseInt(ipNumbers[i]);
      if (num < 0 || num > 255) {
        validIP = false;
        break;
      }
    }
    if (validIP) {
      document.getElementById("result15").innerHTML = "Your IP-address is valid.";
    } else {
      document.getElementById("result15").innerHTML = "Your IP-address is not valid.";
    }
  } else {
    document.getElementById("result15").innerHTML = "Input a valid IP-address.";
  }
}

//TASK 21
function replaceString() {
  const input10 = document.getElementById('input10').value;
  const pattern1 = /aaa/;
  const result4 = input10.replace(pattern1, '!');
  document.getElementById('result4').innerHTML = result4;
}

//TASK 19
function findWords() {
  const textt = document.getElementById("text-inputt").value;
  const patternn = /a\W+b/g;
  const matches = textt.match(patternn);
  const outputt = document.getElementById("outputt");
  outputt.innerText = matches.join("\n");
  }
