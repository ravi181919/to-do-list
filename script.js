const ul = document.querySelector('ul');
const inpu = document.querySelector('input');
const addBtn = document.querySelector('#add');
const refresh = document.querySelector('#refresh');
const removeBtn = document.querySelector('#remove');
const removeAllBtn = document.querySelector('#removeAll');

addBtn.addEventListener('click', () => {
    if (inpu.value.trim() === '') {
        // do nothing if input is empty or only contains whitespace
    } else {
        const li = document.createElement('li');
        li.textContent = inpu.value;
        ul.appendChild(li);
        inpu.value = '';
    }
});

removeBtn.addEventListener('click', () => {
    const lis = ul.querySelectorAll('li');
    if (lis.length > 0) {
        const lastLi = lis[lis.length - 1];
        ul.removeChild(lastLi);
    }
});

removeAllBtn.addEventListener('click', () => {
    const lis = ul.querySelectorAll('li');
    lis.forEach(li => ul.removeChild(li));
});

refresh.addEventListener('click', () => {
    window.location.reload()
})