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
    var errorWebsite = document.getElementById("erorrMsg");
    errorWebsite.style.display = "none";
    

    for (i = 0; i < getRadio.length; i++){
        if (getRadio[i].checked) {
            selection = getRadio[i].value;
        }
    }

    switch (selection){
        case "E-commerce":
            document.getElementById("showWebSelection").innerHTML = selection + ": $" + price[0] +"<br>";
            document.getElementById("showWebSelection").style.display = "inline";//enable display the result for type of website
            document.getElementById("showWebHostPrice").style.display = "inline";//enable display the result from firstHostingChoice    
            document.getElementById("secondWebhostPrice").style.display = "none";//clear the result from secondHostChoice
            document.getElementById("thirdWebhostPrice").style.display = "none";//clear the result from thirdtHostingChoice
        break;
        case "Brochure":
            document.getElementById("showWebSelection").innerHTML = selection + ": $" + price[1]+"<br>";
            document.getElementById("showWebSelection").style.display = "inline";//enable display the result for type of website
            document.getElementById("secondWebhostPrice").style.display = "inline";//enable display the result from secondHostChoice
            document.getElementById("showWebHostPrice").style.display = "none";//clear the result from firstHostingChoice
            document.getElementById("thirdWebhostPrice").style.display = "none";//clear the result from thirdtHostingChoice
        break;
        case "Personal":
            document.getElementById("showWebSelection").innerHTML = selection + ": $" + price[2]+"<br>";
            document.getElementById("showWebSelection").style.display = "inline";//enable display the result for type of website
            document.getElementById("secondWebhostPrice").style.display = "inline";//enable display the result from secondHostChoice
            document.getElementById("showWebHostPrice").style.display = "none";//clear the result from firstHostingChoice
            document.getElementById("thirdWebhostPrice").style.display = "none";//clear the result from thirdtHostingChoice    
        break;
        case "Forum":
            document.getElementById("showWebSelection").innerHTML = selection + ": $" + price[3]+"<br>";
            document.getElementById("showWebSelection").style.display = "inline";//enable display the result for type of website
            document.getElementById("thirdWebhostPrice").style.display = "inline";//clear the result from thirdtHostingChoice
            document.getElementById("showWebHostPrice").style.display = "none";//clear the result from firstHostingChoice
            document.getElementById("secondWebhostPrice").style.display = "none";//clear the result from secondHostChoice    
        break;
        case "Educational":
            document.getElementById("showWebSelection").innerHTML = selection + ": $" + price[4]+"<br>";
            document.getElementById("showWebSelection").style.display = "inline";//enable display the result for type of website
            document.getElementById("thirdWebhostPrice").style.display = "inline";//clear the result from thirdtHostingChoice
            document.getElementById("showWebHostPrice").style.display = "none";//clear the result from firstHostingChoice
            document.getElementById("secondWebhostPrice").style.display = "none";//clear the result from secondHostChoice    
        break;
        case "Informational":
            document.getElementById("showWebSelection").innerHTML = selection + ": $" + price[5]+"<br>";
            document.getElementById("showWebSelection").style.display = "inline";//enable display the result for type of website
            document.getElementById("secondWebhostPrice").style.display = "inline";//enable display the result from secondHostingChoice
            document.getElementById("showWebHostPrice").style.display = "none";//clear the result from firstHostingChoice
            document.getElementById("thirdWebhostPrice").style.display = "none";//clear the result from thirdtHostingChoice
        break;
        case "News":
            document.getElementById("showWebSelection").innerHTML = selection + ": $" + price[6]+"<br>";
            document.getElementById("showWebSelection").style.display = "inline";//enable display the result for type of website
            document.getElementById("thirdWebhostPrice").style.display = "inline";//clear the result from thirdtHostingChoice
            document.getElementById("showWebHostPrice").style.display = "none";//clear the result from firstHostingChoice
            document.getElementById("secondWebhostPrice").style.display = "none";//clear the result from secondHostChoice
        break;
        case "File Sharing or Download":
            document.getElementById("showWebSelection").innerHTML = selection + ": $" + price[7]+"<br>";
            document.getElementById("showWebSelection").style.display = "inline";//enable display the result for type of website
            document.getElementById("thirdWebhostPrice").style.display = "inline";//clear the result from thirdtHostingChoice
            document.getElementById("showWebHostPrice").style.display = "none";//clear the result from firstHostingChoice
            document.getElementById("secondWebhostPrice").style.display = "none";//clear the result from secondHostChoice
        break;
        case "Advocacy":
            document.getElementById("showWebSelection").innerHTML = selection + ": $" + price[8]+"<br>";
            document.getElementById("showWebSelection").style.display = "inline";//enable display the result for type of website
            document.getElementById("thirdWebhostPrice").style.display = "inline";//clear the result from thirdtHostingChoice
            document.getElementById("showWebHostPrice").style.display = "none";//clear the result from firstHostingChoice
            document.getElementById("secondWebhostPrice").style.display = "none";//clear the result from secondHostChoice
        break;
        default:
            errorWebsite.style.display = "inline"
            errorWebsite.style.color = "tomato"
            document.getElementById("erorrMsg").innerHTML = "Please make your selection for website!";
            document.getElementById("showWebSelection").style.display = "none";//clear the result from firstHostingChoice    
        break;
    }
}

