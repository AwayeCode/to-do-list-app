function newItem() {
    // jQuery Code
    // 1. Adding a new item to the list:

    let li = $('<li></li>');
    let inputValue = $('#input').val();
    //let text = $(" ");
    li.append(inputValue);

    if (inputValue === " ") {
        alert("You must write something!")
    } else {
        $('#list').append(li);
    }

    //2. Crossing an item out:
    function crossOut() {
        li.toggleClass("strike");
    }

    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });

    // 3. Adding a delete button (x)
    //let crossOutButton = $("crossOutButton");
    let crossOutButton = $("<crossOutButton></crossOutButton>");
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    //   $("crossOutButton").on("click"): delete("li");
    crossOutButton.on("click", deleteListItem);

    // 3.2 Adding class delete (display none) from the css
    function deleteListItem() {
        li.addClass("delete");

    }

    // 4. Recording the items
    // to make a list sortable hashtag is necessary
    $('#list').sortable();

}
    
    
    