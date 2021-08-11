const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    let email = loginForm.elements.emailLog.value;
    let password = loginForm.elements.passwdLog.value;
    axios.post('http://localhost:8080/api/auth/login', {
        email: email,
        password: password
      })
      .then(function (response) {
        console.log(response);
        const token = response.data;


        function parseJwt (token) {
          var base64Url = token.split('.')[1];
          var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));

          console.log(jsonPayload);
      
          return JSON.parse(jsonPayload);
      };

      parseJwt(token);


      })
      .catch(function (error) {
        console.log(error);
      });
})