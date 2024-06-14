var drawTranslation = function() {
	baseText.text(window.currentStory["content"][window.currentLine]["base"])
	translatedText.text(window.currentStory["content"][window.currentLine]["translated"])
}

var clickNext = function(){
	window.currentLine++
	drawTranslation()
}

var clickPrev = function(){
	window.currentLine--
	drawTranslation()
}

var changeKeepDisplaying = function() {
    
    if (keepDisplaying == false) {

        window.translatedText.removeClass("hideClass")
        window.keepDisplaying = true

    } else  {

        translatedText.addClass("hideClass")
        window.keepDisplaying = false

    }

}

var showMenu = function() {
    
    if (window.keepDisplaying == false) {

        translatedText.removeClass("hideClass")
        window.keepDisplaying = true

    } else  {

        translatedText.addClass("hideClass")
        window.keepDisplaying = false

    }

}

var changeStory = function(e) {
    window.currentStory = window.multipleStories[$(e.target).data("pos")]
    window.currentLine = 0
    window.keepDisplaying = false
    drawTranslation()
}

window.multipleStories.forEach( (story,i) => {
    var title = $("<p>")
        .text(story.title)
        .addClass("h3")
        .click( (i) => {  changeStory(i) })
        .data("pos", i)

    $("#story-selector").append(title)
})

////////////////////////////////////////////////

$("#buttonPrev").click( () => { clickPrev() })
$("#buttonNext").click( () => { clickNext() })
$("#changeKeep").click( () => { changeKeepDisplaying() })
$("#showMenu")  .click( () => { $("#menu").toggle() })
$("#hideMenu")  .click( () => { $("#menu").toggle() })

var baseText       = $("#base")
translatedText = $("#translated")
window.currentLine    = 0
window.keepDisplaying = false
window.currentStory   = multipleStories[0]
translatedText.addClass("hideClass")
$("#menu").toggle()
drawTranslation()