var packraturl = 'http://localhost:3000';

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

          $(".home-links").hide();
          // $("#home-page").hide();
          $("#about").hide();
          $("#signup").hide();
          $("#contact").hide();

          $("#logout").show();
        };
        e.preventDefault();
        packrat.login(credentials, cb);

  });

  $('#get-files').on('click', function(e) {
    $(".files").html('');
    var images = form2object(this);
    var cb = function cb(error, data) {
      if (error) {
        callback(error);
        return;
      }
      callback(null, data);

      var urls = data;
      // console.log(urls[0].path);

      for (var i = 0; i < urls.length; i++) {
        console.log(urls[i].name);
        $(".files").append("<li> File Name: " + urls[i].name.toString() + " ID: " + urls[i]._id.toString() + "</li>");
      }


      // $(".files").append("<li>" + data + "</li>");
    };
    e.preventDefault();
    packrat.showfiles(images, cb);
  });

  $('#update').on('submit', function(e) {
    var image = form2object(this);
    console.log(image);
    var cb = function cb(error, data) {
      if (error) {
        callback(error);
        return;
      }
      callback(null, data);
      $('#update').reset();
    };
    e.preventDefault();
    packrat.update(image, cb);
  });

  $('#deleteall').on('submit', function(e) {
    var image = form2object(this);
        var cb = function cb(error, data) {
          if (error) {
            callback(error);
            return;
          }
          callback(null, data);
          console.log('success');
        };
        e.preventDefault();
        packrat.deleteall(image, cb);
        console.log("click handler success");
  });

  $("#deleteone").on('submit', function(e){
    var image = form2object(this);
      var cb = function cb(error, data) {
        if (error) {
            callback(error);
            return;
          }
          callback(null, data);
          console.log('success');
        };
        e.preventDefault();
        console.log(image);
        packrat.deleteone(image, cb);
        packrat.deletefile(image, cb);
  });

  $('#logout').on('click', function(e) {
        var cb = function cb(error, data) {
          if (error) {
            callback(error);
            return;
          }
          callback(null, data);

          $(".home-links").show();
          // $("#home-page").show();
          $("#about").show();
          $("#signup").show();
          $("#contact").show();

          $(".logged-in").hide();
          $("#logout").hide();
        };
        e.preventDefault();
        packrat.logout(cb);
  });

}); //document.ready
