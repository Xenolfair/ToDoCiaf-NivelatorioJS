document.addEventListener('DOMContentLoaded', () => {
    const userNameToShowElement = document.getElementById('Header_Title-Username');
    const loggedInUserName = localStorage.getItem('loggedInUser');
    const space = " ";

    if (loggedInUserName) {
        const greetingElement = document.getElementById('Header_Title');
        const greeting = getGreeting(loggedInUserName);

        greetingElement.innerHTML = `${greeting},&nbsp; <span class="Purple">${loggedInUserName}</span>.`;

        userNameToShowElement.innerHTML = `<span class="Purple">${loggedInUserName}</span>.`;
    }
});

function getGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting = "";

    if (hour >= 6 && hour < 12) {
        greeting = `Buenos días`;
    } else if (hour >= 12 && hour < 18) {
        greeting = `Buenas tardes`;
    } else {
        greeting = `Buenas noches`;
    }

    return `${greeting}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const loggedInUserName = localStorage.getItem('loggedInUser');
    const myNameElement = document.getElementById('myName');
    
    myNameElement.textContent = loggedInUserName;
});
