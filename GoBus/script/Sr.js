// Инициализация индекса слайда
var slideIndex = 1;
showSlides(slideIndex);

// Функция добавляет или убавляет число к индексу слайда (переход вперед/назад)
function moveSlide(n) {
  showSlides(slideIndex += n);
}

// Основная функция для отображения слайдов
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1} // Если n больше количества слайдов, возвращаемся к первому слайду
  if (n < 1) {slideIndex = slides.length} // Если n меньше 1, переходим к последнему слайду
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; // Сначала скрываем все слайды
  }
  slides[slideIndex-1].style.display = "block"; // Показываем выбранный слайд
}


//поиск 
function startSearch() {
    const inputA = document.getElementById('inputA').value;
    const inputB = document.getElementById('inputB').value;
    const searchParams = new URLSearchParams({ a: inputA, b: inputB });

    window.location.href = `search.html?${searchParams.toString()}`;
}

// JavaScript-код для поиска и отображения результатов
function startSearch() {
    const inputA = document.getElementById('inputA').value;
    const inputB = document.getElementById('inputB').value;
    const searchParams = new URLSearchParams({ a: inputA, b: inputB });

    window.location.href = `search.html?${searchParams.toString()}`;
}

