$(document).ready(function() {
    $("#submit-btn").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var subject = $("#subject").val();
        var message = $("#message").val();

        $.ajax({
            url: 'https://script.google.com/macros/s/AKfycbxqZjqhMsq69FxWOLiAcloeZ0Juywj_8ZI7yK3T3EPtp7ASwToGJm7keyDUDnJNSK-Neg/exec',
            type: 'POST',
            data: JSON.stringify({
                name: name,
                email: email,
                subject: subject,
                message: message
            }),
            contentType: 'application/json',
            success: function(response) {
                console.log("Success");
            },
            error: function(error) {
                console.log("Error: ", error);
            }
        });
    });
});
