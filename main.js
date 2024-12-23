//عايزين نجمع الارقام غير المكررة  في المصفوفة

let numbers = [4, 5, 7, 8, 5, 7, 9, 9];
let sum = 0;

// بنمر على كل عنصر في المصفوفة

for (let i = 0; i < numbers.length; i++) {
  let count = 0;          // هنعد عدد المرات اللي ظهر فيها العنصر

  // هنمر علي العناصر تاني عشان نشوف المكرر
  
  for (let s = 0; s < numbers.length; s++) {
    if (numbers[i] == numbers[s]) {
      count++;  // إذا العنصر ده متكرر بنزود العد
    }
  }
// لو النصر ظهر مرة واحدة بس
  if (count == 1) {
    sum = sum + numbers[i];
   numbers[i] = 0;   // بنخلي العنصر صفر علشان ما نعدهوش تاني
  }
}

console.log(sum);