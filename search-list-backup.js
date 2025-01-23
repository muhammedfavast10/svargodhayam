function filterList() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const items = document.querySelectorAll('#itemList li');
    const itemList = document.getElementById('itemList');
    const noItemsMessage = document.getElementById('noItemsMessage');
    let hasMatch = false;

    // Show the list if there's input, hide it if the input is empty
    if (searchInput) {
        itemList.style.display = 'block';
    } else {
        itemList.style.display = 'none';
        noItemsMessage.style.display = 'none';
        return; // Stop further execution if input is empty
    }

    // Filter and display matching items
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchInput)) {
            item.style.display = 'block'; // Show matching items
            hasMatch = true;
        } else {
            item.style.display = 'none'; // Hide non-matching items
        }
    });

    // Show "No items found" if no matches
    if (!hasMatch) {
        noItemsMessage.style.display = 'block';
    } else {
        noItemsMessage.style.display = 'none';
    }
}
  