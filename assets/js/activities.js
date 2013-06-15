(function() {
  jQuery(function() {
    return $(document).on('submit', '#activities', function(e, data) {
      var inputs;

      e.preventDefault();
      inputs = $(this).find('input[type!=submit]:checkbox:checked');
      if (inputs.length === 0) {
        return $('#messages').html('you must select an activity!');
      } else {
        $('#messages').html('');
        return $('#activities').html('thanks for your submission, its been saved nowhere!');
      }
    });
  });

}).call(this);
