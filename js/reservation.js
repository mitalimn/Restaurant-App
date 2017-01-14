// Question: What does this code do?
$("#submit").on("click", function(event) {
    event.preventDefault();

    var newTable = {
        tableName: $("#tableName").val().trim(),
        phoneNumber: $("#phoneNumber").val().trim(),
        email: $("#email").val().trim(),
        uniqueId: $("#uniqueId").val().trim()
    };

    // Question: What does this code do??
    $.post("/api/newReservation", newTable)
        .done(function(data) {
            console.log(data);
        });

});
