(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['AddClassModal'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"new-class-modal\" class=\"modal\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h2>New Class</h2>\n    </div>\n\n    <div class=\"post-input-element\">\n      <label for=\"post-text-input\">Class Name</label>\n      <input type=\"text\" id=\"new-class-title-input\"></input>\n    </div>\n\n    <button class=\"button\" id=\"new-class-close-button\">Cancel</button>\n    <button class=\"button\" id=\"new-class-OK-button\">Create</button>\n  </div>\n</div>\n";
},"useData":true});
})();