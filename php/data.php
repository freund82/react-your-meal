<?php
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

// Получаем данные из тела запроса
$request_body = file_get_contents("php://input");
$data = json_decode($request_body, true);


// Получаем данные
$name = $data['name'];
$phone = $data['phone'];
$deliveryType = $data['deliveryType'];
$address = $data['address'];
$floor = $data['floor'];
$housePhone = $data['housePhone'];
$totalSum = $data['totalSum'];
$cartItems = $data['cartItems'];

//Создаем номер заказа
$order_number = rand(1, 1000);

//Сегодняшнее число
$today = date('d.m.Y');

if($deliveryType == "Yourself"){
    $message = '
<h2>Новый заказ: № ' . $order_number . ' от ' . $today . '</h2>
<hr></hr>
<p>Имя: ' . $name . '</p>
<p>Телефон: ' . $phone . '</p>

<h2>Заказано:</h2>
<ol>';
foreach ($cartItems as $item) {
  $message .= '<li>' . $item['name'] . '   ' . $item['quantity'] . '  x  '. $item['price'] . ' руб. =  ' . ($item['price'] * $item['quantity']) . ' руб.</li>';
}
$message .= '</ol>
<p>Общая сумма: ' . $totalSum . ' руб. </p>
<p>Тип доставки: Самовывоз</p>';

} else {
   $message = '
<h2>Новый заказ: № ' . $order_number . ' от ' . $today . '</h2>
<hr></hr>
<p>Имя: ' . $name . '</p>
<p>Телефон: ' . $phone . '</p>

<h2>Заказано:</h2>
<ol>';
foreach ($cartItems as $item) {
  $message .= '<li>' . $item['name'] . '   ' . $item['quantity'] . '  x  '. $item['price'] . ' руб. =  ' . ($item['price'] * $item['quantity']) . ' руб.</li>';
}
$message .= '</ol>
<p>Общая сумма: ' . $totalSum . ' руб. </p>
<p>Заказ будет доставлен по следующему адресу: ' .$address . ' Этаж: ' . $floor . ' Домофон: ' . ($housePhone ? $housePhone : 'нет') . ' </p>';
}




mail("maximutkin82@yandex.ru" , "Новый заказ", $message, $headers . "From: webhobby@maxhooktravelblog.ru \r\n");

// Возвращаем ответ в JSON
$response = array('status' => 'success', 'message' => 'Data received successfully', 'message' => $message);
echo json_encode($response);
?>