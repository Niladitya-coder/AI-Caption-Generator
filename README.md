# AI Caption Generator

An AI-powered web application built with React that generates creative social media captions based on user-provided keywords or uploaded images. The app leverages Google Gemini API for generating captions.

## 🌟 Features
- Generate captions based on user-provided keywords.
- Upload an image to generate context-based captions.
- Responsive and stylish UI with animations.
- Easy-to-use interface with real-time caption generation.

## 🌐 Live Demo
[Click here to view the project on Vercel 🚀](https://ai-caption-generator-roan.vercel.app/)


## 🛠️ Technologies Used
- **React** - Frontend framework
- **Tailwind CSS** - Styling
- **Google Gemini API** - AI-generated captions
- **Vite** - Fast development environment

## 📦 Installation
1. **Clone the repository**
    ```bash
    git clone https://github.com/your-username/AI-Caption-Generator.git
    cd AI-Caption-Generator
    ```
2. **Install dependencies**
    ```bash
    npm install
    ```
3. **Set up environment variables**
    - Create a `.env` file in the root directory.
    - Add your Google Gemini API key:
      ```
      VITE_GEMINI_API_KEY=your_actual_google_api_key
      ```
4. **Start the development server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 📝 Usage
1. **Enter keywords** or **upload an image**.
2. Click the **"Generate Caption"** button.
3. View the AI-generated caption instantly.

## 📸 Screenshots
![Screenshot](https://user-images.githubusercontent.com/screenshot.png) <!-- Add screenshots -->

## 🐛 Known Issues
- May take longer to generate captions for high-resolution images.
- API key restrictions may limit usage.

## 🚀 Deployment
Easily deploy on [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/):
```bash
npm install -g vercel
vercel
