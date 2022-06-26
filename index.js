const { trim } = require("lodash");
const _ = require("lodash");

/*
 * 		array functions
 */
console.log("\n\n########### Array Functions Results ###########\n");

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
console.log("\nFilled array: ", filled);
// => [ 1, 0, 0, 4 ]

// flatten
const flattenArray = _.flatten([1, [2, [3, [4]], 5]]);
const flattenDeepArray = _.flattenDeep([1, [2, [3, [4]], 5]]);
console.log("\nFlatten array: ", flattenArray);
// => [ 1, 2, [ 3, [ 4 ] ], 5 ]
console.log("\nDeep flatten array (multilevel): ", flattenDeepArray);
// => [ 1, 2, 3, 4, 5 ]

// indexOf
const index = _.indexOf([1, 2, 3, 4, 5, 6, 7, 8], 4);
console.log("\nIndex of elem 4:  ", index);
// ==> 3

// join
const separator = ",";
const joined = _.join([1, 2, 3, 4, 5], separator);
console.log("\nCollection joined: ", joined);
// => 1,2,3,4,5

// first
const first = _.head([789, 1, 2, 3, 4, 5]);
console.log("\nFirst array's element: ", first);
// => 789

// last
const last = _.last([1, 2, 3, 4, 5, 789]);
console.log("\nLast array's element: ", last);
// => 789

// nth
const n = _.nth([0, 1, 2, 3, 4, 5, 6], 3);
console.log("\nNth element: ", n);
// => 3

// remove: mutates array
const removePredicate = (value, index, array) => value === 3; // truthy only for 3;
const removedElements = _.remove([1, 2, 3, 4, 5, 6], removePredicate);
console.log("\nRemoved elements are: ", removedElements);
// => [ 3 ]

// reverse
const reversed = _.reverse([1, 2, 3, 4, 5, 6]);
console.log("\nReversed array: ", reversed);
// => [ 6, 5, 4, 3, 2, 1 ]

// slice
const sliced = _.slice([1, 2, 3, 4, 5, 6, 7], 2, 5);
console.log("\nSlice: ", sliced);
// => [ 3, 4, 5 ]

// take
const taken = _.take([1, 2, 3, 4, 5, 6, 7], 5);
console.log("\nTaken: ", taken);
// => [ 1, 2, 3, 4, 5 ]

// uniq
const uniqueValues = _.uniq([1, 2, 3, 4, 5, 6, 7, 1, 3, 4, 6]);
console.log("\nOnly unique values", uniqueValues);
// => [ 1, 2, 3, 4, 5, 6, 7 ]

/*
 * 		collection functions
 */
console.log("\n\n########### Collection Functions Results ###########\n");

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
console.log("\nEvery vehicle has tires?: ", allVehiclesHaveTires);
// => true

// find: only first found element
const found = _.find(VEHICLES, (value) => value.tires === 4);
console.log("\nFound(ed) element(s): ", found);
// => { id: 1, name: 'car', tires: 4 }

// flatMap
const duplicate = (value) => [value, value];
const flat = _.flatMap(VEHICLES, duplicate);
console.log("\nFlat mapped (duplicated) elements: ", flat);
// => { id: 1, name: 'car', tires: 4 },
// => { id: 1, name: 'car', tires: 4 },
// => { id: 2, name: 'motorbike', tires: 2 },
// => { id: 2, name: 'motorbike', tires: 2 },
// => and so on ...

// groupBy
const groups = _.groupBy(VEHICLES, (value) => value.tires);
console.log("\nVehicles grouped by number of tires: ", groups);
// => '1': [ { id: 4, name: 'unicycle', tires: 1 } ],
// => '2': [ { id: 2, name: 'motorbike', tires: 2 } ],
// => and so on ...

// includes
const includesGmail = _.includes("some_email@gmail.com", "gmail");
console.log("\nContains gmail string: ", includesGmail);
// => true

// map
const vehiclesWithoutId = _.map(VEHICLES, (value) => ({
  name: value.name,
  tires: value.tires,
}));
console.log("\nVehicles without ID: ", vehiclesWithoutId);
// => [ { name, tires } ... ]

// orderBy
const orderedDesc = _.orderBy(VEHICLES, ["name"], ["desc"]);
console.log("\nDescending order by name: ", orderedDesc);
// =>   { id: 3, name: 'airplane', tires: 5 },
// => { id: 6, name: 'bulldozer', tires: 4 },

// sortBy: stable sort
const sortedAsc = _.sortBy(VEHICLES, (value) => value.name);
console.log("\nAscending sorted by name: ", sortedAsc);
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
console.log("\nOrder total is: ", orderTotal);
// => 390

/*
 * 		string functions
 */
console.log("\n\n########### String Functions Results ###########\n");

const LOREM_IPSUM_LOWERCASE =
  "lorem ipsum dolor sit, amet consectetur adipisicing elit.";

