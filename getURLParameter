function getURLParam(p){
  var x=new RegExp('[\?&]'+p+'=([^&]+)','i');
  var z=x.exec(window.top.location.search);
  if(z&&z.length>1)return decodeURIComponent(z[1]);
  else return '';
}
