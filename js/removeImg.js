
function removeItemsWhenUpdate() {
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
  document.title = document.title.replaceAll("Linkedin","Flexible");
}

function changeFavIcon() {
  $('link[rel="shortcut icon"]').attr('href','https://www.upwork.com/favicon.ico');
}

function removeItems() {
  const zList = ["[id='ember15']", "[type='linkedin-logo']"];
  for(let i in zList) {
    let img = $( `${zList[i]}` )
    if(img.length > 0){
      console.log("img : ", img)
      img.remove();
    }
  }
}

removeItemsWhenUpdate();
