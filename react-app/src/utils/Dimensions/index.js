
export function resetHeight() {

  const headerHeight = 60;
  setTimeout(function(){
    const pageContainerEle = document.getElementsByTagName('body')[0];

      var height1 = document.getElementById('content-wrapper').clientHeight;
      var height2 = pageContainerEle.clientHeight + headerHeight;

      var height = (height1 > height2 ? height1 : height2);

      document.getElementById('sidecolumn').style.minHeight = height + 'px';
  }, 100);


}
