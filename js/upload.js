$(document).ready(function(){


$('#upload').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(e.target);

    formData.append('name', $("#filename").val());

    $.ajax({
       xhrFields: {
        withCredentials: true
      },
      url: 'https://radiant-dusk-6766.herokuapp.com/images',
      method: 'POST',
      contentType: false,
      processData: false,
      data: formData
    }).done(function(data) {
      console.log((JSON.stringify(data, null, 2)));

        $(".files").append("<li><b> File: </b>" + "<a href=" + data.url + ">" + data.name + "</a>" + "<b> ID: </b>" + data._id + "<b> Create at: </b>" + data.createdAt +"</li>");
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });

  });
});

// $('#delete').on('submit', function(e) {
//     e.preventDefault();
//     var formData = new FormData();

//     formData.append('name', $("#delete-filename").val());
//     formData.append('_id', $("#file-id"). val());

//     $.ajax({
//        xhrFields: {
//         withCredentials: true
//       },
//       url: 'http://localhost:3000/images',
//       method: 'POST',
//       contentType: false,
//       processData: false,
//       data: formData
//     }).done(function(data) {
//       console.log((JSON.stringify(data, null, 2)));

//       // $(".files").append('<li> File Name: ' + data.name + ' ID: ' + data._id + '</li>');
//     }).fail(function(jqxhr) {
//       console.error(jqxhr);
//     });

//   });
// });

// <li id=data.objectId>name</li>

// <form>
// id=something ObjectId: 2481029
// id=new-file-name New file name: blah
// submit

// $("#something").val().remove()?
// filter('#something').val().remove()
