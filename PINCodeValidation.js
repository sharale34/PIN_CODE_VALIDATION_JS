// The Postal Index Number Validation

// Create a regex pattern to validate PIN code 400088
{
    function is_PINCode(Str) {
        regexp = /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;

        if (regexp.test(Str)) {
            return true;
        }
        else {
            return false;
        }
    }
    console.log("Is given PIN Code Valid - ", is_PINCode("400 088"));
}

//Validate Email address with a regex.
{
    function isValidEmailAddress(Str) {
        regexp = /^[a-zA-Z0-9-]+(.[_A-Za-z0-9-+.]+)+@[a-zA-Z0-9]+(.[A-Za-z0-9]+)$/;

        if (regexp.test(Str)) {
            return true;
        }
        else {
            return false;
        }
    }
    console.log("Is given Email Address Valid - ", isValidEmailAddress("abc.xyz@bridgelabz.com"));
}