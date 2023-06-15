let loggedIn = false;
let isAdmin = false;
let calculationHistory = [];

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulated login check
  if (username === 'user' && password === 'password') {
    loggedIn = true;
    showCalculator();
  } else if (username === 'admin' && password === 'adminpassword') {
    isAdmin = true;
    showCalculator();
    showAdminPanel();
  } else {
    alert('Invalid username or password');
  }
}

function showCalculator() {
  document.getElementById('login').classList.add('hidden');
  document.getElementById('calculator').classList.remove('hidden');
}

function showAdminPanel() {
  const adminPanel = document.createElement('div');
  adminPanel.id = 'admin';

  const disableLabel = document.createElement('label');
  disableLabel.innerHTML = 'Disable User:';

  const disableSelect = document.createElement('select');
  disableSelect.id = 'disableSelect';

  const disableButton = document.createElement('button');
  disableButton.innerHTML = 'Disable';
  disableButton.onclick = disableUser;

  const userOption = document.createElement('option');
  userOption.value = 'user';
  userOption.innerHTML = 'User';

  disableSelect.appendChild(userOption);
  disableLabel.appendChild(disableSelect);
  adminPanel.appendChild(disableLabel);
  adminPanel.appendChild(disableButton);

  document.body.appendChild(adminPanel);
}

function disableUser() {
  const selectedUser = document.getElementById('disableSelect').value;
  // Perform actions to disable the selected user
  alert('User ' + selectedUser + ' disabled');
}

function appendNumber(number) {
  document.getElementById('result').value += number;
}

function appendOperator(operator) {
  document.getElementById('result').value += operator;
}

function calculate() {
  const expression = document.getElementById('result').value;
  const result = eval(expression);
  document.getElementById('result').value = result;
  if (document.getElementById('saveHistory').checked) {
    calculationHistory.push(expression + ' = ' + result);
  }
}

function clearResult() {
  document.getElementById('result').value = '';
}

function saveCalculation() {
  if (loggedIn) {
    const saveHistory = document.getElementById('saveHistory').checked;
    if (saveHistory) {
      // Save calculation history
      alert('Calculation history saved');
    } else {
      alert('Calculation not saved');
    }
  } else {
    alert('Please log in first');
  }
}
