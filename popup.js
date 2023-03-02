async function fill() {
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    chrome.tabs.sendMessage(tab.id, {id : "trs"});
}

window.addEventListener("load", (e) => {
    button = document.getElementById("btn");
    button.addEventListener("click", fill);
});

