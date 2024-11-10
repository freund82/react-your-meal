<?php
// Получаем данные из тела запроса
$request_body = file_get_contents("php://input");
$data = json_decode($request_body, true);

// Получаем отдельные поля
$name = $data['name'];
$phone = $data['phone'];
$delivetyType = $data['delivetyType'];
$address = $data['address'];
$floor = $data['floor'];
$housePhone = $data['housePhone'];

$message = "ФИО: ".$name.".  phone: ".$phone;


mail("maxim2001_2001@mail.ru" , "Новый заказ",  "ФИО: ".$name.".  phone: ".$phone, "From: webhobby@maxhooktravelblog.ru \r\n");

// Возвращаем ответ в JSON
$response = array('status' => 'success', 'message' => 'Data received successfully', 'message' => $message);
echo json_encode($response);
?>
