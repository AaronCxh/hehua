<?php
/**
*根据产品ID返回产品详情
*请求参数：
  pid-产品ID，必需
*输出结果：
  {
    "pid": 1,
    "title1":"xxx",
    ...
  }
*/
@$rid = $_REQUEST['rid'] or die('rid required');

require('init.php');

$sql = "SELECT * FROM report WHERE rid=$rid";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
if($row){
  $output = $row;
}

echo json_encode($output);