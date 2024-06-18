document.addEventListener('DOMContentLoaded', function () {
    var trigger = document.getElementById('trigger');
    var sidebar = document.getElementById('sidebar');

    trigger.addEventListener('click', function () {
        sidebar.style.left = '0';
        overlay.style.display = 'block';
    });

    // Close the sidebar if clicked outside
    document.addEventListener('click', function (event) {
        if (!sidebar.contains(event.target) && !trigger.contains(event.target)) {
            sidebar.style.left = '-250px';
            overlay.style.display = 'none';
        }
    });
});
