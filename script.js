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
  var result = checkEnd();
  if(result) {
    setTimeout(function () {
      gameOver(result);
    }, 10);
  } else if (role === 'player') {
    ai();
  }
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
        return roles[j];
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
  return allFields
    ? 'nobody'
    : false;
}

function gameOver(result) {
  switch (result) {
    case 'player':
      alert( 'Вы выиграли');
      break;
    case 'ai':
      alert( 'Вы проиграли' );
      break;
    case 'nobody':
      alert ('Игра окончена');
      break;
  }
  location.reload();
}
