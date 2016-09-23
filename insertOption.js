function insertOption(value,text,field){
  var o=document.createElement("option");
  o.value=value;
  o.text=text;
  try{field.add(o,null);}
  catch(e){field.add(o);}
}
