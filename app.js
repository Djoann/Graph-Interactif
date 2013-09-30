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



//LINKS FUNCTION : SET NODE TOGETHER
var clicks = 0;
function linkClick(ide) {
    $('clicked').value = ++clicks;
    console.log("clicks:", clicks);
    
    var isEven = function(someNumber) {
            return (someNumber % 2 === 0) ? true : false;
        };
        // on odd clicks do this
        if (isEven(clicks) === false) {
            //alert("odd");
            $(".linkqueryfrst").val(ide)
        }
        // on even clicks do this
        else if (isEven(clicks) === true) {
            //alert("even");
            $(".linkquerysecd").val(ide)
    } // end isEven Function
}


// PUSH HTML INFO CLICK
function helloim(nde, ide) {
    console.log("you clicked on node#", nde, "number:", ide)
    $(".helloNode").html(nde + " number:"+ide);
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
        
        miserables.links.push({source:onequery, target:secquery, value:1});
        grapher(miserables);
        
        
        
        
        }// end if

    }