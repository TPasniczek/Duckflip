<!DOCTYPE html>
<!--    Note: this file is not in use any longer, it is superseded by splash.ejs which
        is an almost exact copy (apart from template tags).
-->
<html>
    <head>
        <title>Ballons: a two player word game</title>
        <link rel="stylesheet" href="stylesheets/splash.css">
    </head>
    <body>
        <main>
            <section id="left">
                <div id="decoration-top">
                    <span class="square"></span>
                    <span class="square"></span>
                    <span class="square"></span>
                    <span class="square"></span>
                    <span class="square"></span>
                    <span class="square"></span>
                    <span class="square"></span>
                    <span class="square"></span>
                    <span class="square"></span>
                </div>
                <h1>Exploding balloons</h1>
                <h2>A two player word game</h2>
            </section>
            <section id="right">
                &nbsp;
            </section>
            <section id="balloons">
                    <form action="/play" method="get">
                            <button type="submit">PLAY</button>
                    </form>
                    <span class="balloon" id="b1"></span>
                    <span class="balloon" id="b2"></span>
                    <span class="balloon" id="b3"></span>
            </section>
        </main>
    </body>
</html>
