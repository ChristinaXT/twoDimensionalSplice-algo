// Chunky Munky
// Write a function that splits an array (first argument) into groups the length
// of size (second argument) and returns them as a two-dimensional array


// splice method
function chunkArrayInGroups(arr, size) {
  let groups = [];
  while (arr.length > 0) {
    groups.push(arr.splice(0, size));
  }
  return groups;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 3));
