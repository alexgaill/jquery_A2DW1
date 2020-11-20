<?php

require "File.php";
require "Chat.php";
$file = new File();
$chat = new Chat();
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
    case 'save':
        $chat->saveMessage($_POST);
        break;
    case 'get':
        $chat->getMessages();
        break;
    
    default:
        # code...
        break;
}