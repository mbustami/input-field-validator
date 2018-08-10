(function(global, $) {
    "use strict"

    var Field = function($element, validator) {
        this.element = $element;
        this.validator = validator;
        this.input = this.element.find('input');
        this.info = this.element.find('.info');
    }
    
    Field.prototype.reset = function() {
        this.info.html("");
    }
    
    Field.prototype.setError = function() {
        this.reset();
        this.info.html(validators[this.validator]['message']);
    }
    
    Field.prototype.validate = function() {
        this.inputValue = this.input.val();
        var check = validators[this.validator]['check'].call(validators, this.inputValue);
        if(check) {
            errCount++;
            this.setError();
            this.element.removeClass('valid-field');
            this.element.addClass('invalid-field');
        } else {
            this.reset();
            this.element.removeClass('invalid-field');
            this.element.addClass('valid-field');
        }
    }
    
    Field.create = function($element, validator) {
        return new Field($element, validator);
    }

    Field.init = function() {
        $('.input-field').each(function() {
            var fieldValidator = $(this).find('input').data('validator');
            fields.push(Field.create($(this), fieldValidator));
        });
    
        $('.submit').on('click', function(event) {
            event.preventDefault();
            errCount = 0;
            fields.forEach(function(i) {
                i.validate();
            });
            if (errCount === 0) {
                $(this).closest('form').submit();
            }
        });
    
    }

    var errCount = 0;
    var fields = [];
    
    global.Field = Field;

}(window, jQuery));