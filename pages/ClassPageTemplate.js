(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['ClassPageTemplate'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.NoteTemplate,depth0,{"name":"NoteTemplate","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "/* Displays all the notes for a particular class */\n\n<div class=\"ClassPage-Title\">\n  <h1>"
    + container.escapeExpression(((helper = (helper = helpers.ClassName || (depth0 != null ? depth0.ClassName : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"ClassName","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":19}}}) : helper)))
    + "</h1>\n<div>\n\n<div class=\"ClassPage-Note-Container\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.NoteList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":2},"end":{"line":10,"column":11}}})) != null ? stack1 : "")
    + "</div>\n\n<div class=\"ClassPage-Note-AddNoteButton\">\n  <button><i>Add Note Icon</i></button>\n<div>\n";
},"usePartial":true,"useData":true});
})();