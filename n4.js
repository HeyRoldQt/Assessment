// Object {} with a property. if the property has same value the condition will execute true if the value is not same the condition will return false.
const hi = { test: "2" };
// try hello.test = 1
const hello = { test: "1" };

if (hi.test === hello.test) {
  return console.log(true);
} else {
  return console.log(false);
}
