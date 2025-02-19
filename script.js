const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const output = document.getElementById("output");
const indicator = document.getElementById("indicator");

if ("webkitSpeechRecognition" in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    startBtn.onclick = () => {
        recognition.start();
        indicator.textContent = "🎤 Recording... Speak now!";
        indicator.style.color = "red";
        startBtn.disabled = true;
        stopBtn.disabled = false;
    };

    stopBtn.onclick = () => {
        recognition.stop();
        indicator.textContent = "🔴 Mic is OFF";
        indicator.style.color = "black";
        startBtn.disabled = false;
        stopBtn.disabled = true;
    };

    recognition.onresult = (event) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript + " ";
        }
        output.innerHTML = `<p>${transcript}</p>`;
    };

} else {
    alert("Your browser does not support speech recognition. Try using Chrome.");
}
