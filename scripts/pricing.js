"use strict";
//global variable
//var selection = "";
//function for the radio buttons selection
function websiteType() {
    var getFirst = document.getElementById("typeWebsite");
    var getRadio = getFirst.getElementsByTagName("input");//variable for the user choice
    document.getElementById("showWebSelection").style.fontWeight = "bolder";//styling the result
    var selection = "";
    var i = 0;
    var price = [2500, 2000, 1500, 1050, 2300, 2100, 1800, 3000, 1600];//price for the service selected

    for (i = 0; i < getRadio.length; i++){
        if (getRadio[i].checked) {
            selection = getRadio[i].value;
        }
    }

    switch (selection){
        case "E-commerce":
        document.getElementById("showWebSelection").textContent = selection + ": $" + price[0];
        break;
        case "Brochure":
        document.getElementById("showWebSelection").innerHTML = selection + ": $"  + price[1];
        break;
        case "Personal":
        document.getElementById("showWebSelection").innerHTML = selection + ": $" + price[2];
        break;
        case "Forum":
        document.getElementById("showWebSelection").innerHTML = selection + ": $" + price[3];
        break;
        case "Educational":
        document.getElementById("showWebSelection").innerHTML = selection + ": $" + price[4];
        break;
        case "Informational":
        document.getElementById("showWebSelection").innerHTML = selection + ": $" + price[5];
        break;
        case "News":
        document.getElementById("showWebSelection").innerHTML = selection + ": $" + price[6];
        break;
        case "File Sharing or Download":
        document.getElementById("showWebSelection").innerHTML = selection + ": $" + price[7];
        break;
        case "Advocacy":
        document.getElementById("showWebSelection").innerHTML = selection + ": $" + price[8];
        break;
        default:
        document.getElementById("showWebSelection").innerHTML = "Please make your selection for website!.";
        break;
    }
    //hostWebsite(test);
    //return test;//to be used in function "hostWebsite" for calculating the host and domain price
}

function firstHostingChoice() {
    //var radioWebsiteType = document.querySelectorAll("#websiteType input");
    //var radioWebsiteCount = radioWebsiteType.length;
    //var radioHostPlan = document.querySelectorAll("#firstHostChoice input");
    //var radioCount = radioHostPlan.length;
    var selectFirstHostChoice = document.querySelectorAll("#firstHostChoice select");
    var selectCount = selectFirstHostChoice.length;//elementCount = selectFirstHostChoice.length;
    var currentHostChoice;//currentWebsiteType, currentHostPlan, currentHostChoice;
    var firstHostingChoice = [1800, 4650, 1470, 4350];//prices for e-commerce website hosting plans. Used in select ID "firstGroupHosting"

    
    if (document.getElementById("ecommRadio").checked === true) {
        document.getElementById("firstHostChoice").style.display = "inline";
    }
    else{
        document.getElementById("firstHostChoice").style.display = "none";
    }

    if (document.getElementById("yesHosting").checked === true) {
        document.getElementById("firstGroupHosting").disabled = false;
    }
    else {
        document.getElementById("firstGroupHosting").disabled = true;
    }

    for (var i = 0; i < selectCount; i++){
        currentHostChoice = selectFirstHostChoice[i];
        if (currentHostChoice.selectedIndex === 1) {
            firstHostingChoice = firstHostingChoice[0];//add the price for the selection
            document.getElementById("showWebHostPrice").textContent = currentHostChoice[1].value + ": $" + firstHostingChoice;
        }
        else if (currentHostChoice.selectedIndex === 2) {
            firstHostingChoice = firstHostingChoice[1];//add the price for the selection
            document.getElementById("showWebHostPrice").textContent = currentHostChoice[2].value + ": $" + firstHostingChoice;
        }
        else if (currentHostChoice.selectedIndex === 3) {
            firstHostingChoice = firstHostingChoice[2];//add the price for the selection
            document.getElementById("showWebHostPrice").textContent = currentHostChoice[3].value + ": $" + firstHostingChoice;
        }
        else if (currentHostChoice.selectedIndex === 4) {
            firstHostingChoice = firstHostingChoice[3];//add the price for the selection
            document.getElementById("showWebHostPrice").textContent = currentHostChoice[4].value + ": $" + firstHostingChoice;
        }
        else {
            //window.alert("Please select your hosting plan!");
            document.getElementById("showWebHostPrice").textContent = "Maybe write code to clear the first hostin choice .reset() function";
        }
    }
}

