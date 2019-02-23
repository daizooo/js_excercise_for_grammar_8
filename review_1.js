const todos = ["掃除", "買い物", "散歩"];

const commands = ["確認", "追加", "削除", "終了"];


function loop(inputAnswer) {
  if (inputAnswer) {
    if (inputAnswer === commands[0]) {
      showTodos();
    } else if (inputAnswer === commands[1]) {
      createTodos();
    } else if (inputAnswer === commands[2]) {
      deleteTodos();
    } else if (inputAnswer === commands[3]) {
      console.log(`終了します`);
      return;
    } else {
      alert(`「${commands}」以外は入力できません`);
    }
  }
  const input = prompt(`「${commands}」のいずれかを入力してください`);
  loop(input);
}

function showTodos() {
  console.log(`========================`);
  console.log(`現在持っているのタスク一覧`);
  console.log(`========================`);
  if (todos.length > 0) {
    todos.forEach((number, index) => {
      console.log(`${index}：${number}`);
    });
  } else {
    console.log(`タスクなし`);
  }
}

function createTodos() {
  const todosInput = prompt("タスクを入力してください");
  if (!todosInput) {
    alert("タスクを入力してください");
  } else {
    todos.push(todosInput);
    alert(`新しいタスクを追加しました。`);
    showTodos();
  }
}

function deleteTodos() {
  const inputOfDelete = prompt(`削除するタスクの番号を指定してください`);
  const numberOfDeleteTodo = parseInt(inputOfDelete, 10);
  if (numberOfDeleteTodo < 0 || isNaN(numberOfDeleteTodo) || numberOfDeleteTodo >= todos.length) {
    alert("不正な値のためスキップします");
  } else {
    const deleteNumber = todos.splice(numberOfDeleteTodo, 1);
    alert(`${deleteNumber}を削除しました`);
    showTodos();
  }
}

loop();
