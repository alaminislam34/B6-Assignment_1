Interview Questions - Blog
1. TypeScript এ  type আর interface এর মধ্যে পার্থক্য হচ্ছে type সাধারণত যেকোনো ধরনের টাইপ ডিফাইন করতে ব্যবহার করা হয়  যেমন primitive, tupple, union, object, array .
আর ইন্টারফেস সাধারণত  Object structure  বা  class implement  করার সময় ব্যবহার করা হয়। 


2. keyof হলো TypeScript-এর একটা operator, যেটা কোনো Object এ থাকা key গুলা return করে।
যেমন ঃ 

interface User {
    name: "alamin", 
    age: "24",
    designation: "Web Developer"
}

type userKeys = keyof User;