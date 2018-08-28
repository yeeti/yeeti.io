let SCROLLBAR_WIDTH =


function getScrollbarWidth() {
  switch (navigator.platform) {
    case 'Win32':
      return 17;
      break;
    default:
      return 17;
  }
}
