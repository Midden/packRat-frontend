$(document).ready(function(){


$('#upload').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(e.target);

    formData.append('name', $("#filename").val());

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

      $(".files").append('<li>' + data.name + '</li>');
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });

  });
});

// <li id=data.objectId>name</li>

// <form>
// id=something ObjectId: 2481029
// id=new-file-name New file name: blah
// submit

// $("#something").val().remove()?
// filter('#something').val().remove()
