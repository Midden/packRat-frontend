$(document).ready(function() {

  // $.ajaxSetup({
  //   xhrFields: {
  //       withCredentials: true
  //   }
  // });

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
  var wrap = function wrap(root, formData) {
    var wrapper = {};
    wrapper[root] = formData;
    return wrapper;
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
        var credentials = wrap('credentials', form2object(this));
        packrat.register(credentials, callback);
      });


});
