(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['ClassTemplate'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.NoteTemplate,depth0,{"name":"NoteTemplate","data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "/* Potential layout for class template */\n/*will be used in homepage and in side nav bar on other pages*/\n\n<div class=\"class-container\" data-classname=\""
    + alias4(((helper = (helper = helpers.ClassName || (depth0 != null ? depth0.ClassName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ClassName","hash":{},"data":data,"loc":{"start":{"line":4,"column":45},"end":{"line":4,"column":58}}}) : helper)))
    + "\">\n  <div class=\"class-name\">\n    "
    + alias4(((helper = (helper = helpers.ClassName || (depth0 != null ? depth0.ClassName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ClassName","hash":{},"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":6,"column":17}}}) : helper)))
    + "\n  </div>\n  <div class=\"Note-Container\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.NoteList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":4},"end":{"line":11,"column":13}}})) != null ? stack1 : "")
    + "  </div>\n</div>\n";
},"usePartial":true,"useData":true});
})();