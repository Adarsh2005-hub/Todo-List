function addTask() {
    const m = document.getElementById('task').value;
    console.log("Aryan ki Dui");
    if (m) {
        const k = document.createElement('li');
        k.textContent = m;
        document.getElementById('tasklist').appendChild(k)
        document.getElementById('task').value = '';
    }
}





