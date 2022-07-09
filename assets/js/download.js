$(function () {
    const googlePlayLink="https://play.google.com/store/apps/details?id=com.BINBIN";
    const appStoreLink="https://apps.apple.com/tr/app/bin-bin/id1483635924?l=tr";
    const downloadButton=$(".download");
    let deviceType=null;
    if(navigator.userAgent.includes("iPad")||
        navigator.userAgent.includes("iPhone"))
        deviceType="ios";
    else if(navigator.userAgent.includes("Android"))
        deviceType="android";
    else deviceType="desktop"



    if (deviceType=="ios") {
        downloadButton.attr("href",appStoreLink);
        $(".market-link-play-store").css("display","none");
    }
    else if(deviceType=="android") {
        downloadButton.attr("href", googlePlayLink);
        $(".market-link-app-store").css("display","none");
    }


});
