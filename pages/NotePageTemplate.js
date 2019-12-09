(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['NotePageTemplate'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "/* Displays a single Note */\n\n\n"
    + ((stack1 = container.invokePartial(partials.NoteTemplate,depth0,{"name":"NoteTemplate","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
})();