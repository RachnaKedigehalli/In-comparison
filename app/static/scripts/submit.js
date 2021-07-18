var submitBtn = document.getElementById('submit-btn');
var inputRow = document.getElementById('input-row');
var inputArr = inputRow.getElementsByTagName('input');
var userName1 = document.getElementById('user-name-1');

submitBtn.addEventListener('click', function(event) {
    var http = new XMLHttpRequest();

    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            if (data.valid) {
                console.log(data.info);
            }
            else {
                document.getElementById('content').innerHTML = `<div class="error-message">
                                                            ${data.info}
                                                        </div>`;
            }
        }
    };

    if(userName1.value) {
        var username_str = "";
        var number = 0;
        for (var i=0; i<inputArr.length; i++) {
            var userName = inputArr[i];
            console.log(userName.value);
            if (userName.value) {
                number += 1;
                username_str += '&user'+ number + '=' + userName.value;
            }
                
        }
        http.open("GET", `http://127.0.0.1:8000/user?number=${number}`+ username_str, true);
        http.send();
    }
    else {
        document.getElementById('content').innerHTML = `<div class="error-message">
                                                            Enter usernames to compare!
                                                        </div>`;
    }
});