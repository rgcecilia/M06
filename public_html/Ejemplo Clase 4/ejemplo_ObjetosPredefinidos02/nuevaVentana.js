

var windowMadre = window.opener;
window.setTimeout(
        function () {
            var divMadre = windowMadre.document.getElementById("mensaje_hija");
            divMadre.innerHTML = "Hola madre!";
        }
, 1500
        );
window.setTimeout(
        function () {
            window.close();
        }
,
        2000);
