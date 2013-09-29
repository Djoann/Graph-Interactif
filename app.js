function addNde() {
var id = $(".addquery").val();

    if (id.length == 0) {
    console.log("vide");
    } else {
    
    // Push query in the array 
    miserables.nodes.push({nodeName: id, group:1});
    
    //and reinitialize graph
    grapher(miserables);
    
    } // en if
}; // end function

function remNde() {
var query = $(".remquery").val();
    if (query.length == 0) {
    console.log("vide");
    } else {
    
    
    
    } // end if
} // end function