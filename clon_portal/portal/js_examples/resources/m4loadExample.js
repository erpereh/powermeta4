var m4loadExample = function(nameVar) {

    document.write('<pre class="brush: js;">');
    
    //delete declaration of the function
    
    var stringMethod = nameVar.toString();            
    var init = stringMethod.indexOf('{');
    var last = stringMethod.lastIndexOf('}');
    var code = stringMethod.substring(init+1, last);

    //copy only code
    document.write(code);
        
    document.write('</pre>');      
}

window.addEvent('domready', function() {
    SyntaxHighlighter.all();
});