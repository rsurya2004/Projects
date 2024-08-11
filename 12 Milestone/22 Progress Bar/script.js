function updateProgressBar() {

    const progressBar = document.getElementById('progressBar');
    
    // Calculate the total height of the page that can be scrolled
    // document.documentElement.scrollHeight: Total height of the page content
    // document.documentElement.clientHeight: Visible height of the browser window
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Get the current vertical scroll position
    // window.scrollY: Number of pixels the document has already been scrolled vertically
    const scrollPosition = window.scrollY;
    
    // Calculate the scroll progress as a percentage
    const progress = (scrollPosition / totalHeight) * 100;
    
    // Set the width of the progress bar based on the scroll progress
    // This width is set as a percentage, making the bar fill up as you scroll
    progressBar.style.width = progress + '%';
}

// Each time the user scrolls, the updateProgressBar function is called
window.addEventListener('scroll', updateProgressBar);
