
function loadIssues() {
  var template = Handlebars.compile(document.getElementById("issue-template").innerHTML)
  var result = template(issues)
  document.getElementByTagName("main")[0].innerHTML+=result
}
