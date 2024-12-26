// This JavaScript file is to handle any future functionality like the dropdown menu
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('mouseover', function() {
        dropdown.querySelector('.dropdown-content').style.display = 'block';
    });
    dropdown.addEventListener('mouseout', function() {
        dropdown.querySelector('.dropdown-content').style.display = 'none';
    });
});
