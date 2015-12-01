var packrat = {
  url: 'http://localhost:3000',

  ajax: function (config, cb) {
    $.ajax(config).done(function(data, textStatus, jqxhr) {
      cb(null, data);
    }).fail(function(jqxhr, status, error) {
      cb({jqxher: jqxhr, status: status, error: error});
    });
    $.ajaxSetup({
      xhrFields: {
        withCredentials: true
      }
    });
  },

  register: function (credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/signup',
      contentType: 'application/json',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
    console.log("success")
  },

  login: function (credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/login',
      contentType: 'application/json',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
    console.log("success")
  },

  logout: function (token, id, callback) {
    this.ajax({
      method: 'DELETE',
      url: this.url + '/logout/' + id,
      // xhrFields: {
      //   withCredentials: true
      // },
      contentType: 'application/json',
      dataType: 'json'
    }, callback);
    console.log("success")
  }
};
