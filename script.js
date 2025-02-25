let attackRunning = false;

function executeCommand(command) {
    const parts = command.trim().toLowerCase().split(' ');
    const terminalOutput = document.getElementById('terminal-output');
    const inputField = document.getElementById('input-field');

    if (parts[0] === 'help') {
        terminalOutput.innerHTML += `<p>Available commands:<br>
        - BYPASSv1 [target]<br>
        - SHOW [target]<br>
        - gojov21 [target]<br>
        - gojov5 [target]<br>
        - ESCI [target]<br>
        - HENTAI [target]<br>
        - LIXv2 [target]<br>
        - Rapid [target]<br>
        - Didan Kill [target]<br>
        - clear</p>`;
    } else if (parts[0] === 'clear') {
        terminalOutput.innerHTML = '';
        attackRunning = false;
        terminalOutput.innerHTML += `<p>Attack stopped and terminal cleared.</p>`;
    } else if (parts[0] === 'bypassv1' && parts.length === 2) {
        const target = parts[1];
        terminalOutput.innerHTML += `<p>Launching BYPASSv1 on ${target}</p>`;
        launchBYPASSv1(target);
        inputField.value = ''; // Clear the input field
    } else if (parts[0] === 'show' && parts.length === 2) {
        const target = parts[1];
        terminalOutput.innerHTML += `<p>Launching SHOW on ${target}</p>`;
        launchSHOW(target);
        inputField.value = ''; // Clear the input field
    } else if (parts[0] === 'gojov21' && parts.length === 2) {
        const target = parts[1];
        terminalOutput.innerHTML += `<p>Launching gojov21 on ${target}</p>`;
        launchgojov21(target);
        inputField.value = ''; // Clear the input field
    } else if (parts[0] === 'gojov5' && parts.length === 2) {
        const target = parts[1];
        terminalOutput.innerHTML += `<p>Launching gojov5 on ${target}</p>`;
        launchgojov5(target);
        inputField.value = ''; // Clear the input field
    } else if (parts[0] === 'esci' && parts.length === 2) {
        const target = parts[1];
        terminalOutput.innerHTML += `<p>Launching ESCI on ${target}</p>`;
        launchESCI(target);
        inputField.value = ''; // Clear the input field
    } else if (parts[0] === 'hentai' && parts.length === 2) {
        const target = parts[1];
        terminalOutput.innerHTML += `<p>Launching HENTAI on ${target}</p>`;
        launchHENTAI(target);
        inputField.value = ''; // Clear the input field
    } else if (parts[0] === 'lixv2' && parts.length === 2) {
        const target = parts[1];
        terminalOutput.innerHTML += `<p>Launching LIXv2 on ${target}</p>`;
        launchLIXv2(target);
        inputField.value = ''; // Clear the input field
    } else if (parts[0] === 'rapid' && parts.length === 2) {
        const target = parts[1];
        terminalOutput.innerHTML += `<p>Launching Rapid on ${target}</p>`;
        launchRapid(target);
        inputField.value = ''; // Clear the input field
    } else if (parts[0] === 'didankill' && parts.length === 2) {
        const target = parts[1];
        terminalOutput.innerHTML += `<p>Launching Didan Kill on ${target}</p>`;
        launchDidanKill(target);
        inputField.value = ''; // Clear the input field
    } else {
        terminalOutput.innerHTML += `<p>Unknown command. Type 'help' for a list of commands.</p>`;
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        executeCommand(event.target.value);
        event.target.value = '';
    }
}

function clearTerminal() {
    const terminalOutput = document.getElementById('terminal-output');
    terminalOutput.innerHTML = '';
    attackRunning = false;
    terminalOutput.innerHTML += `<p>Attack stopped and terminal cleared.</p>`;
}

function launchBYPASSv1(target) {
    if (attackRunning) return;
    attackRunning = true;

    fetch('BYPASSv1.js')
        .then(response => response.text())
        .then(script => {
            try {
                new Function(script)();
            } catch (error) {
                console.error('Error executing script:', error);
            }
        })
        .catch(error => console.error('Failed to load BYPASSv1.js:', error));
}


async function launchSHOW(target) {
    if (attackRunning) return;
    attackRunning = true;
    
    try {
        const response = await fetch('SHOW.js');
        const script = await response.text();
        eval(script);
    } catch (error) {
        console.error('Error loading script:', error);
    }
}


async function launchgojov21(target) {
    if (attackRunning) return;
    attackRunning = true;
    
    try {
        const response = await fetch('gojov21.js');
        const script = await response.text();
        eval(script);
    } catch (error) {
        console.error('Error loading script:', error);
    }
}


async function launchgojov5(target) {
    if (attackRunning) return;
    attackRunning = true;
    
    try {
        const response = await fetch('gojov5.js');
        const script = await response.text();
        eval(script);
    } catch (error) {
        console.error('Error loading script:', error);
    }
}


async function launchESCI(target) {
    if (attackRunning) return;
    attackRunning = true;
    
    try {
        const response = await fetch('ESCI.js');
        const script = await response.text();
        eval(script);
    } catch (error) {
        console.error('Error loading script:', error);
    }
}


async function launchHENTAI(target) {
    if (attackRunning) return;
    attackRunning = true;
    
    try {
        const response = await fetch('HENTAI.js');
        const script = await response.text();
        eval(script);
    } catch (error) {
        console.error('Error loading script:', error);
    }
}


async function launchLIXv2(target) {
    if (attackRunning) return;
    attackRunning = true;
    
    try {
        const response = await fetch('LIXv2.js');
        const script = await response.text();
        eval(script);
    } catch (error) {
        console.error('Error loading script:', error);
    }
}


async function launchRapid(target) {
    if (attackRunning) return;
    attackRunning = true;
    
    try {
        const response = await fetch('Rapid.js');
        const script = await response.text();
        eval(script);
    } catch (error) {
        console.error('Error loading Rapid.js:', error);
    }
}

async function launchDidanKill(target) {
    if (attackRunning) return;
    attackRunning = true;
    
    try {
        const response = await fetch('DidanKill.js');
        const script = await response.text();
        eval(script);
    } catch (error) {
        console.error('Error loading DidanKill.js:', error);
    }
}
