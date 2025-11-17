const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toLocaleUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};

const getLength = (value: string | any[]): number => {
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
    return console.log(`'Name: ${this.name}, Age: ${this.age}'`);
  }
}

const filterByRating = (
  arr: { title: string; rating: number }[]
): { title: string; rating: number }[] => {
  const filetArray: { title: string; rating: number }[] = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item.rating >= 4) {
      filetArray[filetArray.length] = {
        title: item.title,
        rating: Number(item.rating.toFixed(1)),
      };
    }
  }
  return filetArray;
};

const filterActiveUsers = (
  arr: { id: number; name: string; email: string; isActive: boolean }[]
): { id: number; name: string; email: string; isActive: boolean }[] => {
  const activeUsers: {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  }[] = [];
  for (let i = 0; i < arr.length; i++) {
    const user = arr[i];
    if (user.isActive) {
      activeUsers[activeUsers.length] = user;
    }
  }
  return activeUsers;
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
    `"Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${
      isAvailable ? "Yes" : "No"
    }"`
  );
};

const getUniqueValues = (arr1: number[], arr2: number[]): number[] => {
  const uniqueValues: number[] = [];
  for (const value of arr1) {
    if (!uniqueValues.includes(value)) {
      uniqueValues[uniqueValues.length] = value;
    }
  }
  for (const value of arr2) {
    if (!uniqueValues.includes(value)) {
      uniqueValues[uniqueValues.length] = value;
    }
  }

  return uniqueValues;
};

const calculateTotalPrice = (
  arr: {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
  }[]
): number => {
  let totalPrice = 0;
  for (const product of arr) {
    const discountAmount = (product.price * (product.discount ?? 0)) / 100;
    totalPrice =
      totalPrice + (product.price - discountAmount) * product.quantity;
  }
  return totalPrice;
};
