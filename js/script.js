// const arr = [1,2,3,4,6]

//// 0. отфильтровать нечетные числа
// const numbers111 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const arr = numbers111.filter( elem => {
  // return elem % 2 !== 0
// })
// 
// console.log(arr);
// 

// 1. сформируйте массив из чисел, которые меньше 30.
// const numbers1111 = [7, 42, 33, 16, 50, 3, 28, 21, 15, 39]
// 
// const arr = numbers1111.filter(elem => elem < 30
// )
// console.log(arr);

// 2. Отфильтровать строки длинее 5 символов
// const words = ['apple', 'cat', 'banana', 'dog', 'elephant', 'car', 'bat']
// 
// const arr = words.filter(el => el.length > 5)
// console.log(arr);


// 3. Оставить только строки
// const mixedTypes = [123, 'apple', { fruit: 'apple' }, 'banana', true, 'car', false]
// 
// const str = mixedTypes.filter(el => typeof el === "string")
// console.log(str);

// 4. Офильтровать строки которые начинаются на a
// const words2 = ['apple', 'banana', 'apricot', 'grape', 'avocado', 'kiwi']
// 
// const str = words2.filter(el => el.startsWith("a"))
// console.log(str);

//  5. Отфильтровать строки, которые не содержат букву e
// const words3 = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape', 'kiwi']
// 
// const str = words3.filter(el => el.includes("i"))
// console.log(str);

// 6. Посложнее. Отфильтровать студентов с оценками выше 80
// const students = [
  // { name: 'John', grade: 85 },
  // { name: 'Jane', grade: 78 },
  // { name: 'Doe', grade: 90 },
  // { name: 'Smith', grade: 76 },
  // { name: 'Chris', grade: 81 },
// ]
// const arr = students.filter( el => el.grade > 80 )
// console.log(arr);

// 7. Сложная. Отфильтровать повторяющиеся числа
// можно использовать indexOf()
const duplicates = [1, 2, 3, 2, 4, 5, 5, 6, 7, 8]