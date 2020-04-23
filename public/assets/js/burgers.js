$(function () {
  $(".eat").on("click", function (event) {
    var id = $(this).data("id");
    var eaten = {
      devoured: 1,
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eaten,
    }).then(function () {
      console.log("changed devoured", eaten);

      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {

    event.preventDefault();
    var newBurger = {
      burger_name: $("#newBurger").val().trim(),
      devoured: 0,
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");

      location.reload();
    });
  });
});
