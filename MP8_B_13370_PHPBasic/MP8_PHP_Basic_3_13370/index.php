<?php
$menu = $_GET['menu'] ?? '';

$halaman = [
    'L' => 'pendaftaran.php',
    'B' => 'belanja.php',
];
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>University Market</title>
    </head>
    <body>
        <h1>Sistem Menu University Market</h1>

        <div style="border: 0.1px solid #000; padding: 10px; width: 300px;">
            <a href="?menu=L" style="text-decoration: underline;">Pendaftaran loker</a> 
        </div>
        <div style="border: 0.1px solid #000; padding: 10px; width: 300px;">    
            <a href="?menu=B" style="text-decoration: underline;">Belanja</a>
        </div>

        <div id="konten">
            <?php
                if(is_string($menu) && isset($halaman[$menu])){
                    require __DIR__ .  DIRECTORY_SEPARATOR . $halaman[$menu];
                }else{
                    echo '<p>Silahkan pilih menu di atas.</p>';
                }
            ?>
        </div>
    </body>
</html>