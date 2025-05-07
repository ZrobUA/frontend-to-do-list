function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.className = 'flex justify-between items-center bg-gray-700 p-2 rounded-lg';
    li.innerHTML = `
        <span>${taskText}</span>
        <button onclick="this.parentElement.remove()" class="text-red-400 hover:text-red-600">✖</button>
    `;

    document.getElementById('taskList').appendChild(li);
    input.value = '';
}

function toggleModal() {
    document.getElementById('modal').classList.toggle('hidden');
    document.getElementById('modal').classList.toggle('flex');
}

function register(e) {
    e.preventDefault();

    // Отримуємо ім’я з форми
    const name = e.target.querySelector('input[type="text"]').value.trim();
    if (!name) return;

    // Змінюємо текст кнопки у хедері
    const headerBtn = document.querySelector('header button');
    headerBtn.textContent = name;
    headerBtn.disabled = true;
    headerBtn.classList.remove('bg-blue-600', 'hover:bg-blue-700');
    headerBtn.classList.add('bg-gray-600', 'cursor-default');

    toggleModal();
    alert('Реєстрація успішна!');
}

function handleEnter(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    addTask();
  }
  else if (event.key === '§') {
    const taskList = document.getElementById('taskList');
    if (taskList.lastChild) {
      taskList.removeChild(taskList.lastChild);
    }
  }
}

document.addEventListener("keydown", (event) => {
  console.log(`Key: "${event.key}" | Code: "${event.code}"`);
});