// camelCase
// const SNAKE_CASE_STR = "this_is_a_snake_case_string";
const camelized = _.camelCase(LOREM_IPSUM_LOWERCASE);
console.log("Camelized: ", LOREM_IPSUM_LOWERCASE, " to ", camelized);
// => loremIpsumDolorSitAmetConsecteturAdipisicingElit

// capitalize
const capitalized = _.capitalize(LOREM_IPSUM_LOWERCASE);
console.log("\nCapitalized: ", LOREM_IPSUM_LOWERCASE, " to ", capitalized);
// => Lorem ipsum dolor sit, amet consectetur adipisicing elit.

// kebabCase
const kebabed = _.kebabCase(LOREM_IPSUM_LOWERCASE);
console.log("\nKebabed: ", LOREM_IPSUM_LOWERCASE, " to ", kebabed);
// => lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit

// lowerCase
const LOREM_IPSUM_UPPERCASE =
  "LOREM IPSUM DOLOR SIT, AMET CONSECTETUR ADIPISICING ELIT.";
const allLowerCase = _.lowerCase(LOREM_IPSUM_UPPERCASE);
console.log("\nLowercased: ", LOREM_IPSUM_UPPERCASE, " to ", allLowerCase);
// => lorem ipsum dolor sit amet consectetur adipisicing elit

// upperCase
const allCaps = _.upperCase(LOREM_IPSUM_LOWERCASE);
console.log("\nCapitalized: ", LOREM_IPSUM_LOWERCASE, " to ", allCaps);
// => LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT

// lowerFirst
const firstLowerCase = _.lowerFirst(LOREM_IPSUM_UPPERCASE);
console.log(
  "\nFirst lowercase: ",
  LOREM_IPSUM_UPPERCASE,
  " to ",
  firstLowerCase
);
// => lOREM IPSUM DOLOR SIT, AMET CONSECTETUR ADIPISICING ELIT.

// upperFirst
const firstUpperCase = _.upperFirst(LOREM_IPSUM_LOWERCASE);
console.log(
  "\nFirst uppercase: ",
  LOREM_IPSUM_LOWERCASE,
  " to ",
  firstUpperCase
);
// => Lorem ipsum dolor sit, amet consectetur adipisicing elit.

// snakeCase
const snakeCased = _.snakeCase(LOREM_IPSUM_LOWERCASE);
console.log("\nSnakecased: ", LOREM_IPSUM_LOWERCASE, " to ", snakeCased);
// => lorem_ipsum_dolor_sit_amet_consectetur_adipisicing_elit

// startsWith
const starts = _.startsWith(LOREM_IPSUM_LOWERCASE, "l");
console.log(
  "\nStarts with: ",
  "'",
  LOREM_IPSUM_LOWERCASE,
  "' Starts with 'l': ",
  starts
);
// => true

// trim: only sorround chars
const loremWithRandomChars = ".,?!" + LOREM_IPSUM_LOWERCASE + ".,?!";
const trimmed = _.trim(loremWithRandomChars, ".,?!");
console.log("\nTrimmed: ", trimmed);
// => lorem ipsum dolor sit, amet consectetur adipisicing elit

// trimEnd
const endTrimmed = _.trimEnd(loremWithRandomChars, ".,?!");
console.log("\nTrimmed only at the end: ", endTrimmed);
// => .,?!lorem ipsum dolor sit, amet consectetur adipisicing elit

// trimStart
const startTrimmed = _.trimStart(loremWithRandomChars, ".,?!");
console.log("\nTrimmed only at the start: ", startTrimmed);
// => lorem ipsum dolor sit, amet consectetur adipisicing elit..,?!

// pad
const loremIpsum = "lorem ipsum";
const padded = _.pad(loremIpsum, 17, "-_");
console.log("\nPadded: ", padded);
// => -_-lorem ipsum-_-

// padEnd
const padEnd = _.padEnd(loremIpsum, 17, "-_");
console.log("\nPadded only at the end: ", padEnd);
// => lorem ipsum-_-_-_

// padStart
const padStart = _.padStart(loremIpsum, 17, "-_");
console.log("\nPadded only at the start: ", padStart);
// => -_-_-_lorem ipsum

// escape: only "&", "<", ">", '"', and "'"
const unescapedString = `You & Me understand "3 > 2", '3 < 4' comparisons.`;
const escaped = _.escape(unescapedString);
console.log("\nEscaped ", unescapedString, " to ", escaped);
// =. You &amp; Me understand &quot;3 &gt; 2&quot;, &#39;4 &lt; 3&#39; comparisons.

// unescape
const unescaped = _.unescape(escaped);
console.log("\nUnescaped ", escaped, " unescaped to ", unescaped);
// => You & Me understand "3 > 2", '4 < 3' comparisons.

// words
const words = _.words(LOREM_IPSUM_LOWERCASE);
console.log("\nArray of words: ", words);
// => [ 'lorem', 'ipsum', ... 'adipisicing', 'elit' ]

// truncate
const truncated = _.truncate(LOREM_IPSUM_LOWERCASE, {
  length: 23,
  separator: /\s/,
  omission: " [...]",
});
console.log("\nTruncated string: ", truncated);
// => lorem ipsum dolor [...]
