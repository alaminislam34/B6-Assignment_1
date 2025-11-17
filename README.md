# TypeScript Question blog (Bangla)

## ১. `type` এবং `interface` এর মধ্যে পার্থক্য

* **type**: TypeScript-এ `type` ব্যবহার হয় যেকোনো **primitive, tuple, union, object, array** টাইপ define করার জন্য।
* **interface**: সাধারণত **object structure** define করার জন্য ব্যবহার হয়, বা class implement করার সময়।

**উদাহরণ:**

```ts
type MyType = string | number;

interface User {
  name: string;
  age: number;
}
```

---

## ২. `keyof` keyword

`keyof` হলো TypeScript-এর একটি operator, যা কোনো object-এর **সব key** return করে।

```ts
interface User {
  name: "alamin";
  age: "24";
  designation: "Web Developer";
}

type UserKeys = keyof User;
// UserKeys হবে: "name" | "age" | "designation"
```

---

## ৩. `any`, `unknown`, এবং `never` টাইপের পার্থক্য

* **any**: Value যেকোনো টাইপের হতে পারে। TypeScript কোনো error দেবে না।

```ts
let user: any = "alamin";
user = 2323;   // ok
user = true;   // ok
```

* **unknown**: Value-এর টাইপ আগে জানা নেই। ব্যবহার করার আগে type check করতে হবে।

```ts
let user: unknown = "alamin";
user.toUpperCase(); // Error: 'user' is of type 'unknown'

if (typeof user === "string") {
  user.toUpperCase(); // ok
}
```

* **never**: Value কখনো return করবে না, অথবা function infinity loop এ থাকবে।

---

## ৪. `enum` TypeScript-এ

`enum` ব্যবহার করি কোনো property-এর **fixed set of values** define করার জন্য।

```ts
enum UserRole {
  Admin,
  User,
  Manager,
}

const role = UserRole.Admin; // Auto suggestion এবং ভুলের সম্ভাবনা কমে যায়
```

---

## ৫. Union type এবং Intersection type এর পার্থক্য

* **Union type**: Property একাধিক type এর value নিতে পারে।

```ts
let value: string | number;
value = "Hello";
value = 123;
```

* **Intersection type**: Property multiple types combine করে।

```ts
type Users = {
  name: string;
  age: number;
};

type UserRole = {
  role: string;
};

type UserInfo = Users & UserRole;
// UserInfo: { name: string; age: number; role: string; }
```
