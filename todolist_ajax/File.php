<?php

class File{
    public function saveTask($data)
    {
        $task = $data["titre"].",".$data["desc"].",".$data["urgence"].",".$data["date"]."\n";
        $file = fopen("tasks.csv", 'a+');
        fwrite($file,$task);

        fclose($file);
    }

    public function getTasks($return = false)
    {
        $filename = "tasks.csv";
        $file = fopen($filename, 'r');
        $data = array();
        while(true){
            $task = fgetcsv($file);
            if ($task == false) {
                break;
            }else {
                $data[] = $task;
            }
        }
        fclose($file);

        if ($return) {
          return $data;
        }
        echo json_encode($data);
    }

    public function deleteAll()
    {
        $file = fopen("tasks.csv", 'w');
        fwrite($file, "");
        fclose($file);

        echo json_encode("");
    }

    public function deleteSome($data)
    {
        $tasks = $this->getTasks(true);

        for ($i=sizeof($data["idlist"]) -1 ; $i >= 0; $i--) { 
            $id = $data["idlist"][$i];
            array_splice($tasks, $id, 1);
        }
        
        $file = fopen("tasks.csv", 'w');
        foreach ($tasks as $data) {
            $task = $data[0].",".$data[1].",".$data[2].",".$data[3]."\n";
            fwrite($file, $task);
        }
        fclose($file);
        echo json_encode("ok");
    }
}