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
    
    //myArray.splice(0, 2)
    
    } // end if
} // end function

function helloim(nde) {
    console.log("heloim", nde)
}




function addLnk() {
        var onequery = $(".linkqueryfrst").val();
        var secquery = $(".linkquerysecd").val();
    
        if (onequery.length == 0) {
        console.log("vide");
        } else if (secquery.length == 0) {
        console.log("vide");
        } else {
        console.log(onequery, "linked via", secquery);
        
        

        }// end if

    }