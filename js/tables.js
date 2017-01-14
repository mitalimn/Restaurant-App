$.get("/api", function(data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        if (i < 5) {
            var wellSection = $("<div>");
            wellSection.addClass("well");
            wellSection.attr("id", "character-well-" + i);
            $("#well-section").append(wellSection);

            $("#character-well-" + i).append("<h2>Name: " + data[i].tableName + "</h2>");
            $("#character-well-" + i).append("<h3>Phone Number: " + data[i].phoneNumber + "</h4>");
            $("#character-well-" + i).append("<h3>Email: " + data[i].email + "</h4>");
            $("#character-well-" + i).append("<h3> Unique ID: " + data[i].uniqueId + "</h4>");

        } else {
            var wellWaiting = $("<div>");
            wellWaiting.addClass("well");
            wellWaiting.attr("id", "character-well-" + i);
            $("#waiting-list-section").append(wellWaiting);

            $("#character-well-" + i).append("<h2>Name: " + data[i].tableName + "</h2>");
            $("#character-well-" + i).append("<h3>Phone Number: " + data[i].phoneNumber + "</h4>");
            $("#character-well-" + i).append("<h3>Email: " + data[i].email + "</h4>");
            $("#character-well-" + i).append("<h3>Unique ID: " + data[i].uniqueId + "</h4>");
        }
    }
});
