# AI CSV Importer

An AI-powered CSV import application that validates, cleans, and imports CSV data with detailed previews, validation reports, and import statistics.

## 🚀 Features

* 📁 Drag & Drop CSV Upload
* 👀 CSV Preview Before Import
* 🤖 AI-Powered Data Validation
* ✅ Automatic Data Cleaning
* 📊 Import Statistics Dashboard
* ⚡ Batch Processing
* 🔄 Progress Tracking
* 📱 Responsive UI
* 🐳 Docker Support
* 🌐 REST API

---

## 🛠️ Tech Stack

### Frontend

* Next.js 15
* React
* TypeScript
* Tailwind CSS
* shadcn/ui
* TanStack Query
* PapaParse
* Axios
* Lucide React

### Backend

* Node.js
* Express.js
* TypeScript
* Google Gemini API
* Multer
* CSV Parser
* Docker

---

## 📂 Project Structure

```text
Assignment/
├── backend/
│   ├── src/
│   ├── package.json
│   └── Dockerfile
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── services/
│   ├── package.json
│   └── Dockerfile
│
└── docker-compose.yml
```

---

## ⚙️ Environment Variables

### Backend (`backend/.env`)

```env
PORT=5000
GEMINI_API_KEY=your_gemini_api_key
```

### Frontend (`frontend/.env`)

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

## 📦 Installation

Clone the repository

```bash
git clone https://github.com/varu63/Assignment.git
cd Assignment
```

### Backend

```bash
cd backend
npm install
npm run dev
```

Runs on:

```
http://localhost:5000
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on:

```
http://localhost:3000
```

---

## 🐳 Running with Docker

```bash
docker-compose up --build
```

---

## 📡 API Endpoints

### Health Check

```http
GET /health
```

### Upload CSV

```http
POST /upload
```

### Import CSV

```http
POST /import
```

---

## 📸 Screenshots

Add screenshots here.

```
screenshots/
├── home.png
├── upload.png
├── preview.png
└── result.png
```

Example:

```md
![Home](screenshots/home.png)

![Preview](screenshots/preview.png)

![Results](screenshots/result.png)
```

---

## 🎯 Workflow

1. Upload a CSV file.
2. Preview the parsed data.
3. AI validates and cleans the records.
4. Review validation results.
5. Import the valid records.
6. View import statistics and summary.

---

## 📈 Future Improvements

* Authentication
* Import History
* Export Reports
* Dark Mode
* Multi-file Upload
* WebSocket Progress Updates
* Background Jobs
* Database Integration
* User Dashboard

---

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/new-feature
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push to your branch.

```bash
git push origin feature/new-feature
```

5. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Varun Tomar**

* GitHub: https://github.com/varu63
* LinkedIn: https://www.linkedin.com/in/varuntomar/

---

⭐ If you found this project useful, consider giving it a star.

## 🔗 Live Demo

Frontend: https://assignment-iota-snowy.vercel.app

Backend API: https://assignment-ephn.onrender.com
