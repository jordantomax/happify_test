window.app = {}

_.templateSettings =
  evaluate: /\{\{([\s\S]+?)\}\}/g
  interpolate: /\{\{=([\s\S]+?)\}\}/g
