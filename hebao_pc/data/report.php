<?php

require('init.php');
@$pageNum = $_REQUEST['pageNum'] or $pageNum = 1;
@$type = $_REQUEST['type'] or $type = 1;

$output['pageNum'] = intval($pageNum);
$output['type'] = intval($type);
$output['pageSize'] = 3;

$sql="SELECT COUNT(*) FROM report WHERE type=$type";
$result = mysqli_query($conn,$sql);
$output['totalRecord'] = intval( mysqli_fetch_row($result)[0] );
$output['pageCount'] = ceil($output['totalRecord']/$output['pageSize']);

$start = ($output['pageNum']-1)*$output['pageSize'];
$count = $output['pageSize'];
$sql = "SELECT * FROM report WHERE type=$type ORDER BY rid DESC LIMIT $start,$count";
$result = mysqli_query($conn,$sql);
$output['data'] = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($output);



