var fieldsList = new Array (9);

function ai() {
  var id = Math.floor(Math.random () * 9);
  fieldsList(id) ? ai() : move(id, 'ai');
}

function move(id, role) {
  if (fieldsList[id]) return false;
  fieldsList[id] = role;
  document.getElementById(id).className = 'cell' + role;
  !checkEnd() ? (role == 'player')  ? ai() : null : reset();
}

function checkEnd() {
  if (fieldsList[0] == 'ai' && fieldsList[1] == 'ai' && fieldsList[2] == 'ai' || fieldsList[0] == 'player' && fieldsList[1] == 'player' && fieldsList[2] == 'player') return true;
  if (fieldsList[3] == 'ai' && fieldsList[4] == 'ai' && fieldsList[5] == 'ai' || fieldsList[3] == 'player' && fieldsList[4] == 'player' && fieldsList[5] == 'player') return true;
  if (fieldsList[6] == 'ai' && fieldsList[7] == 'ai' && fieldsList[8] == 'ai' || fieldsList[6] == 'player' && fieldsList[7] == 'player' && fieldsList[8] == 'player') return true;
  if (fieldsList[0] == 'ai' && fieldsList[3] == 'ai' && fieldsList[6] == 'ai' || fieldsList[0] == 'player' && fieldsList[3] == 'player' && fieldsList[6] == 'player') return true;
  if (fieldsList[1] == 'ai' && fieldsList[4] == 'ai' && fieldsList[7] == 'ai' || fieldsList[1] == 'player' && fieldsList[4] == 'player' && fieldsList[7] == 'player') return true;
  if (fieldsList[2] == 'ai' && fieldsList[5] == 'ai' && fieldsList[8] == 'ai' || fieldsList[2] == 'player' && fieldsList[5] == 'player' && fieldsList[8] == 'player') return true;
  if (fieldsList[0] == 'ai' && fieldsList[4] == 'ai' && fieldsList[8] == 'ai' || fieldsList[0] == 'player' && fieldsList[4] == 'player' && fieldsList[8] == 'player') return true;
  if (fieldsList[2] == 'ai' && fieldsList[4] == 'ai' && fieldsList[6] == 'ai' || fieldsList[2] == 'player' && fieldsList[4] == 'player' && fieldsList[6] == 'player') return true;
  if (fieldsList[0] && fieldsList[1] && fieldsList[2] && fieldsList[3] && fieldsList[4] && fieldsList[5] && fieldsList[6] && fieldsList[7] && fieldsList[8]) return true;
}

function reset() {
  alert ('Игра окончена');
  location.reload;
}
