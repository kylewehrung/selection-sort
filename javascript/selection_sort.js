function selectionSort(arr) {
  const sorty = []

  while (arr.length > 0) {
    const min = Math.min(...arr)
    const index = arr.indexOf(min)

    sorty.push(min)
    arr.splice(index, 1)
  }
  
 return sorty

}




if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = []

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random())
  }
  
  const startTime = Date.now()
  
  for (let i = 0; i < 1000; ++i) {
    selectionSort([2, 1])
    selectionSort(longInput)
  }
  
  const avgTime = (Date.now() - startTime) / 2000


  console.log(avgTime)



}

module.exports = selectionSort;

// Please add your pseudocode to this file
  // create new array to push things into
  // find minimum of array with Math.min
  // find index of minimum num with arr.indexOf
  // push minimum into new array
  // remove minimum element from og array


// And a written explanation of your solution
