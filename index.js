$('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    const newEntry = $('#shopping-list-entry').val();
    const buttonsDiv = `</span>
    <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
  </li>`;
    $('ul.shopping-list').append('<li><span class="shopping-item">' + newEntry + buttonsDiv);
});

$('ul.shopping-list').on('click', 'button.shopping-item-toggle', function() {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});

$('ul.shopping-list').on('click', 'button.shopping-item-delete', function() {
    $(this).closest('li').remove();
});
