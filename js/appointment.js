$(function() {
    var form = $('#appointment_form');
    var formMessages = $('#msg-status');
    $(form).submit(function(event) {
        event.preventDefault();
        var formData = $(form).serialize();
        $.ajax({ type: 'POST', url: $(form).attr('action'), data: formData }).done(function(response) {
            $(formMessages).removeClass('alert-danger');
            $(formMessages).addClass('alert-success');
            $(formMessages).text(response);
            $('#app_name').val('');
            $('#app_email').val('');
            $('#app_phone').val('');
            $('#app_free_time').val('');
            $('#app_services').val('');
            $('#app_barbers').val('');
        }).fail(function(data) {
            $(formMessages).removeClass('alert-success');
            $(formMessages).addClass('alert-danger');
            if (data.responseText !== '') { $(formMessages).text(data.responseText); } else { $(formMessages).text('Oops! An error occured and your appointment process could not be complete.'); }
        });
    });
});