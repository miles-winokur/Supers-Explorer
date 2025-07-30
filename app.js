function callWebService(requestUrl) {
    try {
        //create request
        var asyncRequest = new XMLHttpRequest();

        //setup callback function and store it
        asyncRequest.addEventListener("readystatechange", function () {
            parseData(asyncRequest); //calls parseData() function, a callback function
        }, false)

        //send the asynchronous request
        asyncRequest.open("GET", requestUrl, true)
        asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8");
        asyncRequest.send();
    }
    catch (exception) {
        alert("Unable to complete callWebService request...");
    }

}

//parses the JSON file
function parseData(asyncRequest) {
    //if request completed successfully, process the response
    if (asyncRequest.readyState == 4 & asyncRequest.status == 200) {
        //convert JSON string to an object
        var data = JSON.parse(asyncRequest.responseText);
        displayNames(data);
    }
}

//displays all the names of the heroes
function displayNames(data) {
    var listBox = document.getElementById("names");
    listBox.innerHTML = ""; // clears all the heroes

    // iterates over all heroes and displays them
    for (var i = 0; i < data.length; i++) {
        var entry = document.createElement("div");
        var field = document.createElement("fieldset");
        entry.onclick = function () { getStats(this) }
        entry.id = i;
        entry.innerHTML = data[i].heroName;
        field.appendChild(entry);
        listBox.appendChild(field)
    }
}

function getStats(entry) {
    //attempt to send an async request
    try {
        //create request
        var asyncRequest = new XMLHttpRequest();

        //setup callback function and store it
        asyncRequest.addEventListener("readystatechange", function () {
            displayStats(entry, asyncRequest) //calls displayStats() function, a callback function
        }, false)

        //send the asynchronous request
        asyncRequest.open("GET", "heroes.json", true)
        asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8");
        asyncRequest.send();
    }
    catch (exception) {
        alert("Unable to complete getStats request...")
    }

}

function displayStats(entry, asyncRequest) {
    //if request completed successfully, process request
    if (asyncRequest.readyState == 4 && asyncRequest.status == 200) {
        //convert JSON string to an object
        var data = JSON.parse(asyncRequest.responseText);
        var heroId = entry.id //get id of the hero clicked
        var name = entry.innerHTML
        entry.innerHTML = name + "<br>" + data[heroId].powers;

        entry.onclick = function () {
            clearField(entry, name);
        }
    }
}

function clearField(entry, name) {
    entry.innerHTML = name;
    entry.onclick = function () {
        getStats(entry);
    }
}


window.addEventListener("load", function () {
    //move to a function for displaying stats
    callWebService("heroes.json");
});