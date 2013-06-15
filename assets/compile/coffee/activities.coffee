jQuery ->
  $(document).on 'submit', '#activities', (e, data) ->
    e.preventDefault()

    inputs = $(@).find('input[type!=submit]:checkbox:checked')

    if inputs.length is 0
      $('#messages').html('you must select an activity!')

    else
      $('#messages').html('')
      $('#activities').html('thanks for your submission, its been saved nowhere!')
