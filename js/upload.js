$(document).ready(function(){


$('#upload').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(e.target);

    $.ajax({
       xhrFields: {
        withCredentials: true
      },
      url: 'http://localhost:3000/images',
      method: 'POST',
      contentType: false,
      processData: false,
      data: formData
    }).done(function(data) {
      console.log((JSON.stringify(data, null, 2)));
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });

  });
});

