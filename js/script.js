let fieldGame = document.getElementsByClassName('field')[0];
let width = 30;
let height = 30;
let bigSize = 10;

const circle = document.getElementsByTagName('button');

for (let i = 0; i < width; i++) {
	let row = document.createElement('div');
	row.classList.add('row');
	fieldGame.appendChild(row);
	for (let j = 0; j < height; j++) {
		let column = document.createElement('div');
		column.classList.add('col');
		row.appendChild(column);
	}
}

const col = document.getElementsByClassName('col');
for (const iterator of col) {
	iterator.style.width = `${bigSize}px`;
	iterator.style.height = `${bigSize}px`;
	iterator.style.border = 'solid 1px rgba(0,0,0,0.1)';
}

let color;
for (const iterator of circle) {
	iterator.addEventListener('click', function () {
		color = window.getComputedStyle(iterator).backgroundColor;
	});
}

let colorButton = function () {
	for (const iterator of col) {
		iterator.addEventListener('click', function () {
			iterator.style.backgroundColor = color;
		});
	}
}