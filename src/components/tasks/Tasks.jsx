import React from "react";

export const Tasks = () => {
  // COUNT
  let num = 0;
  const id = () => {
    return num++;
  };
  console.log(id());
  console.log(id());
  console.log(id());

  // SORT
  const arr = [1, 5, 3, 2, 7, 2, 6, 1];
  console.log(arr.sort((a, b) => b - a));
  console.log(
    arr.sort((a, b) => {
      return b - a;
    })
  );
  // MAP - REDUCE
//   const map<T> = (arr: T[], cb: (elem: T, index: number, arr: T[])) => {
//     return arr.reduce((acc: T[], value, index)=>{
//         const res = cb(value, index, arr);
//         acc.push(res)
//         return acc
//     }, [])
//   }
  const map = () => {
    return arr.reduce((acc, value, index)=>{
        const res = cb(value, index);
        acc.push(res)
        return acc
    }, [])
  }
  console.log(map)

  return (
    <div>
      <h2>Tasks</h2>
    </div>
  );
};
