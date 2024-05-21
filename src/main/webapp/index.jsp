<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="views/css/style.css">
    <link rel="stylesheet" href="views/css/responsive.css">
    <script src="views/script/piedraPapelTijera.js"></script>
    <script src="views/script/ganador.js"></script>
    <title>Document</title>
</head>
<body>
<div class="contenedor1">
    <label for="piedra">
        <input type="radio" value="1" name="opcion" id="piedra">
        <img src="views/imagenes/piedra.png" alt="Piedra" class="col-6">
    </label>

    <label for="papel">
        <input type="radio" value="2" name="opcion" id="papel">
        <img src="views/imagenes/papel.png" alt="Papel" class="col-6">
    </label>

    <label for="tijeras">
        <input type="radio" value="3" name="opcion" id="tijeras">
        <img src="views/imagenes/tijeras.png" alt="Tijeras" class="col-6">
    </label>
    <div class="maquina">
        <img src="" alt="respuesta maquina" id="respuestaMaquina" class="col-6">
    </div>
    <div class="cajaFlex">
        <p class="centrado" id="mensaje"></p>
        <p class="centrado" id="contador"></p>

    </div>
</div>

</body>
</html>
