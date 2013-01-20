function highlightCurrentMenuItem() {
    var pathname = window.location.pathname;

    $("nav ul li a").each(function(index) {
        if (pathname.toUpperCase().indexOf($(this).text().replace(/\s+/g, '-').toUpperCase()) != -1)
            $(this).addClass("current");
    });

    if ($("a.current").length == 0)
        $("a#index").addClass("current");
}

function adjustPartOfSpeechPosition() {
    var offset = 27;

    $("article").has("hr").each(function() {
        //console.log($(this).find("h1").text());
        var partofspeech = $(this).find("h2");
        var defs = $(this).find(".definitions ul");
        //console.log(partofspeech.size());
        for (var i = 1; i < partofspeech.size(); i++) {
            var height = defs.eq(i-1).height();
            //var height = 0;
            //defs.eq(i-1).children().each(function() {
                //height += $(this).height();
                //console.log($(this).text());
            //});
            console.log(height);
            if ( height > 27 ) {
                if ( i == 1 ) {
                    partofspeech.eq(i).css("margin-top", height-offset);
                } else {
                    partofspeech.eq(i).css("margin-top", height);
                }
            }
        }
    });
}

function run() {
    highlightCurrentMenuItem();
    adjustPartOfSpeechPosition();
}

$(document).ready(run);
