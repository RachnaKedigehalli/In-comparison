var submitBtn = document.getElementById('submit-btn');
var inputRow = document.getElementById('input-row');
var inputArr = inputRow.getElementsByTagName('input');
var userName = document.getElementById('user-name-1');

submitBtn.addEventListener('click', function(event) {
    var http = new XMLHttpRequest();

    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            console.log(typeof(this.responseText));
            try {
                var userData = JSON.parse(this.responseText);
                console.log(userData);
                // document.getElementById('content').innerHTML = ;
            }
            
            catch(err) {
                document.getElementById('content').innerHTML = `<div class="error-message">
                                                            ${this.responseText}
                                                        </div>`;
            }
        }
    };

    if(userName.value) {
        http.open("GET", `http://127.0.0.1:8000/user?username=${userName.value}`, true);
        http.send();
    }
    else {
        document.getElementById('content').innerHTML = `<div class="error-message">
                                                            Enter usernames to compare!
                                                        </div>`;
    }
});