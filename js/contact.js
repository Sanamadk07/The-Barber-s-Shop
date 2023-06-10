$(function() {
    var form = $('#ajax_form');
    var formMessages = $('#form-messages');
    $(form).submit(function(event) {
        event.preventDefault();
        var formData = $(form).serialize();
        $.ajax({ type: 'POST', url: $(form).attr('action'), data: formData }).done(function(response) {
            $(formMessages).removeClass('alert-danger');
            $(formMessages).addClass('alert-success');
            $(formMessages).text(response);
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
        }).fail(function(data) {
            $(formMessages).removeClass('alert-success');
            $(formMessages).addClass('alert-danger');
            if (data.responseText !== '') { $(formMessages).text(data.responseText); } else { $(formMessages).text('Oops! An error occured and your message could not be sent.'); }
        });
    });
});