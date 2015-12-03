$(document).ready(function(){

$('#upload').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(e.target);

    $.ajax({
      url: 'localhost:3000/images',
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

//   $('#upload').on('submit', function(e){
//     e.preventDefault();
//     // creates a new instance of the FileReader object prototype
//     var reader = new FileReader();

//     //setting a function to be executed every time the reader successfully completes a read operation
//     reader.onload = function(event){
//       // once the data url has been loaded, make the ajax request with the result set as the value to key 'poster'
//       $.ajax({
//         url: 'http://localhost:3000/images',
//         method: 'POST',
//         data: { image: {
//            url: event.target.result
//         } }
//       }).done(function(data){
//         var file = data.url;
//         $( ".files" ).append( "<li>" + file + "</li>" );
//         console.log(data);
//       }).fail(function(response){
//         console.error('Whoops!');
//       });
//     };

//     // read the first file of the file input
//     $fileInput = $('#file-upload');
//     reader.readAsDataURL($fileInput[0].files[0]);

//   });
});

