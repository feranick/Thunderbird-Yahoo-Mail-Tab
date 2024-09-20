const is_release = true;

function debug_msg(message){
  if(is_release){
    return;
  }
  console.debug("Yahoo-Mail-Tab: " + message);
}

debug_msg("Loading");

function openNewTab(tab_url){
  debug_msg(`Opening tab with url: ${tab_url}`);
  browser.tabs.create({ url: tab_url });
}

if ("browserAction" in browser) {
  debug_msg("Has permision for browserAction");

  browser.browserAction.onClicked.addListener(async () => {
    openNewTab("https://mail.yahoo.com");
  });
} else {
  openNewTab("https://mail.yahoo.com");
}

debug_msg("Loaded");
