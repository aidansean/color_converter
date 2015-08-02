<?php
$title = 'Color transformer' ;
$stylesheets = array('style.css') ;
$js_scripts  = array('functions.js') ;
include_once('project.php') ;
include_once($_SERVER['FILE_PREFIX'] . '/_core/preamble.php') ;
?>

  <div class="right">
    <h3>Color transformer</h3>
    <div class="blurb">
      <div id="div_errors"></div>
      <p class="center">Type in the color in the format you have:</p>
      <table id="color">
        <thead>
          <tr>
            <th class="th_color" id="th_in">in</th>
            <th class="th_color" id="th_none"></th>
            <th class="th_color" id="th_out">out</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="td_color_1">rgb: <input class="color" name="" id="color_rgb" value="rgb(255,255,255)"/></td>
            <td class="td_color_2"><input class="color" type="submit" value="&rarr; &rarr; convert &rarr; &rarr;" onclick="update_from_rgb()"></td>
            <td class="td_color_3">hex: <input class="color" id="hex_value"/></td>
          </tr>
          <tr>
            <td class="td_color_1">hex: <input class="color" name="" id="color_hex" value="#ffffff"/></td>
            <td class="td_color_2"><input class="color" type="submit" value="&rarr; &rarr; convert &rarr; &rarr;" onclick="update_from_hex()"></td>
            <td class="td_color_3">rgb: <input class="color" id="rgb_value"/></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="right">
    <h3>Sample swatch</h3>
    <div id="sample_swatch"></div>
    <div id="swatch_colors"></div>
  </div>

<?php foot() ; ?>
