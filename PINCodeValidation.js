// The Postal Index Number Validation

// Create a regex pattern to validate PIN code 400088
function is_PINCode(str)
{
 regexp = /[0-9]{6}/;
  
        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}
console.log("Is given PIN Code Valid - ",is_PINCode("400088"));