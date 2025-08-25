//!valid phone number
// function validContact(contact) {
//   // You have to write your code here
//   if (contact !== "string") {
//     return "Invalid";
//   }
//   if (
//     contact.length == 11 &&
//     contact.startsWith("01") == true &&
//     contact.includes(" ") == true
//   ) {
//     return true;
//   }
//   return false;
// }

// const valid = validContact(["01987654321"]);
// console.log(valid);

function validContac2(contact) {
  if (typeof contact !== "string") {
    return "Invalid";
  }
  if (contact.length !== 11) {
    return false;
  }
  if (contact.startsWith("01") == false) {
    return false;
  }
  if (contact.includes(" ") == true) {
    return false;
  }
  return true;
}

console.log(validContac2("01987654321"));
