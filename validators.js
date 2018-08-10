// don't change the name of this object

var validators = {
    // add your validators here
    // example validators
    'notEmpty': {
        check: function(value) {
            return !(value.length > 0);
        },
        message: "Must not be empty"
    },
    'email': {
        check: function(value) {
            var re = /\S+@\S+\.\S+/;
            return !(re.test(value));
        },
        message: "Invalid email"
    },
    'password': {
        check: function(value) {
            return !(value.length > 8);
        },
        message: "Must have more 8 characters"
    }
}