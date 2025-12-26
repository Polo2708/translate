chrome.runtime.onMessage.addListener((message) => {
  if (
    message?.type === "TEXT_SELECTED" &&
    typeof message.payload === "string"
  ) {
    chrome.storage.local.set({ selectedText: message.payload });

    chrome.notifications.create(
      "translate-notification",
      {
        type: "basic",
        iconUrl: chrome.runtime.getURL("icon-128.png"),
        title: "Texto detectado",
        message: "Haz click para ver la traducción",
      },
      () => {
        if (chrome.runtime.lastError) {
          console.error(
            "Notification error:",
            chrome.runtime.lastError.message
          );
        }
      }
    );
  }
});
