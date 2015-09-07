(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['create_page'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<div class=\"row\">\n					<div class=\"large-12 columns\">\n						<label for=\"id\">ID: <small> required</small>\n							<input type=\"text\" id=\"id\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" disabled required pattern=\"integer\" />\n						</label>\n						<small class=\"error\">ID is required and must be a number</small>\n					</div>\n				</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "selected";
},"5":function(container,depth0,helpers,partials,data) {
    return "checked=\"checked\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "<div class=\"row\">\n	<div class=\"large-12 columns\">\n		<form data-abide=\"ajax\" id=\"create_page_form\">\n			<fieldset>\n				<legend>Create page</legend>\n"
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || alias1).call(depth0,(depth0 != null ? depth0.is_edit : depth0),1,{"name":"equals","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				<div class=\"row\">\n					<div class=\"large-12 columns\">\n						<label for=\"title\">Title:<small> required</small>\n							<input type=\"text\" id=\"title\" value=\""
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" required maxlength=\"50\"/>\n						</label>\n						<small class=\"error\">Title is required</small>\n					</div>\n				</div>\n				<div class=\"row\">\n					<div class=\"large-12 columns\">\n						<label for=\"description\">Description:</label>\n						<textarea id=\"description\" maxlength=\"200\" style=\"height:200px\">"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</textarea>\n					</div>\n				</div>\n				<div class=\"row\">\n					<div class=\"large-12 columns\">\n						<br/>\n						<label for=\"type\">Type:\n							<select id=\"type\">\n								<option value=\"0\" "
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),0,{"name":"equals","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Menu</option>\n								<option value=\"1\" "
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),1,{"name":"equals","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Events</option>\n								<option value=\"2\" "
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),2,{"name":"equals","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Content</option>\n							</select>\n						</label>\n					</div>\n				</div>\n				<br/>\n				<div class=\"row\">\n					<div class=\"large-12 columns\">\n						<label for=\"published_on\">Published on:<small> required</small>\n							<input type=\"text\" id=\"published_on\" value=\""
    + alias3(((helper = (helper = helpers.publishedOn || (depth0 != null ? depth0.publishedOn : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"publishedOn","hash":{},"data":data}) : helper)))
    + "\" class=\"hasdatepicker\" required/>\n						</label>\n						<small class=\"error\">Publish date is required</small>\n					</div>\n				</div>\n				<div class=\"row\">\n					<div class=\"large-12 columns\">\n						<label for=\"is_active\">Is active:</label>\n						<input type=\"checkbox\" id=\"is_active\" "
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.isActive : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/>\n					</div>\n				</div>\n				<div class=\"row\" style=\"margin-bottom: 2em;\">\n					<div class=\"large-12 columns\">\n						<button id=\"create_page\" class=\"small\"><i class=\"fa fa-plus-square\"></i> Save</button>\n					</div>\n				</div>\n			</fieldset>\n		</form>\n	</div>\n</div>\n";
},"useData":true});
templates['landing_page'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"row\">\n	<p style=\"text-align:center;margin-top:20px;\"><a href=\"#list_pages/\">List pages</a> to display existing pages</p><p style=\"text-align:center;margin-top:20px;\"><a href=\"#create_page/\">Create page</a> to add new page</p>\n</div>\n";
},"useData":true});
templates['list_pages'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "			<tr>\n				<td class=\"page_id\">"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "</td>\n				<td class=\"\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</td>\n				<td>"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</td>\n				<td>"
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),0,{"name":"equals","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),1,{"name":"equals","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),2,{"name":"equals","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</td>\n				<td>"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.isActive : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "</td>\n				<td>"
    + alias3(((helper = (helper = helpers.publishedOn || (depth0 != null ? depth0.publishedOn : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"publishedOn","hash":{},"data":data}) : helper)))
    + "</td>\n				<td><a href=\"#edit_page/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "/\"><button class=\"small\" title=\"Edit page\"><i class=\"fa fa-pencil-square-o\"></i></button></a></td>\n				<td><button class=\"delete small\" title=\"Delete page\"><i class=\"fa fa-trash-o\"></i></button></td>\n			</tr>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "\n						Menu\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "						Events\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "						Content\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "Yes";
},"10":function(container,depth0,helpers,partials,data) {
    return "No";
},"12":function(container,depth0,helpers,partials,data) {
    return "			<tr>\n				<td colspan=\"8\" style=\"text-align:center\">No pages available</td>\n			</tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row\">\n	<table class=\"large-12 responsive\" cellspacing=\"0\" cellpadding=\"0\">\n		<thead>\n			<tr>\n				<th>ID</th>\n				<th>Title</th>\n				<th>Description</th>\n				<th>Type</th>\n				<th>Is active</th>\n				<th>Published on</th>\n				<th>&nbsp;</th>\n				<th>&nbsp;</th>\n			</tr>\n		</thead>\n		<tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.pages : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(12, data, 0),"data":data})) != null ? stack1 : "")
    + "		</tbody>\n	</table>\n</div>\n";
},"useData":true});
})();