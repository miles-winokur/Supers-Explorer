// var heroAccessToken = "6a1b32f750b7a8c2d212967709165e99";

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
        displayImages(data);
    }
}

//displays all the images of the supers
function displayImages(data) {
    var listBox = document.getElementById("supers");
    listBox.innerHTML = ""; // clears all the supers

    // iterates over all supers and displays them
    for (var i = 0; i < data.length; i++) {
        var span = document.createElement("span");

        span.onclick = function () { getInfo(this) };
        span.id = i;

        // Moves to a new line after every 4th span element
        if (i != 0 && i % 4 == 0) {
            var br = document.createElement("br");
            listBox.appendChild(br);
        }

        span.innerHTML = "<img src=\"" + data[i].image + "\" alt=\"" + data[i].heroName + "\">"
        listBox.appendChild(span);
    }
}

function getInfo(entry) {
    //attempt to send an async request
    try {
        //create request
        var asyncRequest = new XMLHttpRequest();

        //setup callback function and store it
        asyncRequest.addEventListener("readystatechange", function () {
            displayInfo(entry, asyncRequest) //calls displayInfo() function, a callback function
        }, false)

        //send the asynchronous request
        asyncRequest.open("GET", "heroes.json", true)
        asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8");
        asyncRequest.send();
    }
    catch (exception) {
        alert("Unable to complete getInfo request...")
    }

}

function displayInfo(entry, asyncRequest) {
    //if request completed successfully, process request
    if (asyncRequest.readyState == 4 && asyncRequest.status == 200) {
        //convert JSON string to an object
        var data = JSON.parse(asyncRequest.responseText);
        var heroId = entry.id //get id of the hero clicked
        var originalContent = entry.innerHTML
        var alterEgo = document.createElement("p");
        var powers = document.createElement("p");
        var publisher = document.createElement("p");
        var allegiance = document.createElement("p");

        alterEgo.innerHTML = "<strong>Alter Ego:</strong> " + data[heroId].alterEgo
        powers.innerHTML = "<strong>Powers:</strong> " + data[heroId].powers.join(", ")
        publisher.innerHTML = "<strong>Publisher:</strong> " + data[heroId].publisher
        allegiance.innerHTML = "<strong>Allegiance:</strong> " + data[heroId].allegiance
        entry.innerHTML = "<h2>" + data[heroId].heroName + "</h2>";

        entry.append(alterEgo, powers, publisher, allegiance);

        entry.onclick = function () {
            clearField(entry, originalContent);
        }
    }
}

function clearField(entry, name) {
    entry.innerHTML = name;
    entry.onclick = function () {
        getInfo(entry);
    }
}


window.addEventListener("load", function () {
    //move to a function for displaying stats
    callWebService("heroes.json");
});