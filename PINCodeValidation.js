// The Postal Index Number Validation

// Create a regex pattern to validate PIN code 400088
function is_PINCode(str)
{
 regexp = /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;
  
        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}
console.log("Is given PIN Code Valid - ",is_PINCode("400 088"));