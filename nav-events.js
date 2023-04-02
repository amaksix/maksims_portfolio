function openAboutMe() {
    window.location.href="about-me.html";  
};
function backHome(){
    window.location.href="index.html";  
};

function openProjects(){
    window.location.href="projects.html";  
};
function openAggressionTraining(){
    window.location.href="aggression-training.html";  
};
function openSonarSight(){
    window.location.href="sonar-sight.html";  
};
function openSpaceWind(){
    window.location.href="space-wind.html";  
};
function openZoomCharts(){
	window.location.href="zoom-charts.html";
}
function openRemoteAssist(){
	window.location.href="remote-assist.html";
}
function contactMe(){
	window.location.href="index.html#contact-me-anchor";
}
function openLinkedIn(){
	window.open(
        "https://www.linkedin.com/in/maksims-terescuks-8b568a191", "_blank");
    }
function sendEmail()
{
    var emailName = document.getElementById("Email Name").value;
    var emailSubject = document.getElementById("Email Subject").value;
    var emailMessage = document.getElementById("Email Message").value;
    emailMessage.replaceAll("\n","%0D%0A");
   // window.open('mailto:amaksix@inbox.lv');
    window.open('mailto:amaksix@inbox.lv?subject='+emailSubject+'&body='+emailMessage+'%0D%0A'+'Kind Regards,'+'%0D%0A'+emailName);
}