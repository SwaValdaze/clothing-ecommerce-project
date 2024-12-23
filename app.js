document.getElementById('signupForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    // Gather form data
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Send data to the server
    try {
        
        const response = await fetch('http://localhost:5000/admin/seller/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        
        // Show response message
        const message = result.success ? 'Sign up successful!' : `Error: ${result.message}`;
        document.getElementById('responseMessage').textContent = message;
        document.getElementById('responseMessage').style.color = result.success ? 'green' : 'red';
        
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('responseMessage').textContent = 'Something went wrong!';
        document.getElementById('responseMessage').style.color = 'red';
    }
});
