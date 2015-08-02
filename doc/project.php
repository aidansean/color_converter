<?php
include_once($_SERVER['FILE_PREFIX']."/project_list/project_object.php") ;
$github_uri   = "https://github.com/aidansean/color_converter" ;
$blogpost_uri = "http://aidansean.com/projects/?tag=color" ;
$project = new project_object("color", "Color converter", "https://github.com/aidansean/color_converter", "http://aidansean.com/projects/?tag=color", "color/images/project.jpg", "color/images/project_bw.jpg", "This is a very simple yet useful script for converting colours from one description to another.  What causes the most frustration here is the difference between US and UK English, as it seems I'll never be happy with the uri for this tool.  So I use the word \"color\" in the context of values the computer understands and \"colour\" to describe the aesthetic experience of humans.  That makes the best of a bad situation.", "Tools,Web design", "JavaScript,CSS,HTML") ;
?>