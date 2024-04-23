window.onscroll = function() {myFunction()};

function myFunction() {
    var winScroll = window.scrollY;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.height = scrolled + "%";
    
    var monthSections = document.querySelectorAll(".month-section");
    var currentMonth = "";

    monthSections.forEach(function(section) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.offsetHeight;
        if (winScroll >= sectionTop && winScroll <= sectionTop + sectionHeight) {
            currentMonth = section.getAttribute("data-month");
            section.classList.add("highlight");
        } else {
            section.classList.remove("highlight");
        }
    });

    var totalSections = monthSections.length;
    var currentSectionIndex = Math.floor((scrolled / 100) * totalSections);
    currentMonth = monthSections[currentSectionIndex].getAttribute("data-month");

    document.getElementById("scrollMonth").textContent = currentMonth;
}
