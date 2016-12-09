window.onload = function(){
    navigator.geolocation.getCurrentPosition(success);

    function success(position) {
        var b = position.coords.latitude;
        var a = position.coords.longitude;
        var link = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d49243.88618515856!2d"+a+"!3d"+b+"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbars!5e0!3m2!1sen!2sus!4v1472760469096"
        var iframe = document.createElement('iframe');
        iframe.frameBorder=0;
        iframe.width="100%";
        iframe.height="475px";
        iframe.id="randomid";
        iframe.setAttribute("src", link);
        document.getElementById("maps").appendChild(iframe);
        console.log ( 'Running Location Services' );
        console.log ( 'Location Services Results:' );
        console.log ( position.coords.latitude + ", "+position.coords.longitude );
        
    }

}
