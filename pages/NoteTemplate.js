(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['NoteTemplate'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n<div class=\"Note\" data-title=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":2,"column":30},"end":{"line":2,"column":39}}}) : helper)))
    + "\" data-classname="
    + alias4(((helper = (helper = helpers.classname || (depth0 != null ? depth0.classname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"classname","hash":{},"data":data,"loc":{"start":{"line":2,"column":56},"end":{"line":2,"column":69}}}) : helper)))
    + " data-created=\""
    + alias4(((helper = (helper = helpers.created || (depth0 != null ? depth0.created : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"created","hash":{},"data":data,"loc":{"start":{"line":2,"column":84},"end":{"line":2,"column":95}}}) : helper)))
    + "\">\n  <div class=\"Note-Title-Container\">\n    <h3><a href=\"http://localhost:3000/"
    + alias4(((helper = (helper = helpers["class"] || (depth0 != null ? depth0["class"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":4,"column":39},"end":{"line":4,"column":48}}}) : helper)))
    + "/"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":4,"column":49},"end":{"line":4,"column":58}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":4,"column":60},"end":{"line":4,"column":69}}}) : helper)))
    + "</a></h3>\n  </div>\n  <div class=\"Note-Content-Container\">\n    <section class=\"Note-Content\">\n        "
    + alias4(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":8,"column":8},"end":{"line":8,"column":19}}}) : helper)))
    + "\n    </section>\n  </div>\n</div>\n";
},"useData":true});
})();