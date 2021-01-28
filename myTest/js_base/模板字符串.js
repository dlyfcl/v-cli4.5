// 若想使用 ` 则需要用 \ 来转义
let message = `Hello \` World`;
console.log(message);

// 在模板字符串中，空格、缩进、换行都会被保留：

let message1 = `
	<ul>
		<li>1</li>
	</ul>
`;
console.log(message1);

// 使用变量
let message2 = `this is message ${message}`;
console.log(message2);


// 标签模板

// 注意在这个例子中 literals 的第一个元素和最后一个元素都是空字符串
function message3(literals, ...values) {
  console.log(values);
  let result = '';
	for (let i = 0; i < values.length; i++) {
		result += literals[i];
		result += values[i];
	}
	result += literals[literals.length - 1];
	return result;
}

let x = 'Hi', y = 'Kevin';
var res = message3`${x}, I am ${y}`;
console.log(res);