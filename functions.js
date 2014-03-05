var initial_rgb = 'rgb(255,200,255)' ;
function start(){
  var initial_hex = rgb_to_hex(initial_rgb) ;
  document.getElementById('color_rgb').value = initial_rgb ;
  document.getElementById('color_hex').value = initial_hex ;

  document.getElementById('rgb_value').value = initial_rgb ;
  document.getElementById('hex_value').value = initial_hex ;

  update_sample_swatch(initial_rgb) ;
}
function rgb_to_hex(rgb){
  var results = rgb.match(/(rgb|RGB)\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/) ;
  var r = parseInt(results[2]).toString(16) ;
  var g = parseInt(results[3]).toString(16) ;
  var b = parseInt(results[4]).toString(16) ;
  if(r<16) r = '0'+r ;
  if(g<16) g = '0'+g ;
  if(b<16) b = '0'+b ;
  var hex = '#' + r + g + b ;
  return hex ;
}
function hex_to_rgb(hex){
  var results = hex.match(/#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/) ;
  var r = parseInt(results[1],16) ;
  var g = parseInt(results[2],16) ;
  var b = parseInt(results[3],16) ;
  var rgb = 'rgb(' + r + ',' + g + ',' + b + ')' ;
  return rgb ;
}
function update_from_rgb(){
  var string = document.getElementById('color_rgb').value ;
  var results = string.match(/(rgb|RGB)\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/) ;
  if(results==null){
    var p = document.createElement('p') ;
    p.className = 'error_message' ;
    p.innerHTML = 'That is not a valid rgb expression.' ;
    var div = document.getElementById('div_errors') ;
    while(div.firstChild){ div.removeChild(div.firstChild) ; }
    div.appendChild(p) ;
    return ;
  }
  var hex = rgb_to_hex(string) ;
  document.getElementById('hex_value').value = hex ;
  update_sample_swatch(hex) ;
}
function update_from_hex(){
  var string = document.getElementById('color_hex').value ;
  var results = string.match(/#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/) ;
  if(results==null){
    var p = document.createElement('p') ;
    p.className = 'error_message' ;
    p.innerHTML = 'That is not a valid hex expression.' ;
    var div = document.getElementById('div_errors') ;
    while(div.firstChild){ div.removeChild(div.firstChild) ; }
    div.appendChild(p) ;
    return ;
  }
  var rgb = hex_to_rgb(string) ;
  document.getElementById('rgb_value').value = rgb ;
  update_sample_swatch(rgb) ;
}
function update_sample_swatch(color){
  document.getElementById('sample_swatch').style.background = color ;
  document.getElementById('swatch_colors').innerHTML = color ;
}