KONAMI Command - Plugin for jQuery
=============

KONAMI Command is the plugin for jQuery to implement KONAMI Code. It makes web site more fun.

Usage:
-------

    // to bind document
    $.konamiCmd({
        callback: function(){ /* callback here */ }
    });
    // to bind element
    $(element).konamiCmd({
        callback: function(){ /* callback here */ }
    });


Options:
-------

* enter (bool:true) -- wheather press enter or not after command.
* keys (array: konami code) -- keyCode to customize
* callback (function) -- cakkback function