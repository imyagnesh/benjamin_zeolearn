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
