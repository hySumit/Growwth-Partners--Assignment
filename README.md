# Growwth Buddy Assistant

Growwth Buddy is an AI-powered financial assistant application that helps users track and manage their financial data. This application leverages the OpenAI API to provide responses to user queries based on the financial data provided.

## Features

- **AI Financial Assistant**: Get financial insights and advice based on data provided in a file or entered manually.
- **File Upload**: Upload `.xls`, `.xlsx`, and `.csv` files for automatic parsing and processing of financial data.
- **Chat Interface**: Users can interact in real-time with the assistant through a chat interface.



---

## Technologies Used

- **Frontend**: React (with Vite) and Tailwind CSS for UI styling and responsiveness.
- **Backend**: Express.js for handling requests and responses.
- **External APIs**: OpenAI API for generating responses based on user inputs and data.
- **File Uploading**: Multer for handling file uploads and `xlsx` for parsing spreadsheet files.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your local machine.
- An OpenAI API Key (stored in a `.env` file as `OPENAI_API_KEY`).

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-repo/growwth-buddy
    ```

2. Navigate to the project directory:

    ```bash
    cd growwth-buddy
    ```

3. Install dependencies for both frontend and backend:

    ```bash
    npm install
    ```

4. Set up environment variables:

    - Create a `.env` file in the root folder.
    - Add your OpenAI API key:

      ```plaintext
      OPENAI_API_KEY=your_openai_api_key_here
      ```

5. Start the development servers:

    - **Frontend** (Vite):

      ```bash
      npm run dev
      ```

    - **Backend** (Express):

      ```bash
      npm start 
      ```


---

## How It Works

1. **Chat Interface**: Users can type questions in the chat interface, which are sent to the backend.
2. **File Upload**: Users can upload financial files (.xls, .xlsx, .csv). These files are parsed into JSON format and stored for reference.
3. **AI Processing**: The application sends user queries and financial data to the OpenAI API, where it generates responses.
4. **Responses Displayed**: The assistant’s response is displayed in the chat window.

---

## API Endpoints

### `/uploads` (POST)
Uploads and processes a financial file, converting it into JSON format.

- **Body**: `multipart/form-data` containing the file.
- **Response**: JSON with message and parsed data.

### `/chat` (POST)
Sends a user’s message to the OpenAI API along with financial data for a personalized response.

- **Body**: JSON containing the user’s message.
- **Response**: JSON with assistant’s response.

---

## Frontend Components

### `App.jsx`
Renders the main `ChatWindow` component.

### `ChatWindow.jsx`
Handles the main layout, including the sidebar, header, chat messages, and input box.

### `ChatInputBox.jsx`
Handles user input and triggers file upload or message sending. Displays loading status while awaiting responses.

### `Chat.jsx`
Displays conversation messages from both the user and the assistant.

### `Sidebar.jsx`
--

### `ChatHeading.jsx`
Displays a welcome message and brief description of the assistant.

---

## Backend Logic

### `server.js`
- Sets up the Express server, CORS, and JSON parsing.
- Defines file upload and chat handling routes.

### `controllers.js`
- Contains `handleChat` function to interact with the OpenAI API.
- Constructs a prompt with uploaded financial data and user input for accurate responses.

---

## Environment Variables

- **`OPENAI_API_KEY`**: Your OpenAI API key for accessing GPT-3.5-turbo.
- **`PORT`** : Your PORT for running the backend, in my case it is 5500

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your enhancements.

---


## Acknowledgments

- [OpenAI](https://openai.com) for their powerful API.
- [Vite](https://vitejs.dev/) and [Express.js](https://expressjs.com/) for providing a smooth development experience.

---

## Contact

For further questions or support, reach out via [sumitbth67@gmail.com](mailto:sumitbth67@gmail.com).



