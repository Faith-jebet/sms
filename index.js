
function sendSMS() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const username = 'sandbbox';
    const apiKey = '766e25a98e8ea8361128d0c01922ca53ef5484f8938595b08b82f75f143a5325'; 


    fetch('https://api.africastalking.com/version1/messaging', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'apiKey': apiKey,
        },
        body: `username=${username}&to=${phoneNumber}&message=Hello friend our first package has arrived!`,
    })
    .then(response => response.json())
    .then(data => {
        console.log('SMS sent successfully:', data);
    })
    .catch(error => {
        console.error('Error sending SMS:', error);
    });
}
