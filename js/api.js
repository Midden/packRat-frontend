var image_id = '';

var packrat = {
  url: 'https://radiant-dusk-6766.herokuapp.com/',


  ajax: function (config, cb) {
    $.ajaxSetup({
      xhrFields: {
        withCredentials: true
      }
    });
    $.ajax(config).done(function(data, textStatus, jqxhr) {
      cb(null, data);
    }).fail(function(jqxhr, status, error) {
      cb({jqxher: jqxhr, status: status, error: error});
    });

  },

  register: function (credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/signup',
      contentType: 'application/json',
      data: JSON.stringify(credentials)
      // dataType: 'text'
    }, callback);
    console.log("success");
  },

  login: function (credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/login',
      contentType: 'application/json',
      data: JSON.stringify(credentials)
      // dataType: 'json'
    }, callback);
    console.log(credentials);
  },

  showfiles: function(images, callback) {
    this.ajax({
      method: 'GET',
      url: this.url + '/images',
      contentType: 'application/json',
      data: JSON.stringify(images)
    }, callback);
  },

  // showone: function(image, callback) {
  //   this.ajax({
  //     method: 'GET',
  //     url: this.url + '/images/' + image_id,
  //     contentType: 'application/json',
  //     data: JSON.stringify(image)
  //   }, callback);
  // },

  update: function(image, callback) {
    this.ajax({
      method: 'PATCH',
      url: this.url + '/images/file',
      contentType: 'application/json',
      data: JSON.stringify(image),
      dataType: 'json'
    });
  },

  deleteall: function(image, callback) {
    this.ajax({
      method: 'DELETE',
      url: this.url + '/images',
      contentType: 'application/json',
      data: JSON.stringify(image)
    }, callback);
  },

  deleteone: function(image, callback){
    this.ajax({
      method: 'PATCH',
      url: this.url + '/images/deleteone' ,
      contentType: 'application/json',
      data: JSON.stringify(image),
      dataType: 'json'
    }, callback);
  },

  deletefile: function(image, callback){
    this.ajax({
      method: 'DELETE',
      url: this.url + '/images/deleteone',
      contentType: 'application/json',
      data: JSON.stringify(image),
      dataType: 'json'
    }, callback);
  },

  logout: function (callback) {
    this.ajax({
      method: 'DELETE',
      url: this.url + '/logout',
      contentType: 'application/json',
      // dataType: 'json'
    }, callback);
    console.log("success");
  }
};
