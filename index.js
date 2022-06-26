const _ = require("lodash");

/*
 * 		array functions
 */

// concat
const concatenated = _.concat([1, 2, 3, 4], [5, 6, 7, 8]);
console.log("\nConcatenated arrays: ", concatenated);
// => [1, 2, 3, 4, 5, 6, 7, 8]

// difference
const setDifference = _.difference([1, 2, 3, 4], [5, 2, 7, 4]);
console.log("\nDifference between two sets: ", setDifference);
// => [ 1, 3 ]

// fill
const filled = _.fill([1, 2, 3, 4], 0, 1, 3);
console.log("Filled array: ", filled);
// => [ 1, 0, 0, 4 ]

// flatten
const flattenArray = _.flatten([1, [2, [3, [4]], 5]]);
const flattenDeepArray = _.flattenDeep([1, [2, [3, [4]], 5]]);
console.log("Flatten array: ", flattenArray);
// => [ 1, 2, [ 3, [ 4 ] ], 5 ]
console.log("Deep flatten array (multilevel): ", flattenDeepArray);
// => [ 1, 2, 3, 4, 5 ]

// indexOf
const index = _.indexOf([1, 2, 3, 4, 5, 6, 7, 8], 4);
console.log("Index of elem 4:  ", index);
// ==> 3

// join
const separator = ",";
const joined = _.join([1, 2, 3, 4, 5], separator);
console.log("Collection joined: ", joined);
// => 1,2,3,4,5

// first
const first = _.head([789, 1, 2, 3, 4, 5]);
console.log("First array's element: ", first);
// => 789

// last
const last = _.last([1, 2, 3, 4, 5, 789]);
console.log("Last array's element: ", last);
// => 789

// nth
const n = _.nth([0, 1, 2, 3, 4, 5, 6], 3);
console.log("Nth element: ", n);
// => 3

// remove: mutates array
const removePredicate = (value, index, array) => value === 3; // truthy only for 3;
const removedElements = _.remove([1, 2, 3, 4, 5, 6], removePredicate);
console.log("Removed elements are: ", removedElements);
// => [ 3 ]

// reverse
const reversed = _.reverse([1, 2, 3, 4, 5, 6]);
console.log("Reversed array: ", reversed);
// => [ 6, 5, 4, 3, 2, 1 ]

// slice
const sliced = _.slice([1, 2, 3, 4, 5, 6, 7], 2, 5);
console.log("Slice: ", sliced);
// => [ 3, 4, 5 ]

// take
const taken = _.take([1, 2, 3, 4, 5, 6, 7], 5);
console.log("Taken: ", taken);
// => [ 1, 2, 3, 4, 5 ]

// uniq
const uniqueValues = _.uniq([1, 2, 3, 4, 5, 6, 7, 1, 3, 4, 6]);
console.log("Only unique values", uniqueValues);
// => [ 1, 2, 3, 4, 5, 6, 7 ]

/*
 * 		collection functions
 */
// each/forEach
console.log("For each");
_.forEach([1, 2, 3, 4, 5, 6, 7], (value, index) =>
  console.log("Index: ", index, "| Value: ", value)
);
// => Index:  0  Value:  1
// => Index:  1  Value:  2
// => Index:  2  Value:  3
// and so on ...

// every
const VEHICLES = [
  { id: 1, name: "car", tires: 4 },
  { id: 2, name: "motorbike", tires: 2 },
  { id: 3, name: "airplane", tires: 5 },
  { id: 4, name: "unicycle", tires: 1 },
  { id: 5, name: "school bus", tires: 6 },
  { id: 6, name: "bulldozer", tires: 4 },
];
const allVehiclesHaveTires = _.every(VEHICLES, (value) => value.tires > 0);
console.log("Every vehicle has tires?: ", allVehiclesHaveTires);
// => true

// find: only first found element
const found = _.find(VEHICLES, (value) => value.tires === 4);
console.log("Found(ed) element(s): ", found);
// => { id: 1, name: 'car', tires: 4 }

// flatMap
const duplicate = (value) => [value, value];
const flat = _.flatMap(VEHICLES, duplicate);
console.log("Flat mapped (duplicated) elements: ", flat);
// => { id: 1, name: 'car', tires: 4 },
// => { id: 1, name: 'car', tires: 4 },
// => { id: 2, name: 'motorbike', tires: 2 },
// => { id: 2, name: 'motorbike', tires: 2 },
// => and so on ...

// groupBy
const groups = _.groupBy(VEHICLES, (value) => value.tires);
console.log("Vehicles grouped by number of tires: ", groups);
// => '1': [ { id: 4, name: 'unicycle', tires: 1 } ],
// => '2': [ { id: 2, name: 'motorbike', tires: 2 } ],
// => and so on ...

// includes
const includesGmail = _.includes("some_email@gmail.com", "gmail");
console.log("Contains gmail string: ", includesGmail);
// => true

// map
const vehiclesWithoutId = _.map(VEHICLES, (value) => ({
  name: value.name,
  tires: value.tires,
}));
console.log("Vehicles without ID: ", vehiclesWithoutId);
// => [ { name, tires } ... ]

// orderBy
const orderedDesc = _.orderBy(VEHICLES, ["name"], ["desc"]);
console.log("Descending order by name: ", orderedDesc);
// =>   { id: 3, name: 'airplane', tires: 5 },
// => { id: 6, name: 'bulldozer', tires: 4 },

// sortBy: stable sort
const sortedAsc = _.sortBy(VEHICLES, (value) => value.name);
console.log("Ascending sorted by name: ", sortedAsc);
// =>

// reduce
const PRODUCTS = [
  { name: "keyboard", value: 80 },
  { name: "mouse", value: 60 },
  { name: "webcam", value: 50 },
  { name: "monitor", value: 180 },
  { name: "mouse pad", value: 10 },
  { name: "taxes", value: 10, description: "xD" },
];
const orderTotal = _.reduce(PRODUCTS, (sum, value) => sum + value.value, 0);
console.log("Order total is: ", orderTotal);
// => 390

/*
 * 		string functions
 */
