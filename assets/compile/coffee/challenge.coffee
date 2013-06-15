class app.Challenge extends Backbone.Model
  url: 'http://happify-test-api.herokuapp.com/api/challenges/'

class app.Challenges extends Backbone.Collection
  model: app.Challenge
  url: 'http://happify-test-api.herokuapp.com/api/challenges'

class app.ChallengeDetail extends Backbone.View
  tagName: 'div'
  template: _.template($('#challenge-detail').html())
  render: ->
    @$el.html(@template( @model.toJSON() ))
    @

class app.ChallengeList extends Backbone.View
  tagName: 'ul'
  template: _.template($('#challenge-list-item').html())
  render: ->
    @$el.html(@template( challenges: @collection.toJSON() ))
    @

