(function(){
    if (window.myBookmarklet !== undefined){
        myBookmarklet();
    }
    else { 
        document.body.appendChild(document.createElement('script')
        ).src='https://0b7e-46-216-152-104.eu.ngrok.io/static/js/bookmarklet.js?r=' + 
        Math.floor(Math.random()*99999999999999999999);
    }
    })();