function firstHostingChoice() {
    //var radioWebsiteType = document.querySelectorAll("#websiteType input");
    //var radioWebsiteCount = radioWebsiteType.length;
    //var radioHostPlan = document.querySelectorAll("#firstHostChoice input");
    //var radioCount = radioHostPlan.length;
    var selectFirstHostChoice = document.querySelectorAll("#firstHostChoice select");
    var selectCount = selectFirstHostChoice.length;//elementCount = selectFirstHostChoice.length;
    var currentHostChoice;//currentWebsiteType, currentHostPlan, currentHostChoice;
    var firstHostingChoice = [1800, 4650, 1470, 4350];//prices for the second group of website hosting plans. Used in select ID "secondGroupHosting"
    var clearResults = document.querySelectorAll("#displayMsg p");

    
    if (document.getElementById("ecommRadio").checked === true) {//
        document.getElementById("firstHostChoice").style.display = "inline";
    }
    else{
        document.getElementById("firstHostChoice").style.display = "none";
    }

    if (document.getElementById("yesHosting").checked === true){ //|| document.getElementById("ecommRadio").checked === false) {
        document.getElementById("firstGroupHosting").disabled = false;
    }
    else {
        document.getElementById("firstGroupHosting").disabled = true;
        document.getElementById("erorrMsg").innerHTML = "Please select  E-commerce website or any other!";
        document.getElementById("showWebHostPrice").style.display = "none";//clear the result from firstHostingChoice
    }

    for (var i = 0; i < selectCount; i++){
        currentHostChoice = selectFirstHostChoice[i];
        if (currentHostChoice.selectedIndex === 1) {
            firstHostingChoice = firstHostingChoice[0];//add the price for the selection
            document.getElementById("showWebHostPrice").innerHTML =  currentHostChoice[1].value + ": $" + firstHostingChoice;
        }
        else if (currentHostChoice.selectedIndex === 2) {
            firstHostingChoice = firstHostingChoice[1];//add the price for the selection
            document.getElementById("showWebHostPrice").innerHTML = currentHostChoice[2].value + ": $" + firstHostingChoice;
        }
        else if (currentHostChoice.selectedIndex === 3) {
            firstHostingChoice = firstHostingChoice[2];//add the price for the selection
            document.getElementById("showWebHostPrice").innerHTML = currentHostChoice[3].value + ": $" + firstHostingChoice;
        }
        else if (currentHostChoice.selectedIndex === 4) {
            firstHostingChoice = firstHostingChoice[3];//add the price for the selection
            document.getElementById("showWebHostPrice").innerHTML = currentHostChoice[4].value + ": $" + firstHostingChoice;
        }
        else {
            currentHostChoice.selectedIndex === 0;
            document.getElementById("showWebHostPrice").innerHTML = currentHostChoice[0].value;
        }
    }
}

