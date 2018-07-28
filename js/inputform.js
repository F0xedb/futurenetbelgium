var el1 = document.getElementById("prename");
var el2 = document.getElementById("name");
var el3 = document.getElementById("reflink");
var el4 = document.getElementById("e-mail");
var el5 = document.getElementById("agv");
var el6 = document.getElementById("sponsor");


function input(el){
    if(el.value.length > 0){
        setClass(el,"is-invalid","is-valid");
    }else{
        setClass(el,"is-valid","is-invalid");
    }

}

function inputbtn(el){
    if(el.checked){
        setClass(el,"is-invalid","is-valid");
    }else{
        setClass(el,"is-valid","is-invalid");
    }

}

function setClass(el,remove,add){
    var classList = el.className.split(" ");
    for (var i =0;i<classList.length; i++){
        if(classList[i]==remove){
            classList[i]=add;
        }
    }
    var string = "";
    for(var j = 0; j < classList.length; j++){
        string += classList[j] + " ";
    }
    el.className = string;
}
function setTravelbtn(bAllowed){
    var btn = document.getElementById("sendMessageButton");
    if (bAllowed){
        btn.removeAttribute("disabled");
    } else{
        var attrib = document.createAttribute("disabled");
        btn.setAttributeNode(attrib);
    }
}
function count(){
   return getAllTagsWithValueAttribute("class","is-invalid").length;
}


setInterval(function(){
    input(el1);
    input(el2);
    input(el3);
    input(el4);
    inputbtn(el5);
    input(el6);
    if(count()<=0){
        setTravelbtn(true);
    }else{
        setTravelbtn(false);
    }
},100);


//Db toegevoegd 28/7/18

$(function() {

    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM

            var name = $("input#name").val();
            var prename = $("input#prename").val();
            var email = $("input#email").val();
            var reflink = $("input#reflink").val();
            var sponsor = $("input#sponsor").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $this = $("#sendMessageButton");
            $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
            $.ajax({
                url: "././mail/login.php",
                type: "POST",
                data: {
                    name: name,
                    prename: prename,
                    reflink: reflink,
                    email: email,
                    sponsor: sponsor
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                complete: function() {
                    setTimeout(function() {
                        $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
                    }, 1000);
                }
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});

// Db toegevoegd test

// $(function()
// {
//     function after_form_submitted(data)
//     {
//         if(data.result == 'success')
//         {
//             $('form#contactForm').hide();
//             $('#success_message').show();
//             $('#error_message').hide();
//         }
//
//     }
//
// 	$('#contactForm').submit(function(e)
//       {
//         e.preventDefault();
//
//         $form = $(this);
//         //show some response on the button
//         $('button[type="submit"]', $form).each(function()
//         {
//             $btn = $(this);
//             $btn.prop('type','button' );
//             $btn.prop('orig_label',$btn.text());
//             $btn.text('Sending ...');
//         });
//
//
//                     $.ajax({
//                 type: "POST",
//                 url: 'handler.php',
//                 data: $form.serialize(),
//                 success: after_form_submitted,
//                 dataType: 'json'
//             });
//
//       });
// });

