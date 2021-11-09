<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="asset/css/bootstrap.min.css">

    <title>Document</title>
</head>

<body>
    <!-- Image and text -->
    <nav class="navbar navbar-light bg-light">
        <h1>Dasboard Temperatur & Kelebapan</h1>
    </nav>
    <div class="jumbotron">
        <h3>Cek riwayat Suhu</h3>
        <form action="/action_page.php">
            <label for="birthdaytime">Masuakan (date and time):</label>
            <p>dari
                <input type="datetime-local" id="sebelum" name="birthdaytime">
                sampai
                <input type="datetime-local" id="setelah" name="birthdaytime">
                <input type="submit">
            </p>
        </form>
        <div class="card">
            <div class="row">
                <div class="col-sm">
                    <div class="card-body">
                        <div>
                            <canvas id="Suhu"></canvas>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card-body">
                        <div>
                            <canvas id="Humidity"></canvas>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card-body">
                        <div>
                            <canvas id="myChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="asset/js/popper.min.js"></script>
    <script src="asset/js/bootstrap.min.js"></script>
    <script src="asset/js/chart.js"></script>
    <script src="asset/js/grap.js"></script>
</body>
</body>

</html>