function removeItemsWhenUpdate() {
  console.log("remove Items")
  const targetNode = document;
  if(targetNode == null) return;
  changeTitle();
  changeFavIcon();
  removeItems();
  const config = { childList: true, subtree: true };
  const callback = function(mutationsList, observer) {
    removeItems();
  };
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}

function changeTitle() {
  document.title = document.title.replaceAll("LinkedIn","Flexible");
  document.title = document.title.replaceAll("YouTube","Flexible");
  
}

function changeFavIcon() {
  document.querySelectorAll('link[rel*="icon"').forEach(e => e.setAttribute("href","https://www.upwork.com/favicon.ico"));
}

function removeItems() {
  document.querySelectorAll('[id*="logo"]').forEach(e => e?.remove());
  document.querySelectorAll('[class*="logo"]').forEach(e => e?.remove());
  document.querySelectorAll('img[alt*="Udemy"]').forEach(e => e?.remove());
  document.querySelectorAll('a.ytp-impression-link').forEach(e => e?.remove());
  document.querySelectorAll('div.ytp-chrome-top-buttons').forEach(e => e?.remove());
  document.querySelectorAll('.ytd-subscribe-button-renderer').forEach(e => e.style.backgroundColor = 'black');
  document.querySelectorAll('link[rel*="icon"').forEach(e => e?.remove());
}

removeItemsWhenUpdate();
