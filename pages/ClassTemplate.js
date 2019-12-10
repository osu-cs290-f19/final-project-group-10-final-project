(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['ClassTemplate'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <li class=\"Note-List-Item\" data-notename="
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":10,"column":51},"end":{"line":10,"column":60}}}) : helper)))
    + " data-classname=\""
    + alias4(((helper = (helper = helpers.classname || (depth0 != null ? depth0.classname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"classname","hash":{},"data":data,"loc":{"start":{"line":10,"column":77},"end":{"line":10,"column":90}}}) : helper)))
    + "\">\n            <a href=\"http://localhost:3000/"
    + alias4(((helper = (helper = helpers.classname || (depth0 != null ? depth0.classname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"classname","hash":{},"data":data,"loc":{"start":{"line":11,"column":43},"end":{"line":11,"column":56}}}) : helper)))
    + "/"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":11,"column":57},"end":{"line":11,"column":66}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":11,"column":68},"end":{"line":11,"column":77}}}) : helper)))
    + "</a>\n            <button class=\"delete-note-button\">X</button>\n          </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n<div class=\"class-container\" data-classname=\""
    + alias4(((helper = (helper = helpers.ClassName || (depth0 != null ? depth0.ClassName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ClassName","hash":{},"data":data,"loc":{"start":{"line":2,"column":45},"end":{"line":2,"column":58}}}) : helper)))
    + "\">\n  <div class=\"class-container-header\">\n    <button class=\"dropdown\"><h1> "
    + alias4(((helper = (helper = helpers.ClassName || (depth0 != null ? depth0.ClassName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ClassName","hash":{},"data":data,"loc":{"start":{"line":4,"column":34},"end":{"line":4,"column":47}}}) : helper)))
    + "</h1> <i style='font-size:33px' class='fas'>&#xf103;</i></button>\n    <button class=\"delete-class\"> X </button>\n  </div>\n\n    <ul class=\"Note-Container\" style=\"display:none;\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.Notes : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":14,"column":15}}})) != null ? stack1 : "")
    + "    </ul>\n\n  <button class=\"new-note-button\" style=\"display:none;\"><h3>Add Note</h3></button>\n</div>\n";
},"useData":true});
})();