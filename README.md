# input-field-validator

A custom JS input field validator, which allows the user to create his own validators.

## How to use

* Add validators.js and field.js to your project
* Start adding your validators to the validators object (in validators.js file).
* To add a valiator, you provide a validator name (ex: notEmpty), the function that will be used to check, and the error message.

here's an example of some validators that have been added to the validators object for testing.
(please follow the same approach for your custom validators).
```
var validators = {
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
```

* For the HTML form:
1) Wrap your input fields with a div that has the "input-field" class
2) Every input field must have the name of the custom validator you wish to use in 
a data-validator attribute (ex: data-validator="notEmpty").
3) Add a span with the class "info", this will be used to show validating messages.
4) The submit button must have a "submit" class
* And here's an example of an HTML form

```
<form>
    <div class="input-field">
        <label for="fname">first name</label>
        <input data-validator="notEmpty" type="text" id="fname">
        <span class="info"></span>
    </div>
    <div class="input-field">
        <label for="email">email</label>
        <input data-validator="email" type="text" id="email">
        <span class="info"></span>
    </div>
    <div class="input-field">
        <label for="password">Paasword</label>
        <input data-validator="password" type="password" id="password">
        <span class="info"></span>
    </div>

    <input type="submit" value="Submit" class="submit">
</form>
```

* When submitting the form, a "valid-field" or "invalid-field" class will be added to that input's containing div, so the user can add CSS styling accordingly.

* To initialize this library:
```
$(document).ready(function() {
	Field.init();
});
```

* Please note that this version is using jQuery, so you need to add jQuery first
(in the future I might get rid of jQuery and use pure js DOM selectors instead).