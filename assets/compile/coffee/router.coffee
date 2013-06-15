class Router extends Backbone.Router
  routes:
    '': 'challenges'
    'challenges': 'challenges'
    'challenges/:id': 'challenge'

  initialize: ->
    self = @

    $('a').on 'click', (e) ->
      e.preventDefault()

    jQuery ->
      $(document).on 'click', "a", (event) ->

        href = $(event.currentTarget).attr 'href'

        # Allow shift+click for new tabs, etc.
        if !event.altKey and !event.ctrlKey and !event.metaKey and !event.shiftKey
          event.preventDefault()

          # Remove leading slashes and hash bangs (backward compatablility)
          url = href.replace(/^\//,'').replace('\#\!\/','')
          data = $(@).data()

          # Instruct Backbone to trigger routing events
          self.navigate url, {trigger: true, data: data }

          false

  challenges: ->
    @navigate 'challenges'
    challenges = new app.Challenges
    challenges.fetch
      success: (data) ->
        challengeList = new app.ChallengeList collection: data
        $('#container').html(challengeList.render().$el)
      error: ->
        return error: 'some bad ju-ju'

  challenge: (id) ->
    challenge = new app.Challenge
    challenge.url = challenge.url + id
    challenge.fetch
      success: (data) ->
        challengeDetail = new app.ChallengeDetail model: data
        $('#container').html(challengeDetail.render().$el)

router = new Router
Backbone.history.start pushState: true
