(function(){
Template.body.addContent((function() {
  var view = this;
  return "A Meteor Boilerplate";
}));
Meteor.startup(Template.body.renderToDocument);

})();
