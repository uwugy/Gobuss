//поиск
function startSearch() {
  const inputA = document.getElementById("inputA").value;
  const inputB = document.getElementById("inputB").value;
  const searchParams = new URLSearchParams({ a: inputA, b: inputB });

  window.location.href = `search.html?${searchParams.toString()}`;
}

// JavaScript-код для поиска и отображения результатов
function startSearch() {
  const inputA = document.getElementById("inputA").value;
  const inputB = document.getElementById("inputB").value;
  const searchParams = new URLSearchParams({ a: inputA, b: inputB });

  window.location.href = `search.html?${searchParams.toString()}`;
}

AOS.init();
