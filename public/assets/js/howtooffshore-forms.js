
// TRELLO SUBMISSION
$("#trello").submit(function(e) {
    e.preventDefault();

    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
        // Hide our form
        $( "#trello-form" ).hide();
        
        // Show our success message!
        $( "#trello-success" ).show();
    });
});

// NEWSLETTER SUBMISSION
$("#newsletter").submit(function(e) {
    e.preventDefault();

    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
        // Hide our form
        $( "#newsletter-form" ).hide();
        
        // Show our success message!
        $( "#newsletter-success" ).show();
    });
});

// DIRECT REQUEST SUBMISSION
$("#directrequest").submit(function(e) {
    e.preventDefault();

    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
        // Hide our form
        $( "#directrequest-form" ).hide();
        
        // Show our success message!
        $( "#directrequest-success" ).show();
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
