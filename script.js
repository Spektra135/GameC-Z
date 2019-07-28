var fieldsList = new Array(9);

var roles = ['ai', 'player'];

function ai() {
  var id = Math.floor(Math.random() * 9);
  fieldsList[id] ? ai() : move(id, 'ai');
}

function move(id, role) {
  if (fieldsList[id]) return false;
  fieldsList[id] = role;
  document.getElementById(id).className = 'cell ' + role;
  !checkEnd() ? (role == 'player')  ? ai() : null : reset();
}

var endResult = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

function checkEnd() {
  for (var i = 0; i < endResult.length; i++) {
    var indexes = endResult[i];
    var cell1 = fieldsList[indexes[0]];
    var cell2 = fieldsList[indexes[1]];
    var cell3 = fieldsList[indexes[2]];
    for (var j = 0; j < roles.length; j++) {
      if (cell1 === roles[j] && cell3 === roles[j] && cell2 === roles[j]) {
        return true;
      }
    }
    // if (cell1 === 'ai' && cell2 === 'ai' && cell3 === 'ai') {
    //   return true;
    // }
    // if (cell1 === 'player' && cell3 === 'player' && cell2 === 'player') {
    //   return true;
    // }
  }

  var allFields = true;
  for (var i = 0; i < fieldsList.length; i++) {
    allFields = allFields && !!fieldsList[i];
  }
  console.log(allFields);
  return allFields;
}

function checkWin() {
  if (fieldsList[0] == 'player' && fieldsList[1] == 'player' && fieldsList[2] == 'player') return true;
  if (fieldsList[3] == 'player' && fieldsList[4] == 'player' && fieldsList[5] == 'player') return true;
  if (fieldsList[6] == 'player' && fieldsList[7] == 'player' && fieldsList[8] == 'player') return true;
  if (fieldsList[0] == 'player' && fieldsList[3] == 'player' && fieldsList[6] == 'player') return true;
  if (fieldsList[1] == 'player' && fieldsList[4] == 'player' && fieldsList[7] == 'player') return true;
  if (fieldsList[2] == 'player' && fieldsList[5] == 'player' && fieldsList[8] == 'player') return true;
  if (fieldsList[0] == 'player' && fieldsList[4] == 'player' && fieldsList[8] == 'player') return true;
  if (fieldsList[2] == 'player' && fieldsList[4] == 'player' && fieldsList[6] == 'player') return true;
  if (fieldsList[0] == 'ai' && fieldsList[1] == 'ai' && fieldsList[2] == 'ai') return false;
  if (fieldsList[3] == 'ai' && fieldsList[4] == 'ai' && fieldsList[5] == 'ai') return false;
  if (fieldsList[6] == 'ai' && fieldsList[7] == 'ai' && fieldsList[8] == 'ai') return false;
  if (fieldsList[0] == 'ai' && fieldsList[3] == 'ai' && fieldsList[6] == 'ai') return false;
  if (fieldsList[1] == 'ai' && fieldsList[4] == 'ai' && fieldsList[7] == 'ai') return false;
  if (fieldsList[2] == 'ai' && fieldsList[5] == 'ai' && fieldsList[8] == 'ai') return false;
  if (fieldsList[0] == 'ai' && fieldsList[4] == 'ai' && fieldsList[8] == 'ai') return false;
  if (fieldsList[2] == 'ai' && fieldsList[4] == 'ai' && fieldsList[6] == 'ai') return false;
  return;
}

function returnResult() {
  if (checkWin() === true) {
    alert( 'Вы выиграли');
  } else if (checkWin() === false){
    alert( 'Вы проиграли' );
  }
}

function reset() {
  returnResult();
  alert ('Игра окончена');
  location.reload();
}
