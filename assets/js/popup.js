// let changeColor = document.getElementById("changeColor");

// chrome.storage.sync.get("color", ({ color }) => {
//     changeColor.style.backgroundColor = color;
// });

// // When the button is clicked, inject setPageBackgroundColor into current page
// changeColor.addEventListener("click", async () => {
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         function: setPageBackgroundColor,
//     });
// });

// // The body of this function will be executed as a content script inside the current page
// function setPageBackgroundColor() {
//     chrome.storage.sync.get("color", ({ color }) => {
//         document.body.style.backgroundColor = color;
//     });
// }



let changeVideoPlayer = document.getElementById("changeVideoPlayer");

function applyBackgroundColour() {
    document.querySelector("body > section > div.course-mainbar.lecture-content.full-width-content").style.backgroundColor = "#1d222d";
    document.querySelector("body > section > div.course-mainbar.lecture-content.full-width-content").style.color = "white";
}

changeVideoPlayer.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: applyBackgroundColour,
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