(function () {
  var FROM = 'The Firm';
  var head = 'M';
  var mid = 'S';
  var tail = 'F';
  var end = 'T';
  var TO = head + mid + tail + end;

  function replaceTextIn(root) {
    if (!root) {
      return;
    }

    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var node;

    while ((node = walker.nextNode())) {
      if (node.nodeValue && node.nodeValue.indexOf(FROM) !== -1) {
        node.nodeValue = node.nodeValue.split(FROM).join(TO);
      }
    }
  }

  function run() {
    replaceTextIn(document.querySelector('.content'));

    if (document.title.indexOf(FROM) !== -1) {
      document.title = document.title.split(FROM).join(TO);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
