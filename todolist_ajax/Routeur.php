<?php

require "File.php";
$file = new File();
switch ($_GET["function"]) {
    case 'saveTask':
        $file->saveTask($_POST);
        break;
    case 'getTasks':
        $file->getTasks();
        break;
    case 'deleteAll':
        $file->deleteAll();
        break;
    case 'deleteSome':
        $file->deleteSome($_POST);
        break;
    
    default:
        # code...
        break;
}