function secondHostingChoice() {
    var secondHostingChoice = [164, 378, 180, 288, 830];//prices for e-commerce website hosting plans. Used in select ID "firstGroupHosting"

    /*var radioWebsiteType = document.getElementsByName("project");
    var radioWebsiteCount = radioWebsiteType.length;
    var currentWebsiteType;*/
    //var radioHostPlan = document.querySelectorAll("#firstHostChoice input");
    //var radioCount = radioHostPlan.length;
    var selectSecondHostChoice = document.querySelectorAll("#secondHostChoice select");
    var countSecond = selectSecondHostChoice.length;//elementCount = selectFirstHostChoice.length;
    var currentSecondHost;//currentWebsiteType, currentHostPlan, currentHostChoice;

    if (document.getElementById("brochureRadio").checked === true || document.getElementById("personalRadio").checked === true || document.getElementById("informationalRadio").checked === true) {
        document.getElementById("secondHostChoice").style.display = "inline";
        //document.getElementById("showWebHost").innerHTML = "Second choice website";
        //document.getElementById("showWebHostPrice").innerHTML = "";//clear the result from firstHostingChoice
        //document.getElementById("thirdWebhostPrice").style.display = "none";//clear the result from thirdHostingChoice
    }
    else {
        document.getElementById("secondHostChoice").style.display = "none";

    }

    if (document.getElementById("yesSecondHosting").checked === true) {
        document.getElementById("secondGroupHosting").disabled = false;
    }
    else {
        document.getElementById("secondGroupHosting").disabled = true;
    }

    for (var i = 0; i < countSecond; i++){
        currentSecondHost = selectSecondHostChoice[i];
        if (currentSecondHost.selectedIndex === 1) {
            secondHostingChoice = secondHostingChoice[0];
            document.getElementById("secondWebhostPrice").innerHTML = currentSecondHost[1].value + ": $" + secondHostingChoice;
        }
        else if (currentSecondHost.selectedIndex === 2) {
            secondHostingChoice = secondHostingChoice[1];
            document.getElementById("secondWebhostPrice").innerHTML = currentSecondHost[2].value + ": $" + secondHostingChoice;
        }
        else if (currentSecondHost.selectedIndex === 3) {
            secondHostingChoice = secondHostingChoice[2];
            document.getElementById("secondWebhostPrice").innerHTML = currentSecondHost[3].value + ": $" + secondHostingChoice;
        }
        else if (currentSecondHost.selectedIndex === 4) {
            secondHostingChoice = secondHostingChoice[3];
            document.getElementById("secondWebhostPrice").innerHTML = currentSecondHost[4].value + ": $" + secondHostingChoice;
        }
        else if (currentSecondHost.selectedIndex === 5) {
            secondHostingChoice = secondHostingChoice[4];
            document.getElementById("secondWebhostPrice").innerHTML = currentSecondHost[5].value + ": $" + secondHostingChoice;
        }
        else {
            currentSecondHost.selectedIndex === 0;
            document.getElementById("secondWebhostPrice").innerHTML = currentSecondHost[0].value;
        }
    }
}

