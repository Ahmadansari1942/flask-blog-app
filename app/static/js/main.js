// Auto-dismiss alerts after 5 seconds
setTimeout(function() {
    let alerts = document.querySelectorAll('.alert');
    alerts.forEach(function(alert) {
        let bsAlert = new bootstrap.Alert(alert);
        bsAlert.close();
    });
}, 5000);

// Confirm delete action
function confirmDelete() {
    return confirm('Are you sure you want to delete this item?');
}
