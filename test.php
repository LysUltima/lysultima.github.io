<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>LysUltima's Site</title>
<link rel="stylesheet" href="style.css">
<body>
<h3>LysUltima's Site</h3>
<?php
$jsonobj = '["0b4643c9-9c18-4648-86de-4b908b09c891","7e05ea2b-1e38-490a-b032-28735fd08fac","96a4e9c5-5331-4207-af0a-16ff455ecc4d","cfd7fcaf-0897-4011-a3ff-5db9ac49e597","b571df72-81a7-4412-8ffc-9ea876112a4d","46294b09-c441-4e00-84c7-db16fd517298","33b31a4c-db75-458c-9d63-ff142acbed5d","4123d85e-0c54-4ba6-8f98-7a3bc4ed13b3","73bd8a9d-3852-4cc1-b125-3ca1c55cbec4","a1445ee7-b753-412b-85d6-488f5686fed1","6d9bfd26-5ba6-46ca-ae4e-f8477b999add","089a07ae-0d11-451d-aa92-c67e96818db3","a67b455d-875e-45e0-bfcc-f106c79fae4c","33081151-52b2-4fe4-86f9-5f1213a1702a","8fb52996-888a-4b4e-b79f-395baf9b377b","b00323b8-caf8-420a-bcc6-56c99cdcc496","6504f1ac-6ba1-49b2-ab4d-236995f7ae77","bd1cae95-2b65-4cd9-87ef-91cab9fcddcb","5b828be8-8667-47be-87b9-4c4dc3f87721","ab74ae73-a61c-4d57-800b-5646128fb5ff"]';

$obj = json_decode($jsonobj);

echo $obj->1;
echo $obj->2;
echo $obj->3;
?>
</body>
</html>