function thirdHostingChoice() {
    var thirdHostingChoice = [235, 378, 1800, 288, 1450, 1000];
    /*var radioWebsiteType = document.getElementsByName("project");
    var radioWebsiteCount = radioWebsiteType.length;
    var currentWebsiteType;*/
    //var radioHostPlan = document.querySelectorAll("#firstHostChoice input");
    //var radioCount = radioHostPlan.length;
    var selectThirdHostChoice = document.querySelectorAll("#thirdHostChoice select");
    var countThird = selectThirdHostChoice.length;//elementCount = selectFirstHostChoice.length;
    var currentThirdHost;//currentWebsiteType, currentHostPlan, currentHostChoice;

    if (document.getElementById("forumRadio").checked === true || document.getElementById("educationalRadio").checked === true || document.getElementById("newsRadio").checked === true ||
        document.getElementById("sharingRadio").checked === true || document.getElementById("advocacyRadio").checked === true) {
        
        document.getElementById("thirdHostChoice").style.display = "inline";
    }
    else {
        document.getElementById("thirdHostChoice").style.display = "none";
    }

    if (document.getElementById("yesThirdHosting").checked === true) {
        document.getElementById("thirdGroupHosting").disabled = false;
    }
    else {
        document.getElementById("thirdGroupHosting").disabled = true;
    }

    for (var i = 0; i < countThird; i++){
        currentThirdHost = selectThirdHostChoice[i];
        if (currentThirdHost.selectedIndex === 1) {
            thirdHostingChoice = thirdHostingChoice[0];
            document.getElementById("thirdWebhostPrice").innerHTML = currentThirdHost[1].value + ": $" + thirdHostingChoice;
        }
        else if (currentThirdHost.selectedIndex === 2) {
            thirdHostingChoice = thirdHostingChoice[1];
            document.getElementById("thirdWebhostPrice").innerHTML = currentThirdHost[2].value + ": $" + thirdHostingChoice;
        }
        else if (currentThirdHost.selectedIndex === 3) {
            thirdHostingChoice = thirdHostingChoice[2];
            document.getElementById("thirdWebhostPrice").innerHTML = currentThirdHost[3].value + ": $" + thirdHostingChoice;
        }
        else if (currentThirdHost.selectedIndex === 4) {
            thirdHostingChoice = thirdHostingChoice[3];
            document.getElementById("thirdWebhostPrice").innerHTML = currentThirdHost[4].value + ": $" + thirdHostingChoice;
        }
        else if (currentThirdHost.selectedIndex === 5) {
            thirdHostingChoice = thirdHostingChoice[4];
            document.getElementById("thirdWebhostPrice").innerHTML = currentThirdHost[5].value + ": $" + thirdHostingChoice;
        }
        else if (currentThirdHost.selectedIndex === 6) {
            thirdHostingChoice = thirdHostingChoice[5];
            document.getElementById("thirdWebhostPrice").innerHTML = currentThirdHost[6].value + ": $" + thirdHostingChoice;
        }    
        else {
            document.getElementById("thirdWebhostPrice").innerHTML = currentThirdHost[0].value;
        }
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

    /*document.getElementById("showWebHost").innerHTML = "This is the test from previus function" + test;

    for (var i = 0; i < elementCount; i++){
        currentElement = selectFirstHostChoice[i];
        if (currentElement.selectedIndex === 1) {
            firstHostingChoice = firstHostingChoice[0];//add the price for the selection
            document.getElementById("showWebHost").innerHTML = currentElement[1].value + ": $" + firstHostingChoice;
            //document.getElementById("showWebHostPrice").innerHTML = "$" + firstHostingChoice;
        }
        else if (currentElement.selectedIndex === 2) {
            firstHostingChoice = firstHostingChoice[1];
            document.getElementById("showWebHost").innerHTML = currentElement[2].value + ": $" + firstHostingChoice;
        }
        else if (currentElement.selectedIndex === 3) {
            firstHostingChoice = firstHostingChoice[2];
            document.getElementById("showWebHost").innerHTML = currentElement[3].value + ": $" + firstHostingChoice;
        }
        else if (currentElement.selectedIndex === 4) {
            firstHostingChoice = firstHostingChoice[3];
            document.getElementById("showWebHost").innerHTML = currentElement[4].value + ": $" + firstHostingChoice;
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
                    document.getElementById("showWebHost").innerHTML = currentElement[1].value + ": $" + firstHostingChoice;
                    //document.getElementById("showWebHostPrice").innerHTML = "$" + firstHostingChoice;
                }
                else if (currentElement.selectedIndex === 2) {
                    firstHostingChoice = firstHostingChoice[1];
                    document.getElementById("showWebHost").innerHTML = currentElement[2].value + ": $" + firstHostingChoice;
                }
                else if (currentElement.selectedIndex === 3) {
                    firstHostingChoice = firstHostingChoice[2];
                    document.getElementById("showWebHost").innerHTML = currentElement[3].value + ": $" + firstHostingChoice;
                }
                else if (currentElement.selectedIndex === 4) {
                    firstHostingChoice = firstHostingChoice[3];
                    document.getElementById("showWebHost").innerHTML = currentElement[4].value + ": $" + firstHostingChoice;
                }
                else {
                    window.alert("Please select your hosting plan!");
                }
            }
        }
        else {
            document.getElementById("firstGroupHosting").disabled = true;
            document.getElementById("showWebHost").innerHTML = "First choce website" + hidden.length;
        }    
    }
    else if (document.getElementById("brochureRadio").checked === true || document.getElementById("personalRadio").checked === true || document.getElementById("informationalRadio").checked === true) {
        hidden[0].style.display = "none";//ecommerceHost.style.display = "none"
        hidden[2].style.display = "none";//brochureHost.style.display = "none"

        hidden[1].style.display = "inline";//inline //brochureHost.style.display = "inline";
        document.getElementById("showWebHost").innerHTML = "Second choice website" + test;
    }
    else if (document.getElementById("forumRadio").checked === true || document.getElementById("educationalRadio").checked === true || document.getElementById("newsRadio").checked === true ||
            document.getElementById("sharingRadio").checked === true || document.getElementById("advocacyRadio").checked === true) {
        hidden[0].style.display = "none";//ecommerceHost.style.display = "none"
        hidden[1].style.display = "none";//brochureHost.style.display = "none"

        //brochureHost.style.display = "none"
        hidden[2].style.display = "inline";//inline//personalHost.style.display = "inline";
        document.getElementById("showWebHost").innerHTML = "Third choice website"
    }    
    else {
        //ecommerceHost.style.display = "none";
        //brochureHost.style.display = "none";
        document.getElementById("showWebHost").innerHTML = "This is the test else who hide the div" + test;
    }
    //document.getElementById("showWebHost").innerHTML = "This is e-comerce host";//+ ecommerceRadio + selection;
}*/

//function for clear the selction and results on REFRESH page
function resetForm() {
    document.getElementById("projectCost").reset();//reset form

    /*var clearAll = document.querySelectorAll("#dispalyResults p");
    for(var i = 0; i < clearAll; i++){
        clearAll[i].selectedIndex = -1;
        document.getElementById("test").innerHTML = " test from function resetForm";
    }*/
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
    calcTotal.addEventListener("click", calcTotal, false) || calcTotal.addEventListener("click", websiteType, false);// || btnClear.addEventListener("click", resetForm, false) ;
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