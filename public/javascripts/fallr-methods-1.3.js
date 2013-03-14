var methods = {
    alertlike: function () {
        $.fallr('show', {
            content: '<p>Howdy.</p>'
        });
    },
    confirmlike: function () {
        var clicked = function () {
            alert('congrats, you\'ve deleted internet');
            $.fallr('hide');
        };
        $.fallr('show', {
            buttons: {
                button1: {
                    text: 'Yes',
                    danger: true,
                    onclick: clicked
                },
                button2: {
                    text: 'Cancel'
                }
            },
            content: '<p>Are you sure you want to delete internet?</p>',
            icon: 'error'
        });
    },
    promptlike: function () {
        var clicked = function () {
            var yourname = $(this).children('form').children('#yourname').val();
            alert('Hello, ' + yourname);
            $.fallr('hide');
        };
        $.fallr('show', {
            buttons: {
                button1: {
                    text: 'Submit',
                    onclick: clicked
                },
                button2: {
                    text: 'Cancel'
                }
            },
            content: '<p>Give me your name</p><form><input type="text" id="yourname" /' + '></form>',
            icon: 'magnifier'
        });
    },
    multiplechoices: function () {
        var clicked = function (n) {
            alert(n);
        };
        $.fallr('show', {
            buttons: {
                button1: {
                    text: 'Yes',
                    onclick: function () {
                        clicked(1)
                    }
                },
                button2: {
                    text: 'Yes to all',
                    onclick: function () {
                        clicked(2)
                    }
                },
                button3: {
                    text: 'No',
                    onclick: function () {
                        clicked(3)
                    }
                },
                button4: {
                    text: 'Whatever',
                    danger: true
                }
            },
            content: '<p>Pick one</p>',
            icon: 'trash'
        });
    },
    below: function () {
        $.fallr('show', {
            content: '<p>You\'ve got a message</p>',
            position: 'bottom',
            icon: 'chat'
        });
    },
    middle: function () {
        $.fallr('show', {
            content: '<p>Hello there</p>',
            position: 'center'
        });
    },
    close: function () {
        $.fallr('show', {
            closeKey: true,
            closeOverlay: true,
            content: '<p>Click on overlay or press ESC to close this message</p>',
            icon: 'info'
        });
    },
    easing: function () {
        $.fallr('show', {
            easingDuration: 1000,
            easingIn: 'easeOutBounce',
            easingOut: 'easeInElastic',
            icon: 'window',
            position: 'center',
            content: '<h4>Animation please</h4><p>Oh pretty. Everyone loves animation.</p>'
        });
    },
    forms: function () {
        var login = function () {
            var user = $(this).children('form').children('input[type="text"]').val();
            var pass = $(this).children('form').children('input[type="password"]').val();
            if (user.length < 1 || pass.length < 1) {
                alert('Invalid!\nPlease fill all required forms');
            } else {
                alert('username: ' + user + '\npassword: ' + pass);
                $.fallr('hide');
            }
        }

        $.fallr('show', {
            icon: 'secure',
            width: '320px',
            content: '<h4>Sign in</h4>' + '<form>' + '<input placeholder="username" type="text"/' + '>' + '<input placeholder="password" type="password"/' + '>' + '</form>',
            buttons: {
                button1: {
                    text: 'Submit',
                    onclick: login
                },
                button4: {
                    text: 'Cancel'
                }
            }
        });
    },
    callback: function () {
        var hide2 = function () {
            $.fallr('hide', function () {
                alert('callback after 2nd hide');
            });
        };

        var hide1 = function (n) {
            $.fallr('hide', function () {
                alert('Hi, this is a callback after hide');
                $.fallr('show', {
                    content: '<p>You choose: ' + n + '</p>',
                    position: 'bottom',
                    buttons: {
                        button1: {
                            text: 'OK',
                            onclick: hide2
                        }
                    }
                }, function () {
                    alert('callback after 2nd show');
                });
            });
        };

        $.fallr('show', {
            icon: 'help',
            content: '<p>Arsenal or Liverpool?</p>',
            buttons: {
                button1: {
                    text: 'Arsenal',
                    onclick: function () {
                        hide1('Arsenal');
                    }
                },
                button2: {
                    text: 'Liverpool',
                    onclick: function () {
                        hide1('Liverpool');
                    }
                }
            }
        }, function () {
            alert('Hi, this is a callback after show');
        });
    },
    size: function () {
        $.fallr('show', {
            maxWidth: '600px',
            height: '400px',
            width: '600px',
            content: '<h4>Lorem Ipsum</h4><p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>',
            icon: 'config'
        });
    },
    autoresize: function () {
        var smaller = function () {
            $.fallr('resize', {
                width: '300px',
                height: '300px'
            });
        };
        var bigger = function () {
            $.fallr('resize', {
                width: '500px',
                height: '500px'
            });
        };
        $.fallr('show', {
            content: '<h4>Resize method</h4><p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."</p>',
            buttons: {
                button1: {
                    text: 'Smaller',
                    onclick: smaller
                },
                button2: {
                    text: 'Bigger',
                    onclick: bigger
                },
                button3: {
                    text: 'Cancel'
                }
            },
            width: '300px',
            height: '300px',
            position: 'center',
            icon: 'left'
        }, function () {
            // on show callback
            $.fallr('resize', {
                width: '400px',
                height: '400px'
            });
        });
    },
    fullsize: function () {
        var gap = 20;
        var boxH = $(window).height() - gap; // bottom gap
        var boxW = $(window).width() - gap * 2; // left + right gap
        $.fallr('show', {
            content: '<p>Fullscreen</p>',
            width: boxW,
            height: boxH
        });
    },
    autoclose: function () {
        $.fallr('show', {
            buttons: {},
            content: '<h4>Autoclose</h4><p>This will be self closing after 5 seconds</p><p>No buttons haz teh present haha LOL so just wait plz</p>',
            autoclose: 5000,
            icon: 'clock'
        });
    },
    nooverlay: function () {
        $.fallr('show', {
            content: '<p>Yay, no overlay!</p>',
            icon: 'quote',
            useOverlay: false
        });
    },
    effect: function () {
        var blinkIt = function () {
            $.fallr('blink');
        };
        var shakeIt = function () {
            $.fallr('shake');
        };
        $.fallr('show', {
            content: '<h4>Special Effects</h4>',
            position: 'center',
            icon: 'star',
            buttons: {
                button1: {
                    text: 'Blink',
                    onclick: blinkIt
                },
                button2: {
                    text: 'Shake',
                    onclick: shakeIt
                },
                button3: {
                    text: 'Cancel'
                }
            }
        });
    },
    redirect: function () {
        var redirect = function () {
            window.location.href = "http://www.google.com";
        };

        $.fallr({
            buttons: {
                button1: {
                    text: 'confirm',
                    onclick: redirect
                },
                button2: {
                    text: 'cancel'
                }
            },
            content: '<p>please confirm to get redirected</p>'
        });
    },
    iframe: function () {
        $.fallr('show', {
            content: '<p>This is a video</p><iframe width="560" height="315" src="http://www.youtube.com/embed/xTSE3bohck8?rel=0" frameborder="0" allowfullscreen></iframe>',
            width: 560 + 100, // 100 = padding width
            icon: 'chat',
            buttons: {
                button1: {
                    text: 'Close'
                }
            }
        });
    },
    bound: function () {
        $.fallr('show', {
            content: '<p>Set the boundary to any element. To this box for example</p>',
            icon: 'pin',
            bound: '#selector',
            useOverlay: false
        });
    }
};
$('a[href^="#fallr-"]').click(function () {
    var id = $(this).attr('href').substring(7);
    methods[id].apply(this, [this]);
    return false;
});