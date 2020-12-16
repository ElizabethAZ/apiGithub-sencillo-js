var request = new XMLHttpRequest()

request.open('GET', 'https://api.github.com/users', true)

request.onload = function () {
  var data = JSON.parse(this.response);

  var statusHTML = '';
  var statusHTML2 = '';
  $.each(data, function(i, status) {
    statusHTML += '<div class="col col-md-5">'
    statusHTML += '<div class="panel panel-info">'
    statusHTML += '<div class="p-3 border bg-light">'
    statusHTML += ' <h4 class="text-center text-info">Usuario '+ parseInt(i+1) +'</h3>'
    statusHTML += ' <div class="card" style="width: 5rem;">'
    statusHTML += '     <img src="' + status.avatar_url + '" alt="" width="80" height="80">';
    statusHTML += '</div>'
    statusHTML += '<p><strong>' + status.login + '</strong></p>';
    statusHTML += 'URL en GitHub :<br><a href="'+ status.html_url+ '" target="_blank">' + status.html_url + '</a></br>';
    //statusHTML += 'Repositorios :<br><a href="'+ status.repos_url+ '" target="_blank">' + status.repos_url + '</a>';
    statusHTML += 'Repositorios :<br><a href="repositorios.html" target="_blank">' + status.repos_url + '</a>';
    statusHTML += '</div>'
    statusHTML += '</div>'
    statusHTML += '</div>'

    console.log(status.id);
  });
  $('pic').html(statusHTML);
}

request.send();