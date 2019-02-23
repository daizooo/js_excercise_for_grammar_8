const todos = ["掃除", "買い物", "散歩"];

const commands = ["確認", "追加", "削除", "終了"];

let input;


function roop(inputAnswer) {
  if (!!inputAnswer === true) {
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
  roop(input);
}

function showTodos() {
  if (todos === undefined) {
    console.log(`========================`);
    console.log(`現在持っているのタスク一覧`);
    console.log(`========================`);
    console.log(`タスクなし`);
  } else {
    console.log(`========================`);
    console.log(`現在持っているのタスク一覧`);
    console.log(`========================`);
    todos.forEach((number, index) => {
      console.log(`${index}：${number}`);
    });
  }
}

function createTodos() {
  let todosInput = prompt("タスクを入力してください");
  if (todosInput === undefined) {
    alert("タスクを入力してください");
  } else {
    todos.push(todosInput);
    alert(`新しいタスクを追加しました。`);
    showTodos();
  }
}

function deleteTodos() {
  let inputOfDelete = prompt(`削除するタスクの番号を指定してください`);
  let numberOfDeleteTodo = parseInt(inputOfDelete, 10);
  if (numberOfDeleteTodo < 0 || isNaN(numberOfDeleteTodo) || numberOfDeleteTodo < todos.lemgth) {
    alert("不正な値のためスキップします");
  } else {
    let deleteNumber = todos.splice(numberOfDeleteTodo, 1);
    alert(`${deleteNumber}を削除しました`);
    showTodos();
  }
}

roop();
