// Function to update slider value display
function updateSliderValue(sliderId) {
    const slider = document.getElementById(sliderId);
    const valueDisplay = document.getElementById(`${sliderId}-value`);
    valueDisplay.textContent = slider.value;
  }
  
  // Function to send PID constants to Arduino over Bluetooth
  function sendPIDConstants(kp, ki, kd) {
    // Format the PID constants as a string
    const pidValues = `${kp},${ki},${kd}\n`;
  
    // Assuming you have a Bluetooth connection object (e.g., btConnection)
    // Send the PID constants over Bluetooth
    if (btConnection) {
      btConnection.send(pidValues);  // Send the PID constants to Arduino via Bluetooth
      alert('PID constants sent successfully.');
    } else {
      alert('Bluetooth connection not established.');
    }
  }
  
  // Example: Call the sendPIDConstants function when the "Send" button is clicked
  function sendValues() {
    const kp = document.getElementById('kp').value;
    const ki = document.getElementById('ki').value;
    const kd = document.getElementById('kd').value;
  
    sendPIDConstants(kp, ki, kd);
  }
  