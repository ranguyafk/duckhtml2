const params = new URLSearchParams(window.location.search)
if (params.get("game")) {
    games.forEach(async game => {
        if (game.id != params.get("game")) return
        document.title = `${game.title} | Art Class`
        document.querySelector("#gameImage").src = game.image
        document.querySelector("#gameTitle").innerHTML = game.title
        if (game.description) document.querySelector("#gameDescription").innerHTML = game.description
        document.querySelector("#frame").src = __uv$config.prefix + __uv$config.encodeUrl(game.url)


    })
} else if (params.get("app")) {

    apps.forEach(app => {
        if (app.id != params.get("app")) return
        document.title = `${app.title} | Art Class`
        document.querySelector("#gameImage").src = app.image
        document.querySelector("#gameTitle").innerHTML = app.title
        if (app.description) document.querySelector("#gameDescription").innerHTML = app.description

        document.querySelector("#frame").src = __uv$config.prefix + __uv$config.encodeUrl(app.url);
    })
}

if (!getObj("favoritedGames")) setObj("favoritedGames", [])
if (!getObj("favoritedApps")) setObj("favoritedApps", [])

var favoritedButton = document.querySelector(".favorited")
var favoritedGames = getObj("favoritedGames")
var favoritedApps = getObj("favoritedApps")

var game = params.get("game")
var app = params.get("app")

if (favoritedGames.includes(game)) {
    favoritedButton.classList.remove("far")
    favoritedButton.classList.add("fas")
}

if (favoritedGames.includes(game)) {
    favoritedButton.classList.remove("far")
    favoritedButton.classList.add("fas")
}
function favorite() {
    if (game) {
        var index = favoritedGames.indexOf(game);
        if (index !== -1) {
            favoritedGames.splice(index, 1);
            favoritedButton.classList.remove("fas")
            favoritedButton.classList.add("far")
        } else {
            favoritedGames.push(game)
            favoritedButton.classList.remove("far")
            favoritedButton.classList.add("fas")
        }
        setObj("favoritedGames", favoritedGames);
    } else if (app) {
        var index = favoritedGames.indexOf(game);
        if (index !== -1) {
            favoritedGames.splice(index, 1);
            favoritedButton.classList.remove("fas")
            favoritedButton.classList.add("far")
        } else {
            favoritedGames.push(game)
            favoritedButton.classList.remove("far")
            favoritedButton.classList.add("fas")
        }
        setObj("favoritedGames", favoritedGames);
    }
}



        function showAdContainer() {
            document.getElementById('adContainer').style.display = 'block';
        }

        function hideAdContainer() {
            document.getElementById('adContainer').style.display = 'none';
        }

        // Example: Show the ad container after 5 seconds
        setTimeout(showAdContainer, 5000);

<html>
     <div id="adContainer">
        <div class="closeButton" onclick="hideAdContainer()">×</div>
<!-- AdForGames.com code begin -->
<script>var afg={};afg.u=6289;afg.s=7;
document.write("<sc"+"ript src='//js.adforgames.com/cd.js'></sc"+"ript>");</script>
<!-- AdForGames.com code end -->
    </div>
    </html>

<style>
        #adContainer {
            width: 300px;
            height: 250px;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #121212;
            border-radius: 10px;
            display: none; /* Hide the ad container initially */
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
            z-index: 1000; /* Ensure the ad is above other content */
        }

        .closeButton {
            position: absolute;
            top: 5px;
            right: 5px;
            font-size: 24px;
            color: #fff;
            cursor: pointer;
            width: 30px;
            height: 30px;
            background-color: #333;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            </style>
