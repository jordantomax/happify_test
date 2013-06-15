(function() {
  var Router, router, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Router = (function(_super) {
    __extends(Router, _super);

    function Router() {
      _ref = Router.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Router.prototype.routes = {
      '': 'challenges',
      'challenges': 'challenges',
      'challenges/:id': 'challenge'
    };

    Router.prototype.initialize = function() {
      var self;

      self = this;
      $('a').on('click', function(e) {
        return e.preventDefault();
      });
      return jQuery(function() {
        return $(document).on('click', "a", function(event) {
          var data, href, url;

          href = $(event.currentTarget).attr('href');
          if (!event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
            event.preventDefault();
            url = href.replace(/^\//, '').replace('\#\!\/', '');
            data = $(this).data();
            self.navigate(url, {
              trigger: true,
              data: data
            });
            return false;
          }
        });
      });
    };

    Router.prototype.challenges = function() {
      var challenges;

      this.navigate('challenges');
      challenges = new app.Challenges;
      return challenges.fetch({
        success: function(data) {
          var challengeList;

          challengeList = new app.ChallengeList({
            collection: data
          });
          return $('#container').html(challengeList.render().$el);
        },
        error: function() {
          return {
            error: 'some bad ju-ju'
          };
        }
      });
    };

    Router.prototype.challenge = function(id) {
      var challenge;

      challenge = new app.Challenge;
      challenge.url = challenge.url + id;
      return challenge.fetch({
        success: function(data) {
          var challengeDetail;

          challengeDetail = new app.ChallengeDetail({
            model: data
          });
          return $('#container').html(challengeDetail.render().$el);
        }
      });
    };

    return Router;

  })(Backbone.Router);

  router = new Router;

  Backbone.history.start({
    pushState: true
  });

}).call(this);
