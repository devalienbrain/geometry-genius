/*
function getInputValuesFromField(event) {
  const getInputField = event.parentElement.parentElement.children[2];

  const input1 = getInputField.children[0].value;

  const input2 = getInputField.children[1].value;
  console.log(input1, input2);
}
*/

function findArea(shapesTitle, input1, input2) {
  let area = 0;
  switch (shapesTitle) {
    case 'Triangle':
    case 'Rhombus':
    case 'Pentagon':
      area = 0.5 * input1 * input2;
      break;
    case 'Rectangle':
    case 'Parallelogram':
      area = input1 * input2;
      break;
    case 'Ellipse':
      area = (Math.PI * input1 * input2).toFixed(2);
      break;
  }
  return area;
}
let i = 0;
function calculateArea(event) {
  // getInputValuesFromField(event);

  const getInputField = event.parentElement.parentElement.children[2];

  const input1 = getInputField.children[0].value;

  const input2 = getInputField.children[1].value;

  const shapesTitle = event.parentElement.parentElement.children[0].innerText;

  const area = findArea(shapesTitle, input1, input2);
  console.log(area);

  const resContainer = document.getElementById('res-container');
  const res = document.createElement('p');

  res.innerHTML = `${++i}. ${shapesTitle} ${area}cm<button class="btn btn-success">Convert</button>`;
  resContainer.appendChild(res);
}