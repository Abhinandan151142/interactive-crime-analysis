# 🚔 Crime Analysis Dashboard

A professional, production-ready crime analysis and prediction platform built with React, TypeScript, and AI/ML visualization.

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss)

## 🚀 Live Demo  
🔗 (https://interactive-crime-analysis.netlify.app/)

## ✨ Features

### 📊 Real-Time Dashboard
- **Live Crime Feed**: Auto-updating crime incidents every 8-10 seconds
- **Interactive Map**: Leaflet.js powered map with crime markers and heatmap
- **4 Analytics Charts**: Monthly trends, crime types, hourly distribution, district comparison
- **Smart Alerts**: Auto-dismissing notifications with severity levels
- **ML Model Metrics**: Real-world AI performance indicators (88-91% accuracy)

### 🤖 AI Predictions
- District-based crime forecasting
- 7-day risk predictions with confidence scores
- Crime type probability breakdown
- Export predictions (CSV, PDF, JSON)
- Realistic ML accuracy metrics

### 📈 Reports & Analytics
- Advanced filtering (date range, district, crime type, severity)
- Sortable data tables with pagination
- Summary statistics cards
- Export to Excel, CSV, PDF

### ⚙️ Settings & Customization
- User profile management
- Dark/Light mode toggle (UI ready)
- 8+ notification preferences
- Data management tools

## 🎨 Design Highlights

- **Modern Dark Theme** with blue/purple gradients
- **Glassmorphism Effects** on all cards
- **Smooth Animations** - hover effects, transitions, counter animations
- **Fully Responsive** - mobile, tablet, desktop optimized
- **Professional UX** - loading states, skeleton screens, toast notifications

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI Framework |
| TypeScript | Type Safety |
| Vite | Build Tool |
| Tailwind CSS v4 | Styling |
| Leaflet.js | Maps |
| Chart.js | Data Visualization |
| React Router | Navigation |
| date-fns | Date Formatting |
| Lucide React | Icons |

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Sidebar.tsx
│   ├── Navbar.tsx
│   ├── StatsCard.tsx
│   ├── CrimeMap.tsx
│   ├── LiveCrimeFeed.tsx
│   ├── AlertsPanel.tsx
│   ├── ModelMetrics.tsx
│   └── charts/          # Chart components
├── pages/               # Page components
│   ├── Dashboard.tsx
│   ├── Predictions.tsx
│   ├── Reports.tsx
│   └── Settings.tsx
├── services/            # API and Socket.IO
├── types/              # TypeScript definitions
└── App.tsx             # Main app component
```

## 🎯 Key Features Explained

### 1. Realistic ML Metrics
Unlike typical demos with unrealistic 99% accuracy, this project uses industry-standard metrics:
- **Accuracy**: 88.5% - 91.5%
- **Precision**: 85% - 89%
- **Recall**: 82% - 87%
- **F1 Score**: 86% - 90%

### 2. Live Data Simulation
- Crimes auto-generate every 8-10 seconds
- Stats update in real-time
- Map markers animate on new crimes
- Alerts auto-dismiss after 10 seconds (for info type)

### 3. Professional UX
- Loading skeleton screens
- Hover animations on all cards
- Smooth 300ms transitions
- Color-coded severity (Critical→High→Medium→Low)
- Relative timestamps ("2 minutes ago")

## 📊 Screenshots

### Dashboard
- Real-time crime monitoring
- Interactive maps and charts
- Live feed with auto-updates

### Predictions
- AI-powered forecasting
- 7-day risk predictions
- Crime type breakdown

### Reports
- Advanced data filtering
- Export capabilities
- Statistical summaries

### Settings
- Profile management
- Notification preferences
- Theme customization

## 🔧 Configuration

### Environment Variables
Create a `.env` file:
```env
VITE_API_URL=http://localhost:3000
VITE_SOCKET_URL=http://localhost:3000
```

### Customization
- **Colors**: Edit Tailwind theme in `src/index.css`
- **Map Center**: Change coordinates in `CrimeMap.tsx`
- **Update Interval**: Modify timer in `Dashboard.tsx`

## 📈 Performance

- **Bundle Size**: 727 KB
- **Gzipped**: 218 KB
- **Build Time**: ~6 seconds
- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices)

## 🤝 Contributing

This is a portfolio/demo project, but suggestions are welcome!

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

MIT License - feel free to use for your own projects!

## 🙏 Acknowledgments

- Leaflet.js for amazing map library
- Chart.js for beautiful charts
- Tailwind CSS for rapid styling
- React team for the awesome framework

## 📞 Contact

For questions or feedback:
- Email: abhinandanguptaatlas@gmail.com

---

⭐ **Star this repo if you find it helpful!**

Built with ❤️ for public safety and community well-being.
