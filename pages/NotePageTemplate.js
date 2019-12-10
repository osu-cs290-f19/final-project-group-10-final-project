(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['NotePageTemplate'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n\n<div class=\"date-title\"><h1>Date CreatedL<br />"
    + alias4(((helper = (helper = helpers.created || (depth0 != null ? depth0.created : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"created","hash":{},"data":data,"loc":{"start":{"line":3,"column":47},"end":{"line":3,"column":58}}}) : helper)))
    + "</h1></div>\n<div class=\"site-title\">"
    + alias4(((helper = (helper = helpers.classname || (depth0 != null ? depth0.classname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"classname","hash":{},"data":data,"loc":{"start":{"line":4,"column":24},"end":{"line":4,"column":37}}}) : helper)))
    + "\n    <div class=\"title\"><h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":27},"end":{"line":5,"column":36}}}) : helper)))
    + "</h2></div>\n</div>\n\n\n<div class=\"Content-Container\">\n  <textarea id=\"Note-Contents\" data-notetitle=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":10,"column":47},"end":{"line":10,"column":56}}}) : helper)))
    + "\" data-classname=\""
    + alias4(((helper = (helper = helpers.classname || (depth0 != null ? depth0.classname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"classname","hash":{},"data":data,"loc":{"start":{"line":10,"column":74},"end":{"line":10,"column":87}}}) : helper)))
    + "\">\n    "
    + alias4(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":11,"column":4},"end":{"line":11,"column":15}}}) : helper)))
    + "\n  </textarea>\n\n  <div class=\"Note-Save-Button\">\n    <button class=\"save\">save</button>\n  </div>\n\n</div>\n";
},"useData":true});
})();