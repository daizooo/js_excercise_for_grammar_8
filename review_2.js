const question = [];
const answer = [];
const commands = ["練習", "確認", "追加", "削除", "終了"];
const choicesOfcheckAnswer = ["はい", "いいえ"];
let input;

//コマンド入力用

while (input !== commands[4]) {
  input = prompt(`「${commands}」のいずれかを入力してください`);
  if (input === commands[0]) {
    study_question();
  } else if (input === commands[1]) {
    show_question();
  } else if (input === commands[2]) {
    create_question();
  } else if (input === commands[3]) {
    delete_question_answer();
  } else if (input === commands[4]) {
    console.log("終了します");
    alert("お疲れ様でした!");
  } else {
    alert(`「${commands}」以外の入力には対応しておりません`);
  }
}

//問題文追加用

function create_question() {
  const inputOfQuestion = prompt("問題を入力してください");
  if (inputOfQuestion) {
    question.push(inputOfQuestion);
    alert(`問題：「${inputOfQuestion}」を追加しました`);
    listOfQuestion();
    const inputOfAnswer = prompt("続けて解答を入力してください");
    if (!inputOfAnswer) {
      alert("解答が入力されていないためスキップします");
    } else {
      answer.push(inputOfAnswer);
      alert(`解答：「${inputOfAnswer}」を追加しました`);
      listOfAnswer();
      return;
    }
  } else {
    alert("問題が入力されていないため、初期入力画面に戻ります");
  }
}



//問題文一覧出力用

function listOfQuestion() {
  console.log('========================');
  console.log('問題の一覧');
  console.log('========================');
  if (question.length > 0) {
    question.forEach((value, index) => {
      console.log(`番号：${index} 問題：${value}`);
    });
  } else {
    console.log("なし");
    alert("問題がありません。※初期入力画面に戻ります");
  }
}

//解答一覧出力用

function listOfAnswer() {
  console.log('========================');
  console.log('解答の一覧');
  console.log('========================');
  if (answer.length > 0) {
    answer.forEach((value, index) => {
      console.log(`問題番号：${index} 解答：${value}`);
    });
  } else {
    console.log("なし");
    alert("解答がありません");
  }
}

//問題文と答えのチェック用

function show_question() {
  console.log('========================');
  console.log('現在持っている問題の一覧');
  console.log('========================');
  if (question.length > 0) {
    question.forEach((value, index) => {
      console.log(`番号：${index} 問題：${value}`);
    });
    alert("コンソールに問題の一覧を出力しました。");
    const inputOfCheckAnswer = prompt("各問題の解答も確認しますか？（「はい」か「いいえ」を入力してください）");
    if (inputOfCheckAnswer) {
      if (inputOfCheckAnswer === choicesOfcheckAnswer[0]) {
        const inputOfCheckQustion = prompt("解答を確認したい問題の番号を入力してください");
        const parsedNumberOfquestion = parseInt(inputOfCheckQustion, 10);
        if (isNaN(parsedNumberOfquestion) || parsedNumberOfquestion >= question.length || parsedNumberOfquestion < 0) {
          alert("不正な値のため、初期入力画面に戻ります。");
          return;
        } else {
          console.log('========================');
          console.log(`${question[parsedNumberOfquestion]}の解答`);
          console.log(answer[parsedNumberOfquestion]);
          alert(`問題：「${question[parsedNumberOfquestion]}」→解答：「${answer[parsedNumberOfquestion]}」`);
          return;
        }
      } else if (inputOfCheckAnswer === choicesOfcheckAnswer[1]) {
        alert("初期入力画面に戻ります。");
        return;
      }
    } else {
      alert(`「${choicesOfcheckAnswer}」以外の入力には対応していません。※初期入力画面に戻ります`);
    }
  }
  console.log("なし");
  alert("問題がありません！初期入力画面に戻ります。");
}


//問題練習用

function study_question() {
  if (question.length > 0) {
    const inputOfQuestionNumber = prompt("練習したい問題の番号を入力してください");
    if (inputOfQuestionNumber) {
      const parsedNumberOfStudy_question = parseInt(inputOfQuestionNumber, 10);
      if (isNaN(parsedNumberOfStudy_question) || parsedNumberOfStudy_question >= question.length || parsedNumberOfStudy_question < 0) {
        alert("不正な値のため、初期入力画面に戻ります。");
      } else {
        let inputQuestion;
        while (inputQuestion !== answer[parsedNumberOfStudy_question]) {
          inputQuestion = prompt(question[parsedNumberOfStudy_question]);
          if (inputQuestion === answer[parsedNumberOfStudy_question]) {
            alert("正解です！※初期入力画面にもどります");
          } else {
            alert("不正解です！正解するまで頑張ろう！");
          }
        }
      }
    } else {
      alert("番号が入力されておりません。※初期入力画面に戻ります");
    }
  } else {
    alert("問題が無いので、初期入力画面の追加コマンドより問題を追加してください。");
  }
}


//問題と解答削除用

function delete_question_answer() {
  if (question.length > 0) {
    listOfQuestion();
    const deleteQuestionNumber = prompt("削除したい問題の番号を入力してください。※解答も一緒に削除されます");
    if (deleteQuestionNumber) {
      const parsedNumberOfdelete_Question = parseInt(deleteQuestionNumber, 10);
      if (isNaN(parsedNumberOfdelete_Question) || parsedNumberOfdelete_Question >= question.length || parsedNumberOfdelete_Question < 0) {
        alert("不正な値のため、初期入力画面に戻ります。");
      } else {
        const delete_Q = question.splice(parsedNumberOfdelete_Question, 1);
        const delete_A = answer.splice(parsedNumberOfdelete_Question, 1);
        alert(`問題文：「${delete_Q}」と解答：「${delete_A}」を削除しました。`);
        if (question.length > 0) {
          listOfQuestion();
          listOfAnswer();
        } else {
          listOfQuestion();
        }
      }
    } else {
      alert("番号が入力されておりません。※初期入力画面に戻ります");
    }
  } else {
    alert("問題が無いので、初期入力画面の追加コマンドより問題を追加してください。");
  }
}
