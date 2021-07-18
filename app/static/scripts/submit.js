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
                var followersArr = [];
                var likesArr = [];
                var commentsArr = [];
                var fbars = lbars = cbars = details = ``;
                for (var i=0; i<data.info.length; i++) {
                    if (data.info[i] instanceof Object) {
                        console.log(data.info[i].followers);
                        followersArr.push(data.info[i].followers);
                        likesArr.push(data.info[i].likes);
                        commentsArr.push(data.info[i].comments);
                        fbars += `<div class="followers" id="f${i+1}">${data.info[i].followers}</div>`;
                        lbars += `<div class="likes" id="l${i+1}">${data.info[i].likes}</div>`;
                        cbars += `<div class="comments" id="c${i+1}">${data.info[i].comments}</div>`;
                        details += `<div class="user">
                        <!--
                                        <div class="profile-pic">
                                            <img src="${data.info[i].profile_picture_url}" alt="">
                                        </div>
                            -->
                                        <div class="${data.info[i].user_name}">${data.info[i].user_name}</div>
                                    </div>`;
                    }
                }
                // console.log(document.getElementById('graphs'));
                document.getElementById('graphs').innerHTML = `<div class="graph">
                        <div class="caption">Number of followers</div>
            
                        <div class="display">
                            ${fbars}
                        </div>
            
                        <div class="legend">
                            ${details}
                        </div>
                    </div>`;
                document.getElementById('graphs').innerHTML += `<div class="graph">
                        <div class="caption">Total likes for last 10 posts</div>
            
                        <div class="display">
                            ${lbars}
                        </div>
            
                        <div class="legend">
                            ${details}
                        </div>
                    </div>`;
                document.getElementById('graphs').innerHTML += `<div class="graph">
                        <div class="caption">Total comments on last 10 posts</div>
            
                        <div class="display">
                            ${cbars}
                        </div>
            
                        <div class="legend">
                            ${details}
                        </div>
                    </div>`;
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