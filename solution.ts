type ValueType = string | number | boolean;
const formatValue = (value: ValueType): ValueType => {
  if (typeof value === "string") {
    return value.toLocaleUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};

type isArrayOrString = string | any[];
const getLength = (value: isArrayOrString): number => {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value.length;
  }
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

type Item = {
  title: string;
  rating: number;
};

//  todo
const filterByRating = (arr: Item[]): Item[] => {
  const filetArray = arr
    .filter((item) => item.rating >= 4)
    .map((item) => ({ ...item, rating: Number(item.rating.toFixed(1)) }));
  return filetArray;
};

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (arr: User[]): User[] => {
  return arr.filter((user) => user.isActive);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (obj: Book) => {
  const { title, author, publishedYear, isAvailable } = obj;
  console.log(
    `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${
      isAvailable ? "Yes" : "No"
    }`
  );
};

const getUniqueValues = (arr1: number[], arr2: number[]): number[] => {
  const uniqueValues = [...new Set([...arr1, ...arr2])];
  return uniqueValues;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
const calculateTotalPrice = (arr: Product[]): number => {
  let totalPrice = 0;
  for (const product of arr) {
    totalPrice = totalPrice + product.price * product.quantity;
  }
  return totalPrice;
};
