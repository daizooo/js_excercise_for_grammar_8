const todos = ['掃除', '買い物', '散歩'];

const commands = ['確認', '追加', '削除', '終了'];

let input;

while (input !== commands[3]) {
  input = prompt(`「${commands}」のいづれかを入力してください`);
  if (input === commands[0]) {
    showTodos();
  } else if (input === commands[1]) {
    createTodos();
  } else if (input === commands[2]) {
    deleteTodos();
  } else if (input === commands[3]) {
    console.log('終了します');
  } else {
    alert(`「${commands}」以外の入力には対応しておりません`);
  }
}

function showTodos() {
  console.log('---------------');
  console.log('現在のタスク');
  console.log('---------------');
  if (todos.length > 0) {
    todos.forEach((value, index) => {
      console.log(`番号：${index}、タスク名：${value}`);
    });
    return;
  }
  console.log('タスクなし');
  alert('タスクが無いためスキップします');
}

function createTodos() {
  input = prompt('追加したいタスクを入力してください');
  if (input) {
    todos.push(input);
    alert(`タスク：「${input}」を追加しました`);
    showTodos();
    return;
  }
  alert('タスクが入力されていないためスキップします');
}

function deleteTodos() {
  input = prompt('削除したいタスクの番号を入力してください');
  const parsedNumber = parseInt(input, 10);
  if (parsedNumber < 0 || todos.length <= 0 || isNaN(parsedNumber)) {
    alert('不正な値のためスキップします');
  } else {
    const deleteTodo = todos.splice(parsedNumber, 1);
    alert(`「${deleteTodo}」を削除しました`);
    showTodos();
  }
}
