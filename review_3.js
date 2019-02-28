const todos = ["掃除", "買い物", "散歩"];
const commands = ["確認", "追加", "削除", "終了"];
let input;

while (input !== commands[3]) {
  input = prompt(`「${commands}」のいずれかを入力してください`);
  if (input === commands[0]) {
    showTodo();
  } else if (input === commands[1]) {
    createTodo();
  } else if (input === commands[2]) {
    deleteTodo();
  } else if (input === commands[3]) {
    console.log("終了します");
  } else {
    console.log(`「${commands}」以外は入力できません`);
  }
}

showTodo();


function showTodo() {
  console.log("-----------------");
  console.log("現在持っているタスク");
  console.log("-----------------");
  if (todos.length <= 0) {
    console.log("タスクなし");
  } else {
    todos.forEach((number, index) => {
      console.log(`番号：${index}、タスク名：${number}`);
    })
  }
}

function deleteTodo() {
  if (todos.length <= 0) {
    alert("タスクがありません");
    showTodo();
  } else {
    const input = prompt("削除したいタスクの番号を入力してください");
    const parsedNumber = parseInt(input, 10);
    if (parsedNumber >= todos.length || isNaN(parsedNumber)) {
      alert("不正な値なのでスキップします");
    } else {
      const splicedNumber = todos.splice(parsedNumber, 1);
      alert(`${splicedNumber}を削除しました`);
      showTodo();
    }
  }
}

function createTodo() {
  const input = prompt("追加したいタスク名を入力してください");
  if (input === undefined) {
    alert("入力されていません");
  } else {
    todos.push(input);
    alert(`${input}を追加しました`);
    showTodo();
  }
}
