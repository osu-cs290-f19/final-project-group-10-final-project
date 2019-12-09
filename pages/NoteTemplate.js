(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['NoteTemplate'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "/*Potential Layout for Note template*/\n\n<div class=\"Note\" data-course=\""
    + alias4(((helper = (helper = helpers.course || (depth0 != null ? depth0.course : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"course","hash":{},"data":data,"loc":{"start":{"line":3,"column":31},"end":{"line":3,"column":41}}}) : helper)))
    + "\" data-title=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":3,"column":55},"end":{"line":3,"column":64}}}) : helper)))
    + "\" data-created=\""
    + alias4(((helper = (helper = helpers.created || (depth0 != null ? depth0.created : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"created","hash":{},"data":data,"loc":{"start":{"line":3,"column":80},"end":{"line":3,"column":91}}}) : helper)))
    + "\" data-modified=\""
    + alias4(((helper = (helper = helpers.modified || (depth0 != null ? depth0.modified : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modified","hash":{},"data":data,"loc":{"start":{"line":3,"column":108},"end":{"line":3,"column":120}}}) : helper)))
    + "\">\n  <div class=\"Note-Title-Container\">\n    <h3> "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":9},"end":{"line":5,"column":18}}}) : helper)))
    + " </h3>\n  </div>\n  <div class=\"Note-Content-Container\">\n    <section class=\"Note-Content\">\n        "
    + alias4(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":9,"column":8},"end":{"line":9,"column":19}}}) : helper)))
    + "\n    </section>\n  </div>\n</div>\n";
},"useData":true});
})();