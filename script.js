// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Projects data — edit or replace these with your real projects
const projects = [
    {
        title: "Titanic Survival Prediction",
        description: "Classification model predicting passenger survival using EDA, feature engineering, and model comparison between logistic regression and random forest.",
        tags: ["Python", "Pandas", "Scikit-learn", "Classification"]
    },
    {
        title: "House Price Regression",
        description: "Regression analysis on housing data with feature engineering, regularization techniques, and SHAP-based feature importance.",
        tags: ["Python", "Regression", "Feature Engineering", "SHAP"]
    },
    {
        title: "Movie Recommendation System",
        description: "Content-based and collaborative filtering recommendation engine built on movie metadata and user ratings.",
        tags: ["Python", "NLP", "Collaborative Filtering", "Cosine Similarity"]
    },
    {
        title: "Sentiment Analysis Dashboard",
        description: "NLP pipeline analyzing Twitter/IMDB reviews for sentiment using TF-IDF and transformer-based models.",
        tags: ["Python", "NLP", "TF-IDF", "Transformers"]
    },
    {
        title: "COVID-19 Data Dashboard",
        description: "Time-series analysis and visualization of COVID-19 trends with interactive charts.",
        tags: ["Python", "Time-Series", "Matplotlib", "Plotly"]
    },
    {
        title: "Credit Card Fraud Detection",
        description: "Fraud detection model handling imbalanced data with focus on precision-recall and anomaly detection.",
        tags: ["Python", "Imbalanced Data", "Anomaly Detection", "Precision-Recall"]
    },
    {
        title: "Healthcare Data Analysis",
        description: "Exploratory analysis of healthcare patient records to identify trends, risk factors, and insights using data visualization and statistical methods.",
        tags: ["Python", "Pandas", "EDA", "Healthcare", "Data Visualization"]
    },
    {
        title: "Game Development Project",
        description: "A small interactive game built with JavaScript featuring game loop, input handling, and collision detection.",
        tags: ["JavaScript", "HTML5 Canvas", "Game Development"]
    },
    {
        title: "Small Robo Project",
        description: "A small robotics project involving sensor integration, motor control, and basic autonomous movement logic.",
        tags: ["Robotics", "Arduino", "Embedded C", "Sensors"]
    }
];

const projectList = document.getElementById('project-list');

projects.forEach(proj => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
        <h3>${proj.title}</h3>
        <p>${proj.description}</p>
        <div class="project-tags">
            ${proj.tags.map(tag => `<span>${tag}</span>`).join('')}
        </div>
    `;
    projectList.appendChild(card);
});

// Simple form-spam / email link guard (optional, since mailto used)
// Smooth scroll already handled by CSS
