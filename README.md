# Costal Web X API

This is an interface for interacting with the **Costal Web X API**. It allows users to search for commands, generate API keys, and execute HTML code within a web-based interface.

## Features

- **Search Interface**: Users can input commands or API keys to access the setup and execution sections.
- **API Setup**: Users can generate a random API key and input HTML code for an API.
- **API Execution**: After entering the valid API key, users can execute HTML code in a new window.
- **Persistent API Key**: The API key is saved in `localStorage` to persist across sessions.

## Setup

To get started with this project, follow the instructions below.

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/Costal-Web-X-API.git
cd Costal-Web-X-API
```

### 2. Files in the repository

- `index.html`: The main HTML file with the user interface.
- `style.css`: The CSS file to style the interface.
- `script.js`: The JavaScript file that handles the API key generation, code execution, and UI logic.

### 3. Open the interface

Open `index.html` in your browser to start using the interface.

## Usage

1. **Search Command**: 
   - You can enter the following command in the search bar:
     - `ghtip://api.index.vsx`: This will take you to the API setup section.
     - Enter a previously generated API key to go to the execute API section.
   
2. **Generate API Key**:
   - Once you're in the API setup section, you can click the "Get API Key" button to generate a new random API key. 
   
3. **Execute API**:
   - In the "Execute API" section, input the generated API key and the corresponding HTML code, then click "Execute" to run the code in a new browser window.

4. **Back to Search**: 
   - You can always return to the search bar by clicking "Back to Search" on the setup or execute sections.

## LocalStorage Persistence

The API key generated in the "API Setup" section is stored in the browser's `localStorage`. When you refresh or revisit the page, the key will persist, and you can reuse it without needing to generate it again.

## Customization

You can customize the interface by modifying the HTML, CSS, and JavaScript files. For example:
- Modify the `style.css` to change the design and appearance of the interface.
- Edit the `script.js` to modify or extend the functionality.

## Contributing

Feel free to contribute to the project by opening issues, submitting pull requests, or suggesting improvements. 

To contribute:
1. Fork the repository
2. Clone your fork
3. Create a new branch
4. Make changes
5. Push the changes to your fork
6. Open a pull request

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For questions or feedback, please open an issue in the GitHub repository or contact the project maintainers.
