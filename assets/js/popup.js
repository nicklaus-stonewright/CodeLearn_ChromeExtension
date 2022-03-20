

//Dark Theme button
let changeVideoPlayerDarkTheme = document.getElementById("VideoPlayerDarkTheme");

function applyDarkBackgroundColour() {
    document.querySelector("body > section > div.course-mainbar.lecture-content.full-width-content").style.backgroundColor = "#1d222d";
    document.querySelector("body > section > div.course-mainbar.lecture-content.full-width-content").style.color = "white";
}

changeVideoPlayerDarkTheme.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: applyDarkBackgroundColour,
    });
});


//Light Theme button
let changeVideoPlayerLightTheme = document.getElementById("VideoPlayerLightTheme");

function applyLightBackgroundColour() {
    document.querySelector("body > section > div.course-mainbar.lecture-content.full-width-content").style.backgroundColor = "";
    document.querySelector("body > section > div.course-mainbar.lecture-content.full-width-content").style.color = "";
}

changeVideoPlayerLightTheme.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: applyLightBackgroundColour,
    });
});



let hideCourseSideBar = document.getElementById("hideCourseSideBar");

hideCourseSideBar.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: hideSideBar,
    });
});

function hideSideBar() {
    document.getElementById('courseSidebar').style.display = "none";
}



let showCourseSideBar = document.getElementById("ShowCourseSideBar");

showCourseSideBar.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: showSideBar,
    });
});

function showSideBar() {
    document.getElementById('courseSidebar').style.display = "inline-block";
}