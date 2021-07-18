var addBtn = document.getElementById('add-button');
var inputRow = document.getElementById('input-row');
var inputArr = inputRow.getElementsByTagName('input');

addBtn.addEventListener('click', function(event) {
    var values = [];
    for (var i=0; i<inputArr.length; i++) {
        var x = inputArr[i].value;
        values.push(x);
    }
    if(inputArr[inputArr.length-1].value) {
        inputRow.innerHTML += `<label for="user-name-${inputArr.length+1}">Instagram username ${inputArr.length+1}</label>
                            <input 
                                id="user-name-${inputArr.length+1}"
                                name="userName${inputArr.length+1}"
                                type="text"
                                placeholder="Add usernames"
                            >`;
        for (var i=0; i<values.length; i++) {
            inputArr[i].value = values[i];
        }
    }
    else {
        document.getElementById('content').innerHTML = `<div class="error-message">
                                                            Enter usernames in empty fields to add a new field!
                                                        </div>`;
    }
});