function secondHostingChoice() {
    /*var radioWebsiteType = document.getElementsByName("project");
    var radioWebsiteCount = radioWebsiteType.length;
    var currentWebsiteType;*/
    //var radioHostPlan = document.querySelectorAll("#firstHostChoice input");
    //var radioCount = radioHostPlan.length;
    if (document.getElementById("brochureRadio").checked === true || document.getElementById("personalRadio").checked === true || document.getElementById("informationalRadio").checked === true) {
        document.getElementById("secondHostChoice").style.display = "inline";
        document.getElementById("showWebHost").textContent = "Second choice website";
    }
    else {
        document.getElementById("secondHostChoice").style.display = "none";
    }
}

function thirdHostingChoice() {
    /*var radioWebsiteType = document.getElementsByName("project");
    var radioWebsiteCount = radioWebsiteType.length;
    var currentWebsiteType;*/
    //var radioHostPlan = document.querySelectorAll("#firstHostChoice input");
    //var radioCount = radioHostPlan.length;
    if (document.getElementById("forumRadio").checked === true || document.getElementById("educationalRadio").checked === true || document.getElementById("newsRadio").checked === true ||
        document.getElementById("sharingRadio").checked === true || document.getElementById("advocacyRadio").checked === true) {
        
        document.getElementById("thirdHostChoice").style.display = "inline";
        document.getElementById("showWebHost").textContent = "Third choice website";
    }
    else {
        document.getElementById("thirdHostChoice").style.display = "none";
    }
}
/*function hostWebsite(test) {
    var selectFirstHostChoice = document.querySelectorAll("#ecommerceHost select");
    var elementCount = selectFirstHostChoice.length;
    var currentElement;
    //document.getElementById("showWebHost").style.fontWeight = "bolder";
    //var hrHosting = document.getElementById("hrHosting");
    var ecommerceHost = document.getElementById("ecommerceHost");
    var brochureHost = document.getElementById("brochureHost");
    var personalHost = document.getElementById("personalHost");
    var hidden = document.querySelectorAll(".hidden");//for show/hide elements
    var firstHostingChoice = [1800, 4650, 1470, 4350];//prices for e-commerce website hosting plans. Used in select ID "firstGroupHosting"
    var secongHostingChoice = [];//prices for "Brochure", "Personal", and "Informational" websites hosting. Used in ID "secondGroupHosting"
    var thirdHostingChoice = [];//prices for "Forum", "Educational", "News", "File sharing", and "Advocacy" websites hosting. Used in select ID "thirdGroupHosting"
    //hidden[0].style.display = "none";//brochureHost.style.display = "none"

        //hidden[0, 1, 2, 3].style.display = "none";
    /*ecommerceHost.style.display = "none"
    brochureHost.style.display = "none"
    personalHost.style.display = "none"*/
    //var ecommerceRadio = document.getElementsByTagName("input");
    //var test = 0;

    /*document.getElementById("showWebHost").textContent = "This is the test from previus function" + test;

    for (var i = 0; i < elementCount; i++){
        currentElement = selectFirstHostChoice[i];
        if (currentElement.selectedIndex === 1) {
            firstHostingChoice = firstHostingChoice[0];//add the price for the selection
            document.getElementById("showWebHost").textContent = currentElement[1].value + ": $" + firstHostingChoice;
            //document.getElementById("showWebHostPrice").innerHTML = "$" + firstHostingChoice;
        }
        else if (currentElement.selectedIndex === 2) {
            firstHostingChoice = firstHostingChoice[1];
            document.getElementById("showWebHost").textContent = currentElement[2].value + ": $" + firstHostingChoice;
        }
        else if (currentElement.selectedIndex === 3) {
            firstHostingChoice = firstHostingChoice[2];
            document.getElementById("showWebHost").textContent = currentElement[3].value + ": $" + firstHostingChoice;
        }
        else if (currentElement.selectedIndex === 4) {
            firstHostingChoice = firstHostingChoice[3];
            document.getElementById("showWebHost").textContent = currentElement[4].value + ": $" + firstHostingChoice;
        }
        else {
            window.alert("Please select your hosting plan!");
        }
    }

    if ((document.getElementById("ecommRadio").checked === true)) {
        hidden[1].style.display = "none";//brochureHost.style.display = "none"
        hidden[2].style.display = "none";//brochureHost.style.display = "none"
        hidden[0].style.display = "inline";//inline//ecommerceHost.style.display = "inline";//inline
        if ((document.getElementById("yesHosting").checked === true)) {
            document.getElementById("firstGroupHosting").disabled = false;
            for (var i = 0; i < elementCount; i++){
                currentElement = selectFirstHostChoice[i];
                if (currentElement.selectedIndex === 1) {
                    firstHostingChoice = firstHostingChoice[0];//add the price for the selection
                    document.getElementById("showWebHost").textContent = currentElement[1].value + ": $" + firstHostingChoice;
                    //document.getElementById("showWebHostPrice").innerHTML = "$" + firstHostingChoice;
                }
                else if (currentElement.selectedIndex === 2) {
                    firstHostingChoice = firstHostingChoice[1];
                    document.getElementById("showWebHost").textContent = currentElement[2].value + ": $" + firstHostingChoice;
                }
                else if (currentElement.selectedIndex === 3) {
                    firstHostingChoice = firstHostingChoice[2];
                    document.getElementById("showWebHost").textContent = currentElement[3].value + ": $" + firstHostingChoice;
                }
                else if (currentElement.selectedIndex === 4) {
                    firstHostingChoice = firstHostingChoice[3];
                    document.getElementById("showWebHost").textContent = currentElement[4].value + ": $" + firstHostingChoice;
                }
                else {
                    window.alert("Please select your hosting plan!");
                }
            }
        }
        else {
            document.getElementById("firstGroupHosting").disabled = true;
            document.getElementById("showWebHost").textContent = "First choce website" + hidden.length;
        }    
    }
    else if (document.getElementById("brochureRadio").checked === true || document.getElementById("personalRadio").checked === true || document.getElementById("informationalRadio").checked === true) {
        hidden[0].style.display = "none";//ecommerceHost.style.display = "none"
        hidden[2].style.display = "none";//brochureHost.style.display = "none"

        hidden[1].style.display = "inline";//inline //brochureHost.style.display = "inline";
        document.getElementById("showWebHost").textContent = "Second choice website" + test;
    }
    else if (document.getElementById("forumRadio").checked === true || document.getElementById("educationalRadio").checked === true || document.getElementById("newsRadio").checked === true ||
            document.getElementById("sharingRadio").checked === true || document.getElementById("advocacyRadio").checked === true) {
        hidden[0].style.display = "none";//ecommerceHost.style.display = "none"
        hidden[1].style.display = "none";//brochureHost.style.display = "none"

        //brochureHost.style.display = "none"
        hidden[2].style.display = "inline";//inline//personalHost.style.display = "inline";
        document.getElementById("showWebHost").textContent = "Third choice website"
    }    
    else {
        //ecommerceHost.style.display = "none";
        //brochureHost.style.display = "none";
        document.getElementById("showWebHost").textContent = "This is the test else who hide the div" + test;
    }
    //document.getElementById("showWebHost").textContent = "This is e-comerce host";//+ ecommerceRadio + selection;
}*/

