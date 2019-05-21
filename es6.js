var x;

x = 1;

x = 2;

console.log(x);

var x;
x = 2;
{
  x = 3;
}

{
  x = 5;
}

console.log(x);

{
  let x = 1;
  console.log(x);
}

{
  let x = 1;
  console.log(x);
}

{
  let x = 2;
  console.log(x);
}

const y = 1;

const firstName = `Yagnesh"s`;

const lastName = "Modh";

const fullName = `${firstName} ${lastName}`;

console.log(fullName);

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Document</title>
// </head>
// <body>

// </body>
// </html>

const html =
  "<!DOCTYPE html>\n" +
  '<html lang="en">\n' +
  "<head>\n" +
  '\t<meta charset="UTF-8">\n' +
  '\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
  '\t<meta http-equiv="X-UA-Compatible" content="ie=edge">\n' +
  "\t<title>Document</title>\n" +
  "</head>\n" +
  "<body>\n" +
  "\n" +
  "</body>\n" +
  "</html>\n";

const newHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
`;

console.log(newHtml);

const a = 1;

const x = {
  a: a,
  b: 2,
  c: function() {
    return "hello";
  }
};

const y = {
  a,
  b: 2,
  c() {
    return "hello";
  }
};

console.log(y.a);

console.log(y.c());

class Animal {
  constructor(type = "animal") {
    this.type = type;
  }

  get type() {
    return this._type;
  }

  set type(val) {
    this._type = val.toUpperCase();
  }

  makeSound() {
    console.log("making sound");
  }
}

let a = new Animal();

class Cat extends Animal {
  constructor() {
    super("cat");
  }

  makeSound() {
    super.makeSound();

    console.log("Meow!!");
  }
}

let b = new Cat();

console.log(b.type);
console.log(b.makeSound());

function xyz() {
  console.log("hello");
  return "abc";
}

const xyz1 = function() {
  console.log("hello");
  return "abc";
};

const add1 = (a, b) => a + b;

const add = (a, b) => {
  const c = 10;
  return a + b + c;
};

console.log(add(1, 2));

class Animal {
  constructor(type = "animal") {
    this.type = type;
  }

  getData() {
    setTimeout(() => {
      console.log(this.type);
    }, 1000);
  }
}

let a = new Animal();

console.log(a.getData());

const a = [1, 2, 3, 4];

// [2,4,6,8];

const b = [];
for (let index = 0; index < a.length; index++) {
  const element = a[index];
  b.push(element * 2);
}

console.log(b);

const c = a.map((item, index) => {
  if (item % 2 === 0) {
    return item * 2;
  }
});

console.log(c);

const a = { a: 1, b: 2 };

const b = { ...a, c: 3 };

console.log(b);

console.log(a);

const user = [
  {
    name: "rohit",
    sex: "male"
  },
  {
    name: "virat",
    sex: "male"
  }
];

const newUser = user.map(item => {
  item.name = `hello ${item.name}`;
  return item;
});

console.log(newUser);

const user = [
  {
    name: "rohit",
    sex: "male"
  },
  {
    name: "virat",
    sex: "male"
  }
];

const newUser = user.map(item => {
  item = { ...item, name: `hello, ${item.name}` };
  return item;
});

console.log(newUser);

console.log(user);

const a = { a: 1, b: 2 };

const b = { ...a, a: 3 };

console.log(b);
console.log(a);

const a = (...x) => {
  let sum = 0;
  for (let index = 0; index < x.length; index++) {
    const element = x[index];
    sum += element;
  }
  return sum;
};

console.log(a(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30));

const x = { a: 1, b: 2, c: 3, x: 1, e: 1, f: 2, g: 3 };

const { b, c, x: d, ...rest } = x;

console.log(b);
console.log(c);
console.log(d);
console.log(rest);

const user = {
  id: 1,
  name: "yagnesh",
  gender: "male"
};

const { id, ...rest1 } = user;

console.log(rest1);

const a = [1, 2, 3, 4, 5, 6, 7];

const b = [...a, 8];

console.log(b);

console.log(a);

const a = [1, 2, 3, 5, 6, 7, 8];

const c = [0, ...a];

console.log(c);

const b = [...a.slice(0, 3), 4, ...a.slice(3)];

console.log(b);

const num1 = 1;

const num2 = "1";

console.log(num1 === num2);

const users = [
  {
    name: "yagnesh",
    gender: "male"
  },
  {
    name: "virat",
    gender: "male"
  },
  {
    name: "rohit",
    gender: "male"
  },
  {
    name: "shikhar",
    gender: "male"
  }
];

// const newUsers = [...users.slice(0, 2), { name: 'shami', gender:'male' }, ...users.slice(2)];

// console.log(newUsers)

const index = users.findIndex(x => x.name === "virat");

console.log(index);

const updatedUsers = [
  ...users.slice(0, index),
  { ...users[index], name: "hardik" },
  ...users.slice(index + 1)
];

console.log(users[index]);

console.log(updatedUsers);

const num1 = 1;

const num2 = "1";

console.log(num1 === num2);

const users = [
  {
    name: "yagnesh",
    gender: "male"
  },
  {
    name: "virat",
    gender: "male"
  },
  {
    name: "rohit",
    gender: "male"
  },
  {
    name: "shikhar",
    gender: "male"
  }
];

// const newUsers = [...users.slice(0, 2), { name: 'shami', gender:'male' }, ...users.slice(2)];

// console.log(newUsers)

const index = users.findIndex(x => x.name === "virat");

console.log(index);

const updatedUsers = [...users.slice(0, index), ...users.slice(index + 1)];

console.log(updatedUsers);

const num1 = 1;

const num2 = "1";

console.log(num1 === num2);

const users = [
  {
    name: "yagnesh",
    gender: "male"
  },
  {
    name: "virat",
    gender: "male"
  },
  {
    name: "rohit",
    gender: "male"
  },
  {
    name: "shikhar",
    gender: "male"
  }
];

// const newUsers = [...users.slice(0, 2), { name: 'shami', gender:'male' }, ...users.slice(2)];

// console.log(newUsers)

const index = users.findIndex(x => x.name === "virat");

console.log(index);

const updatedUsers = [...users.slice(0, index), ...users.slice(index + 1)];

const updatedUsers1 = users.filter(x => x.name !== "virat");

console.log(updatedUsers1);

console.log(updatedUsers);

const arr = [...Array(1000000).keys()];

console.time("for loop");

const newArr = [];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  newArr.push(element);
}

console.timeEnd("for loop");

console.time("foreach loop");

const newArr1 = [];
arr.forEach(element => {
  newArr1.push(element);
});

console.timeEnd("foreach loop");

console.time("map loop");

const newArr3 = arr.map(item => item);

console.timeEnd("map loop");

const a = [1, 2, 3, 4, 5];

let sum = 0;

for (let index = 0; index < a.length; index++) {
  const element = a[index];
  sum += element;
}

console.log(sum);

const sum1 = a.reduce((previous, current) => {
  console.log(previous);
  // console.log(current);
  // return current
  return previous;
}, 0);

console.log(sum1);

const a = null;
const b = 2;

const c = a && b;
const d = a || b;

console.log(c);
console.log(d);

const a = null;
const b = 2;

const c = a && b;
const d = a || b;

console.log(c);
console.log(d);

const users = [
  {
    name: "yagnesh",
    gender: "male"
  },
  {
    name: "virat",
    gender: "male"
  },
  {
    name: "rani",
    gender: "female"
  },
  {
    name: "deepika",
    gender: "female"
  }
];

// const groupBy = users.reduce((previous, current) => {
//     previous[current['gender']] = previous[current['gender']] || []; // property is available
//     previous[current['gender']].push(current) // if available then add the current data in that propeerty if not create new array and add current in new array
//     return previous;
// }, {});

const groupBy = (data, groupByValue) => {
  return data.reduce((previous, current) => {
    previous[current[groupByValue]] = previous[current[groupByValue]] || []; // property is available
    previous[current[groupByValue]].push(current); // if available then add the current data in that propeerty if not create new array and add current in new array
    return previous;
  }, {});
};

console.log(groupBy(users, "name"));

// {
//     male: [{
//         name: 'yagnesh',
//         gender: 'male'
//     },
//     {
//         name: 'virat',
//         gender: 'male'
//     }],
//     female: [{
//         name: 'rani',
//         gender: 'female'
//     },
//     {
//         name: 'deepika',
//         gender: 'female'
//     }]
// }

const a = { a: 1, b: 3, c: 4, d: 5 };

for (const key in a) {
  console.log(key);
  console.log(a[key]);
}

const a = { a: 1, b: 3, c: 4, d: 5 };

const b = [1, 2, 3, 4, 5];

for (const key in a) {
  console.log(key);
  console.log(a[key]);
}

for (const [key, value] of Object.entries(a)) {
  console.log(key, value);
}

for (const iterator of b) {
  console.log(iterator);
}

function* abc() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const obj = abc();

console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());

for (const iterator of obj) {
  console.log(iterator);
}

const abc = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("reject");
    }, 1000);
  });
};

// console.log(1)
// abc().then(x => console.log(x)).catch(x => console.log(x))
// console.log(2)

const xyz = async () => {
  try {
    const data = await abc();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

console.log(xyz());

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p2");
  }, 2000);
});

// Promise.race([p1, p2]).then(x => console.log(x))

Promise.all([p1, p2])
  .then(x => console.log(x))
  .catch(x => console.log(x));
