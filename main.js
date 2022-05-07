const apiManager = new APIManager()
const renderer = new Renderer()

$( ".buttons button:first-child").click(function() {
    apiManager.fetch()
});
$( ".buttons button:nth-child(2)").click(function() {
    renderer.render(apiManager)
});