// Document ready function to ensure functions just run after everything is loaded in the document.
$(document).ready(function(){
    // Call initial function
    initial()
    
    function initial(){
        // Build navbar with bootstrap classes
        const nav = `<a class="navbar-brand" href="index.html">Camila</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                <a class="nav-link" href="index.html">About <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="portfolio.html">Portfolio</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
                </li>         
            </ul>              
        </div>`
    // Append the built navbar to all html files with the class nav-head.
     $(".nav-head").append(nav);
    // Build navbar with bootstrap classes
     const footerHtml = 
        `<div class="fixed-bottom nav-foot">
            <p>Camila Alves Meyer
                <a href=https://github.com/Mimila-85><i class="fab fa-github-square iFoot"></i></a>
                <a href="https://www.linkedin.com/in/camila-alves-meyer/"><i class="fab fa-linkedin iFoot"></i></a>
                <a href="mailto:camila.alves85@gmail.com" name="emailLink" id="emailLink"><i class="fas fa-envelope iFoot"></i></a>
            </p>
        </div>`
    // Append the built navbar to all html files footer tags.
     $("footer").append(footerHtml);
    }
})