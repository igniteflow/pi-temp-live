Pi Thermometer Live
===================

See the temperature reading from your Raspberry Pi in your browser.  Auto-updates every second.

Components:
 1. A Raspberry Pi set up with a thermistor
 2. A Python script that takes a temperature reading every second and writes it to Redis with the current timestamp.  **DISCLAIMER** This code is lifted from https://github.com/simonmonk/pi_starter_kit/blob/master/04_thermometer.py - I just removed the GUI parts and added the Redis logic
 3. A Node.js Express server script that reads the Redis value every second.  This value is emitted to the
    client using websockets via SocketIO
 4. Client-side Javascript to listen for the websocket events and update the DOM

Getting Started
---------------
 1. Install Redis on the Raspberry Pi and start the server
 2. `sudo python thermometer.py`  GPIO access requires sudo.  Not required in the newest Raspbian build.
 3. `node index.js`
 4. Open browser at http://[raspberry ip]:3000/ and profit!!!  
