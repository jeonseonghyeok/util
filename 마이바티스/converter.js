function transformText() {
    String.prototype.capitalizeSilva = function() {
    	var isFirstWord = true;
        return this.replace(/\w+/g, function(a) {
            if (isFirstWord) {
                isFirstWord = false;
                return a.toLowerCase();
            }
            return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase();
        });
    };

    document.getElementById('Capitalize').value = document.getElementById('textinput').value.replaceAll("_"," ").capitalizeSilva().replaceAll(" ","");
    document.getElementById('LowerCase').value = document.getElementById('textinput').value.toLowerCase();
    document.getElementById('UpperCase').value = document.getElementById('textinput').value.toUpperCase();
}

function selectText(elementId) {
    var textarea = document.getElementById(elementId);
    textarea.select();
}
