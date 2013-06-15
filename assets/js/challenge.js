(function() {
  var _ref, _ref1, _ref2, _ref3,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.Challenge = (function(_super) {
    __extends(Challenge, _super);

    function Challenge() {
      _ref = Challenge.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Challenge.prototype.url = 'http://happify-test-api.herokuapp.com/api/challenges/';

    return Challenge;

  })(Backbone.Model);

  app.Challenges = (function(_super) {
    __extends(Challenges, _super);

    function Challenges() {
      _ref1 = Challenges.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    Challenges.prototype.model = app.Challenge;

    Challenges.prototype.url = 'http://happify-test-api.herokuapp.com/api/challenges';

    return Challenges;

  })(Backbone.Collection);

  app.ChallengeDetail = (function(_super) {
    __extends(ChallengeDetail, _super);

    function ChallengeDetail() {
      _ref2 = ChallengeDetail.__super__.constructor.apply(this, arguments);
      return _ref2;
    }

    ChallengeDetail.prototype.tagName = 'div';

    ChallengeDetail.prototype.template = _.template($('#challenge-detail').html());

    ChallengeDetail.prototype.render = function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    };

    return ChallengeDetail;

  })(Backbone.View);

  app.ChallengeList = (function(_super) {
    __extends(ChallengeList, _super);

    function ChallengeList() {
      _ref3 = ChallengeList.__super__.constructor.apply(this, arguments);
      return _ref3;
    }

    ChallengeList.prototype.tagName = 'ul';

    ChallengeList.prototype.template = _.template($('#challenge-list-item').html());

    ChallengeList.prototype.render = function() {
      this.$el.html(this.template({
        challenges: this.collection.toJSON()
      }));
      return this;
    };

    return ChallengeList;

  })(Backbone.View);

}).call(this);
