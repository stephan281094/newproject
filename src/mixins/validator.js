export function validateName(rule, value, callback) {
  if (!value) {
    return callback("Please enter name");
  }

  if (value.length > 50) {
    return callback("Name should be shorter than 50 characters");
  }
  return callback();
}
