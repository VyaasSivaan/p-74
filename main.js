function calculateSpeed() {
    // Get user inputs
    const mass = parseFloat(document.getElementById('mass').value);
    const celestialBody = document.getElementById('celestialBody').value;
    const height = parseFloat(document.getElementById('height').value);

    // Define gravitational accelerations
    const gEarth = 9.81;
    const gMoon = 1.625;

    // Calculate gravitational acceleration based on selected celestial body
    const g = celestialBody === 'earth' ? gEarth : gMoon;

    // Calculate final speed
    const finalSpeed = Math.sqrt(2 * g * height);

    // Display result
    document.getElementById('result').innerHTML = `Final Speed: ${finalSpeed.toFixed(2)} m/s on ${celestialBody}`;
    document.getElementById('resultSection').style.display = 'block';
}
