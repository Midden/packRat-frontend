$(document).ready(function() {

  $.ajaxSetup({
    xhrFields: {
        withCredentials: true
    }
  });

  var form2object = function(form) {
    var data = {};
    $(form).find('input').each(function(index, element) {
      var type = $(this).attr('type');
      if ($(this).attr('name') && type !== 'submit' && type !=='hidden') {
          data[$(this).attr('name')] = $(this).val();
        }
    });
    return data;
  };

  var callback = function callback(error, data) {
    if (error) {
      console.error(error);
      $('#result').val('status: ' + error.status + ', error: ' + error.error);
          return;
    }
    $('#result').val(JSON.stringify(data, null, 4));
  };

  $('#register').on('submit', function(e) {
        e.preventDefault();
        var credentials = form2object(this);
        console.log(credentials);
        packrat.register(credentials, callback);
  });

  $('#login').on('submit', function(e) {
        var credentials = form2object(this);
        var cb = function cb(error, data) {
          if (error) {
            callback(error);
            return;
          }
          callback(null, data);

          $('#login').each(function(){
            this.reset();
          });

        };
        e.preventDefault();
        packrat.login(credentials, cb);

        // $(".home-links").hide();
        // // $("#home-page").hide();
        // $("#about").hide();
        // $("#signup").hide();
        // $("#contact").hide();

        // $("#logout").show();

  });

$("#upload").on('submit', function(e) {
  e.preventDefault();
  var reader = new FileReader();

  reader.onload = function(event) {
    packrat.upload(event.target.result);
    awsUpload(event.target.result);
  }
})

  $('#logout').on('click', function(e) {
        e.preventDefault();
        var cb = function cb(error, data) {
          if (error) {
            callback(error);
            return;
          }
          callback(null, data);
        };
        packrat.logout(cb);

        // $(".home-links").show();
        // // $("#home-page").show();
        // $("#about").show();
        // $("#signup").show();
        // $("#contact").show();

        // $(".logged-in").hide();
        // $("#logout").hide();
  });

});
