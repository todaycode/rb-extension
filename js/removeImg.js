const list = ["[id='ember15']"];

function removeItemsWhenUpdate() {
    const targetNode = document;
    if(targetNode == null) return;
    removeItems();
    const config = { childList: true, subtree: true };
    const callback = function(mutationsList, observer) {
      removeItems();
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
    
}

function removeItems() {
  for(let i in list) {
    console.log("asde",i)
    let img = $( `${list[i]}` )
    if(img.length > 0){
      console.log("img : ", img)
      img.remove();
    }
  }
}

removeItemsWhenUpdate();

// $(document).ready(() => {
//   removeItems();
// })