//function for clear the selction and results on REFRESH page
function resetForm() {
    document.getElementById("projectCost").reset();//reset form
}

function createEventListener() {
    document.addEventListener("change", websiteType, false);
    //document.addEventListener("change", hostWebsite, false);
    document.addEventListener("change", firstHostingChoice, false);
    document.addEventListener("change", secondHostingChoice, false);
    document.addEventListener("change", thirdHostingChoice, false);
}

//load page function
function loadFunction() {
    createEventListener();
    resetForm();
    //websiteType();
    //showHide();
}

//event listener for Submit button
var btnClear = document.getElementById("btnClear");
var calcTotal = document.getElementById("calculate");
var buyService = document.getElementById("buy");
var emailPrice = document.getElementById("emailTotal");

if (calcTotal.addEventListener || btnClear.addEventListener)
{
	calcTotal.addEventListener("click", calcTotal, false) || calcTotal.addEventListener("click", websiteType, false) || btnClear.addEventListener("click", resetForm, false) ;
}
else if (calcTotal.attachEvent || btnClear.attachEvent)
{
	calcButton.attachEvent("onclick", calcTotal) || calcTotal.addEventListener("onclick", websiteType, false) || btnClear.attachEvent("onclick", resetForm, false);
}


window.addEventListener("load", loadFunction, false);
if (window.addEventListener)// For all major browsers, except IE 8 and earlier
{
	window.addEventListener("load", loadFunction, false);
}
else if (window.attachEvent)// For IE 8 and earlier versions
{
	window.attachEvent("onload", loadFunction);
}