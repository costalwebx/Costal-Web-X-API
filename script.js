// Check if there's a saved API Key in localStorage when the page loads
window.onload = () => {
    const savedApiKey = localStorage.getItem("apiKey");
    if (savedApiKey) {
        // Pre-fill the search bar with the saved API key (if any)
        document.getElementById("search-bar").value = savedApiKey;
    }
};

// Handle the search input for "ghtip://api.index.vsx" and valid API keys
function handleSearch() {
    const searchCommand = document.getElementById("search-bar").value.trim();
    const savedApiKey = localStorage.getItem("apiKey");

    if (searchCommand === "ghtip://api.index.vsx") {
        showApiSection();
    } else if (searchCommand === savedApiKey) {
        // If the entered search is a valid API key, show the execution section
        showExecuteSection();
    } else {
        alert("Invalid command or API Key. Please enter a valid command or API Key.");
    }
}

// Show the API input section
function showApiSection() {
    document.getElementById("search-section").classList.add("hidden");
    document.getElementById("api-section").classList.remove("hidden");
}

// Show the Execute API section (for running HTML code)
function showExecuteSection() {
    document.getElementById("search-section").classList.add("hidden");
    document.getElementById("execute-section").classList.remove("hidden");
}

// Generate a random API key and display it
function generateApiKey() {
    const apiKey = generateRandomString(16);  // Generate a random 16 character string
    document.getElementById("api-key-output").textContent = `API Key: ${apiKey}`;
    window.apiKey = apiKey;  // Store the API Key for later use
    localStorage.setItem("apiKey", apiKey);  // Save the API Key in LocalStorage
}

// Generate a random string of a given length
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Show the execute section when API key is entered
function executeApi() {
    const enteredKey = document.getElementById("api-key-input").value.trim();

    if (enteredKey === window.apiKey) {
        const apiCode = document.getElementById("api-code").value.trim();
        runHtmlCode(apiCode);
    } else {
        alert("Invalid API Key. Please check your input.");
    }
}

// Execute the HTML code in a new window (about:blank)
function runHtmlCode(htmlCode) {
    const newWindow = window.open('about:blank', '_blank');
    newWindow.document.write(htmlCode);
    newWindow.document.close();  // Necessary to load the content
}

// Go back to the search bar and reset the interface
function goBackToSearch() {
    document.getElementById("api-section").classList.add("hidden");
    document.getElementById("execute-section").classList.add("hidden");
    document.getElementById("search-section").classList.remove("hidden");
    document.getElementById("search-bar").value = "";  // Clear search input
    document.getElementById("api-key-input").value = "";  // Clear API key input
}
