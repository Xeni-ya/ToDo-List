// Находим необходимые элементы DOM и записываем в переменные
// Создаем функцию createTask(). Внутри функции:
// Создаем новый элемент списка с помощью метода (createElement)
// Присваиваем текст из поля ввода в качестве содержимого новой задачи (textContent)
// Добавляем новую задачу в список с помощью метода (append)
// Очищаем поле ввода
// Создаем функцию checkTask(). Внутри функции:
// Проверяем, что кликнули на элемент списка (event.target)
// Если условие выполняется, то переключаем состояние выполнения задачи, добавляя или удаляя класс у элемента списка (element.classList.toggle)
// Добавляем функцию-обработчик к событию клика на кнопку (addEventListener)
// Добавляем функцию-обработчик к событию клика на список задач (addEventListener)

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

function createTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
  alert('Введите задачу.');
  return;
  }
  const newElement = document.createElement('li');
  newElement.textContent = taskText;
  taskList.append(newElement);
  taskInput.value = '';
  taskInput.focus();
  }

function checkTask(evt) {
  if (evt.target.tagName === 'LI') {
    // Код, который будет выполнен при клике на элемент <li>
    evt.target.classList.toggle('completed'); // Переключаем класс "completed"
  }
}

addButton.addEventListener('click', createTask);
taskList.addEventListener('click', checkTask);
