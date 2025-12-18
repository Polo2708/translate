document.addEventListener("mouseup", () => {
  const textSelected = window.getSelection()?.toString().trim();

  if (textSelected) {
    chrome.runtime.sendMessage({
      type: "TEXT_SELECTED",
      payload: textSelected,
    });
  }
});
