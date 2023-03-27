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
const counter = document.getElementById("counter"); // отримуємо доступ до елементів DOM за їх айді
const btn = document.getElementById("btn");
//змінну зберігає поточне значення лічильника
let count = 0;
// функція, що буде виконуватись при кожному кліку на кнопку
function increment() {
    count++; // збільшуємо значення на 1
    counter.innerText = count; // оновлюємо вміст абзацу з новим значенням
}
// додаємо обробник події "click" до кнопки
btn.addEventListener("click", increment);


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