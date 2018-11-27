
// TRELLO SUBMISSION
$(function() {

    $("#trello input,#trello textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitSuccess: function ($form, event) {



            var data = {
                source: 'HOW TO OFFSHORE',
                type: 'TRELLO REQUEST',
                name: $('#name').val(),
                company: $('#company').val(),
                email: $('#email').val()
            }

            var $form = $(this);
            $.post($form.attr("action"), $form.serialize()).then(function() {

                // Hide our form
                $( "#trello-form" ).hide();
                
                // Show our success message!
                $( "#trello-success" ).show();

            });

            // will not trigger the default submission in favor of the ajax function
            event.preventDefault();
        },
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });
        
    
});

// NEWSLETTER SUBMISSION
$("#newsletter").submit(function(e) {
    e.preventDefault();

    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
        // Hide our form
        $( "#trello-form" ).hide();
        
        // Show our success message!
        $( "#trello-success" ).show();
    });
});

// DIRECT REQUEST SUBMISSION
$(function() {

    $("#directrequest input,#directrequest textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitSuccess: function ($form, event) {


            var URL = 'https://jmkt94us5c.execute-api.us-east-1.amazonaws.com/Production/emailLeadsToChangeFox'
            var data = {
            source: 'HOW TO OFFSHORE',
            type: 'DIRECT REQUEST',
            name: $('#name').val(),
            company: $('#company').val(),
            notes: $('#notes').val(),
            email: $('#email').val()
            }
            $.ajax({
            type: 'POST',
            url: URL,
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function () {
                
                // Hide our form
                $( "#directrequest-form" ).hide();
                
                // Show our success message!
                $( "#directrequest-success" ).show();
            },
            error: function () {
                // show an error message
                alert("Oh my something has gone wrong. You can email us directly on social@howtooffshore.com instead! Sorry for the inconvenience!")
            }
            })

            // will not trigger the default submission in favor of the ajax function
            event.preventDefault();
        },
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });
        
    
});



// FIELD UPDATES 

    // push Functions to share contact details where we can
    function pushName(){
        $("#newsletter-name").val( $("#name").val() );
        $("#directrequest-name").val( $("#name").val() );
        $("#trello-name").val( $("#name").val() );
    }
    
    function pushCompany(){
        $("#directrequest-company").val( $("#company").val() );
        $("#trello-company").val( $("#company").val() );
    }
    
    function pushEmail(){
        $("#newsletter-email").val( $("#email").val() );
        $("#directrequest-email").val( $("#email").val() );
        $("#trello-email").val( $("#email").val() );
    }

    // Trello Checks
    $("#trello-name").on("change",function() {
        $("#name").val($(this).val());
        pushName();
    });
    $("#trello-company").on("change",function() {       
        $("#company").val($(this).val());
        pushCompany();
    });
    $("#trello-email").on("change",function() {       
        $("#email").val($(this).val());
        pushEmail();
    });

    // Newsletter Checks
    $("#newsletter-name").on("change",function() {       
        $("#name").val($(this).val());
        pushName();
    });
    $("#newsletter-email").on("change",function() {       
        $("#email").val($(this).val());
        pushEmail();
    });

    // Direct Request Checks
    $("#directrequest-name").on("change",function() {       
        $("#name").val($(this).val());
        pushName();
    });
    $("#directrequest-company").on("change",function() {       
        $("#company").val($(this).val());
        pushCompany();
    });
    $("#directrequest-email").on("change",function() {       
        $("#email").val($(this).val());
        pushEmail();
    });
