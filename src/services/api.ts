import axios from 'axios';

/**
 * ios + emulador = localhost
 * ios + physical = IP address
 * android + emulator = run on command "adb reverse tcp:3333 tcp:3333" first 3333 is from your local machine and last is the one to the emulator
 * android + emulator = 10.0.2.2 (android studio)
 * android + emulator = 10.0.3.2 (Genymotion)
 * android + physical = IP address
 */

const api = axios.create({
  baseURL: 'http://192.168.0.13:3333',
});

export default api;
