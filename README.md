checkboxify
===========

####Anchor becomes your checkbox, with three states instead of two. Including a "-", indicating without.

You can default classes by adding .check, or .without by default and clicking will toggle from checked to without to empty.

There is a callback on state change, with a parameter letting you know what the current state is... either "empty", "check", or "without".

## Mark Up

### Defaults checked

    <div class="c-box check">
        <span class="check-box">&#10003;</span>
        <span class="minus">-</span>
    </div>

### Defaults without

    <div class="c-box without">
        <span class="check-box">&#10003;</span>
        <span class="minus">-</span>
    </div>

### Defaults empty

    <div class="c-box">
        <span class="check-box">&#10003;</span>
        <span class="minus">-</span>
    </div>

## Example Script

    jQuery(function($){
        var boxChange = function(state){
            alert('current state is '+ state);
        }

        $('.c-box').checkboxify({
            callback: boxChange
        });
    }(jQuery));