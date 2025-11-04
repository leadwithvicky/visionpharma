// types/curriculum.ts

import { Module } from '@/types/curriculum';

// Modified course data
export const courseAPIData: {
  key: string;
  title: string;
  description: string;
  modules: Module[];
}[] = [
  {
    key: 'artificial-intelligence-c1',
    title: 'Fundamentals of AI & Machine Learning',
    description:
      'Master the fundamentals of AI and Machine Learning with hands-on projects and real-world applications. Perfect for beginners and intermediate learners.',
    modules: [
      {
        title: 'Fundamentals of AI & Machine Learning',
        months: [
          {
            title: 'Month 1: Fundamentals of AI & Machine Learning',
            weeks: [
              {
                title: 'Introduction to AI & Machine Learning',
                topics: [
                  'What is AI? Types of AI (Narrow, General, Super AI)',
                  'Supervised vs Unsupervised vs Reinforcement Learning',
                  'AI applications (Computer Vision, NLP, Robotics)',
                ],
                handson: [
                  'Set up Python, Jupyter Notebook, install libraries (NumPy, Pandas, Matplotlib, Scikit-Learn, TensorFlow/PyTorch)',
                ],
              },
              {
                title: 'Python, Data Science, & Preprocessing',
                topics: [
                  'NumPy, Pandas (Data Manipulation)',
                  'Data visualization (Matplotlib, Seaborn)',
                  'Handling missing data, feature scaling, one-hot encoding',
                ],
                handson: ['Load and explore datasets (Iris, Titanic, MNIST)'],
              },
              {
                title: 'Supervised Learning (Regression & Classification)',
                topics: [
                  'Linear Regression, Logistic Regression',
                  'Decision Trees & Random Forest',
                  'Model evaluation (MSE, Accuracy, Precision, Recall, F1-score)',
                  'Overfitting & Regularization',
                ],
                handson: [
                  'Train and evaluate Regression & Classification models',
                ],
              },
              {
                title: 'Unsupervised Learning & Feature Engineering',
                topics: [
                  'Clustering (K-Means, Hierarchical, DBSCAN)',
                  'Dimensionality Reduction (PCA, t-SNE)',
                  'Feature Selection & Engineering Techniques',
                ],
                handson: ['Apply clustering and feature engineering'],
              },
            ],
          },
          {
            title: 'Month 2: Deep Learning & AI Applications',
            weeks: [
              {
                title: 'Neural Networks & Deep Learning Basics',
                topics: [
                  'Perceptron, Activation Functions',
                  'Feedforward Neural Networks (FNN)',
                  'Backpropagation & Gradient Descent',
                ],
                handson: [
                  'Implement a simple neural network using TensorFlow/PyTorch',
                ],
              },
              {
                title:
                  'Convolutional Neural Networks (CNNs) & Image Processing',
                topics: [
                  'CNN Layers (Convolution, Pooling, Fully Connected)',
                  'Image Classification (MNIST, CIFAR-10)',
                  'Transfer Learning & Pre-trained Models',
                ],
                handson: ['Train a CNN for image recognition'],
              },
              {
                title: 'Natural Language Processing (NLP) & Transformers',
                topics: [
                  'Text Preprocessing (Tokenization, Stopword Removal, Stemming/Lemmatization)',
                  'Word Embeddings (Word2Vec, GloVe)',
                  'Introduction to Transformers (BERT, GPT)',
                ],
                handson: ['Sentiment Analysis using Hugging Face Transformers'],
              },
              {
                title: 'AI Deployment & Future Learning',
                topics: [
                  'AI Ethics & Bias in AI',
                  'Deploy models using Flask / FastAPI / Streamlit',
                  'Future Learning Paths: Reinforcement Learning, GANs, AutoML',
                  'Overview of MLOps & Model Deployment',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'machine-learning-c2',
    title: 'Machine Learning Fundamentals',
    description:
      'Master the fundamentals of Machine Learning with hands-on projects and real-world applications. Perfect for beginners and intermediate learners.',
    modules: [
      {
        title: 'Machine Learning Fundamentals',
        months: [
          {
            title: 'Month 1: Machine Learning Fundamentals',
            weeks: [
              {
                title: 'Introduction to Machine Learning',
                topics: [
                  'What is Machine Learning?',
                  'Types of ML: Supervised, Unsupervised, Reinforcement Learning',
                  'ML Workflow: Data Collection, Preprocessing, Model Training, Evaluation',
                ],
                handson: [
                  'Set up Python, Jupyter Notebook, install ML libraries (NumPy, Pandas, Matplotlib, Scikit-Learn)',
                ],
              },
              {
                title: 'Data Preprocessing & Feature Engineering',
                topics: [
                  'Handling missing data (mean, median, imputation)',
                  'Feature Scaling (Normalization vs Standardization)',
                  'Encoding categorical data (One-Hot Encoding, Label Encoding)',
                  'Feature Selection Techniques',
                ],
                handson: ['Apply preprocessing techniques using Scikit-Learn'],
              },
              {
                title: 'Supervised Learning – Regression',
                topics: [
                  'Linear Regression, Polynomial Regression',
                  'Gradient Descent & Cost Function',
                  'Model evaluation (MSE, RMSE, R² Score)',
                  'Overfitting & Regularization (L1, L2)',
                ],
                handson: ['Train and evaluate regression models'],
              },
              {
                title: 'Supervised Learning – Classification',
                topics: [
                  'Logistic Regression, Decision Trees, Random Forest',
                  'Support Vector Machines (SVM)',
                  'Model evaluation (Accuracy, Precision, Recall, F1-score, Confusion Matrix)',
                  'ROC Curve & AUC',
                ],
                handson: ['Train and evaluate classification models'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced ML & Model Optimization',
            weeks: [
              {
                title:
                  'Unsupervised Learning – Clustering & Dimensionality Reduction',
                topics: [
                  'K-Means Clustering, Hierarchical Clustering, DBSCAN',
                  'PCA, t-SNE for Dimensionality Reduction',
                ],
                handson: ['Apply clustering and PCA techniques'],
              },
              {
                title: 'Ensemble Learning & Model Optimization',
                topics: [
                  'Bagging (Random Forest), Boosting (AdaBoost, Gradient Boosting, XGBoost)',
                  'Hyperparameter Tuning (Grid Search, Random Search)',
                  'Cross-Validation Techniques',
                ],
                handson: ['Improve model performance using ensemble methods'],
              },
              {
                title: 'Neural Networks & Deep Learning Basics',
                topics: [
                  'Introduction to Perceptron & Artificial Neural Networks',
                  'Activation Functions (ReLU, Sigmoid, Softmax)',
                  'Forward & Backpropagation',
                ],
                handson: [
                  'Implement a simple neural network using TensorFlow/PyTorch',
                ],
              },
              {
                title: 'Model Deployment & MLOps Overview',
                topics: [
                  'Saving & Loading Models (Pickle, Joblib)',
                  'Introduction to Model Deployment (Flask, FastAPI)',
                  'Basics of MLOps (CI/CD, Model Monitoring)',
                  'Future Learning Paths: Reinforcement Learning, Generative AI',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'data-science-and-analytics-c3',
    title: 'Foundations of Data Science & Analytics',
    description:
      'Master the fundamentals of Data Science and Analytics with hands-on projects and real-world applications. Perfect for beginners and intermediate learners.',
    modules: [
      {
        title: 'Foundations of Data Science & Analytics',
        months: [
          {
            title: 'Month 1: Foundations of Data Science & Analytics',
            weeks: [
              {
                title: 'Introduction to Data Science & Analytics',
                topics: [
                  'What is Data Science? Key Concepts',
                  'Difference between Data Science, Data Analytics, and Machine Learning',
                  'Real-world Applications (Finance, Healthcare, Marketing, etc.)',
                ],
                handson: [
                  'Set up Python, Jupyter Notebook, install libraries (NumPy, Pandas, Matplotlib, Seaborn)',
                ],
              },
              {
                title: 'Data Wrangling & Preprocessing',
                topics: [
                  'Data Collection (CSV, APIs, Databases)',
                  'Handling Missing Data (Imputation, Dropping)',
                  'Feature Engineering & Scaling',
                  'Encoding Categorical Variables (One-Hot, Label Encoding)',
                ],
                handson: ['Data preprocessing using Pandas & Scikit-learn'],
              },
              {
                title: 'Exploratory Data Analysis (EDA)',
                topics: [
                  'Summary Statistics (Mean, Median, Mode, Standard Deviation)',
                  'Data Visualization (Histograms, Boxplots, Scatterplots)',
                  'Correlation Analysis',
                  'Outlier Detection & Treatment',
                ],
                handson: [
                  'Perform EDA on a real-world dataset using Seaborn & Matplotlib',
                ],
              },
              {
                title: 'Statistics & Probability for Data Science',
                topics: [
                  'Probability Distributions (Normal, Binomial, Poisson)',
                  'Hypothesis Testing (T-tests, Chi-Square, ANOVA)',
                  'Confidence Intervals & P-Value',
                  'A/B Testing Basics',
                ],
                handson: ['Apply statistical tests using SciPy'],
              },
            ],
          },
          {
            title: 'Month 2: Machine Learning & Business Analytics',
            weeks: [
              {
                title: 'Introduction to Machine Learning',
                topics: [
                  'Types of Machine Learning: Supervised, Unsupervised',
                  'Linear Regression & Logistic Regression',
                  'Model Evaluation Metrics (MSE, R², Accuracy, Precision, Recall)',
                ],
                handson: ['Implement basic ML models in Scikit-learn'],
              },
              {
                title: 'Business Analytics & Decision Making',
                topics: [
                  'Key Business Metrics (Revenue, Retention, Churn)',
                  'Data-Driven Decision Making',
                  'Time Series Analysis Basics',
                ],
                handson: ['Analyze business data with Pandas'],
              },
              {
                title: 'Advanced Analytics Techniques',
                topics: [
                  'Clustering (K-Means, Hierarchical)',
                  'Dimensionality Reduction (PCA, t-SNE)',
                  'Sentiment Analysis Basics',
                ],
                handson: ['Implement clustering & sentiment analysis'],
              },
              {
                title: 'Data Science Deployment & Future Learning',
                topics: [
                  'Introduction to Data Engineering (ETL, Pipelines)',
                  'Deploying Data Science Models (Flask, Streamlit)',
                  'MLOps & Model Monitoring',
                  'Future Learning Paths: Deep Learning, Big Data, AI Ethics',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'full-stack-web-development-c4',
    title: 'Frontend & Backend Development',
    description:
      'Master the fundamentals of Full Stack Development with hands-on projects and real-world applications. Perfect for beginners and intermediate learners.',
    modules: [
      {
        title: 'Frontend Development (HTML, CSS, JavaScript, React)',
        months: [
          {
            title:
              'Month 1: Frontend Development (HTML, CSS, JavaScript, React)',
            weeks: [
              {
                title: 'Introduction to Web Development & HTML/CSS',
                topics: [
                  'What is Full Stack Development?',
                  'Understanding Frontend vs Backend vs Full Stack',
                  'HTML Basics (Tags, Forms, Tables, Semantic HTML)',
                  'CSS Fundamentals (Selectors, Box Model, Flexbox, Grid)',
                ],
                handson: ['Build simple web pages with HTML & CSS'],
              },
              {
                title: 'JavaScript Basics',
                topics: [
                  'JavaScript Fundamentals (Variables, Data Types, Loops, Functions)',
                  'DOM Manipulation (Selecting Elements, Event Listeners)',
                  'ES6+ Features (Arrow Functions, Spread, Destructuring)',
                ],
                handson: [
                  'Build interactive elements (like dropdowns, modals)',
                ],
              },
              {
                title: 'Advanced JavaScript & Introduction to React',
                topics: [
                  'Asynchronous JavaScript (Callbacks, Promises, Async/Await)',
                  'Fetch API & RESTful APIs',
                  'Introduction to React (Components, JSX, Props)',
                ],
                handson: ['Create simple React components'],
              },
              {
                title: 'React Fundamentals & State Management',
                topics: [
                  'React Hooks (useState, useEffect)',
                  'Handling Forms in React',
                  'State Management with Context API',
                ],
                handson: ['Build a small interactive React app'],
              },
            ],
          },
          {
            title: 'Month 2: Backend Development & Deployment',
            weeks: [
              {
                title: 'Introduction to Backend (Node.js & Express.js)',
                topics: [
                  'What is a Backend? How Web Servers Work',
                  'Introduction to Node.js & NPM',
                  'Setting up an Express.js Server',
                ],
                handson: ['Create basic routes and middleware'],
              },
              {
                title: 'Databases & Authentication',
                topics: [
                  'Introduction to Databases (SQL vs NoSQL)',
                  'CRUD Operations with MongoDB',
                  'Authentication Basics (JWT, Sessions)',
                ],
                handson: ['Connect a Node.js backend to a database'],
              },
              {
                title: 'RESTful APIs & Advanced Backend Concepts',
                topics: [
                  'Building RESTful APIs with Express.js',
                  'Error Handling & Middleware',
                  'Deployment Basics (Hosting on Vercel, Netlify)',
                ],
                handson: ['Test APIs using Postman'],
              },
              {
                title: 'Full Stack Integration & Deployment',
                topics: [
                  'Connecting React Frontend to Node.js Backend',
                  'Environment Variables & Security Best Practices',
                  'Introduction to DevOps & CI/CD Basics',
                  'Future Learning Paths (Next.js, GraphQL, Docker)',
                ],
                handson: ['Deploy a basic full-stack application'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'qa-testing-and-automation-c5',
    title: 'Quality Assurance & Software Testing',
    description:
      'Master the fundamentals of QA, manual testing, and test automation with hands-on projects. Ideal for beginners and professionals looking to upskill.',
    modules: [
      {
        title: 'Fundamentals of QA & Manual Testing',
        months: [
          {
            title: 'Month 1: Fundamentals of QA & Manual Testing',
            weeks: [
              {
                title: 'Introduction to QA & Software Testing',
                topics: [
                  'What is Software Testing? Importance of QA',
                  'SDLC vs STLC (Software Testing Life Cycle)',
                  'Types of Testing (Functional, Non-Functional, Regression, Smoke, Sanity)',
                ],
                handson: ['Explore test cases in a real-world application'],
              },
              {
                title: 'Test Case Design & Bug Tracking',
                topics: [
                  'Test Scenarios vs Test Cases',
                  'Writing Effective Test Cases',
                  'Defect Life Cycle & Bug Reporting',
                ],
                handson: ['Write test cases and report defects in JIRA'],
              },
              {
                title: 'Agile Testing & Test Management',
                topics: [
                  'Agile & Scrum in Testing',
                  'Writing Test Plans & Test Strategies',
                  'Test Management Tools (JIRA, TestRail)',
                ],
                handson: ['Create test scenarios in an Agile workflow'],
              },
              {
                title: 'API Testing with Postman',
                topics: [
                  'Introduction to APIs & HTTP Methods',
                  'Testing RESTful APIs using Postman',
                  'Validating API Responses & Automating Tests',
                ],
                handson: ['Perform API tests using Postman'],
              },
            ],
          },
          {
            title: 'Month 2: Test Automation & CI/CD',
            weeks: [
              {
                title: 'Introduction to Automation Testing (Selenium & Python)',
                topics: [
                  'Why Automation Testing?',
                  'Introduction to Selenium WebDriver',
                  'Setting up Selenium with Python',
                ],
                handson: ['Write simple Selenium test scripts'],
              },
              {
                title: 'Advanced Selenium & Web Automation',
                topics: [
                  'Locators (XPath, CSS Selectors)',
                  'Handling Alerts, Frames, Windows',
                  'Implicit & Explicit Waits',
                ],
                handson: ['Automate a web login form'],
              },
              {
                title: 'CI/CD & Test Automation Frameworks',
                topics: [
                  'Introduction to Jenkins & Continuous Integration',
                  'TestNG/PyTest Framework for Automated Testing',
                  'Generating Test Reports',
                ],
                handson: ['Run automated tests in Jenkins'],
              },
              {
                title: 'Performance Testing & Future Learning',
                topics: [
                  'Introduction to Performance Testing',
                  'JMeter Basics & Load Testing',
                  'Security Testing Overview',
                  'Future Learning Paths: AI in Testing, API Automation, DevOps',
                ],
                handson: ['Run a basic performance test in JMeter'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'power-bi-for-data-visualization-c6',
    title: 'Power BI Fundamentals & Advanced Analytics',
    description:
      'Master the fundamentals of Power BI, data transformation, visualization, and advanced analytics with hands-on projects. Ideal for beginners and professionals looking to upskill.',
    modules: [
      {
        title: 'Power BI Fundamentals & Data Transformation',
        months: [
          {
            title: 'Month 1: Power BI Fundamentals & Data Transformation',
            weeks: [
              {
                title: 'Introduction to Power BI',
                topics: [
                  'What is Power BI? Key Features & Architecture',
                  'Power BI Components (Power Query, Power Pivot, Power View, Power BI Service)',
                  'Installing & Setting Up Power BI Desktop',
                ],
                handson: ['Connect Power BI to Excel and CSV data'],
              },
              {
                title: 'Data Import & Cleaning in Power Query',
                topics: [
                  'Connecting to Various Data Sources (Excel, SQL, Web, APIs)',
                  'Data Cleaning Techniques (Removing Duplicates, Handling Missing Data)',
                  'Transforming Data (Splitting, Merging, Changing Data Types)',
                ],
                handson: ['Load and clean data using Power Query'],
              },
              {
                title: 'Data Modeling & DAX Basics',
                topics: [
                  'Introduction to Data Modeling (Relationships, Star Schema)',
                  'Understanding Measures & Calculated Columns',
                  'Introduction to DAX (SUM, AVERAGE, COUNT, IF, RELATED)',
                ],
                handson: ['Create a simple data model with relationships'],
              },
              {
                title: 'Creating Basic Visualizations',
                topics: [
                  'Bar Charts, Line Charts, Pie Charts, Tables & Matrix',
                  'Filtering & Slicing Data (Slicers, Filters, Drill-through)',
                  'Formatting & Customizing Visuals',
                ],
                handson: ['Create interactive charts and use slicers'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Power BI & Dashboard Building',
            weeks: [
              {
                title: 'Advanced DAX & Calculations',
                topics: [
                  'Time Intelligence Functions (YTD, MTD, QTD, SAMEPERIODLASTYEAR)',
                  'Conditional Measures & Advanced Calculated Columns',
                  'Using Variables in DAX',
                ],
                handson: ['Implement advanced DAX calculations'],
              },
              {
                title: 'Advanced Visualizations & Custom Charts',
                topics: [
                  'Custom Visuals (KPI, Waterfall, TreeMap, Heatmaps)',
                  'Tooltips & Drillthrough Pages',
                  'Using Conditional Formatting',
                ],
                handson: ['Build a report using advanced visualizations'],
              },
              {
                title: 'Power BI Service & Data Refresh',
                topics: [
                  'Publishing Reports to Power BI Service',
                  'Creating Dashboards & Sharing Reports',
                  'Scheduled Data Refresh & Gateway Setup',
                ],
                handson: ['Publish and share reports in Power BI Service'],
              },
              {
                title: 'Power BI Best Practices & Future Learning',
                topics: [
                  'Performance Optimization in Power BI',
                  'Security & Row-Level Security (RLS)',
                  'Introduction to Power Automate & Power Apps',
                  'Future Learning: AI Visuals, Paginated Reports, Embedded Analytics',
                ],
                handson: ['Apply best practices to optimize reports'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'devops-c7',
    title: 'DevOps Fundamentals & Automation',
    description:
      'Learn the fundamentals of DevOps, automation, CI/CD, containerization, and cloud deployment with hands-on projects. Ideal for IT professionals and developers.',
    modules: [
      {
        title: 'DevOps Fundamentals & Automation',
        months: [
          {
            title: 'Month 1: DevOps Fundamentals & Automation',
            weeks: [
              {
                title: 'Introduction to DevOps & Version Control',
                topics: [
                  'What is DevOps? DevOps Lifecycle & Benefits',
                  'Key DevOps Tools & Technologies Overview',
                  'Understanding Git & GitHub',
                ],
                handson: [
                  'Install Git, configure repositories, and use basic Git commands',
                ],
              },
              {
                title: 'Linux Basics & Shell Scripting for DevOps',
                topics: [
                  'Linux Commands & File System',
                  'User Management & Permissions',
                  'Shell Scripting (Loops, Variables, Functions)',
                ],
                handson: ['Write basic automation scripts'],
              },
              {
                title: 'CI/CD with Jenkins',
                topics: [
                  'Understanding CI/CD Pipelines',
                  'Installing & Configuring Jenkins',
                  'Writing Basic Pipelines (Freestyle & Declarative Pipelines)',
                ],
                handson: ['Create a simple CI/CD pipeline in Jenkins'],
              },
              {
                title: 'Configuration Management (Ansible)',
                topics: [
                  'Introduction to Configuration Management & Infrastructure as Code (IaC)',
                  'Ansible Playbooks & Roles',
                  'Automating Server Configuration with Ansible',
                ],
                handson: ['Write Ansible playbooks for server setup'],
              },
            ],
          },
          {
            title: 'Month 2: Cloud, Containers & Monitoring',
            weeks: [
              {
                title: 'Docker & Containerization',
                topics: [
                  'What is Docker? Why use Containers?',
                  'Docker Installation & Commands',
                  'Creating & Managing Docker Containers',
                ],
                handson: ['Build and run a Docker container'],
              },
              {
                title: 'Kubernetes & Container Orchestration',
                topics: [
                  'Understanding Kubernetes Architecture',
                  'Deploying Applications with Kubectl',
                  'Kubernetes Services & Networking',
                ],
                handson: ['Deploy a pod and service in Kubernetes'],
              },
              {
                title: 'Cloud & Infrastructure as Code (Terraform)',
                topics: [
                  'Introduction to AWS/GCP/Azure Basics',
                  'Infrastructure as Code (Terraform Basics)',
                  'Writing Terraform Scripts for Cloud Deployment',
                ],
                handson: ['Deploy cloud infrastructure using Terraform'],
              },
              {
                title: 'Monitoring, Logging & DevSecOps',
                topics: [
                  'Introduction to Monitoring (Prometheus, Grafana)',
                  'Logging with ELK Stack (Elasticsearch, Logstash, Kibana)',
                  'Security in DevOps (SAST, DAST, DevSecOps Principles)',
                ],
                handson: ['Set up basic monitoring using Prometheus'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'cloud-computing-c8',
    title: 'DevOps Fundamentals & Automation',
    description:
      'Learn the fundamentals of DevOps, automation, CI/CD, containerization, and cloud deployment with hands-on projects. Ideal for IT professionals and developers.',
    modules: [
      {
        title: 'DevOps Fundamentals & Automation',
        months: [
          {
            title: 'Month 1: DevOps Fundamentals & Automation',
            weeks: [
              {
                title: 'Introduction to DevOps & Version Control',
                topics: [
                  'What is DevOps? DevOps Lifecycle & Benefits',
                  'Key DevOps Tools & Technologies Overview',
                  'Understanding Git & GitHub',
                ],
                handson: [
                  'Install Git, configure repositories, and use basic Git commands',
                ],
              },
              {
                title: 'Linux Basics & Shell Scripting for DevOps',
                topics: [
                  'Linux Commands & File System',
                  'User Management & Permissions',
                  'Shell Scripting (Loops, Variables, Functions)',
                ],
                handson: ['Write basic automation scripts'],
              },
              {
                title: 'CI/CD with Jenkins',
                topics: [
                  'Understanding CI/CD Pipelines',
                  'Installing & Configuring Jenkins',
                  'Writing Basic Pipelines (Freestyle & Declarative Pipelines)',
                ],
                handson: ['Create a simple CI/CD pipeline in Jenkins'],
              },
              {
                title: 'Configuration Management (Ansible)',
                topics: [
                  'Introduction to Configuration Management & Infrastructure as Code (IaC)',
                  'Ansible Playbooks & Roles',
                  'Automating Server Configuration with Ansible',
                ],
                handson: ['Write Ansible playbooks for server setup'],
              },
            ],
          },
          {
            title: 'Month 2: Cloud, Containers & Monitoring',
            weeks: [
              {
                title: 'Docker & Containerization',
                topics: [
                  'What is Docker? Why use Containers?',
                  'Docker Installation & Commands',
                  'Creating & Managing Docker Containers',
                ],
                handson: ['Build and run a Docker container'],
              },
              {
                title: 'Kubernetes & Container Orchestration',
                topics: [
                  'Understanding Kubernetes Architecture',
                  'Deploying Applications with Kubectl',
                  'Kubernetes Services & Networking',
                ],
                handson: ['Deploy a pod and service in Kubernetes'],
              },
              {
                title: 'Cloud & Infrastructure as Code (Terraform)',
                topics: [
                  'Introduction to AWS/GCP/Azure Basics',
                  'Infrastructure as Code (Terraform Basics)',
                  'Writing Terraform Scripts for Cloud Deployment',
                ],
                handson: ['Deploy cloud infrastructure using Terraform'],
              },
              {
                title: 'Monitoring, Logging & DevSecOps',
                topics: [
                  'Introduction to Monitoring (Prometheus, Grafana)',
                  'Logging with ELK Stack (Elasticsearch, Logstash, Kibana)',
                  'Security in DevOps (SAST, DAST, DevSecOps Principles)',
                ],
                handson: ['Set up basic monitoring using Prometheus'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'cybersecurity-and-ethical-hacking-c9',
    title: 'Cybersecurity Fundamentals & Ethical Hacking Basics',
    description:
      'Explore cybersecurity principles, ethical hacking techniques, network security, and penetration testing with hands-on exercises.',
    modules: [
      {
        title: 'Cybersecurity Fundamentals & Ethical Hacking Basics',
        months: [
          {
            title:
              'Month 1: Cybersecurity Fundamentals & Ethical Hacking Basics',
            weeks: [
              {
                title: 'Introduction to Cybersecurity & Ethical Hacking',
                topics: [
                  'What is Cybersecurity? Key Concepts & CIA Triad',
                  'Cyber Threats & Attack Types (Phishing, Ransomware, DDoS)',
                  'Ethical Hacking vs Black Hat Hacking',
                ],
                handson: ['Set up a virtual lab using VirtualBox/VMware'],
              },
              {
                title: 'Networking & Security Fundamentals',
                topics: [
                  'OSI & TCP/IP Models',
                  'Network Protocols (HTTP, HTTPS, DNS, FTP, SSH)',
                  'Firewalls, IDS & IPS',
                ],
                handson: ['Use Wireshark to capture network traffic'],
              },
              {
                title: 'Linux & Windows Security Basics',
                topics: [
                  'Linux Command Line for Security Professionals',
                  'Windows Security & PowerShell Basics',
                  'Privilege Escalation Techniques',
                ],
                handson: [
                  'Configure basic firewall rules & analyze system logs',
                ],
              },
              {
                title: 'Reconnaissance & Vulnerability Assessment',
                topics: [
                  'Passive & Active Reconnaissance',
                  'Google Dorking & OSINT Techniques',
                  'Vulnerability Scanning (Nmap, Nessus, OpenVAS)',
                ],
                handson: ['Perform basic scanning using Nmap'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Hacking Techniques & Security Measures',
            weeks: [
              {
                title: 'Web Application Security & Exploitation',
                topics: [
                  'Common Web Vulnerabilities (SQL Injection, XSS, CSRF)',
                  'OWASP Top 10 Overview',
                  'Web Application Firewalls (WAF)',
                ],
                handson: ['Use Burp Suite to analyze HTTP requests'],
              },
              {
                title: 'Password Cracking & Cryptography',
                topics: [
                  'Hashing & Encryption Basics (AES, RSA, SHA)',
                  'Password Cracking Techniques (Brute Force, Dictionary Attacks)',
                  'Secure Authentication Methods (MFA, OAuth)',
                ],
                handson: ['Crack a hashed password using John the Ripper'],
              },
              {
                title: 'Malware Analysis & Digital Forensics',
                topics: [
                  'Understanding Malware Types (Trojan, Worms, Ransomware)',
                  'Basics of Reverse Engineering Malware',
                  'Introduction to Digital Forensics & Incident Response',
                ],
                handson: ['Analyze a malicious file in a sandbox environment'],
              },
              {
                title: 'Security Best Practices & Future Learning',
                topics: [
                  'Security Hardening for Systems & Networks',
                  'Introduction to Penetration Testing',
                  'Cybersecurity Careers & Certifications (CEH, OSCP, CISSP)',
                ],
                handson: ['Secure a system by applying best practices'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'mobile-app-development-c10',
    title: 'Mobile App Development Fundamentals',
    description:
      'Learn the essentials of mobile app development, UI/UX principles, API integration, and deployment for Android & iOS.',
    modules: [
      {
        title: 'Mobile App Development Fundamentals',
        months: [
          {
            title: 'Month 1: Mobile App Development Fundamentals',
            weeks: [
              {
                title: 'Introduction to Mobile App Development',
                topics: [
                  'Overview of Mobile App Ecosystem (Android vs iOS)',
                  'Native vs Hybrid vs Cross-Platform Development',
                  'Setting Up Development Environment',
                  'Android: Install Android Studio, Emulator Setup',
                  'iOS: Install Xcode (Mac Users)',
                ],
                handson: ["Create a basic 'Hello World' app"],
              },
              {
                title: 'UI/UX Design & Navigation',
                topics: [
                  'Understanding Mobile UI/UX Principles',
                  'Layouts & Views (ConstraintLayout, Jetpack Compose for Android, SwiftUI for iOS)',
                  'Buttons, TextFields, Images, Lists',
                  'Navigation & Routing (Activities, Fragments, Navigation Controller)',
                ],
                handson: ['Design basic UI components'],
              },
              {
                title: 'Working with User Input & Forms',
                topics: [
                  'Handling User Input (Forms, TextFields, Buttons)',
                  'Validations & Error Handling',
                  'Using Local Storage (Shared Preferences, UserDefaults)',
                ],
                handson: ['Build a simple form with validation'],
              },
              {
                title: 'State Management & Basic API Calls',
                topics: [
                  'Understanding State in Mobile Apps',
                  'RESTful APIs & HTTP Requests (Retrofit for Android, URLSession for iOS)',
                  'JSON Parsing & Data Binding',
                ],
                handson: ['Fetch and display data from an API'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Topics & Deployment',
            weeks: [
              {
                title: 'Working with Databases',
                topics: [
                  'Introduction to Mobile Databases',
                  'SQLite & Room Database (Android)',
                  'CoreData (iOS)',
                ],
                handson: ['Store and retrieve data from a local database'],
              },
              {
                title: 'Notifications & Background Tasks',
                topics: [
                  'Push Notifications (Firebase Cloud Messaging, APN)',
                  'Background Services & Multithreading',
                ],
                handson: ['Implement local notifications'],
              },
              {
                title: 'Authentication & Security',
                topics: [
                  'User Authentication (Firebase Auth, OAuth)',
                  'Secure Data Storage (Keychain, Encrypted SharedPreferences)',
                ],
                handson: ['Implement basic authentication'],
              },
              {
                title: 'App Deployment & Best Practices',
                topics: [
                  'Preparing an App for Deployment',
                  'Publishing to Google Play Store & Apple App Store',
                  'App Performance Optimization & Debugging',
                  'Future Learning Paths (Flutter, React Native, Swift vs Kotlin)',
                ],
                handson: ['Test and optimize an app for release'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'robotics-c11',
    title: 'Robotics Fundamentals & Hardware Components',
    description:
      'Learn the fundamentals of robotics, sensors, actuators, AI integration, and real-world applications with hands-on projects.',
    modules: [
      {
        title: 'Robotics Fundamentals & Hardware Components',
        months: [
          {
            title: 'Month 1: Robotics Fundamentals & Hardware Components',
            weeks: [
              {
                title: 'Introduction to Robotics',
                topics: [
                  'What is Robotics? Applications & Types of Robots',
                  'Components of a Robot (Sensors, Actuators, Controllers)',
                  'Introduction to Microcontrollers & Single-Board Computers (Arduino, Raspberry Pi)',
                ],
                handson: ['Set up Arduino/Raspberry Pi & run a basic program'],
              },
              {
                title: 'Sensors & Actuators in Robotics',
                topics: [
                  'Types of Sensors (Ultrasonic, IR, LIDAR, IMU, Camera)',
                  'Types of Actuators (Servo, DC Motors, Stepper Motors)',
                  'Signal Processing Basics',
                ],
                handson: ['Interface a basic sensor & actuator with Arduino'],
              },
              {
                title: 'Kinematics & Motion Control',
                topics: [
                  'Forward & Inverse Kinematics',
                  'Degrees of Freedom (DOF) & Coordinate Systems',
                  'Motion Planning Algorithms (A*, Dijkstra’s Algorithm)',
                ],
                handson: ['Simulate kinematics using Python (SymPy, NumPy)'],
              },
              {
                title: 'Microcontrollers & Embedded Systems',
                topics: [
                  'Microcontroller Basics (Arduino, ESP32)',
                  'Communication Protocols (I2C, SPI, UART)',
                  'Real-Time Operating Systems (RTOS)',
                ],
                handson: ['Control multiple devices using I2C/SPI'],
              },
            ],
          },
          {
            title: 'Month 2: Control Systems, AI, and Advanced Robotics',
            weeks: [
              {
                title: 'Control Systems in Robotics',
                topics: [
                  'PID Controllers (Proportional, Integral, Derivative)',
                  'Open-Loop vs Closed-Loop Control',
                  'Stability & Response Time in Control Systems',
                ],
                handson: ['Implement a basic PID controller in Python'],
              },
              {
                title: 'Introduction to AI & Machine Learning in Robotics',
                topics: [
                  'Basics of Machine Learning for Robotics',
                  'Computer Vision (OpenCV for Object Detection)',
                  'Reinforcement Learning in Robotics',
                ],
                handson: [
                  'Train a basic image classification model for robotics',
                ],
              },
              {
                title: 'Robot Operating System (ROS) & Simulation',
                topics: [
                  'Introduction to ROS & Gazebo',
                  'ROS Topics, Nodes & Services',
                  'Simulating a Robot in ROS',
                ],
                handson: ['Write a basic ROS node'],
              },
              {
                title: 'Robotics Applications & Future Learning',
                topics: [
                  'Autonomous Vehicles & Drones',
                  'Humanoid & Assistive Robots',
                  'Ethics in Robotics & Safety Considerations',
                ],
                handson: ['Test and optimize simple robotic functions'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'augmented-reality-and-virtual-reality-c12',
    title: 'AR & VR Fundamentals & Development Tools',
    description:
      'Learn about AR & VR technologies, development tools, and applications with hands-on projects.',
    modules: [
      {
        title: 'AR & VR Fundamentals & Development Tools',
        months: [
          {
            title: 'Month 1: AR & VR Fundamentals & Development Tools',
            weeks: [
              {
                title: 'Introduction to AR & VR',
                topics: [
                  'Difference Between AR, VR & MR (Mixed Reality)',
                  'Applications of AR & VR (Gaming, Healthcare, Education, Industry)',
                  'Types of VR (Non-Immersive, Semi-Immersive, Fully Immersive)',
                  'AR vs. Marker-Based & Markerless Tracking',
                ],
                handson: [
                  'Explore AR & VR apps (Google ARCore, Meta Quest, etc.)',
                ],
              },
              {
                title: 'AR & VR Development Tools Overview',
                topics: [
                  'Overview of AR SDKs (ARCore, ARKit, Vuforia)',
                  'Overview of VR Platforms (Unity, Unreal Engine, WebXR)',
                  'Introduction to Unity & Unreal Engine',
                ],
                handson: [
                  'Install Unity/Unreal Engine and explore sample AR/VR projects',
                ],
              },
              {
                title: 'AR Development Basics',
                topics: [
                  'Understanding ARCore (Android) & ARKit (iOS)',
                  'Image & Object Recognition in AR',
                  'AR Foundation in Unity',
                ],
                handson: ['Create a simple marker-based AR app in Unity'],
              },
              {
                title: 'VR Development Basics',
                topics: [
                  'Introduction to VR Headsets (Oculus, HTC Vive, PSVR)',
                  'Understanding VR Controllers & Tracking Systems',
                  'Creating a Basic VR Scene in Unity',
                ],
                handson: ['Set up a VR environment in Unity'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced AR/VR Interactions & Applications',
            weeks: [
              {
                title: '3D Models & UI/UX in AR/VR',
                topics: [
                  'Basics of 3D Modeling (Blender, Maya)',
                  'Optimizing 3D Models for AR/VR Performance',
                  'UI/UX Design Principles for AR/VR Interfaces',
                ],
                handson: ['Import and manipulate a 3D model in Unity/Unreal'],
              },
              {
                title: 'Interaction & Physics in AR/VR',
                topics: [
                  'User Interaction in AR/VR (Hand Tracking, Gaze, Controllers)',
                  'Implementing Physics & Collision in AR/VR',
                  'Haptic Feedback & Audio Integration',
                ],
                handson: ['Add interaction mechanics in a VR scene'],
              },
              {
                title: 'Spatial Mapping & AI in AR/VR',
                topics: [
                  'Environment Mapping & SLAM (Simultaneous Localization & Mapping)',
                  'AI in AR/VR (Object Detection, Gesture Recognition)',
                ],
                handson: [
                  'Use spatial mapping to interact with real-world objects in AR',
                ],
              },
              {
                title: 'AR/VR Deployment & Future Trends',
                topics: [
                  'Deploying AR/VR Apps (Mobile, WebXR, Standalone VR)',
                  'Future Trends in AR/VR (Metaverse, AI Integration, Cloud XR)',
                  'Exploring AR/VR Career Paths & Certifications',
                ],
                handson: ['Package and test a simple AR/VR experience'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'Medical-Coding-c27',
    title: 'Medical Coding Fundamentals & Advanced Coding Techniques',
    description:
      'Learn medical coding principles, billing processes, compliance, and certification preparation with hands-on exercises.',
    modules: [
      {
        title: 'Medical Coding Fundamentals & Advanced Coding Techniques',
        months: [
          {
            title: 'Month 1: Medical Coding Fundamentals',
            weeks: [
              {
                title: 'Introduction to Medical Coding & Healthcare System',
                topics: [
                  'Overview of Medical Coding & Its Importance',
                  'Healthcare System Structure (Providers, Payers, Regulations)',
                  'Coding Systems: ICD, CPT, HCPCS Overview',
                ],
                handson: ['Familiarize with coding books (ICD-10, CPT, HCPCS)'],
              },
              {
                title: 'Medical Terminology & Anatomy for Coders',
                topics: [
                  'Basic Medical Terminology (Prefixes, Suffixes, Root Words)',
                  'Human Body Systems Overview',
                  'Common Diseases & Conditions (Diagnostic Terms)',
                ],
                handson: ['Practice decoding medical terms using word parts'],
              },
              {
                title: 'ICD-10-CM (Diagnosis Coding)',
                topics: [
                  'Introduction to ICD-10-CM Structure',
                  'Guidelines for Assigning Codes',
                  'Coding for Common Diagnoses (Infectious Diseases, Cardiology, Orthopedics)',
                ],
                handson: ['Assign ICD-10-CM codes for sample diagnoses'],
              },
              {
                title: 'CPT (Procedural Coding) Basics',
                topics: [
                  'Understanding CPT Code Categories',
                  'Modifiers in CPT Coding',
                  'Coding for Surgeries, Office Visits, & Medical Procedures',
                ],
                handson: ['Assign CPT codes for sample procedures'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Coding & Compliance',
            weeks: [
              {
                title: 'HCPCS Level II & Drug Coding',
                topics: [
                  'Introduction to HCPCS Level II',
                  'Durable Medical Equipment (DME) Coding',
                  'Medication & Supply Coding',
                ],
                handson: ['Assign HCPCS codes for medical supplies & drugs'],
              },
              {
                title: 'Medical Billing, Reimbursement & Insurance',
                topics: [
                  'Medical Billing Process & Revenue Cycle Management',
                  'Insurance Plans (Medicare, Medicaid, Private Insurers)',
                  'Claim Submission, Denials, & Appeals',
                ],
                handson: ['Review sample medical claims'],
              },
              {
                title: 'Compliance, Auditing & Ethical Guidelines',
                topics: [
                  'HIPAA & Patient Confidentiality',
                  'Fraud & Abuse (Upcoding, Unbundling, Stark Law)',
                  'Internal Audits & Compliance Programs',
                ],
                handson: ['Identify coding errors & compliance violations'],
              },
              {
                title: 'Career Preparation & Certification Overview',
                topics: [
                  'Medical Coding Career Paths & Certifications (CPC, CCS, CCA)',
                  'Exam Preparation Strategies (AAPC & AHIMA)',
                  'Practice Questions & Mock Coding Exercises',
                ],
                handson: ['Complete a practice coding exam'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'SAS-Programming-c28',
    title: 'SAS Fundamentals & Data Analysis',
    description:
      'Master SAS Programming & Clinical SAS, data manipulation, and statistical analysis with hands-on exercises.',
    modules: [
      {
        title: 'SAS Fundamentals & Data Analysis',
        months: [
          {
            title: 'Month 1: SAS Fundamentals & Data Manipulation',
            weeks: [
              {
                title: 'Introduction to SAS & Basics',
                topics: [
                  'What is SAS? Applications in Data Analysis & Business Intelligence',
                  'Installing SAS (SAS University Edition, SAS OnDemand)',
                  'SAS Interface & Components (SAS Editor, Log, Output Window)',
                  'Writing & Running Basic SAS Programs',
                ],
                handson: ['Write & execute a simple SAS program'],
              },
              {
                title: 'Data Input, Import & Export',
                topics: [
                  'Reading Data in SAS (DATALINES, INFILE, IMPORT)',
                  'Importing Data from Excel, CSV, & Databases',
                  'Exporting Data to Different Formats',
                ],
                handson: ['Import & export datasets in SAS'],
              },
              {
                title: 'Data Manipulation & Cleaning',
                topics: [
                  'Understanding SAS Datasets (Observations & Variables)',
                  'Using DATA Step for Data Cleaning & Transformation',
                  'Conditional Processing (IF-THEN-ELSE, CASE Statements)',
                  'Handling Missing Data',
                ],
                handson: ['Clean and modify a dataset using SAS'],
              },
              {
                title: 'Data Sorting, Filtering, & Combining',
                topics: [
                  'Sorting Data (PROC SORT)',
                  'Filtering Data (WHERE, IF conditions)',
                  'Merging & Joining Datasets (SET, MERGE, PROC SQL JOIN)',
                ],
                handson: ['Merge two datasets & filter based on conditions'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Data Analysis & Reporting',
            weeks: [
              {
                title: 'Statistical Analysis in SAS',
                topics: [
                  'Descriptive Statistics (PROC MEANS, PROC UNIVARIATE)',
                  'Frequency Tables & Cross-tabulations (PROC FREQ)',
                  'Correlation & Regression (PROC CORR, PROC REG)',
                ],
                handson: ['Perform basic statistical analysis on sample data'],
              },
              {
                title: 'Data Visualization & Reporting',
                topics: [
                  'Creating Reports using PROC PRINT & PROC REPORT',
                  'Generating Graphs & Charts (PROC SGPLOT, PROC GCHART)',
                  'Formatting Output (ODS, PDF, HTML, RTF)',
                ],
                handson: ['Generate a formatted report with charts'],
              },
              {
                title: 'SAS Macros & Automation',
                topics: [
                  'Introduction to Macros & Macro Variables',
                  'Writing Macro Programs (Defining & Calling Macros)',
                  'Automating Repetitive Tasks in SAS',
                ],
                handson: ['Write a basic SAS macro for automation'],
              },
              {
                title: 'SQL in SAS & Optimization',
                topics: [
                  'Introduction to PROC SQL',
                  'Querying & Summarizing Data',
                  'Optimizing SAS Code for Efficiency',
                ],
                handson: ['Write & execute SQL queries in SAS'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'Pharmacovigilance-c29',
    title: 'Fundamentals & Advanced Topics in Pharmacovigilance',
    description:
      'Learn the principles, regulations, and career pathways in pharmacovigilance with hands-on applications.',
    modules: [
      {
        title: 'Fundamentals & Advanced Topics in Pharmacovigilance',
        months: [
          {
            title: 'Month 1: Fundamentals of Pharmacovigilance',
            weeks: [
              {
                title: 'Introduction to Pharmacovigilance',
                topics: [
                  'Definition, Scope, and Importance of Pharmacovigilance',
                  'History and Development of Drug Safety Monitoring',
                  'Key Stakeholders (Regulatory Agencies, Pharma Companies, WHO)',
                ],
                handson: ['Review case studies of major drug recalls'],
              },
              {
                title: 'Drug Development & Regulatory Frameworks',
                topics: [
                  'Phases of Clinical Trials (Preclinical to Post-Marketing Surveillance)',
                  'International Regulatory Bodies (FDA, EMA, MHRA, CDSCO, ICH, WHO)',
                  'Overview of Good Pharmacovigilance Practices (GVP)',
                ],
                handson: ['Compare regulatory requirements across countries'],
              },
              {
                title: 'Adverse Drug Reactions (ADR) & Signal Detection',
                topics: [
                  'Types of Adverse Drug Reactions (ADR) (Type A & B)',
                  'Identifying & Assessing ADRs',
                  'Signal Detection & Risk-Benefit Analysis',
                ],
                handson: ['Analyze ADR case reports'],
              },
              {
                title: 'Adverse Event (AE) Reporting & Case Processing',
                topics: [
                  'Individual Case Safety Reports (ICSR) – Structure & Importance',
                  'MedDRA Coding System for ADRs',
                  'AE Reporting Systems (FAERS, EudraVigilance, VigiBase)',
                ],
                handson: ['Familiarize with MedDRA terminology'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Topics in Pharmacovigilance',
            weeks: [
              {
                title: 'Periodic Safety Reports & Risk Management Plans (RMPs)',
                topics: [
                  'Periodic Safety Update Reports (PSUR) & Periodic Benefit-Risk Evaluation Reports (PBRER)',
                  'Risk Management Plans (RMPs) & Post-Marketing Safety Studies (PMSS)',
                ],
                handson: ['Review a sample RMP'],
              },
              {
                title: 'Pharmacovigilance in Special Populations',
                topics: [
                  'Pediatric & Geriatric Pharmacovigilance',
                  'Drug Safety in Pregnancy & Lactation',
                  'Pharmacovigilance for Herbal & Biologic Products',
                ],
                handson: [
                  'Analyze safety concerns for a specific drug in a special population',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'Nano-Science-and-Nano-Technology-c30',
    title: 'Fundamentals & Applications of Nanotechnology',
    description:
      'Explore nanoscience, nanomaterials, and their applications across industries with hands-on learning.',
    modules: [
      {
        title: 'Fundamentals & Synthesis of Nanomaterials',
        months: [
          {
            title: 'Month 1: Fundamentals & Synthesis of Nanomaterials',
            weeks: [
              {
                title: 'Introduction to Nanoscience & Nanotechnology',
                topics: [
                  'Definition & Scope of Nanoscience and Nanotechnology',
                  'Historical Development & Key Discoveries (Feynman, Drexler, etc.)',
                  'Unique Properties of Nanomaterials (Size Effects, Quantum Effects)',
                ],
                handson: ['Explore nanotech applications in daily life'],
              },
              {
                title: 'Types & Classification of Nanomaterials',
                topics: [
                  'Zero, One, Two, and Three-Dimensional Nanomaterials',
                  'Carbon-Based Nanomaterials (Fullerenes, Carbon Nanotubes, Graphene)',
                  'Metal, Metal-Oxide, and Polymer-Based Nanomaterials',
                ],
                handson: [
                  'Compare properties of bulk vs. nano-sized materials',
                ],
              },
              {
                title: 'Synthesis Methods of Nanomaterials',
                topics: [
                  'Top-Down Approaches: Lithography, Ball Milling, Etching',
                  'Bottom-Up Approaches: Sol-Gel, Chemical Vapor Deposition (CVD), Self-Assembly',
                  'Green Nanotechnology & Eco-Friendly Synthesis Methods',
                ],
                handson: [
                  'Study images of nanomaterial structures from research papers',
                ],
              },
              {
                title: 'Characterization Techniques in Nanotechnology',
                topics: [
                  'Microscopy Techniques (SEM, TEM, AFM)',
                  'Spectroscopy Techniques (XRD, FTIR, UV-Vis, Raman)',
                  'Thermal & Electrical Property Measurement Techniques',
                ],
                handson: ['Interpret SEM/TEM images from published research'],
              },
            ],
          },
          {
            title: 'Month 2: Applications, Challenges & Future Trends',
            weeks: [
              {
                title: 'Nanotechnology in Electronics & Energy',
                topics: [
                  'Nanoelectronics (Transistors, Quantum Dots, Memory Devices)',
                  'Nanotechnology in Solar Cells & Batteries (Lithium-Ion, Supercapacitors)',
                ],
                handson: ['Review real-world nano-based energy applications'],
              },
              {
                title: 'Biomedical & Environmental Applications',
                topics: [
                  'Nanomedicine (Drug Delivery, Cancer Therapy, Biosensors)',
                  'Antimicrobial Nanoparticles & Water Purification',
                  'Nanotoxicology & Biocompatibility Concerns',
                ],
                handson: ['Analyze case studies on nanomedicine breakthroughs'],
              },
              {
                title: 'Industrial & Commercial Applications of Nanotechnology',
                topics: [
                  'Nanotechnology in Food & Agriculture (Nano-fertilizers, Smart Packaging)',
                  'Nano-Coatings, Smart Textiles & Cosmetics',
                  'Nanomanufacturing & Scale-Up Challenges',
                ],
                handson: [
                  'Identify nano-based commercial products & their benefits',
                ],
              },
              {
                title:
                  'Ethical, Regulatory, and Future Perspectives in Nanotechnology',
                topics: [
                  'Ethical Concerns & Environmental Impact',
                  'Nanotechnology Regulations (FDA, EPA, ISO Standards)',
                  'Emerging Trends: Quantum Computing, AI in Nanotech, Self-Replicating Nanobots',
                ],
                handson: [
                  'Discuss potential risks and ethical dilemmas in nanotechnology',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'Clinical-SAS-c31',
    title: 'Fundamentals of Clinical SAS Programming & Clinical SAS',
    description:
      'Learn Clinical SAS Programming & Clinical SAS, regulatory compliance, and statistical analysis for clinical trials.',
    modules: [
      {
        title: 'Fundamentals of Clinical SAS Programming & Clinical SAS',
        months: [
          {
            title:
              'Month 1: Fundamentals of Clinical SAS Programming & Clinical SAS',
            weeks: [
              {
                title: 'Introduction to Clinical SAS',
                topics: [
                  'Overview of SAS in the Pharmaceutical Industry',
                  'Basics of Clinical Trials & Regulatory Requirements (FDA, ICH-GCP)',
                  'Introduction to SAS Environment & Base SAS Programming & Clinical SAS',
                ],
                handson: [
                  'Navigate SAS interface & execute basic SAS commands',
                ],
              },
              {
                title: 'Data Handling & Manipulation in SAS',
                topics: [
                  'Importing & Exporting Clinical Data (Excel, CSV, TXT)',
                  'Data Cleaning: Handling Missing Values & Outliers',
                  'Creating & Modifying Datasets (DATA Step, SET, MERGE, PROC SQL)',
                ],
                handson: ['Merge and clean sample clinical trial datasets'],
              },
              {
                title: 'Clinical Trial Data Structures',
                topics: [
                  'Understanding SDTM (Study Data Tabulation Model)',
                  'Raw Data vs. Derived Data in Clinical Trials',
                  'Creating SAS Libraries & Data Formats for Clinical Data',
                ],
                handson: [
                  'Convert raw patient data into an SDTM-compliant format',
                ],
              },
              {
                title: 'Descriptive Statistics & Clinical Data Analysis',
                topics: [
                  'PROC MEANS, PROC FREQ, PROC UNIVARIATE',
                  'Generating Summary Statistics for Clinical Trials',
                  'Exploratory Data Analysis (EDA) & Graphs for Clinical Reports',
                ],
                handson: [
                  'Generate demographic tables & adverse event summaries',
                ],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Clinical SAS & Regulatory Standards',
            weeks: [
              {
                title: 'Clinical Data Analysis & Reporting',
                topics: [
                  'Creating Clinical Trial Listings, Tables, and Figures (TLFs)',
                  'PROC REPORT & PROC TABULATE for Clinical Reporting',
                  'Generating PDF, RTF, and Excel Reports for Regulatory Submission',
                ],
                handson: [
                  'Develop safety and efficacy reports using PROC REPORT',
                ],
              },
              {
                title: 'CDISC ADaM (Analysis Data Model)',
                topics: [
                  'Introduction to ADaM Standards & Regulatory Compliance',
                  'Creating ADaM Datasets & Key Variables',
                  'Generating Derived Variables for Statistical Analysis',
                ],
                handson: ['Convert SDTM data to ADaM format'],
              },
              {
                title: 'Statistical Analysis for Clinical Trials',
                topics: [
                  'Hypothesis Testing & Statistical Methods (T-tests, ANOVA)',
                  'Survival Analysis & Kaplan-Meier Curves in SAS',
                  'PROC GLM, PROC MIXED for Clinical Trial Data',
                ],
                handson: ['Perform survival analysis on patient dataset'],
              },
              {
                title: 'SAS Macros & Automation in Clinical Reporting',
                topics: [
                  'Introduction to SAS Macros for Efficiency',
                  'Creating Reusable Macro Variables & Functions',
                  'Automating Report Generation in Clinical SAS',
                ],
                handson: ['Write a macro to automate table generation'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'Artificial-Intelligence-c32',
    title: 'Fundamentals of AI & Machine Learning',
    description:
      'Learn AI & Machine Learning fundamentals, deep learning, and real-world applications.',
    modules: [
      {
        title: 'Fundamentals of AI & Machine Learning',
        months: [
          {
            title: 'Month 1: Fundamentals of AI & Machine Learning',
            weeks: [
              {
                title: 'Introduction to AI & Machine Learning',
                topics: [
                  'What is AI? Types of AI (Narrow, General, Super AI)',
                  'Supervised vs Unsupervised vs Reinforcement Learning',
                  'AI applications (Computer Vision, NLP, Robotics)',
                ],
                handson: [
                  'Set up Python, Jupyter Notebook, install libraries (NumPy, Pandas, Matplotlib, Scikit-Learn, TensorFlow/PyTorch)',
                ],
              },
              {
                title: 'Python, Data Science, & Preprocessing',
                topics: [
                  'NumPy, Pandas (Data Manipulation)',
                  'Data visualization (Matplotlib, Seaborn)',
                  'Handling missing data, feature scaling, one-hot encoding',
                ],
                handson: ['Load and explore datasets (Iris, Titanic, MNIST)'],
              },
              {
                title: 'Supervised Learning (Regression & Classification)',
                topics: [
                  'Linear Regression, Logistic Regression',
                  'Decision Trees & Random Forest',
                  'Model evaluation (MSE, Accuracy, Precision, Recall, F1-score)',
                  'Overfitting & Regularization',
                ],
                handson: [
                  'Train and evaluate Regression & Classification models',
                ],
              },
              {
                title: 'Unsupervised Learning & Feature Engineering',
                topics: [
                  'Clustering (K-Means, Hierarchical, DBSCAN)',
                  'Dimensionality Reduction (PCA, t-SNE)',
                  'Feature Selection & Engineering Techniques',
                ],
                handson: ['Apply clustering and feature engineering'],
              },
            ],
          },
          {
            title: 'Month 2: Deep Learning & AI Applications',
            weeks: [
              {
                title: 'Neural Networks & Deep Learning Basics',
                topics: [
                  'Perceptron, Activation Functions',
                  'Feedforward Neural Networks (FNN)',
                  'Backpropagation & Gradient Descent',
                ],
                handson: [
                  'Implement a simple neural network using TensorFlow/PyTorch',
                ],
              },
              {
                title:
                  'Convolutional Neural Networks (CNNs) & Image Processing',
                topics: [
                  'CNN Layers (Convolution, Pooling, Fully Connected)',
                  'Image Classification (MNIST, CIFAR-10)',
                  'Transfer Learning & Pre-trained Models',
                ],
                handson: ['Train a CNN for image recognition'],
              },
              {
                title: 'Natural Language Processing (NLP) & Transformers',
                topics: [
                  'Text Preprocessing (Tokenization, Stopword Removal, Stemming/Lemmatization)',
                  'Word Embeddings (Word2Vec, GloVe)',
                  'Introduction to Transformers (BERT, GPT)',
                ],
                handson: ['Sentiment Analysis using Hugging Face Transformers'],
              },
              {
                title: 'AI Deployment & Future Learning',
                topics: [
                  'AI Ethics & Bias in AI',
                  'Deploy models using Flask / FastAPI / Streamlit',
                  'Future Learning Paths: Reinforcement Learning, GANs, AutoML',
                  'Overview of MLOps & Model Deployment',
                ],
                handson: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'drug-discovery-c1',
    title: 'Drug Discovery & Preclinical Development',
    description:
      'Learn about drug discovery, preclinical development, clinical trials, and regulatory processes.',
    modules: [
      {
        title: 'Drug Discovery & Preclinical Development',
        months: [
          {
            title: 'Month 1: Drug Discovery & Preclinical Development',
            weeks: [
              {
                title: 'Introduction to Drug Development',
                topics: [
                  'Overview of Drug Development Process',
                  'Stages: Discovery, Preclinical, Clinical Trials, Regulatory Approval',
                  'Key Regulatory Agencies (FDA, EMA, ICH, WHO)',
                ],
                handson: [
                  'Analyze the development timeline of a recently approved drug',
                ],
              },
              {
                title: 'Drug Discovery & Target Identification',
                topics: [
                  'Understanding Disease Mechanisms & Biomarkers',
                  'Drug Targets: Receptors, Enzymes, Proteins',
                  'High-Throughput Screening (HTS) & Computational Drug Discovery',
                ],
                handson: [
                  'Explore molecular docking of a drug candidate using online tools',
                ],
              },
              {
                title: 'Preclinical Testing & Pharmacokinetics',
                topics: [
                  'Animal Models & In Vitro vs. In Vivo Testing',
                  'ADME (Absorption, Distribution, Metabolism, Excretion) Principles',
                  'Toxicology Studies (Acute, Chronic, Genotoxicity, Carcinogenicity)',
                ],
                handson: [
                  'Interpret a preclinical pharmacokinetics (PK) study report',
                ],
              },
              {
                title:
                  'Investigational New Drug (IND) Application & Regulations',
                topics: [
                  'IND Submission: Requirements & Documentation',
                  'Good Laboratory Practice (GLP) & Good Manufacturing Practice (GMP)',
                  'Ethical Considerations & Animal Welfare in Preclinical Research',
                ],
                handson: ['Review an IND submission template'],
              },
            ],
          },
          {
            title: 'Month 2: Clinical Development & Post-Market Surveillance',
            weeks: [
              {
                title: 'Clinical Trials: Phase 1 (Safety & Dosage)',
                topics: [
                  'Objectives of Phase 1 Trials (First-in-Human Studies)',
                  'Study Design, Volunteer Selection, and Dose Escalation',
                  'Adverse Event Reporting & Safety Monitoring',
                ],
                handson: ['Analyze a Phase 1 clinical trial protocol'],
              },
              {
                title: 'Clinical Trials: Phase 2 & 3 (Efficacy & Approval)',
                topics: [
                  'Phase 2: Dose Optimization & Proof-of-Concept Studies',
                  'Phase 3: Large-Scale Trials & Statistical Considerations',
                  'Randomized Controlled Trials (RCTs) & Blinding Techniques',
                ],
                handson: [
                  'Evaluate clinical trial results from a Phase 3 study',
                ],
              },
              {
                title: 'New Drug Application (NDA) & Regulatory Approval',
                topics: [
                  'NDA/Biologics License Application (BLA) Submission Process',
                  'FDA & EMA Review Process: Advisory Committees & Labeling',
                  'Risk-Benefit Analysis & Post-Marketing Commitments',
                ],
                handson: ['Review a sample NDA document'],
              },
              {
                title: 'Post-Marketing Surveillance & Pharmacovigilance',
                topics: [
                  'Phase 4 Trials & Long-Term Safety Monitoring',
                  'FDA MedWatch, Adverse Drug Reactions (ADR), and Risk Management',
                  'Drug Recalls, Labeling Changes, and Market Withdrawals',
                ],
                handson: [
                  'Assess real-world post-marketing drug safety reports',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'Drug-Development-Process-c33',
    title: 'Drug Discovery & Preclinical Development',
    description:
      'Learn about drug discovery, preclinical development, clinical trials, and regulatory processes.',
    modules: [
      {
        title: 'Drug Discovery & Preclinical Development',
        months: [
          {
            title: 'Month 1: Drug Discovery & Preclinical Development',
            weeks: [
              {
                title: 'Introduction to Drug Development',
                topics: [
                  'Overview of Drug Development Process',
                  'Stages: Discovery, Preclinical, Clinical Trials, Regulatory Approval',
                  'Key Regulatory Agencies (FDA, EMA, ICH, WHO)',
                ],
                handson: [
                  'Analyze the development timeline of a recently approved drug',
                ],
              },
              {
                title: 'Drug Discovery & Target Identification',
                topics: [
                  'Understanding Disease Mechanisms & Biomarkers',
                  'Drug Targets: Receptors, Enzymes, Proteins',
                  'High-Throughput Screening (HTS) & Computational Drug Discovery',
                ],
                handson: [
                  'Explore molecular docking of a drug candidate using online tools',
                ],
              },
              {
                title: 'Preclinical Testing & Pharmacokinetics',
                topics: [
                  'Animal Models & In Vitro vs. In Vivo Testing',
                  'ADME (Absorption, Distribution, Metabolism, Excretion) Principles',
                  'Toxicology Studies (Acute, Chronic, Genotoxicity, Carcinogenicity)',
                ],
                handson: [
                  'Interpret a preclinical pharmacokinetics (PK) study report',
                ],
              },
              {
                title:
                  'Investigational New Drug (IND) Application & Regulations',
                topics: [
                  'IND Submission: Requirements & Documentation',
                  'Good Laboratory Practice (GLP) & Good Manufacturing Practice (GMP)',
                  'Ethical Considerations & Animal Welfare in Preclinical Research',
                ],
                handson: ['Review an IND submission template'],
              },
            ],
          },
          {
            title: 'Month 2: Clinical Development & Post-Market Surveillance',
            weeks: [
              {
                title: 'Clinical Trials: Phase 1 (Safety & Dosage)',
                topics: [
                  'Objectives of Phase 1 Trials (First-in-Human Studies)',
                  'Study Design, Volunteer Selection, and Dose Escalation',
                  'Adverse Event Reporting & Safety Monitoring',
                ],
                handson: ['Analyze a Phase 1 clinical trial protocol'],
              },
              {
                title: 'Clinical Trials: Phase 2 & 3 (Efficacy & Approval)',
                topics: [
                  'Phase 2: Dose Optimization & Proof-of-Concept Studies',
                  'Phase 3: Large-Scale Trials & Statistical Considerations',
                  'Randomized Controlled Trials (RCTs) & Blinding Techniques',
                ],
                handson: [
                  'Evaluate clinical trial results from a Phase 3 study',
                ],
              },
              {
                title: 'New Drug Application (NDA) & Regulatory Approval',
                topics: [
                  'NDA/Biologics License Application (BLA) Submission Process',
                  'FDA & EMA Review Process: Advisory Committees & Labeling',
                  'Risk-Benefit Analysis & Post-Marketing Commitments',
                ],
                handson: ['Review a sample NDA document'],
              },
              {
                title: 'Post-Marketing Surveillance & Pharmacovigilance',
                topics: [
                  'Phase 4 Trials & Long-Term Safety Monitoring',
                  'FDA MedWatch, Adverse Drug Reactions (ADR), and Risk Management',
                  'Drug Recalls, Labeling Changes, and Market Withdrawals',
                ],
                handson: [
                  'Assess real-world post-marketing drug safety reports',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'Regulatory-Affairs-c34',
    title: 'Fundamentals of Regulatory Affairs',
    description:
      'Understand regulatory requirements, clinical trial regulations, GMP compliance, and global regulatory frameworks.',
    modules: [
      {
        title: 'Fundamentals of Regulatory Affairs',
        months: [
          {
            title: 'Month 1: Fundamentals of Regulatory Affairs',
            weeks: [
              {
                title: 'Introduction to Regulatory Affairs',
                topics: [
                  'Role & Importance of Regulatory Affairs in Healthcare',
                  'Overview of Regulatory Agencies (FDA, EMA, MHRA, CDSCO, WHO, ICH)',
                  'Drug Development Lifecycle & Regulatory Requirements',
                ],
                handson: ['Compare regulatory agencies across countries'],
              },
              {
                title: 'Drug Development & Clinical Trial Regulations',
                topics: [
                  'Phases of Drug Development (Preclinical to Post-Marketing)',
                  'Good Clinical Practice (GCP) & Clinical Trial Regulations',
                  'IND, NDA, ANDA, BLA Submissions (US FDA)',
                ],
                handson: ['Review a sample clinical trial protocol'],
              },
              {
                title: 'Regulatory Submissions & Dossier Preparation',
                topics: [
                  'Common Technical Document (CTD) & eCTD Format',
                  'Regulatory Submission Process (IND, NDA, MAA, ANDA)',
                  'Labeling Requirements & Package Inserts',
                ],
                handson: ['Identify key sections of an eCTD dossier'],
              },
              {
                title:
                  'Good Manufacturing Practices (GMP) & Quality Compliance',
                topics: [
                  'Good Manufacturing Practices (GMP) Guidelines',
                  'Quality by Design (QbD) & Process Validation',
                  'Regulatory Inspections & Audits (FDA 483, Warning Letters)',
                ],
                handson: ['Analyze a GMP compliance case study'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Regulatory Affairs & Global Regulations',
            weeks: [
              {
                title: 'Regulatory Affairs in Biologics & Medical Devices',
                topics: [
                  'Biologics & Biosimilars Regulations (BLA, EMA Guidelines)',
                  'Medical Device Regulations (EU MDR, US FDA 510(k), PMA)',
                  'Combination Products & In Vitro Diagnostics (IVDs)',
                ],
                handson: [
                  'Compare biologics vs. small molecule drug approval pathways',
                ],
              },
              {
                title: 'Global Regulatory Frameworks & Drug Safety',
                topics: [
                  'US FDA, European EMA, Japan PMDA, India CDSCO Regulations',
                  'Post-Marketing Surveillance & Pharmacovigilance (ICH E2E)',
                  'Adverse Event Reporting (MedWatch, EudraVigilance, FAERS)',
                ],
                handson: ['Review a sample pharmacovigilance report'],
              },
              {
                title: 'Regulatory Strategies for Market Access & Compliance',
                topics: [
                  'Orphan Drug Regulations & Fast Track Approvals',
                  'Pricing & Reimbursement Strategies (HTA, Market Access)',
                  'Life Cycle Management & Post-Approval Changes (Variations)',
                ],
                handson: [
                  'Analyze expedited approval pathways (Fast Track, Breakthrough Therapy)',
                ],
              },
              {
                title:
                  'Ethics, Legal Aspects & Future Trends in Regulatory Affairs',
                topics: [
                  'Ethical Considerations in Drug Development',
                  'Intellectual Property Rights (Patents, Exclusivity)',
                  'Digital Health, AI in Regulatory Affairs & Future Trends',
                ],
                handson: ['Discuss key ethical challenges in drug regulation'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'Medical-Coding-c35',
    title: 'Medical Coding Fundamentals',
    description:
      'Learn the fundamentals of medical coding, including ICD, CPT, HCPCS, billing, compliance, and certification preparation.',
    modules: [
      {
        title: 'Medical Coding Fundamentals',
        months: [
          {
            title: 'Month 1: Medical Coding Fundamentals',
            weeks: [
              {
                title: 'Introduction to Medical Coding & Healthcare System',
                topics: [
                  'Overview of Medical Coding & Its Importance',
                  'Healthcare System Structure (Providers, Payers, Regulations)',
                  'Coding Systems: ICD, CPT, HCPCS Overview',
                ],
                handson: ['Familiarize with coding books (ICD-10, CPT, HCPCS)'],
              },
              {
                title: 'Medical Terminology & Anatomy for Coders',
                topics: [
                  'Basic Medical Terminology (Prefixes, Suffixes, Root Words)',
                  'Human Body Systems Overview',
                  'Common Diseases & Conditions (Diagnostic Terms)',
                ],
                handson: ['Practice decoding medical terms using word parts'],
              },
              {
                title: 'ICD-10-CM (Diagnosis Coding)',
                topics: [
                  'Introduction to ICD-10-CM Structure',
                  'Guidelines for Assigning Codes',
                  'Coding for Common Diagnoses (Infectious Diseases, Cardiology, Orthopedics)',
                ],
                handson: ['Assign ICD-10-CM codes for sample diagnoses'],
              },
              {
                title: 'CPT (Procedural Coding) Basics',
                topics: [
                  'Understanding CPT Code Categories',
                  'Modifiers in CPT Coding',
                  'Coding for Surgeries, Office Visits, & Medical Procedures',
                ],
                handson: ['Assign CPT codes for sample procedures'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Coding & Compliance',
            weeks: [
              {
                title: 'HCPCS Level II & Drug Coding',
                topics: [
                  'Introduction to HCPCS Level II',
                  'Durable Medical Equipment (DME) Coding',
                  'Medication & Supply Coding',
                ],
                handson: ['Assign HCPCS codes for medical supplies & drugs'],
              },
              {
                title: 'Medical Billing, Reimbursement & Insurance',
                topics: [
                  'Medical Billing Process & Revenue Cycle Management',
                  'Insurance Plans (Medicare, Medicaid, Private Insurers)',
                  'Claim Submission, Denials, & Appeals',
                ],
                handson: ['Review sample medical claims'],
              },
              {
                title: 'Compliance, Auditing & Ethical Guidelines',
                topics: [
                  'HIPAA & Patient Confidentiality',
                  'Fraud & Abuse (Upcoding, Unbundling, Stark Law)',
                  'Internal Audits & Compliance Programs',
                ],
                handson: ['Identify coding errors & compliance violations'],
              },
              {
                title: 'Career Preparation & Certification Overview',
                topics: [
                  'Medical Coding Career Paths & Certifications (CPC, CCS, CCA)',
                  'Exam Preparation Strategies (AAPC & AHIMA)',
                  'Practice Questions & Mock Coding Exercises',
                ],
                handson: ['Complete a practice coding exam'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'SAS-Programming-c36',
    title: 'SAS Fundamentals & Data Manipulation',
    description:
      'Learn the fundamentals of SAS Programming & Clinical SAS, data manipulation, statistical analysis, and automation.',
    modules: [
      {
        title: 'SAS Fundamentals & Data Manipulation',
        months: [
          {
            title: 'Month 1: SAS Fundamentals & Data Manipulation',
            weeks: [
              {
                title: 'Introduction to SAS & Basics',
                topics: [
                  'What is SAS? Applications in Data Analysis & Business Intelligence',
                  'Installing SAS (SAS University Edition, SAS OnDemand)',
                  'SAS Interface & Components (SAS Editor, Log, Output Window)',
                  'Writing & Running Basic SAS Programs',
                ],
                handson: ['Write & execute a simple SAS program'],
              },
              {
                title: 'Data Input, Import & Export',
                topics: [
                  'Reading Data in SAS (DATALINES, INFILE, IMPORT)',
                  'Importing Data from Excel, CSV, & Databases',
                  'Exporting Data to Different Formats',
                ],
                handson: ['Import & export datasets in SAS'],
              },
              {
                title: 'Data Manipulation & Cleaning',
                topics: [
                  'Understanding SAS Datasets (Observations & Variables)',
                  'Using DATA Step for Data Cleaning & Transformation',
                  'Conditional Processing (IF-THEN-ELSE, CASE Statements)',
                  'Handling Missing Data',
                ],
                handson: ['Clean and modify a dataset using SAS'],
              },
              {
                title: 'Data Sorting, Filtering, & Combining',
                topics: [
                  'Sorting Data (PROC SORT)',
                  'Filtering Data (WHERE, IF conditions)',
                  'Merging & Joining Datasets (SET, MERGE, PROC SQL JOIN)',
                ],
                handson: ['Merge two datasets & filter based on conditions'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Data Analysis & Reporting',
            weeks: [
              {
                title: 'Statistical Analysis in SAS',
                topics: [
                  'Descriptive Statistics (PROC MEANS, PROC UNIVARIATE)',
                  'Frequency Tables & Cross-tabulations (PROC FREQ)',
                  'Correlation & Regression (PROC CORR, PROC REG)',
                ],
                handson: ['Perform basic statistical analysis on sample data'],
              },
              {
                title: 'Data Visualization & Reporting',
                topics: [
                  'Creating Reports using PROC PRINT & PROC REPORT',
                  'Generating Graphs & Charts (PROC SGPLOT, PROC GCHART)',
                  'Formatting Output (ODS, PDF, HTML, RTF)',
                ],
                handson: ['Generate a formatted report with charts'],
              },
              {
                title: 'SAS Macros & Automation',
                topics: [
                  'Introduction to Macros & Macro Variables',
                  'Writing Macro Programs (Defining & Calling Macros)',
                  'Automating Repetitive Tasks in SAS',
                ],
                handson: ['Write a basic SAS macro for automation'],
              },
              {
                title: 'SQL in SAS & Optimization',
                topics: [
                  'Introduction to PROC SQL',
                  'Querying & Summarizing Data',
                  'Optimizing SAS Code for Efficiency',
                ],
                handson: ['Write & execute SQL queries in SAS'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'Pharmacovigilance-c37',
    title: 'Fundamentals of Pharmacovigilance',
    description:
      'Learn the fundamentals of drug safety monitoring, regulatory frameworks, and pharmacovigilance practices.',
    modules: [
      {
        title: 'Fundamentals of Pharmacovigilance',
        months: [
          {
            title: 'Month 1: Fundamentals of Pharmacovigilance',
            weeks: [
              {
                title: 'Introduction to Pharmacovigilance',
                topics: [
                  'Definition, Scope, and Importance of Pharmacovigilance',
                  'History and Development of Drug Safety Monitoring',
                  'Key Stakeholders (Regulatory Agencies, Pharma Companies, WHO)',
                ],
                handson: ['Review case studies of major drug recalls'],
              },
              {
                title: 'Drug Development & Regulatory Frameworks',
                topics: [
                  'Phases of Clinical Trials (Preclinical to Post-Marketing Surveillance)',
                  'International Regulatory Bodies (FDA, EMA, MHRA, CDSCO, ICH, WHO)',
                  'Overview of Good Pharmacovigilance Practices (GVP)',
                ],
                handson: ['Compare regulatory requirements across countries'],
              },
              {
                title: 'Adverse Drug Reactions (ADR) & Signal Detection',
                topics: [
                  'Types of Adverse Drug Reactions (ADR) (Type A & B)',
                  'Identifying & Assessing ADRs',
                  'Signal Detection & Risk-Benefit Analysis',
                ],
                handson: ['Analyze ADR case reports'],
              },
              {
                title: 'Adverse Event (AE) Reporting & Case Processing',
                topics: [
                  'Individual Case Safety Reports (ICSR) – Structure & Importance',
                  'MedDRA Coding System for ADRs',
                  'AE Reporting Systems (FAERS, EudraVigilance, VigiBase)',
                ],
                handson: ['Familiarize with MedDRA terminology'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Topics in Pharmacovigilance',
            weeks: [
              {
                title: 'Periodic Safety Reports & Risk Management Plans (RMPs)',
                topics: [
                  'Periodic Safety Update Reports (PSUR) & Periodic Benefit-Risk Evaluation Reports (PBRER)',
                  'Risk Management Plans (RMPs) & Post-Marketing Safety Studies (PMSS)',
                ],
                handson: ['Review a sample RMP'],
              },
              {
                title: 'Pharmacovigilance in Special Populations',
                topics: [
                  'Pediatric & Geriatric Pharmacovigilance',
                  'Drug Safety in Pregnancy & Lactation',
                  'Pharmacovigilance for Herbal & Biologic Products',
                ],
                handson: [
                  'Analyze safety concerns for a specific drug in a special population',
                ],
              },
              {
                title: 'Compliance, Audits & Pharmacovigilance Inspections',
                topics: [
                  'Good Pharmacovigilance Practices (GVP) Compliance',
                  'Audit & Inspection Process (FDA, EMA, MHRA)',
                  'Common Findings & Corrective Actions in PV Audits',
                ],
                handson: ['Conduct a mock compliance checklist review'],
              },
              {
                title: 'Career Pathways & Future Trends in Pharmacovigilance',
                topics: [
                  'Roles in Pharmacovigilance (Drug Safety Associate, PV Officer, Risk Management)',
                  'AI & Big Data in Pharmacovigilance',
                  'Emerging Trends (Pharmacogenomics, Personalized Medicine)',
                ],
                handson: [
                  'Explore online PV databases & certification options',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'Nano-Science-Nano-Technology-c38',
    title: 'Fundamentals & Synthesis of Nanomaterials',
    description:
      'Learn the fundamentals of nanoscience, synthesis methods, and applications of nanomaterials.',
    modules: [
      {
        title: 'Fundamentals & Synthesis of Nanomaterials',
        months: [
          {
            title: 'Month 1: Fundamentals & Synthesis of Nanomaterials',
            weeks: [
              {
                title: 'Introduction to Nanoscience & Nanotechnology',
                topics: [
                  'Definition & Scope of Nanoscience and Nanotechnology',
                  'Historical Development & Key Discoveries (Feynman, Drexler, etc.)',
                  'Unique Properties of Nanomaterials (Size Effects, Quantum Effects)',
                ],
                handson: ['Explore nanotech applications in daily life'],
              },
              {
                title: 'Types & Classification of Nanomaterials',
                topics: [
                  'Zero, One, Two, and Three-Dimensional Nanomaterials',
                  'Carbon-Based Nanomaterials (Fullerenes, Carbon Nanotubes, Graphene)',
                  'Metal, Metal-Oxide, and Polymer-Based Nanomaterials',
                ],
                handson: [
                  'Compare properties of bulk vs. nano-sized materials',
                ],
              },
              {
                title: 'Synthesis Methods of Nanomaterials',
                topics: [
                  'Top-Down Approaches: Lithography, Ball Milling, Etching',
                  'Bottom-Up Approaches: Sol-Gel, Chemical Vapor Deposition (CVD), Self-Assembly',
                  'Green Nanotechnology & Eco-Friendly Synthesis Methods',
                ],
                handson: [
                  'Study images of nanomaterial structures from research papers',
                ],
              },
              {
                title: 'Characterization Techniques in Nanotechnology',
                topics: [
                  'Microscopy Techniques (SEM, TEM, AFM)',
                  'Spectroscopy Techniques (XRD, FTIR, UV-Vis, Raman)',
                  'Thermal & Electrical Property Measurement Techniques',
                ],
                handson: ['Interpret SEM/TEM images from published research'],
              },
            ],
          },
          {
            title: 'Month 2: Applications, Challenges & Future Trends',
            weeks: [
              {
                title: 'Nanotechnology in Electronics & Energy',
                topics: [
                  'Nanoelectronics (Transistors, Quantum Dots, Memory Devices)',
                  'Nanotechnology in Solar Cells & Batteries (Lithium-Ion, Supercapacitors)',
                ],
                handson: ['Review real-world nano-based energy applications'],
              },
              {
                title: 'Biomedical & Environmental Applications',
                topics: [
                  'Nanomedicine (Drug Delivery, Cancer Therapy, Biosensors)',
                  'Antimicrobial Nanoparticles & Water Purification',
                  'Nanotoxicology & Biocompatibility Concerns',
                ],
                handson: ['Analyze case studies on nanomedicine breakthroughs'],
              },
              {
                title: 'Industrial & Commercial Applications of Nanotechnology',
                topics: [
                  'Nanotechnology in Food & Agriculture (Nano-fertilizers, Smart Packaging)',
                  'Nano-Coatings, Smart Textiles & Cosmetics',
                  'Nanomanufacturing & Scale-Up Challenges',
                ],
                handson: [
                  'Identify nano-based commercial products & their benefits',
                ],
              },
              {
                title:
                  'Ethical, Regulatory, and Future Perspectives in Nanotechnology',
                topics: [
                  'Ethical Concerns & Environmental Impact',
                  'Nanotechnology Regulations (FDA, EPA, ISO Standards)',
                  'Emerging Trends: Quantum Computing, AI in Nanotech, Self-Replicating Nanobots',
                ],
                handson: [
                  'Discuss potential risks and ethical dilemmas in nanotechnology',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'Clinical-SAS-c39',
    title: 'Fundamentals of Clinical SAS Programming & Clinical SAS',
    description:
      'Learn SAS Programming & Clinical SAS for clinical trials, regulatory compliance, and clinical data analysis.',
    modules: [
      {
        title: 'Fundamentals of Clinical SAS Programming & Clinical SAS',
        months: [
          {
            title:
              'Month 1: Fundamentals of Clinical SAS Programming & Clinical SAS',
            weeks: [
              {
                title: 'Introduction to Clinical SAS',
                topics: [
                  'Overview of SAS in the Pharmaceutical Industry',
                  'Basics of Clinical Trials & Regulatory Requirements (FDA, ICH-GCP)',
                  'Introduction to SAS Environment & Base SAS Programming & Clinical SAS',
                ],
                handson: [
                  'Navigate SAS interface & execute basic SAS commands',
                ],
              },
              {
                title: 'Data Handling & Manipulation in SAS',
                topics: [
                  'Importing & Exporting Clinical Data (Excel, CSV, TXT)',
                  'Data Cleaning: Handling Missing Values & Outliers',
                  'Creating & Modifying Datasets (DATA Step, SET, MERGE, PROC SQL)',
                ],
                handson: ['Merge and clean sample clinical trial datasets'],
              },
              {
                title: 'Clinical Trial Data Structures',
                topics: [
                  'Understanding SDTM (Study Data Tabulation Model)',
                  'Raw Data vs. Derived Data in Clinical Trials',
                  'Creating SAS Libraries & Data Formats for Clinical Data',
                ],
                handson: [
                  'Convert raw patient data into an SDTM-compliant format',
                ],
              },
              {
                title: 'Descriptive Statistics & Clinical Data Analysis',
                topics: [
                  'PROC MEANS, PROC FREQ, PROC UNIVARIATE',
                  'Generating Summary Statistics for Clinical Trials',
                  'Exploratory Data Analysis (EDA) & Graphs for Clinical Reports',
                ],
                handson: [
                  'Generate demographic tables & adverse event summaries',
                ],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Clinical SAS & Regulatory Standards',
            weeks: [
              {
                title: 'Clinical Data Analysis & Reporting',
                topics: [
                  'Creating Clinical Trial Listings, Tables, and Figures (TLFs)',
                  'PROC REPORT & PROC TABULATE for Clinical Reporting',
                  'Generating PDF, RTF, and Excel Reports for Regulatory Submission',
                ],
                handson: [
                  'Develop safety and efficacy reports using PROC REPORT',
                ],
              },
              {
                title: 'CDISC ADaM (Analysis Data Model)',
                topics: [
                  'Introduction to ADaM Standards & Regulatory Compliance',
                  'Creating ADaM Datasets & Key Variables',
                  'Generating Derived Variables for Statistical Analysis',
                ],
                handson: ['Convert SDTM data to ADaM format'],
              },
              {
                title: 'Statistical Analysis for Clinical Trials',
                topics: [
                  'Hypothesis Testing & Statistical Methods (T-tests, ANOVA)',
                  'Survival Analysis & Kaplan-Meier Curves in SAS',
                  'PROC GLM, PROC MIXED for Clinical Trial Data',
                ],
                handson: ['Perform survival analysis on patient dataset'],
              },
              {
                title: 'SAS Macros & Automation in Clinical Reporting',
                topics: [
                  'Introduction to SAS Macros for Efficiency',
                  'Creating Reusable Macro Variables & Functions',
                  'Automating Report Generation in Clinical SAS',
                ],
                handson: ['Write a macro to automate table generation'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'Drug-Development-Process-c40',
    title: 'Drug Discovery & Development',
    description:
      'Explore the process of drug discovery, preclinical testing, clinical trials, and regulatory approvals.',
    modules: [
      {
        title: 'Drug Discovery & Development',
        months: [
          {
            title: 'Month 1: Drug Discovery & Preclinical Development',
            weeks: [
              {
                title: 'Introduction to Drug Development',
                topics: [
                  'Overview of Drug Development Process',
                  'Stages: Discovery, Preclinical, Clinical Trials, Regulatory Approval',
                  'Key Regulatory Agencies (FDA, EMA, ICH, WHO)',
                ],
                handson: [
                  'Analyze the development timeline of a recently approved drug',
                ],
              },
              {
                title: 'Drug Discovery & Target Identification',
                topics: [
                  'Understanding Disease Mechanisms & Biomarkers',
                  'Drug Targets: Receptors, Enzymes, Proteins',
                  'High-Throughput Screening (HTS) & Computational Drug Discovery',
                ],
                handson: [
                  'Explore molecular docking of a drug candidate using online tools',
                ],
              },
              {
                title: 'Preclinical Testing & Pharmacokinetics',
                topics: [
                  'Animal Models & In Vitro vs. In Vivo Testing',
                  'ADME (Absorption, Distribution, Metabolism, Excretion) Principles',
                  'Toxicology Studies (Acute, Chronic, Genotoxicity, Carcinogenicity)',
                ],
                handson: [
                  'Interpret a preclinical pharmacokinetics (PK) study report',
                ],
              },
              {
                title:
                  'Investigational New Drug (IND) Application & Regulations',
                topics: [
                  'IND Submission: Requirements & Documentation',
                  'Good Laboratory Practice (GLP) & Good Manufacturing Practice (GMP)',
                  'Ethical Considerations & Animal Welfare in Preclinical Research',
                ],
                handson: ['Review an IND submission template'],
              },
            ],
          },
          {
            title: 'Month 2: Clinical Development & Post-Market Surveillance',
            weeks: [
              {
                title: 'Clinical Trials: Phase 1 (Safety & Dosage)',
                topics: [
                  'Objectives of Phase 1 Trials (First-in-Human Studies)',
                  'Study Design, Volunteer Selection, and Dose Escalation',
                  'Adverse Event Reporting & Safety Monitoring',
                ],
                handson: ['Analyze a Phase 1 clinical trial protocol'],
              },
              {
                title: 'Clinical Trials: Phase 2 & 3 (Efficacy & Approval)',
                topics: [
                  'Phase 2: Dose Optimization & Proof-of-Concept Studies',
                  'Phase 3: Large-Scale Trials & Statistical Considerations',
                  'Randomized Controlled Trials (RCTs) & Blinding Techniques',
                ],
                handson: [
                  'Evaluate clinical trial results from a Phase 3 study',
                ],
              },
              {
                title: 'New Drug Application (NDA) & Regulatory Approval',
                topics: [
                  'NDA/Biologics License Application (BLA) Submission Process',
                  'FDA & EMA Review Process: Advisory Committees & Labeling',
                  'Risk-Benefit Analysis & Post-Marketing Commitments',
                ],
                handson: ['Review a sample NDA document'],
              },
              {
                title: 'Post-Marketing Surveillance & Pharmacovigilance',
                topics: [
                  'Phase 4 Trials & Long-Term Safety Monitoring',
                  'FDA MedWatch, Adverse Drug Reactions (ADR), and Risk Management',
                  'Drug Recalls, Labeling Changes, and Market Withdrawals',
                ],
                handson: [
                  'Assess real-world post-marketing drug safety report',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'Clinical-Trials-and-Research-c41',
    title: 'Fundamentals of Clinical Trials & Research',
    description:
      'Learn about the phases of clinical trials, regulatory guidelines, study design, and emerging trends in clinical research.',
    modules: [
      {
        title: 'Clinical Trials & Research',
        months: [
          {
            title: 'Month 1: Fundamentals of Clinical Trials & Research',
            weeks: [
              {
                title: 'Introduction to Clinical Research & Trials',
                topics: [
                  'Definition & Importance of Clinical Trials',
                  'Phases of Clinical Trials (Phase I–IV)',
                  'Key Stakeholders: Sponsors, CROs, Regulatory Bodies',
                ],
                handson: [
                  'Identify clinical trial phases for an approved drug',
                ],
              },
              {
                title: 'Regulatory Guidelines & Ethics in Clinical Trials',
                topics: [
                  'ICH-GCP (Good Clinical Practice) Guidelines',
                  'FDA, EMA, and Other Global Regulatory Agencies',
                  'Ethical Considerations & Informed Consent',
                ],
                handson: ['Analyze an informed consent form'],
              },
              {
                title: 'Study Design & Protocol Development',
                topics: [
                  'Types of Clinical Studies (RCTs, Observational, Adaptive)',
                  'Elements of a Clinical Trial Protocol',
                  'Blinding, Randomization, and Placebo-Controlled Studies',
                ],
                handson: ['Draft a simple clinical trial protocol outline'],
              },
              {
                title: 'Patient Recruitment & Site Management',
                topics: [
                  'Subject Eligibility & Inclusion/Exclusion Criteria',
                  'Challenges in Patient Recruitment & Retention',
                  'Role of Clinical Research Coordinators (CRCs)',
                ],
                handson: ['Identify recruitment challenges for a given study'],
              },
            ],
          },
          {
            title: 'Month 2: Data Management, Monitoring & Emerging Trends',
            weeks: [
              {
                title: 'Clinical Data Management & Biostatistics',
                topics: [
                  'Clinical Data Collection Methods (EDC Systems, CRFs)',
                  'Key Statistical Concepts (p-values, Confidence Intervals)',
                  'Adverse Event Reporting & Safety Monitoring',
                ],
                handson: ['Interpret basic clinical trial results'],
              },
              {
                title: 'Trial Monitoring & Quality Assurance',
                topics: [
                  'Role of Clinical Research Associates (CRAs)',
                  'Source Data Verification (SDV) & Monitoring Visits',
                  'Risk-Based Monitoring & Compliance Checks',
                ],
                handson: ['Review a monitoring checklist'],
              },
              {
                title: 'Drug Approval Process & Pharmacovigilance',
                topics: [
                  'NDA & BLA Submission Process (FDA, EMA)',
                  'Post-Marketing Surveillance (Phase IV)',
                  'Signal Detection & Risk Management in Pharmacovigilance',
                ],
                handson: ['Examine an FDA-approved drug’s safety profile'],
              },
              {
                title: 'Future Trends & Innovations in Clinical Trials',
                topics: [
                  'Digital Trials & Remote Monitoring',
                  'AI & Machine Learning in Clinical Research',
                  'Personalized Medicine & Genomics-Based Trials',
                ],
                handson: ['Explore AI’s role in a clinical trial case study'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'Regulatory-Affairs-c42',
    title: 'Fundamentals of Regulatory Affairs',
    description:
      'Learn about regulatory frameworks, compliance, drug approvals, and emerging trends in regulatory affairs.',
    modules: [
      {
        title: 'Regulatory Affairs',
        months: [
          {
            title: 'Month 1: Fundamentals of Regulatory Affairs',
            weeks: [
              {
                title: 'Introduction to Regulatory Affairs',
                topics: [
                  'Role & Importance of Regulatory Affairs in Healthcare',
                  'Overview of Regulatory Agencies (FDA, EMA, MHRA, CDSCO, WHO, ICH)',
                  'Drug Development Lifecycle & Regulatory Requirements',
                ],
                handson: ['Compare regulatory agencies across countries'],
              },
              {
                title: 'Drug Development & Clinical Trial Regulations',
                topics: [
                  'Phases of Drug Development (Preclinical to Post-Marketing)',
                  'Good Clinical Practice (GCP) & Clinical Trial Regulations',
                  'IND, NDA, ANDA, BLA Submissions (US FDA)',
                ],
                handson: ['Review a sample clinical trial protocol'],
              },
              {
                title: 'Regulatory Submissions & Dossier Preparation',
                topics: [
                  'Common Technical Document (CTD) & eCTD Format',
                  'Regulatory Submission Process (IND, NDA, MAA, ANDA)',
                  'Labeling Requirements & Package Inserts',
                ],
                handson: ['Identify key sections of an eCTD dossier'],
              },
              {
                title:
                  'Good Manufacturing Practices (GMP) & Quality Compliance',
                topics: [
                  'Good Manufacturing Practices (GMP) Guidelines',
                  'Quality by Design (QbD) & Process Validation',
                  'Regulatory Inspections & Audits (FDA 483, Warning Letters)',
                ],
                handson: ['Analyze a GMP compliance case study'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Regulatory Affairs & Global Regulations',
            weeks: [
              {
                title: 'Regulatory Affairs in Biologics & Medical Devices',
                topics: [
                  'Biologics & Biosimilars Regulations (BLA, EMA Guidelines)',
                  'Medical Device Regulations (EU MDR, US FDA 510(k), PMA)',
                  'Combination Products & In Vitro Diagnostics (IVDs)',
                ],
                handson: [
                  'Compare biologics vs. small molecule drug approval pathways',
                ],
              },
              {
                title: 'Global Regulatory Frameworks & Drug Safety',
                topics: [
                  'US FDA, European EMA, Japan PMDA, India CDSCO Regulations',
                  'Post-Marketing Surveillance & Pharmacovigilance (ICH E2E)',
                  'Adverse Event Reporting (MedWatch, EudraVigilance, FAERS)',
                ],
                handson: ['Review a sample pharmacovigilance report'],
              },
              {
                title: 'Regulatory Strategies for Market Access & Compliance',
                topics: [
                  'Orphan Drug Regulations & Fast Track Approvals',
                  'Pricing & Reimbursement Strategies (HTA, Market Access)',
                  'Life Cycle Management & Post-Approval Changes (Variations)',
                ],
                handson: [
                  'Analyze expedited approval pathways (Fast Track, Breakthrough Therapy)',
                ],
              },
              {
                title:
                  'Ethics, Legal Aspects & Future Trends in Regulatory Affairs',
                topics: [
                  'Ethical Considerations in Drug Development',
                  'Intellectual Property Rights (Patents, Exclusivity)',
                  'Digital Health, AI in Regulatory Affairs & Future Trends',
                ],
                handson: ['Discuss key ethical challenges in drug regulation'],
              },
            ],
          },
        ],
      },
    ],
  },
  //////

  {
    key: 'Medical-Coding-c43 ',
    title: 'Fundamentals of Medical Coding',
    description:
      'Learn about medical coding systems, compliance, billing, and career preparation in healthcare coding.',
    modules: [
      {
        title: 'Medical Coding Fundamentals',
        months: [
          {
            title: 'Month 1: Medical Coding Fundamentals',
            weeks: [
              {
                title: 'Introduction to Medical Coding & Healthcare System',
                topics: [
                  'Overview of Medical Coding & Its Importance',
                  'Healthcare System Structure (Providers, Payers, Regulations)',
                  'Coding Systems: ICD, CPT, HCPCS Overview',
                ],
                handson: ['Familiarize with coding books (ICD-10, CPT, HCPCS)'],
              },
              {
                title: 'Medical Terminology & Anatomy for Coders',
                topics: [
                  'Basic Medical Terminology (Prefixes, Suffixes, Root Words)',
                  'Human Body Systems Overview',
                  'Common Diseases & Conditions (Diagnostic Terms)',
                ],
                handson: ['Practice decoding medical terms using word parts'],
              },
              {
                title: 'ICD-10-CM (Diagnosis Coding)',
                topics: [
                  'Introduction to ICD-10-CM Structure',
                  'Guidelines for Assigning Codes',
                  'Coding for Common Diagnoses (Infectious Diseases, Cardiology, Orthopedics)',
                ],
                handson: ['Assign ICD-10-CM codes for sample diagnoses'],
              },
              {
                title: 'CPT (Procedural Coding) Basics',
                topics: [
                  'Understanding CPT Code Categories',
                  'Modifiers in CPT Coding',
                  'Coding for Surgeries, Office Visits, & Medical Procedures',
                ],
                handson: ['Assign CPT codes for sample procedures'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Coding & Compliance',
            weeks: [
              {
                title: 'HCPCS Level II & Drug Coding',
                topics: [
                  'Introduction to HCPCS Level II',
                  'Durable Medical Equipment (DME) Coding',
                  'Medication & Supply Coding',
                ],
                handson: ['Assign HCPCS codes for medical supplies & drugs'],
              },
              {
                title: 'Medical Billing, Reimbursement & Insurance',
                topics: [
                  'Medical Billing Process & Revenue Cycle Management',
                  'Insurance Plans (Medicare, Medicaid, Private Insurers)',
                  'Claim Submission, Denials, & Appeals',
                ],
                handson: ['Review sample medical claims'],
              },
              {
                title: 'Compliance, Auditing & Ethical Guidelines',
                topics: [
                  'HIPAA & Patient Confidentiality',
                  'Fraud & Abuse (Upcoding, Unbundling, Stark Law)',
                  'Internal Audits & Compliance Programs',
                ],
                handson: ['Identify coding errors & compliance violations'],
              },
              {
                title: 'Career Preparation & Certification Overview',
                topics: [
                  'Medical Coding Career Paths & Certifications (CPC, CCS, CCA)',
                  'Exam Preparation Strategies (AAPC & AHIMA)',
                  'Practice Questions & Mock Coding Exercises',
                ],
                handson: ['Complete a practice coding exam'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'Medical-Coding-c49',
    title: 'Fundamentals of Medical Coding',
    description:
      'Learn about medical coding systems, compliance, billing, and career preparation in healthcare coding.',
    modules: [
      {
        title: 'Medical Coding Fundamentals',
        months: [
          {
            title: 'Month 1: Medical Coding Fundamentals',
            weeks: [
              {
                title: 'Introduction to Medical Coding & Healthcare System',
                topics: [
                  'Overview of Medical Coding & Its Importance',
                  'Healthcare System Structure (Providers, Payers, Regulations)',
                  'Coding Systems: ICD, CPT, HCPCS Overview',
                ],
                handson: ['Familiarize with coding books (ICD-10, CPT, HCPCS)'],
              },
              {
                title: 'Medical Terminology & Anatomy for Coders',
                topics: [
                  'Basic Medical Terminology (Prefixes, Suffixes, Root Words)',
                  'Human Body Systems Overview',
                  'Common Diseases & Conditions (Diagnostic Terms)',
                ],
                handson: ['Practice decoding medical terms using word parts'],
              },
              {
                title: 'ICD-10-CM (Diagnosis Coding)',
                topics: [
                  'Introduction to ICD-10-CM Structure',
                  'Guidelines for Assigning Codes',
                  'Coding for Common Diagnoses (Infectious Diseases, Cardiology, Orthopedics)',
                ],
                handson: ['Assign ICD-10-CM codes for sample diagnoses'],
              },
              {
                title: 'CPT (Procedural Coding) Basics',
                topics: [
                  'Understanding CPT Code Categories',
                  'Modifiers in CPT Coding',
                  'Coding for Surgeries, Office Visits, & Medical Procedures',
                ],
                handson: ['Assign CPT codes for sample procedures'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Coding & Compliance',
            weeks: [
              {
                title: 'HCPCS Level II & Drug Coding',
                topics: [
                  'Introduction to HCPCS Level II',
                  'Durable Medical Equipment (DME) Coding',
                  'Medication & Supply Coding',
                ],
                handson: ['Assign HCPCS codes for medical supplies & drugs'],
              },
              {
                title: 'Medical Billing, Reimbursement & Insurance',
                topics: [
                  'Medical Billing Process & Revenue Cycle Management',
                  'Insurance Plans (Medicare, Medicaid, Private Insurers)',
                  'Claim Submission, Denials, & Appeals',
                ],
                handson: ['Review sample medical claims'],
              },
              {
                title: 'Compliance, Auditing & Ethical Guidelines',
                topics: [
                  'HIPAA & Patient Confidentiality',
                  'Fraud & Abuse (Upcoding, Unbundling, Stark Law)',
                  'Internal Audits & Compliance Programs',
                ],
                handson: ['Identify coding errors & compliance violations'],
              },
              {
                title: 'Career Preparation & Certification Overview',
                topics: [
                  'Medical Coding Career Paths & Certifications (CPC, CCS, CCA)',
                  'Exam Preparation Strategies (AAPC & AHIMA)',
                  'Practice Questions & Mock Coding Exercises',
                ],
                handson: ['Complete a practice coding exam'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'SAS-Programming-c44',
    title: 'Fundamentals of SAS & Data Analysis',
    description:
      'Learn SAS Programming & Clinical SAS, data manipulation, statistical analysis, and reporting techniques.',
    modules: [
      {
        title: 'SAS Fundamentals & Data Manipulation',
        months: [
          {
            title: 'Month 1: SAS Fundamentals & Data Manipulation',
            weeks: [
              {
                title: 'Introduction to SAS & Basics',
                topics: [
                  'What is SAS? Applications in Data Analysis & Business Intelligence',
                  'Installing SAS (SAS University Edition, SAS OnDemand)',
                  'SAS Interface & Components (SAS Editor, Log, Output Window)',
                  'Writing & Running Basic SAS Programs',
                ],
                handson: ['Write & execute a simple SAS program'],
              },
              {
                title: 'Data Input, Import & Export',
                topics: [
                  'Reading Data in SAS (DATALINES, INFILE, IMPORT)',
                  'Importing Data from Excel, CSV, & Databases',
                  'Exporting Data to Different Formats',
                ],
                handson: ['Import & export datasets in SAS'],
              },
              {
                title: 'Data Manipulation & Cleaning',
                topics: [
                  'Understanding SAS Datasets (Observations & Variables)',
                  'Using DATA Step for Data Cleaning & Transformation',
                  'Conditional Processing (IF-THEN-ELSE, CASE Statements)',
                  'Handling Missing Data',
                ],
                handson: ['Clean and modify a dataset using SAS'],
              },
              {
                title: 'Data Sorting, Filtering, & Combining',
                topics: [
                  'Sorting Data (PROC SORT)',
                  'Filtering Data (WHERE, IF conditions)',
                  'Merging & Joining Datasets (SET, MERGE, PROC SQL JOIN)',
                ],
                handson: ['Merge two datasets & filter based on conditions'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Data Analysis & Reporting',
            weeks: [
              {
                title: 'Statistical Analysis in SAS',
                topics: [
                  'Descriptive Statistics (PROC MEANS, PROC UNIVARIATE)',
                  'Frequency Tables & Cross-tabulations (PROC FREQ)',
                  'Correlation & Regression (PROC CORR, PROC REG)',
                ],
                handson: ['Perform basic statistical analysis on sample data'],
              },
              {
                title: 'Data Visualization & Reporting',
                topics: [
                  'Creating Reports using PROC PRINT & PROC REPORT',
                  'Generating Graphs & Charts (PROC SGPLOT, PROC GCHART)',
                  'Formatting Output (ODS, PDF, HTML, RTF)',
                ],
                handson: ['Generate a formatted report with charts'],
              },
              {
                title: 'SAS Macros & Automation',
                topics: [
                  'Introduction to Macros & Macro Variables',
                  'Writing Macro Programs (Defining & Calling Macros)',
                  'Automating Repetitive Tasks in SAS',
                ],
                handson: ['Write a basic SAS macro for automation'],
              },
              {
                title: 'SQL in SAS & Optimization',
                topics: [
                  'Introduction to PROC SQL',
                  'Querying & Summarizing Data',
                  'Optimizing SAS Code for Efficiency',
                ],
                handson: ['Write & execute SQL queries in SAS'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'SAS-Programming-c50',
    title: 'Fundamentals of SAS & Data Analysis',
    description:
      'Learn SAS Programming & Clinical SAS, data manipulation, statistical analysis, and reporting techniques.',
    modules: [
      {
        title: 'SAS Fundamentals & Data Manipulation',
        months: [
          {
            title: 'Month 1: SAS Fundamentals & Data Manipulation',
            weeks: [
              {
                title: 'Introduction to SAS & Basics',
                topics: [
                  'What is SAS? Applications in Data Analysis & Business Intelligence',
                  'Installing SAS (SAS University Edition, SAS OnDemand)',
                  'SAS Interface & Components (SAS Editor, Log, Output Window)',
                  'Writing & Running Basic SAS Programs',
                ],
                handson: ['Write & execute a simple SAS program'],
              },
              {
                title: 'Data Input, Import & Export',
                topics: [
                  'Reading Data in SAS (DATALINES, INFILE, IMPORT)',
                  'Importing Data from Excel, CSV, & Databases',
                  'Exporting Data to Different Formats',
                ],
                handson: ['Import & export datasets in SAS'],
              },
              {
                title: 'Data Manipulation & Cleaning',
                topics: [
                  'Understanding SAS Datasets (Observations & Variables)',
                  'Using DATA Step for Data Cleaning & Transformation',
                  'Conditional Processing (IF-THEN-ELSE, CASE Statements)',
                  'Handling Missing Data',
                ],
                handson: ['Clean and modify a dataset using SAS'],
              },
              {
                title: 'Data Sorting, Filtering, & Combining',
                topics: [
                  'Sorting Data (PROC SORT)',
                  'Filtering Data (WHERE, IF conditions)',
                  'Merging & Joining Datasets (SET, MERGE, PROC SQL JOIN)',
                ],
                handson: ['Merge two datasets & filter based on conditions'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Data Analysis & Reporting',
            weeks: [
              {
                title: 'Statistical Analysis in SAS',
                topics: [
                  'Descriptive Statistics (PROC MEANS, PROC UNIVARIATE)',
                  'Frequency Tables & Cross-tabulations (PROC FREQ)',
                  'Correlation & Regression (PROC CORR, PROC REG)',
                ],
                handson: ['Perform basic statistical analysis on sample data'],
              },
              {
                title: 'Data Visualization & Reporting',
                topics: [
                  'Creating Reports using PROC PRINT & PROC REPORT',
                  'Generating Graphs & Charts (PROC SGPLOT, PROC GCHART)',
                  'Formatting Output (ODS, PDF, HTML, RTF)',
                ],
                handson: ['Generate a formatted report with charts'],
              },
              {
                title: 'SAS Macros & Automation',
                topics: [
                  'Introduction to Macros & Macro Variables',
                  'Writing Macro Programs (Defining & Calling Macros)',
                  'Automating Repetitive Tasks in SAS',
                ],
                handson: ['Write a basic SAS macro for automation'],
              },
              {
                title: 'SQL in SAS & Optimization',
                topics: [
                  'Introduction to PROC SQL',
                  'Querying & Summarizing Data',
                  'Optimizing SAS Code for Efficiency',
                ],
                handson: ['Write & execute SQL queries in SAS'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'Pharmacovigilance-c45',
    title: 'Fundamentals of Pharmacovigilance',
    description:
      'Learn the principles of pharmacovigilance, drug safety monitoring, and regulatory compliance.',
    modules: [
      {
        title: 'Fundamentals of Pharmacovigilance',
        months: [
          {
            title: 'Month 1: Fundamentals of Pharmacovigilance',
            weeks: [
              {
                title: 'Introduction to Pharmacovigilance',
                topics: [
                  'Definition, Scope, and Importance of Pharmacovigilance',
                  'History and Development of Drug Safety Monitoring',
                  'Key Stakeholders (Regulatory Agencies, Pharma Companies, WHO)',
                ],
                handson: ['Review case studies of major drug recalls'],
              },
              {
                title: 'Drug Development & Regulatory Frameworks',
                topics: [
                  'Phases of Clinical Trials (Preclinical to Post-Marketing Surveillance)',
                  'International Regulatory Bodies (FDA, EMA, MHRA, CDSCO, ICH, WHO)',
                  'Overview of Good Pharmacovigilance Practices (GVP)',
                ],
                handson: ['Compare regulatory requirements across countries'],
              },
              {
                title: 'Adverse Drug Reactions (ADR) & Signal Detection',
                topics: [
                  'Types of Adverse Drug Reactions (ADR) (Type A & B)',
                  'Identifying & Assessing ADRs',
                  'Signal Detection & Risk-Benefit Analysis',
                ],
                handson: ['Analyze ADR case reports'],
              },
              {
                title: 'Adverse Event (AE) Reporting & Case Processing',
                topics: [
                  'Individual Case Safety Reports (ICSR) – Structure & Importance',
                  'MedDRA Coding System for ADRs',
                  'AE Reporting Systems (FAERS, EudraVigilance, VigiBase)',
                ],
                handson: ['Familiarize with MedDRA terminology'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Topics in Pharmacovigilance',
            weeks: [
              {
                title: 'Periodic Safety Reports & Risk Management Plans (RMPs)',
                topics: [
                  'Periodic Safety Update Reports (PSUR) & Periodic Benefit-Risk Evaluation Reports (PBRER)',
                  'Risk Management Plans (RMPs) & Post-Marketing Safety Studies (PMSS)',
                ],
                handson: ['Review a sample RMP'],
              },
              {
                title: 'Pharmacovigilance in Special Populations',
                topics: [
                  'Pediatric & Geriatric Pharmacovigilance',
                  'Drug Safety in Pregnancy & Lactation',
                  'Pharmacovigilance for Herbal & Biologic Products',
                ],
                handson: [
                  'Analyze safety concerns for a specific drug in a special population',
                ],
              },
              {
                title: 'Compliance, Audits & Pharmacovigilance Inspections',
                topics: [
                  'Good Pharmacovigilance Practices (GVP) Compliance',
                  'Audit & Inspection Process (FDA, EMA, MHRA)',
                  'Common Findings & Corrective Actions in PV Audits',
                ],
                handson: ['Conduct a mock compliance checklist review'],
              },
              {
                title: 'Career Pathways & Future Trends in Pharmacovigilance',
                topics: [
                  'Roles in Pharmacovigilance (Drug Safety Associate, PV Officer, Risk Management)',
                  'AI & Big Data in Pharmacovigilance',
                  'Emerging Trends (Pharmacogenomics, Personalized Medicine)',
                ],
                handson: [
                  'Explore online PV databases & certification options',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'Pharmacovigilance-c51',
    title: 'Fundamentals of Pharmacovigilance',
    description:
      'Learn the principles of pharmacovigilance, drug safety monitoring, and regulatory compliance.',
    modules: [
      {
        title: 'Fundamentals of Pharmacovigilance',
        months: [
          {
            title: 'Month 1: Fundamentals of Pharmacovigilance',
            weeks: [
              {
                title: 'Introduction to Pharmacovigilance',
                topics: [
                  'Definition, Scope, and Importance of Pharmacovigilance',
                  'History and Development of Drug Safety Monitoring',
                  'Key Stakeholders (Regulatory Agencies, Pharma Companies, WHO)',
                ],
                handson: ['Review case studies of major drug recalls'],
              },
              {
                title: 'Drug Development & Regulatory Frameworks',
                topics: [
                  'Phases of Clinical Trials (Preclinical to Post-Marketing Surveillance)',
                  'International Regulatory Bodies (FDA, EMA, MHRA, CDSCO, ICH, WHO)',
                  'Overview of Good Pharmacovigilance Practices (GVP)',
                ],
                handson: ['Compare regulatory requirements across countries'],
              },
              {
                title: 'Adverse Drug Reactions (ADR) & Signal Detection',
                topics: [
                  'Types of Adverse Drug Reactions (ADR) (Type A & B)',
                  'Identifying & Assessing ADRs',
                  'Signal Detection & Risk-Benefit Analysis',
                ],
                handson: ['Analyze ADR case reports'],
              },
              {
                title: 'Adverse Event (AE) Reporting & Case Processing',
                topics: [
                  'Individual Case Safety Reports (ICSR) – Structure & Importance',
                  'MedDRA Coding System for ADRs',
                  'AE Reporting Systems (FAERS, EudraVigilance, VigiBase)',
                ],
                handson: ['Familiarize with MedDRA terminology'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Topics in Pharmacovigilance',
            weeks: [
              {
                title: 'Periodic Safety Reports & Risk Management Plans (RMPs)',
                topics: [
                  'Periodic Safety Update Reports (PSUR) & Periodic Benefit-Risk Evaluation Reports (PBRER)',
                  'Risk Management Plans (RMPs) & Post-Marketing Safety Studies (PMSS)',
                ],
                handson: ['Review a sample RMP'],
              },
              {
                title: 'Pharmacovigilance in Special Populations',
                topics: [
                  'Pediatric & Geriatric Pharmacovigilance',
                  'Drug Safety in Pregnancy & Lactation',
                  'Pharmacovigilance for Herbal & Biologic Products',
                ],
                handson: [
                  'Analyze safety concerns for a specific drug in a special population',
                ],
              },
              {
                title: 'Compliance, Audits & Pharmacovigilance Inspections',
                topics: [
                  'Good Pharmacovigilance Practices (GVP) Compliance',
                  'Audit & Inspection Process (FDA, EMA, MHRA)',
                  'Common Findings & Corrective Actions in PV Audits',
                ],
                handson: ['Conduct a mock compliance checklist review'],
              },
              {
                title: 'Career Pathways & Future Trends in Pharmacovigilance',
                topics: [
                  'Roles in Pharmacovigilance (Drug Safety Associate, PV Officer, Risk Management)',
                  'AI & Big Data in Pharmacovigilance',
                  'Emerging Trends (Pharmacogenomics, Personalized Medicine)',
                ],
                handson: [
                  'Explore online PV databases & certification options',
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    key: 'Nano-Science-Nano-Technology-c46',
    title: 'Fundamentals of Nanotechnology',
    description:
      'Learn the principles of nanoscience, nanomaterials, and their applications.',
    modules: [
      {
        title: 'Fundamentals & Synthesis of Nanomaterials',
        months: [
          {
            title: 'Month 1: Fundamentals & Synthesis of Nanomaterials',
            weeks: [
              {
                title: 'Introduction to Nanoscience & Nanotechnology',
                topics: [
                  'Definition & Scope of Nanoscience and Nanotechnology',
                  'Historical Development & Key Discoveries (Feynman, Drexler, etc.)',
                  'Unique Properties of Nanomaterials (Size Effects, Quantum Effects)',
                ],
                handson: ['Explore nanotech applications in daily life'],
              },
              {
                title: 'Types & Classification of Nanomaterials',
                topics: [
                  'Zero, One, Two, and Three-Dimensional Nanomaterials',
                  'Carbon-Based Nanomaterials (Fullerenes, Carbon Nanotubes, Graphene)',
                  'Metal, Metal-Oxide, and Polymer-Based Nanomaterials',
                ],
                handson: [
                  'Compare properties of bulk vs. nano-sized materials',
                ],
              },
              {
                title: 'Synthesis Methods of Nanomaterials',
                topics: [
                  'Top-Down Approaches: Lithography, Ball Milling, Etching',
                  'Bottom-Up Approaches: Sol-Gel, Chemical Vapor Deposition (CVD), Self-Assembly',
                  'Green Nanotechnology & Eco-Friendly Synthesis Methods',
                ],
                handson: [
                  'Study images of nanomaterial structures from research papers',
                ],
              },
              {
                title: 'Characterization Techniques in Nanotechnology',
                topics: [
                  'Microscopy Techniques (SEM, TEM, AFM)',
                  'Spectroscopy Techniques (XRD, FTIR, UV-Vis, Raman)',
                  'Thermal & Electrical Property Measurement Techniques',
                ],
                handson: ['Interpret SEM/TEM images from published research'],
              },
            ],
          },
          {
            title: 'Month 2: Applications, Challenges & Future Trends',
            weeks: [
              {
                title: 'Nanotechnology in Electronics & Energy',
                topics: [
                  'Nanoelectronics (Transistors, Quantum Dots, Memory Devices)',
                  'Nanotechnology in Solar Cells & Batteries (Lithium-Ion, Supercapacitors)',
                ],
                handson: ['Review real-world nano-based energy applications'],
              },
              {
                title: 'Biomedical & Environmental Applications',
                topics: [
                  'Nanomedicine (Drug Delivery, Cancer Therapy, Biosensors)',
                  'Antimicrobial Nanoparticles & Water Purification',
                  'Nanotoxicology & Biocompatibility Concerns',
                ],
                handson: ['Analyze case studies on nanomedicine breakthroughs'],
              },
              {
                title: 'Industrial & Commercial Applications of Nanotechnology',
                topics: [
                  'Nanotechnology in Food & Agriculture (Nano-fertilizers, Smart Packaging)',
                  'Nano-Coatings, Smart Textiles & Cosmetics',
                  'Nanomanufacturing & Scale-Up Challenges',
                ],
                handson: [
                  'Identify nano-based commercial products & their benefits',
                ],
              },
              {
                title:
                  'Ethical, Regulatory, and Future Perspectives in Nanotechnology',
                topics: [
                  'Ethical Concerns & Environmental Impact',
                  'Nanotechnology Regulations (FDA, EPA, ISO Standards)',
                  'Emerging Trends: Quantum Computing, AI in Nanotech, Self-Replicating Nanobots',
                ],
                handson: [
                  'Discuss potential risks and ethical dilemmas in nanotechnology',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'Nano-Science-Nano-Technology-c52',
    title: 'Fundamentals of Nanotechnology',
    description:
      'Learn the principles of nanoscience, nanomaterials, and their applications.',
    modules: [
      {
        title: 'Fundamentals & Synthesis of Nanomaterials',
        months: [
          {
            title: 'Month 1: Fundamentals & Synthesis of Nanomaterials',
            weeks: [
              {
                title: 'Introduction to Nanoscience & Nanotechnology',
                topics: [
                  'Definition & Scope of Nanoscience and Nanotechnology',
                  'Historical Development & Key Discoveries (Feynman, Drexler, etc.)',
                  'Unique Properties of Nanomaterials (Size Effects, Quantum Effects)',
                ],
                handson: ['Explore nanotech applications in daily life'],
              },
              {
                title: 'Types & Classification of Nanomaterials',
                topics: [
                  'Zero, One, Two, and Three-Dimensional Nanomaterials',
                  'Carbon-Based Nanomaterials (Fullerenes, Carbon Nanotubes, Graphene)',
                  'Metal, Metal-Oxide, and Polymer-Based Nanomaterials',
                ],
                handson: [
                  'Compare properties of bulk vs. nano-sized materials',
                ],
              },
              {
                title: 'Synthesis Methods of Nanomaterials',
                topics: [
                  'Top-Down Approaches: Lithography, Ball Milling, Etching',
                  'Bottom-Up Approaches: Sol-Gel, Chemical Vapor Deposition (CVD), Self-Assembly',
                  'Green Nanotechnology & Eco-Friendly Synthesis Methods',
                ],
                handson: [
                  'Study images of nanomaterial structures from research papers',
                ],
              },
              {
                title: 'Characterization Techniques in Nanotechnology',
                topics: [
                  'Microscopy Techniques (SEM, TEM, AFM)',
                  'Spectroscopy Techniques (XRD, FTIR, UV-Vis, Raman)',
                  'Thermal & Electrical Property Measurement Techniques',
                ],
                handson: ['Interpret SEM/TEM images from published research'],
              },
            ],
          },
          {
            title: 'Month 2: Applications, Challenges & Future Trends',
            weeks: [
              {
                title: 'Nanotechnology in Electronics & Energy',
                topics: [
                  'Nanoelectronics (Transistors, Quantum Dots, Memory Devices)',
                  'Nanotechnology in Solar Cells & Batteries (Lithium-Ion, Supercapacitors)',
                ],
                handson: ['Review real-world nano-based energy applications'],
              },
              {
                title: 'Biomedical & Environmental Applications',
                topics: [
                  'Nanomedicine (Drug Delivery, Cancer Therapy, Biosensors)',
                  'Antimicrobial Nanoparticles & Water Purification',
                  'Nanotoxicology & Biocompatibility Concerns',
                ],
                handson: ['Analyze case studies on nanomedicine breakthroughs'],
              },
              {
                title: 'Industrial & Commercial Applications of Nanotechnology',
                topics: [
                  'Nanotechnology in Food & Agriculture (Nano-fertilizers, Smart Packaging)',
                  'Nano-Coatings, Smart Textiles & Cosmetics',
                  'Nanomanufacturing & Scale-Up Challenges',
                ],
                handson: [
                  'Identify nano-based commercial products & their benefits',
                ],
              },
              {
                title:
                  'Ethical, Regulatory, and Future Perspectives in Nanotechnology',
                topics: [
                  'Ethical Concerns & Environmental Impact',
                  'Nanotechnology Regulations (FDA, EPA, ISO Standards)',
                  'Emerging Trends: Quantum Computing, AI in Nanotech, Self-Replicating Nanobots',
                ],
                handson: [
                  'Discuss potential risks and ethical dilemmas in nanotechnology',
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    key: 'Clinical-Trials-and-Research-c47',
    title: 'Fundamentals of Clinical Trials & Research',
    description:
      'Learn the principles of clinical research, regulatory guidelines, and trial management.',
    modules: [
      {
        title: 'Fundamentals of Clinical Trials & Research',
        months: [
          {
            title: 'Month 1: Fundamentals of Clinical Trials & Research',
            weeks: [
              {
                title: 'Introduction to Clinical Research & Trials',
                topics: [
                  'Definition & Importance of Clinical Trials',
                  'Phases of Clinical Trials (Phase I–IV)',
                  'Key Stakeholders: Sponsors, CROs, Regulatory Bodies',
                ],
                handson: [
                  'Identify clinical trial phases for an approved drug',
                ],
              },
              {
                title: 'Regulatory Guidelines & Ethics in Clinical Trials',
                topics: [
                  'ICH-GCP (Good Clinical Practice) Guidelines',
                  'FDA, EMA, and Other Global Regulatory Agencies',
                  'Ethical Considerations & Informed Consent',
                ],
                handson: ['Analyze an informed consent form'],
              },
              {
                title: 'Study Design & Protocol Development',
                topics: [
                  'Types of Clinical Studies (RCTs, Observational, Adaptive)',
                  'Elements of a Clinical Trial Protocol',
                  'Blinding, Randomization, and Placebo-Controlled Studies',
                ],
                handson: ['Draft a simple clinical trial protocol outline'],
              },
              {
                title: 'Patient Recruitment & Site Management',
                topics: [
                  'Subject Eligibility & Inclusion/Exclusion Criteria',
                  'Challenges in Patient Recruitment & Retention',
                  'Role of Clinical Research Coordinators (CRCs)',
                ],
                handson: ['Identify recruitment challenges for a given study'],
              },
            ],
          },
          {
            title: 'Month 2: Data Management, Monitoring & Emerging Trends',
            weeks: [
              {
                title: 'Clinical Data Management & Biostatistics',
                topics: [
                  'Clinical Data Collection Methods (EDC Systems, CRFs)',
                  'Key Statistical Concepts (p-values, Confidence Intervals)',
                  'Adverse Event Reporting & Safety Monitoring',
                ],
                handson: ['Interpret basic clinical trial results'],
              },
              {
                title: 'Trial Monitoring & Quality Assurance',
                topics: [
                  'Role of Clinical Research Associates (CRAs)',
                  'Source Data Verification (SDV) & Monitoring Visits',
                  'Risk-Based Monitoring & Compliance Checks',
                ],
                handson: ['Review a monitoring checklist'],
              },
              {
                title: 'Drug Approval Process & Pharmacovigilance',
                topics: [
                  'NDA & BLA Submission Process (FDA, EMA)',
                  'Post-Marketing Surveillance (Phase IV)',
                  'Signal Detection & Risk Management in Pharmacovigilance',
                ],
                handson: ['Examine an FDA-approved drug’s safety profile'],
              },
              {
                title: 'Future Trends & Innovations in Clinical Trials',
                topics: [
                  'Digital Trials & Remote Monitoring',
                  'AI & Machine Learning in Clinical Research',
                  'Personalized Medicine & Genomics-Based Trials',
                ],
                handson: ['Explore AI’s role in a clinical trial case study'],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    key: 'Clinical-Trials-and-Research-c53',
    title: 'Fundamentals of Clinical Trials & Research',
    description:
      'Learn the principles of clinical research, regulatory guidelines, and trial management.',
    modules: [
      {
        title: 'Fundamentals of Clinical Trials & Research',
        months: [
          {
            title: 'Month 1: Fundamentals of Clinical Trials & Research',
            weeks: [
              {
                title: 'Introduction to Clinical Research & Trials',
                topics: [
                  'Definition & Importance of Clinical Trials',
                  'Phases of Clinical Trials (Phase I–IV)',
                  'Key Stakeholders: Sponsors, CROs, Regulatory Bodies',
                ],
                handson: [
                  'Identify clinical trial phases for an approved drug',
                ],
              },
              {
                title: 'Regulatory Guidelines & Ethics in Clinical Trials',
                topics: [
                  'ICH-GCP (Good Clinical Practice) Guidelines',
                  'FDA, EMA, and Other Global Regulatory Agencies',
                  'Ethical Considerations & Informed Consent',
                ],
                handson: ['Analyze an informed consent form'],
              },
              {
                title: 'Study Design & Protocol Development',
                topics: [
                  'Types of Clinical Studies (RCTs, Observational, Adaptive)',
                  'Elements of a Clinical Trial Protocol',
                  'Blinding, Randomization, and Placebo-Controlled Studies',
                ],
                handson: ['Draft a simple clinical trial protocol outline'],
              },
              {
                title: 'Patient Recruitment & Site Management',
                topics: [
                  'Subject Eligibility & Inclusion/Exclusion Criteria',
                  'Challenges in Patient Recruitment & Retention',
                  'Role of Clinical Research Coordinators (CRCs)',
                ],
                handson: ['Identify recruitment challenges for a given study'],
              },
            ],
          },
          {
            title: 'Month 2: Data Management, Monitoring & Emerging Trends',
            weeks: [
              {
                title: 'Clinical Data Management & Biostatistics',
                topics: [
                  'Clinical Data Collection Methods (EDC Systems, CRFs)',
                  'Key Statistical Concepts (p-values, Confidence Intervals)',
                  'Adverse Event Reporting & Safety Monitoring',
                ],
                handson: ['Interpret basic clinical trial results'],
              },
              {
                title: 'Trial Monitoring & Quality Assurance',
                topics: [
                  'Role of Clinical Research Associates (CRAs)',
                  'Source Data Verification (SDV) & Monitoring Visits',
                  'Risk-Based Monitoring & Compliance Checks',
                ],
                handson: ['Review a monitoring checklist'],
              },
              {
                title: 'Drug Approval Process & Pharmacovigilance',
                topics: [
                  'NDA & BLA Submission Process (FDA, EMA)',
                  'Post-Marketing Surveillance (Phase IV)',
                  'Signal Detection & Risk Management in Pharmacovigilance',
                ],
                handson: ['Examine an FDA-approved drug’s safety profile'],
              },
              {
                title: 'Future Trends & Innovations in Clinical Trials',
                topics: [
                  'Digital Trials & Remote Monitoring',
                  'AI & Machine Learning in Clinical Research',
                  'Personalized Medicine & Genomics-Based Trials',
                ],
                handson: ['Explore AI’s role in a clinical trial case study'],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    key: 'Regulatory-Affairs-c48',
    title: 'Fundamentals of Regulatory Affairs',
    description:
      'Learn the key aspects of regulatory affairs, including drug approvals, compliance, and global regulations.',
    modules: [
      {
        title: 'Fundamentals of Regulatory Affairs',
        months: [
          {
            title: 'Month 1: Fundamentals of Regulatory Affairs',
            weeks: [
              {
                title: 'Introduction to Regulatory Affairs',
                topics: [
                  'Role & Importance of Regulatory Affairs in Healthcare',
                  'Overview of Regulatory Agencies (FDA, EMA, MHRA, CDSCO, WHO, ICH)',
                  'Drug Development Lifecycle & Regulatory Requirements',
                ],
                handson: ['Compare regulatory agencies across countries'],
              },
              {
                title: 'Drug Development & Clinical Trial Regulations',
                topics: [
                  'Phases of Drug Development (Preclinical to Post-Marketing)',
                  'Good Clinical Practice (GCP) & Clinical Trial Regulations',
                  'IND, NDA, ANDA, BLA Submissions (US FDA)',
                ],
                handson: ['Review a sample clinical trial protocol'],
              },
              {
                title: 'Regulatory Submissions & Dossier Preparation',
                topics: [
                  'Common Technical Document (CTD) & eCTD Format',
                  'Regulatory Submission Process (IND, NDA, MAA, ANDA)',
                  'Labeling Requirements & Package Inserts',
                ],
                handson: ['Identify key sections of an eCTD dossier'],
              },
              {
                title:
                  'Good Manufacturing Practices (GMP) & Quality Compliance',
                topics: [
                  'Good Manufacturing Practices (GMP) Guidelines',
                  'Quality by Design (QbD) & Process Validation',
                  'Regulatory Inspections & Audits (FDA 483, Warning Letters)',
                ],
                handson: ['Analyze a GMP compliance case study'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Regulatory Affairs & Global Regulations',
            weeks: [
              {
                title: 'Regulatory Affairs in Biologics & Medical Devices',
                topics: [
                  'Biologics & Biosimilars Regulations (BLA, EMA Guidelines)',
                  'Medical Device Regulations (EU MDR, US FDA 510(k), PMA)',
                  'Combination Products & In Vitro Diagnostics (IVDs)',
                ],
                handson: [
                  'Compare biologics vs. small molecule drug approval pathways',
                ],
              },
              {
                title: 'Global Regulatory Frameworks & Drug Safety',
                topics: [
                  'US FDA, European EMA, Japan PMDA, India CDSCO Regulations',
                  'Post-Marketing Surveillance & Pharmacovigilance (ICH E2E)',
                  'Adverse Event Reporting (MedWatch, EudraVigilance, FAERS)',
                ],
                handson: ['Review a sample pharmacovigilance report'],
              },
              {
                title: 'Regulatory Strategies for Market Access & Compliance',
                topics: [
                  'Orphan Drug Regulations & Fast Track Approvals',
                  'Pricing & Reimbursement Strategies (HTA, Market Access)',
                  'Life Cycle Management & Post-Approval Changes (Variations)',
                ],
                handson: [
                  'Analyze expedited approval pathways (Fast Track, Breakthrough Therapy)',
                ],
              },
              {
                title:
                  'Ethics, Legal Aspects & Future Trends in Regulatory Affairs',
                topics: [
                  'Ethical Considerations in Drug Development',
                  'Intellectual Property Rights (Patents, Exclusivity)',
                  'Digital Health, AI in Regulatory Affairs & Future Trends',
                ],
                handson: ['Discuss key ethical challenges in drug regulation'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'Regulatory-Affairs-c54',
    title: 'Fundamentals of Regulatory Affairs',
    description:
      'Learn the key aspects of regulatory affairs, including drug approvals, compliance, and global regulations.',
    modules: [
      {
        title: 'Fundamentals of Regulatory Affairs',
        months: [
          {
            title: 'Month 1: Fundamentals of Regulatory Affairs',
            weeks: [
              {
                title: 'Introduction to Regulatory Affairs',
                topics: [
                  'Role & Importance of Regulatory Affairs in Healthcare',
                  'Overview of Regulatory Agencies (FDA, EMA, MHRA, CDSCO, WHO, ICH)',
                  'Drug Development Lifecycle & Regulatory Requirements',
                ],
                handson: ['Compare regulatory agencies across countries'],
              },
              {
                title: 'Drug Development & Clinical Trial Regulations',
                topics: [
                  'Phases of Drug Development (Preclinical to Post-Marketing)',
                  'Good Clinical Practice (GCP) & Clinical Trial Regulations',
                  'IND, NDA, ANDA, BLA Submissions (US FDA)',
                ],
                handson: ['Review a sample clinical trial protocol'],
              },
              {
                title: 'Regulatory Submissions & Dossier Preparation',
                topics: [
                  'Common Technical Document (CTD) & eCTD Format',
                  'Regulatory Submission Process (IND, NDA, MAA, ANDA)',
                  'Labeling Requirements & Package Inserts',
                ],
                handson: ['Identify key sections of an eCTD dossier'],
              },
              {
                title:
                  'Good Manufacturing Practices (GMP) & Quality Compliance',
                topics: [
                  'Good Manufacturing Practices (GMP) Guidelines',
                  'Quality by Design (QbD) & Process Validation',
                  'Regulatory Inspections & Audits (FDA 483, Warning Letters)',
                ],
                handson: ['Analyze a GMP compliance case study'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Regulatory Affairs & Global Regulations',
            weeks: [
              {
                title: 'Regulatory Affairs in Biologics & Medical Devices',
                topics: [
                  'Biologics & Biosimilars Regulations (BLA, EMA Guidelines)',
                  'Medical Device Regulations (EU MDR, US FDA 510(k), PMA)',
                  'Combination Products & In Vitro Diagnostics (IVDs)',
                ],
                handson: [
                  'Compare biologics vs. small molecule drug approval pathways',
                ],
              },
              {
                title: 'Global Regulatory Frameworks & Drug Safety',
                topics: [
                  'US FDA, European EMA, Japan PMDA, India CDSCO Regulations',
                  'Post-Marketing Surveillance & Pharmacovigilance (ICH E2E)',
                  'Adverse Event Reporting (MedWatch, EudraVigilance, FAERS)',
                ],
                handson: ['Review a sample pharmacovigilance report'],
              },
              {
                title: 'Regulatory Strategies for Market Access & Compliance',
                topics: [
                  'Orphan Drug Regulations & Fast Track Approvals',
                  'Pricing & Reimbursement Strategies (HTA, Market Access)',
                  'Life Cycle Management & Post-Approval Changes (Variations)',
                ],
                handson: [
                  'Analyze expedited approval pathways (Fast Track, Breakthrough Therapy)',
                ],
              },
              {
                title:
                  'Ethics, Legal Aspects & Future Trends in Regulatory Affairs',
                topics: [
                  'Ethical Considerations in Drug Development',
                  'Intellectual Property Rights (Patents, Exclusivity)',
                  'Digital Health, AI in Regulatory Affairs & Future Trends',
                ],
                handson: ['Discuss key ethical challenges in drug regulation'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'artificial-intelligence-c55',
    title: 'Fundamentals of AI & Machine Learning',
    description:
      'Learn the fundamentals of AI and Machine Learning, including deep learning and real-world applications.',
    modules: [
      {
        title: 'Fundamentals of AI & Machine Learning',
        months: [
          {
            title: 'Month 1: Fundamentals of AI & Machine Learning',
            weeks: [
              {
                title: 'Introduction to AI & Machine Learning',
                topics: [
                  'What is AI? Types of AI (Narrow, General, Super AI)',
                  'Supervised vs Unsupervised vs Reinforcement Learning',
                  'AI applications (Computer Vision, NLP, Robotics)',
                ],
                handson: [
                  'Set up Python, Jupyter Notebook, install libraries (NumPy, Pandas, Matplotlib, Scikit-Learn, TensorFlow/PyTorch)',
                ],
              },
              {
                title: 'Python, Data Science, & Preprocessing',
                topics: [
                  'NumPy, Pandas (Data Manipulation)',
                  'Data visualization (Matplotlib, Seaborn)',
                  'Handling missing data, feature scaling, one-hot encoding',
                ],
                handson: ['Load and explore datasets (Iris, Titanic, MNIST)'],
              },
              {
                title: 'Supervised Learning (Regression & Classification)',
                topics: [
                  'Linear Regression, Logistic Regression',
                  'Decision Trees & Random Forest',
                  'Model evaluation (MSE, Accuracy, Precision, Recall, F1-score)',
                  'Overfitting & Regularization',
                ],
                handson: [
                  'Train and evaluate Regression & Classification models',
                ],
              },
              {
                title: 'Unsupervised Learning & Feature Engineering',
                topics: [
                  'Clustering (K-Means, Hierarchical, DBSCAN)',
                  'Dimensionality Reduction (PCA, t-SNE)',
                  'Feature Selection & Engineering Techniques',
                ],
                handson: ['Apply clustering and feature engineering'],
              },
            ],
          },
          {
            title: 'Month 2: Deep Learning & AI Applications',
            weeks: [
              {
                title: 'Neural Networks & Deep Learning Basics',
                topics: [
                  'Perceptron, Activation Functions',
                  'Feedforward Neural Networks (FNN)',
                  'Backpropagation & Gradient Descent',
                ],
                handson: [
                  'Implement a simple neural network using TensorFlow/PyTorch',
                ],
              },
              {
                title:
                  'Convolutional Neural Networks (CNNs) & Image Processing',
                topics: [
                  'CNN Layers (Convolution, Pooling, Fully Connected)',
                  'Image Classification (MNIST, CIFAR-10)',
                  'Transfer Learning & Pre-trained Models',
                ],
                handson: ['Train a CNN for image recognition'],
              },
              {
                title: 'Natural Language Processing (NLP) & Transformers',
                topics: [
                  'Text Preprocessing (Tokenization, Stopword Removal, Stemming/Lemmatization)',
                  'Word Embeddings (Word2Vec, GloVe)',
                  'Introduction to Transformers (BERT, GPT)',
                ],
                handson: ['Sentiment Analysis using Hugging Face Transformers'],
              },
              {
                title: 'AI Deployment & Future Learning',
                topics: [
                  'AI Ethics & Bias in AI',
                  'Deploy models using Flask / FastAPI / Streamlit',
                  'Future Learning Paths: Reinforcement Learning, GANs, AutoML',
                  'Overview of MLOps & Model Deployment',
                ],
                handson: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'machine-learning-c56',
    title: 'Machine Learning Fundamentals',
    description:
      'Learn the fundamentals of Machine Learning, including data preprocessing, model training, and deployment.',
    modules: [
      {
        title: 'Machine Learning Fundamentals',
        months: [
          {
            title: 'Month 1: Machine Learning Fundamentals',
            weeks: [
              {
                title: 'Introduction to Machine Learning',
                topics: [
                  'What is Machine Learning?',
                  'Types of ML: Supervised, Unsupervised, Reinforcement Learning',
                  'ML Workflow: Data Collection, Preprocessing, Model Training, Evaluation',
                ],
                handson: [
                  'Set up Python, Jupyter Notebook, install ML libraries (NumPy, Pandas, Matplotlib, Scikit-Learn)',
                ],
              },
              {
                title: 'Data Preprocessing & Feature Engineering',
                topics: [
                  'Handling missing data (mean, median, imputation)',
                  'Feature Scaling (Normalization vs Standardization)',
                  'Encoding categorical data (One-Hot Encoding, Label Encoding)',
                  'Feature Selection Techniques',
                ],
                handson: ['Apply preprocessing techniques using Scikit-Learn'],
              },
              {
                title: 'Supervised Learning – Regression',
                topics: [
                  'Linear Regression, Polynomial Regression',
                  'Gradient Descent & Cost Function',
                  'Model evaluation (MSE, RMSE, R² Score)',
                  'Overfitting & Regularization (L1, L2)',
                ],
                handson: ['Train and evaluate regression models'],
              },
              {
                title: 'Supervised Learning – Classification',
                topics: [
                  'Logistic Regression, Decision Trees, Random Forest',
                  'Support Vector Machines (SVM)',
                  'Model evaluation (Accuracy, Precision, Recall, F1-score, Confusion Matrix)',
                  'ROC Curve & AUC',
                ],
                handson: ['Train and evaluate classification models'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced ML & Model Optimization',
            weeks: [
              {
                title:
                  'Unsupervised Learning – Clustering & Dimensionality Reduction',
                topics: [
                  'K-Means Clustering, Hierarchical Clustering, DBSCAN',
                  'PCA, t-SNE for Dimensionality Reduction',
                ],
                handson: ['Apply clustering and PCA techniques'],
              },
              {
                title: 'Ensemble Learning & Model Optimization',
                topics: [
                  'Bagging (Random Forest), Boosting (AdaBoost, Gradient Boosting, XGBoost)',
                  'Hyperparameter Tuning (Grid Search, Random Search)',
                  'Cross-Validation Techniques',
                ],
                handson: ['Improve model performance using ensemble methods'],
              },
              {
                title: 'Neural Networks & Deep Learning Basics',
                topics: [
                  'Introduction to Perceptron & Artificial Neural Networks',
                  'Activation Functions (ReLU, Sigmoid, Softmax)',
                  'Forward & Backpropagation',
                ],
                handson: [
                  'Implement a simple neural network using TensorFlow/PyTorch',
                ],
              },
              {
                title: 'Model Deployment & MLOps Overview',
                topics: [
                  'Saving & Loading Models (Pickle, Joblib)',
                  'Introduction to Model Deployment (Flask, FastAPI)',
                  'Basics of MLOps (CI/CD, Model Monitoring)',
                  'Future Learning Paths: Reinforcement Learning, Generative AI',
                ],
                handson: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'data-science-c57',
    title: 'Foundations of Data Science & Analytics',
    description:
      'Learn the foundations of Data Science and Analytics, including data preprocessing, exploratory data analysis, and business insights.',
    modules: [
      {
        title: 'Foundations of Data Science & Analytics',
        months: [
          {
            title: 'Month 1: Foundations of Data Science & Analytics',
            weeks: [
              {
                title: 'Introduction to Data Science & Analytics',
                topics: [
                  'What is Data Science? Key Concepts',
                  'Difference between Data Science, Data Analytics, and Machine Learning',
                  'Real-world Applications (Finance, Healthcare, Marketing, etc.)',
                ],
                handson: [
                  'Set up Python, Jupyter Notebook, install libraries (NumPy, Pandas, Matplotlib, Seaborn)',
                ],
              },
              {
                title: 'Data Wrangling & Preprocessing',
                topics: [
                  'Data Collection (CSV, APIs, Databases)',
                  'Handling Missing Data (Imputation, Dropping)',
                  'Feature Engineering & Scaling',
                  'Encoding Categorical Variables (One-Hot, Label Encoding)',
                ],
                handson: ['Data preprocessing using Pandas & Scikit-learn'],
              },
              {
                title: 'Exploratory Data Analysis (EDA)',
                topics: [
                  'Summary Statistics (Mean, Median, Mode, Standard Deviation)',
                  'Data Visualization (Histograms, Boxplots, Scatterplots)',
                  'Correlation Analysis',
                  'Outlier Detection & Treatment',
                ],
                handson: [
                  'Perform EDA on a real-world dataset using Seaborn & Matplotlib',
                ],
              },
              {
                title: 'Statistics & Probability for Data Science',
                topics: [
                  'Probability Distributions (Normal, Binomial, Poisson)',
                  'Hypothesis Testing (T-tests, Chi-Square, ANOVA)',
                  'Confidence Intervals & P-Values',
                  'A/B Testing Basics',
                ],
                handson: ['Apply statistical tests using SciPy'],
              },
            ],
          },
          {
            title: 'Month 2: Machine Learning & Business Analytics',
            weeks: [
              {
                title: 'Introduction to Machine Learning',
                topics: [
                  'Types of Machine Learning: Supervised, Unsupervised',
                  'Linear Regression & Logistic Regression',
                  'Model Evaluation Metrics (MSE, R², Accuracy, Precision, Recall)',
                ],
                handson: ['Implement basic ML models in Scikit-learn'],
              },
              {
                title: 'Business Analytics & Decision Making',
                topics: [
                  'Key Business Metrics (Revenue, Retention, Churn)',
                  'Data-Driven Decision Making',
                  'Time Series Analysis Basics',
                ],
                handson: ['Analyze business data with Pandas'],
              },
              {
                title: 'Advanced Analytics Techniques',
                topics: [
                  'Clustering (K-Means, Hierarchical)',
                  'Dimensionality Reduction (PCA, t-SNE)',
                  'Sentiment Analysis Basics',
                ],
                handson: ['Implement clustering & sentiment analysis'],
              },
              {
                title: 'Data Science Deployment & Future Learning',
                topics: [
                  'Introduction to Data Engineering (ETL, Pipelines)',
                  'Deploying Data Science Models (Flask, Streamlit)',
                  'MLOps & Model Monitoring',
                  'Future Learning Paths: Deep Learning, Big Data, AI Ethics',
                ],
                handson: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'full-stack-web-development-c58',
    title: 'Full Stack Web Development',
    description:
      'Learn the fundamentals of Full Stack Web Development, including frontend and backend technologies, databases, and deployment.',
    modules: [
      {
        title: 'Frontend Development (HTML, CSS, JavaScript, React)',
        months: [
          {
            title:
              'Month 1: Frontend Development (HTML, CSS, JavaScript, React)',
            weeks: [
              {
                title: 'Introduction to Web Development & HTML/CSS',
                topics: [
                  'What is Full Stack Development?',
                  'Understanding Frontend vs Backend vs Full Stack',
                  'HTML Basics (Tags, Forms, Tables, Semantic HTML)',
                  'CSS Fundamentals (Selectors, Box Model, Flexbox, Grid)',
                ],
                handson: ['Build simple web pages with HTML & CSS'],
              },
              {
                title: 'JavaScript Basics',
                topics: [
                  'JavaScript Fundamentals (Variables, Data Types, Loops, Functions)',
                  'DOM Manipulation (Selecting Elements, Event Listeners)',
                  'ES6+ Features (Arrow Functions, Spread, Destructuring)',
                ],
                handson: [
                  'Build interactive elements (like dropdowns, modals)',
                ],
              },
              {
                title: 'Advanced JavaScript & Introduction to React',
                topics: [
                  'Asynchronous JavaScript (Callbacks, Promises, Async/Await)',
                  'Fetch API & RESTful APIs',
                  'Introduction to React (Components, JSX, Props)',
                ],
                handson: ['Create simple React components'],
              },
              {
                title: 'React Fundamentals & State Management',
                topics: [
                  'React Hooks (useState, useEffect)',
                  'Handling Forms in React',
                  'State Management with Context API',
                ],
                handson: ['Build a small interactive React app'],
              },
            ],
          },
          {
            title: 'Month 2: Backend Development & Deployment',
            weeks: [
              {
                title: 'Introduction to Backend (Node.js & Express.js)',
                topics: [
                  'What is a Backend? How Web Servers Work',
                  'Introduction to Node.js & NPM',
                  'Setting up an Express.js Server',
                ],
                handson: ['Create basic routes and middleware'],
              },
              {
                title: 'Databases & Authentication',
                topics: [
                  'Introduction to Databases (SQL vs NoSQL)',
                  'CRUD Operations with MongoDB',
                  'Authentication Basics (JWT, Sessions)',
                ],
                handson: ['Connect a Node.js backend to a database'],
              },
              {
                title: 'RESTful APIs & Advanced Backend Concepts',
                topics: [
                  'Building RESTful APIs with Express.js',
                  'Error Handling & Middleware',
                  'Deployment Basics (Hosting on Vercel, Netlify)',
                ],
                handson: ['Test APIs using Postman'],
              },
              {
                title: 'Full Stack Integration & Deployment',
                topics: [
                  'Connecting React Frontend to Node.js Backend',
                  'Environment Variables & Security Best Practices',
                  'Introduction to DevOps & CI/CD Basics',
                  'Future Learning Paths (Next.js, GraphQL, Docker)',
                ],
                handson: ['Deploy a basic full-stack application'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'qa-testing-c59',
    title: 'QA & Software Testing',
    description:
      'Learn the fundamentals of QA, manual testing, automation, and CI/CD integration.',
    modules: [
      {
        title: 'Fundamentals of QA & Manual Testing',
        months: [
          {
            title: 'Month 1: Fundamentals of QA & Manual Testing',
            weeks: [
              {
                title: 'Introduction to QA & Software Testing',
                topics: [
                  'What is Software Testing? Importance of QA',
                  'SDLC vs STLC (Software Testing Life Cycle)',
                  'Types of Testing (Functional, Non-Functional, Regression, Smoke, Sanity)',
                ],
                handson: ['Explore test cases in a real-world application'],
              },
              {
                title: 'Test Case Design & Bug Tracking',
                topics: [
                  'Test Scenarios vs Test Cases',
                  'Writing Effective Test Cases',
                  'Defect Life Cycle & Bug Reporting',
                ],
                handson: ['Write test cases and report defects in JIRA'],
              },
              {
                title: 'Agile Testing & Test Management',
                topics: [
                  'Agile & Scrum in Testing',
                  'Writing Test Plans & Test Strategies',
                  'Test Management Tools (JIRA, TestRail)',
                ],
                handson: ['Create test scenarios in an Agile workflow'],
              },
              {
                title: 'API Testing with Postman',
                topics: [
                  'Introduction to APIs & HTTP Methods',
                  'Testing RESTful APIs using Postman',
                  'Validating API Responses & Automating Tests',
                ],
                handson: ['Perform API tests using Postman'],
              },
            ],
          },
          {
            title: 'Month 2: Test Automation & CI/CD',
            weeks: [
              {
                title: 'Introduction to Automation Testing (Selenium & Python)',
                topics: [
                  'Why Automation Testing?',
                  'Introduction to Selenium WebDriver',
                  'Setting up Selenium with Python',
                ],
                handson: ['Write simple Selenium test scripts'],
              },
              {
                title: 'Advanced Selenium & Web Automation',
                topics: [
                  'Locators (XPath, CSS Selectors)',
                  'Handling Alerts, Frames, Windows',
                  'Implicit & Explicit Waits',
                ],
                handson: ['Automate a web login form'],
              },
              {
                title: 'CI/CD & Test Automation Frameworks',
                topics: [
                  'Introduction to Jenkins & Continuous Integration',
                  'TestNG/PyTest Framework for Automated Testing',
                  'Generating Test Reports',
                ],
                handson: ['Run automated tests in Jenkins'],
              },
              {
                title: 'Performance Testing & Future Learning',
                topics: [
                  'Introduction to Performance Testing',
                  'JMeter Basics & Load Testing',
                  'Security Testing Overview',
                  'Future Learning Paths: AI in Testing, API Automation, DevOps',
                ],
                handson: ['Run a basic performance test in JMeter'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'power-bi-c60',
    title: 'Power BI Fundamentals & Data Transformation',
    description:
      'Learn Power BI from basics to advanced dashboard building and data analytics.',
    modules: [
      {
        title: 'Power BI Fundamentals & Data Transformation',
        months: [
          {
            title: 'Month 1: Power BI Fundamentals & Data Transformation',
            weeks: [
              {
                title: 'Introduction to Power BI',
                topics: [
                  'What is Power BI? Key Features & Architecture',
                  'Power BI Components (Power Query, Power Pivot, Power View, Power BI Service)',
                  'Installing & Setting Up Power BI Desktop',
                ],
                handson: ['Connect Power BI to Excel and CSV data'],
              },
              {
                title: 'Data Import & Cleaning in Power Query',
                topics: [
                  'Connecting to Various Data Sources (Excel, SQL, Web, APIs)',
                  'Data Cleaning Techniques (Removing Duplicates, Handling Missing Data)',
                  'Transforming Data (Splitting, Merging, Changing Data Types)',
                ],
                handson: ['Load and clean data using Power Query'],
              },
              {
                title: 'Data Modeling & DAX Basics',
                topics: [
                  'Introduction to Data Modeling (Relationships, Star Schema)',
                  'Understanding Measures & Calculated Columns',
                  'Introduction to DAX (SUM, AVERAGE, COUNT, IF, RELATED)',
                ],
                handson: ['Create a simple data model with relationships'],
              },
              {
                title: 'Creating Basic Visualizations',
                topics: [
                  'Bar Charts, Line Charts, Pie Charts, Tables & Matrix',
                  'Filtering & Slicing Data (Slicers, Filters, Drill-through)',
                  'Formatting & Customizing Visuals',
                ],
                handson: ['Create interactive charts and use slicers'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Power BI & Dashboard Building',
            weeks: [
              {
                title: 'Advanced DAX & Calculations',
                topics: [
                  'Time Intelligence Functions (YTD, MTD, QTD, SAMEPERIODLASTYEAR)',
                  'Conditional Measures & Advanced Calculated Columns',
                  'Using Variables in DAX',
                ],
                handson: ['Implement advanced DAX calculations'],
              },
              {
                title: 'Advanced Visualizations & Custom Charts',
                topics: [
                  'Custom Visuals (KPI, Waterfall, TreeMap, Heatmaps)',
                  'Tooltips & Drillthrough Pages',
                  'Using Conditional Formatting',
                ],
                handson: ['Build a report using advanced visualizations'],
              },
              {
                title: 'Power BI Service & Data Refresh',
                topics: [
                  'Publishing Reports to Power BI Service',
                  'Creating Dashboards & Sharing Reports',
                  'Scheduled Data Refresh & Gateway Setup',
                ],
                handson: ['Publish and share reports in Power BI Service'],
              },
              {
                title: 'Power BI Best Practices & Future Learning',
                topics: [
                  'Performance Optimization in Power BI',
                  'Security & Row-Level Security (RLS)',
                  'Introduction to Power Automate & Power Apps',
                  'Future Learning: AI Visuals, Paginated Reports, Embedded Analytics',
                ],
                handson: ['Apply best practices to optimize reports'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'devops-c61',
    title: 'DevOps Fundamentals & Automation',
    description:
      'Learn DevOps from fundamentals to cloud, containers, and CI/CD automation.',
    modules: [
      {
        title: 'DevOps Fundamentals & Automation',
        months: [
          {
            title: 'Month 1: DevOps Fundamentals & Automation',
            weeks: [
              {
                title: 'Introduction to DevOps & Version Control',
                topics: [
                  'What is DevOps? DevOps Lifecycle & Benefits',
                  'Key DevOps Tools & Technologies Overview',
                  'Understanding Git & GitHub',
                ],
                handson: [
                  'Install Git, configure repositories, and use basic Git commands',
                ],
              },
              {
                title: 'Linux Basics & Shell Scripting for DevOps',
                topics: [
                  'Linux Commands & File System',
                  'User Management & Permissions',
                  'Shell Scripting (Loops, Variables, Functions)',
                ],
                handson: ['Write basic automation scripts'],
              },
              {
                title: 'CI/CD with Jenkins',
                topics: [
                  'Understanding CI/CD Pipelines',
                  'Installing & Configuring Jenkins',
                  'Writing Basic Pipelines (Freestyle & Declarative Pipelines)',
                ],
                handson: ['Create a simple CI/CD pipeline in Jenkins'],
              },
              {
                title: 'Configuration Management (Ansible)',
                topics: [
                  'Introduction to Configuration Management & Infrastructure as Code (IaC)',
                  'Ansible Playbooks & Roles',
                  'Automating Server Configuration with Ansible',
                ],
                handson: ['Write Ansible playbooks for server setup'],
              },
            ],
          },
          {
            title: 'Month 2: Cloud, Containers & Monitoring',
            weeks: [
              {
                title: 'Docker & Containerization',
                topics: [
                  'What is Docker? Why use Containers?',
                  'Docker Installation & Commands',
                  'Creating & Managing Docker Containers',
                ],
                handson: ['Build and run a Docker container'],
              },
              {
                title: 'Kubernetes & Container Orchestration',
                topics: [
                  'Understanding Kubernetes Architecture',
                  'Deploying Applications with Kubectl',
                  'Kubernetes Services & Networking',
                ],
                handson: ['Deploy a pod and service in Kubernetes'],
              },
              {
                title: 'Cloud & Infrastructure as Code (Terraform)',
                topics: [
                  'Introduction to AWS/GCP/Azure Basics',
                  'Infrastructure as Code (Terraform Basics)',
                  'Writing Terraform Scripts for Cloud Deployment',
                ],
                handson: ['Deploy cloud infrastructure using Terraform'],
              },
              {
                title: 'Monitoring, Logging & DevSecOps',
                topics: [
                  'Introduction to Monitoring (Prometheus, Grafana)',
                  'Logging with ELK Stack (Elasticsearch, Logstash, Kibana)',
                  'Security in DevOps (SAST, DAST, DevSecOps Principles)',
                ],
                handson: ['Set up basic monitoring using Prometheus'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'cloud-computing-c62',
    title: 'DevOps Fundamentals & Automation',
    description:
      'Learn DevOps from fundamentals to cloud, containers, and CI/CD automation.',
    modules: [
      {
        title: 'DevOps Fundamentals & Automation',
        months: [
          {
            title: 'Month 1: DevOps Fundamentals & Automation',
            weeks: [
              {
                title: 'Introduction to DevOps & Version Control',
                topics: [
                  'What is DevOps? DevOps Lifecycle & Benefits',
                  'Key DevOps Tools & Technologies Overview',
                  'Understanding Git & GitHub',
                ],
                handson: [
                  'Install Git, configure repositories, and use basic Git commands',
                ],
              },
              {
                title: 'Linux Basics & Shell Scripting for DevOps',
                topics: [
                  'Linux Commands & File System',
                  'User Management & Permissions',
                  'Shell Scripting (Loops, Variables, Functions)',
                ],
                handson: ['Write basic automation scripts'],
              },
              {
                title: 'CI/CD with Jenkins',
                topics: [
                  'Understanding CI/CD Pipelines',
                  'Installing & Configuring Jenkins',
                  'Writing Basic Pipelines (Freestyle & Declarative Pipelines)',
                ],
                handson: ['Create a simple CI/CD pipeline in Jenkins'],
              },
              {
                title: 'Configuration Management (Ansible)',
                topics: [
                  'Introduction to Configuration Management & Infrastructure as Code (IaC)',
                  'Ansible Playbooks & Roles',
                  'Automating Server Configuration with Ansible',
                ],
                handson: ['Write Ansible playbooks for server setup'],
              },
            ],
          },
          {
            title: 'Month 2: Cloud, Containers & Monitoring',
            weeks: [
              {
                title: 'Docker & Containerization',
                topics: [
                  'What is Docker? Why use Containers?',
                  'Docker Installation & Commands',
                  'Creating & Managing Docker Containers',
                ],
                handson: ['Build and run a Docker container'],
              },
              {
                title: 'Kubernetes & Container Orchestration',
                topics: [
                  'Understanding Kubernetes Architecture',
                  'Deploying Applications with Kubectl',
                  'Kubernetes Services & Networking',
                ],
                handson: ['Deploy a pod and service in Kubernetes'],
              },
              {
                title: 'Cloud & Infrastructure as Code (Terraform)',
                topics: [
                  'Introduction to AWS/GCP/Azure Basics',
                  'Infrastructure as Code (Terraform Basics)',
                  'Writing Terraform Scripts for Cloud Deployment',
                ],
                handson: ['Deploy cloud infrastructure using Terraform'],
              },
              {
                title: 'Monitoring, Logging & DevSecOps',
                topics: [
                  'Introduction to Monitoring (Prometheus, Grafana)',
                  'Logging with ELK Stack (Elasticsearch, Logstash, Kibana)',
                  'Security in DevOps (SAST, DAST, DevSecOps Principles)',
                ],
                handson: ['Set up basic monitoring using Prometheus'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'cyber-security-c63',
    title: 'Cybersecurity Fundamentals & Ethical Hacking',
    description:
      'Learn cybersecurity from fundamentals to advanced hacking techniques and security measures.',
    modules: [
      {
        title: 'Cybersecurity Fundamentals & Ethical Hacking Basics',
        months: [
          {
            title:
              'Month 1: Cybersecurity Fundamentals & Ethical Hacking Basics',
            weeks: [
              {
                title: 'Introduction to Cybersecurity & Ethical Hacking',
                topics: [
                  'What is Cybersecurity? Key Concepts & CIA Triad',
                  'Cyber Threats & Attack Types (Phishing, Ransomware, DDoS)',
                  'Ethical Hacking vs Black Hat Hacking',
                ],
                handson: ['Set up a virtual lab using VirtualBox/VMware'],
              },
              {
                title: 'Networking & Security Fundamentals',
                topics: [
                  'OSI & TCP/IP Models',
                  'Network Protocols (HTTP, HTTPS, DNS, FTP, SSH)',
                  'Firewalls, IDS & IPS',
                ],
                handson: ['Use Wireshark to capture network traffic'],
              },
              {
                title: 'Linux & Windows Security Basics',
                topics: [
                  'Linux Command Line for Security Professionals',
                  'Windows Security & PowerShell Basics',
                  'Privilege Escalation Techniques',
                ],
                handson: ['Configure basic firewall rules & analyze logs'],
              },
              {
                title: 'Reconnaissance & Vulnerability Assessment',
                topics: [
                  'Passive & Active Reconnaissance',
                  'Google Dorking & OSINT Techniques',
                  'Vulnerability Scanning (Nmap, Nessus, OpenVAS)',
                ],
                handson: ['Perform basic scanning using Nmap'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Hacking Techniques & Security Measures',
            weeks: [
              {
                title: 'Web Application Security & Exploitation',
                topics: [
                  'Common Web Vulnerabilities (SQL Injection, XSS, CSRF)',
                  'OWASP Top 10 Overview',
                  'Web Application Firewalls (WAF)',
                ],
                handson: ['Use Burp Suite to analyze HTTP requests'],
              },
              {
                title: 'Password Cracking & Cryptography',
                topics: [
                  'Hashing & Encryption Basics (AES, RSA, SHA)',
                  'Password Cracking Techniques (Brute Force, Dictionary Attacks)',
                  'Secure Authentication Methods (MFA, OAuth)',
                ],
                handson: ['Crack a hashed password using John the Ripper'],
              },
              {
                title: 'Malware Analysis & Digital Forensics',
                topics: [
                  'Understanding Malware Types (Trojan, Worms, Ransomware)',
                  'Basics of Reverse Engineering Malware',
                  'Introduction to Digital Forensics & Incident Response',
                ],
                handson: ['Analyze a malicious file in a sandbox environment'],
              },
              {
                title: 'Security Best Practices & Future Learning',
                topics: [
                  'Security Hardening for Systems & Networks',
                  'Introduction to Penetration Testing',
                  'Cybersecurity Careers & Certifications (CEH, OSCP, CISSP)',
                ],
                handson: ['Secure a system by applying best practices'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'mobile-app-development-c64',
    title: 'Mobile App Development Fundamentals',
    description:
      'Learn mobile app development from fundamentals to advanced topics and deployment techniques.',
    modules: [
      {
        title: 'Mobile App Development Fundamentals',
        months: [
          {
            title: 'Month 1: Mobile App Development Fundamentals',
            weeks: [
              {
                title: 'Introduction to Mobile App Development',
                topics: [
                  'Overview of Mobile App Ecosystem (Android vs iOS)',
                  'Native vs Hybrid vs Cross-Platform Development',
                  'Setting Up Development Environment',
                  'Android: Install Android Studio, Emulator Setup',
                  'iOS: Install Xcode (Mac Users)',
                ],
                handson: ['Create a basic ‘Hello World’ app'],
              },
              {
                title: 'UI/UX Design & Navigation',
                topics: [
                  'Understanding Mobile UI/UX Principles',
                  'Layouts & Views (ConstraintLayout, Jetpack Compose for Android, SwiftUI for iOS)',
                  'Buttons, TextFields, Images, Lists',
                  'Navigation & Routing (Activities, Fragments, Navigation Controller)',
                ],
                handson: ['Design basic UI components'],
              },
              {
                title: 'Working with User Input & Forms',
                topics: [
                  'Handling User Input (Forms, TextFields, Buttons)',
                  'Validations & Error Handling',
                  'Using Local Storage (Shared Preferences, UserDefaults)',
                ],
                handson: ['Build a simple form with validation'],
              },
              {
                title: 'State Management & Basic API Calls',
                topics: [
                  'Understanding State in Mobile Apps',
                  'RESTful APIs & HTTP Requests (Retrofit for Android, URLSession for iOS)',
                  'JSON Parsing & Data Binding',
                ],
                handson: ['Fetch and display data from an API'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Topics & Deployment',
            weeks: [
              {
                title: 'Working with Databases',
                topics: [
                  'Introduction to Mobile Databases',
                  'SQLite & Room Database (Android)',
                  'CoreData (iOS)',
                ],
                handson: ['Store and retrieve data from a local database'],
              },
              {
                title: 'Notifications & Background Tasks',
                topics: [
                  'Push Notifications (Firebase Cloud Messaging, APNs)',
                  'Background Services & Multithreading',
                ],
                handson: ['Implement local notifications'],
              },
              {
                title: 'Authentication & Security',
                topics: [
                  'User Authentication (Firebase Auth, OAuth)',
                  'Secure Data Storage (Keychain, Encrypted SharedPreferences)',
                ],
                handson: ['Implement basic authentication'],
              },
              {
                title: 'App Deployment & Best Practices',
                topics: [
                  'Preparing an App for Deployment',
                  'Publishing to Google Play Store & Apple App Store',
                  'App Performance Optimization & Debugging',
                  'Future Learning Paths (Flutter, React Native, Swift vs Kotlin)',
                ],
                handson: ['Test and optimize an app for release'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'robotics-c65',
    title: 'Robotics Fundamentals & Advanced Applications',
    description:
      'Learn robotics from fundamental hardware concepts to AI-powered automation and advanced applications.',
    modules: [
      {
        title: 'Robotics Fundamentals & Hardware Components',
        months: [
          {
            title: 'Month 1: Robotics Fundamentals & Hardware Components',
            weeks: [
              {
                title: 'Introduction to Robotics',
                topics: [
                  'What is Robotics? Applications & Types of Robots',
                  'Components of a Robot (Sensors, Actuators, Controllers)',
                  'Introduction to Microcontrollers & Single-Board Computers (Arduino, Raspberry Pi)',
                ],
                handson: ['Set up Arduino/Raspberry Pi & run a basic program'],
              },
              {
                title: 'Sensors & Actuators in Robotics',
                topics: [
                  'Types of Sensors (Ultrasonic, IR, LIDAR, IMU, Camera)',
                  'Types of Actuators (Servo, DC Motors, Stepper Motors)',
                  'Signal Processing Basics',
                ],
                handson: ['Interface a basic sensor & actuator with Arduino'],
              },
              {
                title: 'Kinematics & Motion Control',
                topics: [
                  'Forward & Inverse Kinematics',
                  'Degrees of Freedom (DOF) & Coordinate Systems',
                  'Motion Planning Algorithms (A*, Dijkstra’s Algorithm)',
                ],
                handson: ['Simulate kinematics using Python (SymPy, NumPy)'],
              },
              {
                title: 'Microcontrollers & Embedded Systems',
                topics: [
                  'Microcontroller Basics (Arduino, ESP32)',
                  'Communication Protocols (I2C, SPI, UART)',
                  'Real-Time Operating Systems (RTOS)',
                ],
                handson: ['Control multiple devices using I2C/SPI'],
              },
            ],
          },
          {
            title: 'Month 2: Control Systems, AI, and Advanced Robotics',
            weeks: [
              {
                title: 'Control Systems in Robotics',
                topics: [
                  'PID Controllers (Proportional, Integral, Derivative)',
                  'Open-Loop vs Closed-Loop Control',
                  'Stability & Response Time in Control Systems',
                ],
                handson: ['Implement a basic PID controller in Python'],
              },
              {
                title: 'Introduction to AI & Machine Learning in Robotics',
                topics: [
                  'Basics of Machine Learning for Robotics',
                  'Computer Vision (OpenCV for Object Detection)',
                  'Reinforcement Learning in Robotics',
                ],
                handson: [
                  'Train a basic image classification model for robots',
                ],
              },
              {
                title: 'Robot Operating System (ROS) & Simulation',
                topics: [
                  'Introduction to ROS & Gazebo',
                  'ROS Topics, Nodes & Services',
                  'Simulating a Robot in ROS',
                ],
                handson: ['Write a basic ROS node'],
              },
              {
                title: 'Robotics Applications & Future Learning',
                topics: [
                  'Autonomous Vehicles & Drones',
                  'Humanoid & Assistive Robots',
                  'Ethics in Robotics & Safety Considerations',
                ],
                handson: ['Test and optimize simple robotic functions'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'arvr-development-c66',
    title: 'AR & VR Fundamentals & Development',
    description:
      'Learn the fundamentals of Augmented Reality (AR) and Virtual Reality (VR), including development tools, interaction mechanics, and deployment.',
    modules: [
      {
        title: 'AR & VR Fundamentals & Development Tools',
        months: [
          {
            title: 'Month 1: AR & VR Fundamentals & Development Tools',
            weeks: [
              {
                title: 'Introduction to AR & VR',
                topics: [
                  'Difference Between AR, VR & MR (Mixed Reality)',
                  'Applications of AR & VR (Gaming, Healthcare, Education, Industry)',
                  'Types of VR (Non-Immersive, Semi-Immersive, Fully Immersive)',
                  'AR vs. Marker-Based & Markerless Tracking',
                ],
                handson: [
                  'Explore AR & VR apps (Google ARCore, Meta Quest, etc.)',
                ],
              },
              {
                title: 'AR & VR Development Tools Overview',
                topics: [
                  'Overview of AR SDKs (ARCore, ARKit, Vuforia)',
                  'Overview of VR Platforms (Unity, Unreal Engine, WebXR)',
                  'Introduction to Unity & Unreal Engine',
                ],
                handson: [
                  'Install Unity/Unreal Engine and explore sample AR/VR projects',
                ],
              },
              {
                title: 'AR Development Basics',
                topics: [
                  'Understanding ARCore (Android) & ARKit (iOS)',
                  'Image & Object Recognition in AR',
                  'AR Foundation in Unity',
                ],
                handson: ['Create a simple marker-based AR app in Unity'],
              },
              {
                title: 'VR Development Basics',
                topics: [
                  'Introduction to VR Headsets (Oculus, HTC Vive, PSVR)',
                  'Understanding VR Controllers & Tracking Systems',
                  'Creating a Basic VR Scene in Unity',
                ],
                handson: ['Set up a VR environment in Unity'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced AR/VR Interactions & Applications',
            weeks: [
              {
                title: '3D Models & UI/UX in AR/VR',
                topics: [
                  'Basics of 3D Modeling (Blender, Maya)',
                  'Optimizing 3D Models for AR/VR Performance',
                  'UI/UX Design Principles for AR/VR Interfaces',
                ],
                handson: ['Import and manipulate a 3D model in Unity/Unreal'],
              },
              {
                title: 'Interaction & Physics in AR/VR',
                topics: [
                  'User Interaction in AR/VR (Hand Tracking, Gaze, Controllers)',
                  'Implementing Physics & Collision in AR/VR',
                  'Haptic Feedback & Audio Integration',
                ],
                handson: ['Add interaction mechanics in a VR scene'],
              },
              {
                title: 'Spatial Mapping & AI in AR/VR',
                topics: [
                  'Environment Mapping & SLAM (Simultaneous Localization & Mapping)',
                  'AI in AR/VR (Object Detection, Gesture Recognition)',
                ],
                handson: [
                  'Use spatial mapping to interact with real-world objects in AR',
                ],
              },
              {
                title: 'AR/VR Deployment & Future Trends',
                topics: [
                  'Deploying AR/VR Apps (Mobile, WebXR, Standalone VR)',
                  'Future Trends in AR/VR (Metaverse, AI Integration, Cloud XR)',
                  'Exploring AR/VR Career Paths & Certifications',
                ],
                handson: ['Package and test a simple AR/VR experience'],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    key: 'medical-coding-c67',
    title: 'Medical Coding Fundamentals & Advanced Coding Techniques',
    description:
      'Learn medical coding from fundamental principles to advanced coding techniques and compliance.',
    modules: [
      {
        title: 'Medical Coding Fundamentals',
        months: [
          {
            title: 'Month 1: Medical Coding Fundamentals',
            weeks: [
              {
                title: 'Introduction to Medical Coding & Healthcare System',
                topics: [
                  'Overview of Medical Coding & Its Importance',
                  'Healthcare System Structure (Providers, Payers, Regulations)',
                  'Coding Systems: ICD, CPT, HCPCS Overview',
                ],
                handson: ['Familiarize with coding books (ICD-10, CPT, HCPCS)'],
              },
              {
                title: 'Medical Terminology & Anatomy for Coders',
                topics: [
                  'Basic Medical Terminology (Prefixes, Suffixes, Root Words)',
                  'Human Body Systems Overview',
                  'Common Diseases & Conditions (Diagnostic Terms)',
                ],
                handson: ['Practice decoding medical terms using word parts'],
              },
              {
                title: 'ICD-10-CM (Diagnosis Coding)',
                topics: [
                  'Introduction to ICD-10-CM Structure',
                  'Guidelines for Assigning Codes',
                  'Coding for Common Diagnoses (Infectious Diseases, Cardiology, Orthopedics)',
                ],
                handson: ['Assign ICD-10-CM codes for sample diagnoses'],
              },
              {
                title: 'CPT (Procedural Coding) Basics',
                topics: [
                  'Understanding CPT Code Categories',
                  'Modifiers in CPT Coding',
                  'Coding for Surgeries, Office Visits, & Medical Procedures',
                ],
                handson: ['Assign CPT codes for sample procedures'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Coding & Compliance',
            weeks: [
              {
                title: 'HCPCS Level II & Drug Coding',
                topics: [
                  'Introduction to HCPCS Level II',
                  'Durable Medical Equipment (DME) Coding',
                  'Medication & Supply Coding',
                ],
                handson: ['Assign HCPCS codes for medical supplies & drugs'],
              },
              {
                title: 'Medical Billing, Reimbursement & Insurance',
                topics: [
                  'Medical Billing Process & Revenue Cycle Management',
                  'Insurance Plans (Medicare, Medicaid, Private Insurers)',
                  'Claim Submission, Denials, & Appeals',
                ],
                handson: ['Review sample medical claims'],
              },
              {
                title: 'Compliance, Auditing & Ethical Guidelines',
                topics: [
                  'HIPAA & Patient Confidentiality',
                  'Fraud & Abuse (Upcoding, Unbundling, Stark Law)',
                  'Internal Audits & Compliance Programs',
                ],
                handson: ['Identify coding errors & compliance violations'],
              },
              {
                title: 'Career Preparation & Certification Overview',
                topics: [
                  'Medical Coding Career Paths & Certifications (CPC, CCS, CCA)',
                  'Exam Preparation Strategies (AAPC & AHIMA)',
                  'Practice Questions & Mock Coding Exercises',
                ],
                handson: ['Complete a practice coding exam'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'sas-programming-c68',
    title: 'SAS Fundamentals & Advanced Data Analysis',
    description:
      'Learn SAS from fundamental principles to advanced data analysis and reporting.',
    modules: [
      {
        title: 'SAS Fundamentals & Advanced Data Analysis',
        months: [
          {
            title: 'Month 1: SAS Fundamentals & Data Manipulation',
            weeks: [
              {
                title: 'Introduction to SAS & Basics',
                topics: [
                  'What is SAS? Applications in Data Analysis & Business Intelligence',
                  'Installing SAS (SAS University Edition, SAS OnDemand)',
                  'SAS Interface & Components (SAS Editor, Log, Output Window)',
                  'Writing & Running Basic SAS Programs',
                ],
                handson: ['Write & execute a simple SAS program'],
              },
              {
                title: 'Data Input, Import & Export',
                topics: [
                  'Reading Data in SAS (DATALINES, INFILE, IMPORT)',
                  'Importing Data from Excel, CSV, & Databases',
                  'Exporting Data to Different Formats',
                ],
                handson: ['Import & export datasets in SAS'],
              },
              {
                title: 'Data Manipulation & Cleaning',
                topics: [
                  'Understanding SAS Datasets (Observations & Variables)',
                  'Using DATA Step for Data Cleaning & Transformation',
                  'Conditional Processing (IF-THEN-ELSE, CASE Statements)',
                  'Handling Missing Data',
                ],
                handson: ['Clean and modify a dataset using SAS'],
              },
              {
                title: 'Data Sorting, Filtering, & Combining',
                topics: [
                  'Sorting Data (PROC SORT)',
                  'Filtering Data (WHERE, IF conditions)',
                  'Merging & Joining Datasets (SET, MERGE, PROC SQL JOIN)',
                ],
                handson: ['Merge two datasets & filter based on conditions'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Data Analysis & Reporting',
            weeks: [
              {
                title: 'Statistical Analysis in SAS',
                topics: [
                  'Descriptive Statistics (PROC MEANS, PROC UNIVARIATE)',
                  'Frequency Tables & Cross-tabulations (PROC FREQ)',
                  'Correlation & Regression (PROC CORR, PROC REG)',
                ],
                handson: ['Perform basic statistical analysis on sample data'],
              },
              {
                title: 'Data Visualization & Reporting',
                topics: [
                  'Creating Reports using PROC PRINT & PROC REPORT',
                  'Generating Graphs & Charts (PROC SGPLOT, PROC GCHART)',
                  'Formatting Output (ODS, PDF, HTML, RTF)',
                ],
                handson: ['Generate a formatted report with charts'],
              },
              {
                title: 'SAS Macros & Automation',
                topics: [
                  'Introduction to Macros & Macro Variables',
                  'Writing Macro Programs (Defining & Calling Macros)',
                  'Automating Repetitive Tasks in SAS',
                ],
                handson: ['Write a basic SAS macro for automation'],
              },
              {
                title: 'SQL in SAS & Optimization',
                topics: [
                  'Introduction to PROC SQL',
                  'Querying & Summarizing Data',
                  'Optimizing SAS Code for Efficiency',
                ],
                handson: ['Write & execute SQL queries in SAS'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'pharmacovigilance-c69',
    title: 'Fundamentals & Advanced Topics in Pharmacovigilance',
    description:
      'Learn Pharmacovigilance from fundamental principles to advanced risk management and regulatory compliance.',
    modules: [
      {
        title: 'Fundamentals & Advanced Topics in Pharmacovigilance',
        months: [
          {
            title: 'Month 1: Fundamentals of Pharmacovigilance',
            weeks: [
              {
                title: 'Introduction to Pharmacovigilance',
                topics: [
                  'Definition, Scope, and Importance of Pharmacovigilance',
                  'History and Development of Drug Safety Monitoring',
                  'Key Stakeholders (Regulatory Agencies, Pharma Companies, WHO)',
                ],
                handson: ['Review case studies of major drug recalls'],
              },
              {
                title: 'Drug Development & Regulatory Frameworks',
                topics: [
                  'Phases of Clinical Trials (Preclinical to Post-Marketing Surveillance)',
                  'International Regulatory Bodies (FDA, EMA, MHRA, CDSCO, ICH, WHO)',
                  'Overview of Good Pharmacovigilance Practices (GVP)',
                ],
                handson: ['Compare regulatory requirements across countries'],
              },
              {
                title: 'Adverse Drug Reactions (ADR) & Signal Detection',
                topics: [
                  'Types of Adverse Drug Reactions (ADR) (Type A & B)',
                  'Identifying & Assessing ADRs',
                  'Signal Detection & Risk-Benefit Analysis',
                ],
                handson: ['Analyze ADR case reports'],
              },
              {
                title: 'Adverse Event (AE) Reporting & Case Processing',
                topics: [
                  'Individual Case Safety Reports (ICSR) – Structure & Importance',
                  'MedDRA Coding System for ADRs',
                  'AE Reporting Systems (FAERS, EudraVigilance, VigiBase)',
                ],
                handson: ['Familiarize with MedDRA terminology'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Topics in Pharmacovigilance',
            weeks: [
              {
                title: 'Periodic Safety Reports & Risk Management Plans (RMPs)',
                topics: [
                  'Periodic Safety Update Reports (PSUR) & Periodic Benefit-Risk Evaluation Reports (PBRER)',
                  'Risk Management Plans (RMPs) & Post-Marketing Safety Studies (PMSS)',
                ],
                handson: ['Review a sample RMP'],
              },
              {
                title: 'Pharmacovigilance in Special Populations',
                topics: [
                  'Pediatric & Geriatric Pharmacovigilance',
                  'Drug Safety in Pregnancy & Lactation',
                  'Pharmacovigilance for Herbal & Biologic Products',
                ],
                handson: [
                  'Analyze safety concerns for a specific drug in a special population',
                ],
              },
              {
                title: 'Compliance, Audits & Pharmacovigilance Inspections',
                topics: [
                  'Good Pharmacovigilance Practices (GVP) Compliance',
                  'Audit & Inspection Process (FDA, EMA, MHRA)',
                  'Common Findings & Corrective Actions in PV Audits',
                ],
                handson: ['Conduct a mock compliance checklist review'],
              },
              {
                title: 'Career Pathways & Future Trends in Pharmacovigilance',
                topics: [
                  'Roles in Pharmacovigilance (Drug Safety Associate, PV Officer, Risk Management)',
                  'AI & Big Data in Pharmacovigilance',
                  'Emerging Trends (Pharmacogenomics, Personalized Medicine)',
                ],
                handson: [
                  'Explore online PV databases & certification options',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'nano-science-nano-technology-c70',
    title: 'Fundamentals & Advanced Topics in Nanotechnology',
    description:
      'Learn Nanotechnology from fundamental principles to advanced applications and future trends.',
    modules: [
      {
        title: 'Fundamentals & Advanced Topics in Nanotechnology',
        months: [
          {
            title: 'Month 1: Fundamentals & Synthesis of Nanomaterials',
            weeks: [
              {
                title: 'Introduction to Nanoscience & Nanotechnology',
                topics: [
                  'Definition & Scope of Nanoscience and Nanotechnology',
                  'Historical Development & Key Discoveries (Feynman, Drexler, etc.)',
                  'Unique Properties of Nanomaterials (Size Effects, Quantum Effects)',
                ],
                handson: ['Explore nanotech applications in daily life'],
              },
              {
                title: 'Types & Classification of Nanomaterials',
                topics: [
                  'Zero, One, Two, and Three-Dimensional Nanomaterials',
                  'Carbon-Based Nanomaterials (Fullerenes, Carbon Nanotubes, Graphene)',
                  'Metal, Metal-Oxide, and Polymer-Based Nanomaterials',
                ],
                handson: [
                  'Compare properties of bulk vs. nano-sized materials',
                ],
              },
              {
                title: 'Synthesis Methods of Nanomaterials',
                topics: [
                  'Top-Down Approaches: Lithography, Ball Milling, Etching',
                  'Bottom-Up Approaches: Sol-Gel, Chemical Vapor Deposition (CVD), Self-Assembly',
                  'Green Nanotechnology & Eco-Friendly Synthesis Methods',
                ],
                handson: [
                  'Study images of nanomaterial structures from research papers',
                ],
              },
              {
                title: 'Characterization Techniques in Nanotechnology',
                topics: [
                  'Microscopy Techniques (SEM, TEM, AFM)',
                  'Spectroscopy Techniques (XRD, FTIR, UV-Vis, Raman)',
                  'Thermal & Electrical Property Measurement Techniques',
                ],
                handson: ['Interpret SEM/TEM images from published research'],
              },
            ],
          },
          {
            title: 'Month 2: Applications, Challenges & Future Trends',
            weeks: [
              {
                title: 'Nanotechnology in Electronics & Energy',
                topics: [
                  'Nanoelectronics (Transistors, Quantum Dots, Memory Devices)',
                  'Nanotechnology in Solar Cells & Batteries (Lithium-Ion, Supercapacitors)',
                ],
                handson: ['Review real-world nano-based energy applications'],
              },
              {
                title: 'Biomedical & Environmental Applications',
                topics: [
                  'Nanomedicine (Drug Delivery, Cancer Therapy, Biosensors)',
                  'Antimicrobial Nanoparticles & Water Purification',
                  'Nanotoxicology & Biocompatibility Concerns',
                ],
                handson: ['Analyze case studies on nanomedicine breakthroughs'],
              },
              {
                title: 'Industrial & Commercial Applications of Nanotechnology',
                topics: [
                  'Nanotechnology in Food & Agriculture (Nano-fertilizers, Smart Packaging)',
                  'Nano-Coatings, Smart Textiles & Cosmetics',
                  'Nanomanufacturing & Scale-Up Challenges',
                ],
                handson: [
                  'Identify nano-based commercial products & their benefits',
                ],
              },
              {
                title:
                  'Ethical, Regulatory, and Future Perspectives in Nanotechnology',
                topics: [
                  'Ethical Concerns & Environmental Impact',
                  'Nanotechnology Regulations (FDA, EPA, ISO Standards)',
                  'Emerging Trends: Quantum Computing, AI in Nanotech, Self-Replicating Nanobots',
                ],
                handson: [
                  'Discuss potential risks and ethical dilemmas in nanotechnology',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'clinical-sas-c71',
    title: 'Fundamentals of Clinical SAS Programming & Clinical SAS',
    description:
      'Learn Clinical SAS Programming & Clinical SAS from fundamentals to advanced applications in regulatory submissions.',
    modules: [
      {
        title: 'Fundamentals of Clinical SAS Programming & Clinical SAS',
        months: [
          {
            title:
              'Month 1: Fundamentals of Clinical SAS Programming & Clinical SAS',
            weeks: [
              {
                title: 'Introduction to Clinical SAS',
                topics: [
                  'Overview of SAS in the Pharmaceutical Industry',
                  'Basics of Clinical Trials & Regulatory Requirements (FDA, ICH-GCP)',
                  'Introduction to SAS Environment & Base SAS Programming & Clinical SAS',
                ],
                handson: [
                  'Navigate SAS interface & execute basic SAS commands',
                ],
              },
              {
                title: 'Data Handling & Manipulation in SAS',
                topics: [
                  'Importing & Exporting Clinical Data (Excel, CSV, TXT)',
                  'Data Cleaning: Handling Missing Values & Outliers',
                  'Creating & Modifying Datasets (DATA Step, SET, MERGE, PROC SQL)',
                ],
                handson: ['Merge and clean sample clinical trial datasets'],
              },
              {
                title: 'Clinical Trial Data Structures',
                topics: [
                  'Understanding SDTM (Study Data Tabulation Model)',
                  'Raw Data vs. Derived Data in Clinical Trials',
                  'Creating SAS Libraries & Data Formats for Clinical Data',
                ],
                handson: [
                  'Convert raw patient data into an SDTM-compliant format',
                ],
              },
              {
                title: 'Descriptive Statistics & Clinical Data Analysis',
                topics: [
                  'PROC MEANS, PROC FREQ, PROC UNIVARIATE',
                  'Generating Summary Statistics for Clinical Trials',
                  'Exploratory Data Analysis (EDA) & Graphs for Clinical Reports',
                ],
                handson: [
                  'Generate demographic tables & adverse event summaries',
                ],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Clinical SAS & Regulatory Standards',
            weeks: [
              {
                title: 'Clinical Data Analysis & Reporting',
                topics: [
                  'Creating Clinical Trial Listings, Tables, and Figures (TLFs)',
                  'PROC REPORT & PROC TABULATE for Clinical Reporting',
                  'Generating PDF, RTF, and Excel Reports for Regulatory Submission',
                ],
                handson: [
                  'Develop safety and efficacy reports using PROC REPORT',
                ],
              },
              {
                title: 'CDISC ADaM (Analysis Data Model)',
                topics: [
                  'Introduction to ADaM Standards & Regulatory Compliance',
                  'Creating ADaM Datasets & Key Variables',
                  'Generating Derived Variables for Statistical Analysis',
                ],
                handson: ['Convert SDTM data to ADaM format'],
              },
              {
                title: 'Statistical Analysis for Clinical Trials',
                topics: [
                  'Hypothesis Testing & Statistical Methods (T-tests, ANOVA)',
                  'Survival Analysis & Kaplan-Meier Curves in SAS',
                  'PROC GLM, PROC MIXED for Clinical Trial Data',
                ],
                handson: ['Perform survival analysis on patient dataset'],
              },
              {
                title: 'SAS Macros & Automation in Clinical Reporting',
                topics: [
                  'Introduction to SAS Macros for Efficiency',
                  'Creating Reusable Macro Variables & Functions',
                  'Automating Report Generation in Clinical SAS',
                ],
                handson: ['Write a macro to automate table generation'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'ai-c72',
    title: 'Fundamentals of AI & Machine Learning',
    description:
      'Learn AI & Machine Learning from basics to advanced applications, including deep learning and deployment.',
    modules: [
      {
        title: 'Fundamentals of AI & Machine Learning',
        months: [
          {
            title: 'Month 1: Fundamentals of AI & Machine Learning',
            weeks: [
              {
                title: 'Introduction to AI & Machine Learning',
                topics: [
                  'What is AI? Types of AI (Narrow, General, Super AI)',
                  'Supervised vs Unsupervised vs Reinforcement Learning',
                  'AI applications (Computer Vision, NLP, Robotics)',
                ],
                handson: [
                  'Set up Python, Jupyter Notebook, install libraries (NumPy, Pandas, Matplotlib, Scikit-Learn, TensorFlow/PyTorch)',
                ],
              },
              {
                title: 'Python, Data Science, & Preprocessing',
                topics: [
                  'NumPy, Pandas (Data Manipulation)',
                  'Data visualization (Matplotlib, Seaborn)',
                  'Handling missing data, feature scaling, one-hot encoding',
                ],
                handson: ['Load and explore datasets (Iris, Titanic, MNIST)'],
              },
              {
                title: 'Supervised Learning (Regression & Classification)',
                topics: [
                  'Linear Regression, Logistic Regression',
                  'Decision Trees & Random Forest',
                  'Model evaluation (MSE, Accuracy, Precision, Recall, F1-score)',
                  'Overfitting & Regularization',
                ],
                handson: [
                  'Train and evaluate Regression & Classification models',
                ],
              },
              {
                title: 'Unsupervised Learning & Feature Engineering',
                topics: [
                  'Clustering (K-Means, Hierarchical, DBSCAN)',
                  'Dimensionality Reduction (PCA, t-SNE)',
                  'Feature Selection & Engineering Techniques',
                ],
                handson: ['Apply clustering and feature engineering'],
              },
            ],
          },
          {
            title: 'Month 2: Deep Learning & AI Applications',
            weeks: [
              {
                title: 'Neural Networks & Deep Learning Basics',
                topics: [
                  'Perceptron, Activation Functions',
                  'Feedforward Neural Networks (FNN)',
                  'Backpropagation & Gradient Descent',
                ],
                handson: [
                  'Implement a simple neural network using TensorFlow/PyTorch',
                ],
              },
              {
                title:
                  'Convolutional Neural Networks (CNNs) & Image Processing',
                topics: [
                  'CNN Layers (Convolution, Pooling, Fully Connected)',
                  'Image Classification (MNIST, CIFAR-10)',
                  'Transfer Learning & Pre-trained Models',
                ],
                handson: ['Train a CNN for image recognition'],
              },
              {
                title: 'Natural Language Processing (NLP) & Transformers',
                topics: [
                  'Text Preprocessing (Tokenization, Stopword Removal, Stemming/Lemmatization)',
                  'Word Embeddings (Word2Vec, GloVe)',
                  'Introduction to Transformers (BERT, GPT)',
                ],
                handson: ['Sentiment Analysis using Hugging Face Transformers'],
              },
              {
                title: 'AI Deployment & Future Learning',
                topics: [
                  'AI Ethics & Bias in AI',
                  'Deploy models using Flask / FastAPI / Streamlit',
                  'Future Learning Paths: Reinforcement Learning, GANs, AutoML',
                  'Overview of MLOps & Model Deployment',
                ],
                handson: ['Deploy a trained AI model to a web application'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'drug-development-c73',
    title: 'Drug Discovery & Preclinical Development',
    description:
      'Learn the fundamentals of drug discovery, preclinical testing, and clinical development, including regulatory processes.',
    modules: [
      {
        title: 'Drug Discovery & Preclinical Development',
        months: [
          {
            title:
              'Month 1: Fundamentals of Drug Discovery & Preclinical Development',
            weeks: [
              {
                title: 'Introduction to Drug Development',
                topics: [
                  'Overview of Drug Development Process',
                  'Stages: Discovery, Preclinical, Clinical Trials, Regulatory Approval',
                  'Key Regulatory Agencies (FDA, EMA, ICH, WHO)',
                ],
                handson: [
                  'Analyze the development timeline of a recently approved drug',
                ],
              },
              {
                title: 'Drug Discovery & Target Identification',
                topics: [
                  'Understanding Disease Mechanisms & Biomarkers',
                  'Drug Targets: Receptors, Enzymes, Proteins',
                  'High-Throughput Screening (HTS) & Computational Drug Discovery',
                ],
                handson: [
                  'Explore molecular docking of a drug candidate using online tools',
                ],
              },
              {
                title: 'Preclinical Testing & Pharmacokinetics',
                topics: [
                  'Animal Models & In Vitro vs. In Vivo Testing',
                  'ADME (Absorption, Distribution, Metabolism, Excretion) Principles',
                  'Toxicology Studies (Acute, Chronic, Genotoxicity, Carcinogenicity)',
                ],
                handson: [
                  'Interpret a preclinical pharmacokinetics (PK) study report',
                ],
              },
              {
                title:
                  'Investigational New Drug (IND) Application & Regulations',
                topics: [
                  'IND Submission: Requirements & Documentation',
                  'Good Laboratory Practice (GLP) & Good Manufacturing Practice (GMP)',
                  'Ethical Considerations & Animal Welfare in Preclinical Research',
                ],
                handson: ['Review an IND submission template'],
              },
            ],
          },
          {
            title: 'Month 2: Clinical Development & Post-Market Surveillance',
            weeks: [
              {
                title: 'Clinical Trials: Phase 1 (Safety & Dosage)',
                topics: [
                  'Objectives of Phase 1 Trials (First-in-Human Studies)',
                  'Study Design, Volunteer Selection, and Dose Escalation',
                  'Adverse Event Reporting & Safety Monitoring',
                ],
                handson: ['Analyze a Phase 1 clinical trial protocol'],
              },
              {
                title: 'Clinical Trials: Phase 2 & 3 (Efficacy & Approval)',
                topics: [
                  'Phase 2: Dose Optimization & Proof-of-Concept Studies',
                  'Phase 3: Large-Scale Trials & Statistical Considerations',
                  'Randomized Controlled Trials (RCTs) & Blinding Techniques',
                ],
                handson: [
                  'Evaluate clinical trial results from a Phase 3 study',
                ],
              },
              {
                title: 'New Drug Application (NDA) & Regulatory Approval',
                topics: [
                  'NDA/Biologics License Application (BLA) Submission Process',
                  'FDA & EMA Review Process: Advisory Committees & Labeling',
                  'Risk-Benefit Analysis & Post-Marketing Commitments',
                ],
                handson: ['Review a sample NDA document'],
              },
              {
                title: 'Post-Marketing Surveillance & Pharmacovigilance',
                topics: [
                  'Phase 4 Trials & Long-Term Safety Monitoring',
                  'FDA MedWatch, Adverse Drug Reactions (ADR), and Risk Management',
                  'Drug Recalls, Labeling Changes, and Market Withdrawals',
                ],
                handson: [
                  'Assess real-world post-marketing drug safety report',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'regulatory-affairs-c74',
    title: 'Fundamentals of Regulatory Affairs',
    description:
      'Learn the fundamentals of regulatory affairs in healthcare, including global regulations, compliance, and market access strategies.',
    modules: [
      {
        title: 'Fundamentals of Regulatory Affairs',
        months: [
          {
            title: 'Month 1: Fundamentals of Regulatory Affairs',
            weeks: [
              {
                title: 'Introduction to Regulatory Affairs',
                topics: [
                  'Role & Importance of Regulatory Affairs in Healthcare',
                  'Overview of Regulatory Agencies (FDA, EMA, MHRA, CDSCO, WHO, ICH)',
                  'Drug Development Lifecycle & Regulatory Requirements',
                ],
                handson: ['Compare regulatory agencies across countries'],
              },
              {
                title: 'Drug Development & Clinical Trial Regulations',
                topics: [
                  'Phases of Drug Development (Preclinical to Post-Marketing)',
                  'Good Clinical Practice (GCP) & Clinical Trial Regulations',
                  'IND, NDA, ANDA, BLA Submissions (US FDA)',
                ],
                handson: ['Review a sample clinical trial protocol'],
              },
              {
                title: 'Regulatory Submissions & Dossier Preparation',
                topics: [
                  'Common Technical Document (CTD) & eCTD Format',
                  'Regulatory Submission Process (IND, NDA, MAA, ANDA)',
                  'Labeling Requirements & Package Inserts',
                ],
                handson: ['Identify key sections of an eCTD dossier'],
              },
              {
                title:
                  'Good Manufacturing Practices (GMP) & Quality Compliance',
                topics: [
                  'Good Manufacturing Practices (GMP) Guidelines',
                  'Quality by Design (QbD) & Process Validation',
                  'Regulatory Inspections & Audits (FDA 483, Warning Letters)',
                ],
                handson: ['Analyze a GMP compliance case study'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Regulatory Affairs & Global Regulations',
            weeks: [
              {
                title: 'Regulatory Affairs in Biologics & Medical Devices',
                topics: [
                  'Biologics & Biosimilars Regulations (BLA, EMA Guidelines)',
                  'Medical Device Regulations (EU MDR, US FDA 510(k), PMA)',
                  'Combination Products & In Vitro Diagnostics (IVDs)',
                ],
                handson: [
                  'Compare biologics vs. small molecule drug approval pathways',
                ],
              },
              {
                title: 'Global Regulatory Frameworks & Drug Safety',
                topics: [
                  'US FDA, European EMA, Japan PMDA, India CDSCO Regulations',
                  'Post-Marketing Surveillance & Pharmacovigilance (ICH E2E)',
                  'Adverse Event Reporting (MedWatch, EudraVigilance, FAERS)',
                ],
                handson: ['Review a sample pharmacovigilance report'],
              },
              {
                title: 'Regulatory Strategies for Market Access & Compliance',
                topics: [
                  'Orphan Drug Regulations & Fast Track Approvals',
                  'Pricing & Reimbursement Strategies (HTA, Market Access)',
                  'Life Cycle Management & Post-Approval Changes (Variations)',
                ],
                handson: [
                  'Analyze expedited approval pathways (Fast Track, Breakthrough Therapy)',
                ],
              },
              {
                title:
                  'Ethics, Legal Aspects & Future Trends in Regulatory Affairs',
                topics: [
                  'Ethical Considerations in Drug Development',
                  'Intellectual Property Rights (Patents, Exclusivity)',
                  'Digital Health, AI in Regulatory Affairs & Future Trends',
                ],
                handson: ['Discuss key ethical challenges in drug regulation'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'human-resource-c75',
    title: 'Foundations of Human Resource Management',
    description:
      'Learn the fundamentals of Human Resource Management, including recruitment, employee development, and HR analytics.',
    modules: [
      {
        title: 'Foundations of Human Resource Management',
        months: [
          {
            title: 'Month 1: Foundations of Human Resource Management',
            weeks: [
              {
                title: 'Introduction to HRM & Its Role in Organizations',
                topics: [
                  'Definition, Scope, and Importance of HRM',
                  'Functions of HRM: Recruitment, Training, Compensation, Employee Relations',
                  'Evolution of HRM: Traditional vs. Strategic HRM',
                ],
                handson: ['Analyze an HR department structure in a company'],
              },
              {
                title: 'Workforce Planning & Recruitment Strategies',
                topics: [
                  'Workforce Planning & Forecasting Techniques',
                  'Job Analysis: Job Descriptions & Job Specifications',
                  'Sourcing Strategies: Internal vs. External Recruitment',
                ],
                handson: ['Draft a sample job description for a specific role'],
              },
              {
                title: 'Employee Selection & Onboarding',
                topics: [
                  'Selection Methods: Interviews, Assessments, Background Checks',
                  'Behavioral vs. Structured Interviews',
                  'Onboarding & Employee Socialization Strategies',
                ],
                handson: ['Design a structured interview questionnaire'],
              },
              {
                title: 'Training & Development in HRM',
                topics: [
                  'Employee Training vs. Employee Development',
                  'Training Need Analysis (TNA) & Training Program Design',
                  'E-Learning, Mentorship, and Leadership Development',
                ],
                handson: ['Develop a basic training outline for new hires'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced HRM Practices & Trends',
            weeks: [
              {
                title: 'Performance Management & Employee Engagement',
                topics: [
                  'Performance Appraisal Methods (360° Feedback, KPIs, OKRs)',
                  'Motivation Theories (Maslow, Herzberg, McGregor)',
                  'Strategies for Employee Engagement & Retention',
                ],
                handson: ['Evaluate different performance appraisal methods'],
              },
              {
                title: 'Compensation & Benefits Management',
                topics: [
                  'Salary Structures & Pay-for-Performance Models',
                  'Employee Benefits: Health, Retirement, Stock Options',
                  'Legal Considerations in Compensation & Equal Pay',
                ],
                handson: [
                  'Compare compensation structures of different industries',
                ],
              },
              {
                title: 'Labor Laws, Ethics, & HR Compliance',
                topics: [
                  'Key Labor Laws (FLSA, ADA, OSHA, EEOC Regulations)',
                  'Diversity, Equity, & Inclusion (DEI) in HRM',
                  'HR Ethical Issues & Conflict Resolution Strategies',
                ],
                handson: ['Analyze a real-world HR compliance case study'],
              },
              {
                title: 'HR Analytics & Future Trends in HRM',
                topics: [
                  'HR Analytics: Importance & Key Metrics (Turnover Rate, Absenteeism)',
                  'AI & Automation in HR (Chatbots, Applicant Tracking Systems)',
                  'The Future of Work: Remote Work & Gig Economy Trends',
                ],
                handson: [
                  'Review an HR analytics dashboard and interpret key insights',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'human-resource-management-c119',
    title: 'Foundations of Human Resource Management',
    description:
      'Learn the fundamentals of Human Resource Management, including recruitment, employee development, and HR analytics.',
    modules: [
      {
        title: 'Foundations of Human Resource Management',
        months: [
          {
            title: 'Month 1: Foundations of Human Resource Management',
            weeks: [
              {
                title: 'Introduction to HRM & Its Role in Organizations',
                topics: [
                  'Definition, Scope, and Importance of HRM',
                  'Functions of HRM: Recruitment, Training, Compensation, Employee Relations',
                  'Evolution of HRM: Traditional vs. Strategic HRM',
                ],
                handson: ['Analyze an HR department structure in a company'],
              },
              {
                title: 'Workforce Planning & Recruitment Strategies',
                topics: [
                  'Workforce Planning & Forecasting Techniques',
                  'Job Analysis: Job Descriptions & Job Specifications',
                  'Sourcing Strategies: Internal vs. External Recruitment',
                ],
                handson: ['Draft a sample job description for a specific role'],
              },
              {
                title: 'Employee Selection & Onboarding',
                topics: [
                  'Selection Methods: Interviews, Assessments, Background Checks',
                  'Behavioral vs. Structured Interviews',
                  'Onboarding & Employee Socialization Strategies',
                ],
                handson: ['Design a structured interview questionnaire'],
              },
              {
                title: 'Training & Development in HRM',
                topics: [
                  'Employee Training vs. Employee Development',
                  'Training Need Analysis (TNA) & Training Program Design',
                  'E-Learning, Mentorship, and Leadership Development',
                ],
                handson: ['Develop a basic training outline for new hires'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced HRM Practices & Trends',
            weeks: [
              {
                title: 'Performance Management & Employee Engagement',
                topics: [
                  'Performance Appraisal Methods (360° Feedback, KPIs, OKRs)',
                  'Motivation Theories (Maslow, Herzberg, McGregor)',
                  'Strategies for Employee Engagement & Retention',
                ],
                handson: ['Evaluate different performance appraisal methods'],
              },
              {
                title: 'Compensation & Benefits Management',
                topics: [
                  'Salary Structures & Pay-for-Performance Models',
                  'Employee Benefits: Health, Retirement, Stock Options',
                  'Legal Considerations in Compensation & Equal Pay',
                ],
                handson: [
                  'Compare compensation structures of different industries',
                ],
              },
              {
                title: 'Labor Laws, Ethics, & HR Compliance',
                topics: [
                  'Key Labor Laws (FLSA, ADA, OSHA, EEOC Regulations)',
                  'Diversity, Equity, & Inclusion (DEI) in HRM',
                  'HR Ethical Issues & Conflict Resolution Strategies',
                ],
                handson: ['Analyze a real-world HR compliance case study'],
              },
              {
                title: 'HR Analytics & Future Trends in HRM',
                topics: [
                  'HR Analytics: Importance & Key Metrics (Turnover Rate, Absenteeism)',
                  'AI & Automation in HR (Chatbots, Applicant Tracking Systems)',
                  'The Future of Work: Remote Work & Gig Economy Trends',
                ],
                handson: [
                  'Review an HR analytics dashboard and interpret key insights',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'finance-c75',
    title: 'Fundamentals of Finance & Financial Management',
    description:
      'Learn the fundamentals of finance, including financial markets, corporate finance, and personal wealth management.',
    modules: [
      {
        title: 'Fundamentals of Finance & Financial Management',
        months: [
          {
            title: 'Month 1: Fundamentals of Finance & Financial Management',
            weeks: [
              {
                title: 'Introduction to Finance & Financial Systems',
                topics: [
                  'Overview of Finance: Corporate, Personal, and Public Finance',
                  'Financial Markets & Institutions (Banks, Stock Markets, Insurance)',
                  'Time Value of Money (TVM) Concepts',
                ],
                handson: [
                  'Solve simple TVM problems using a financial calculator',
                ],
              },
              {
                title: 'Financial Statements & Ratio Analysis',
                topics: [
                  'Understanding the Balance Sheet, Income Statement, and Cash Flow Statement',
                  'Key Financial Ratios: Liquidity, Profitability, Leverage, Efficiency',
                  'Financial Statement Analysis Techniques',
                ],
                handson: [
                  'Analyze financial ratios of a real company (e.g., Apple, Tesla)',
                ],
              },
              {
                title: 'Corporate Finance & Capital Budgeting',
                topics: [
                  'Capital Structure: Debt vs. Equity Financing',
                  'Cost of Capital & Weighted Average Cost of Capital (WACC)',
                  'Capital Budgeting Techniques: NPV, IRR, Payback Period',
                ],
                handson: [
                  'Calculate NPV and IRR for a sample investment decision',
                ],
              },
              {
                title: 'Risk Management & Financial Derivatives',
                topics: [
                  'Types of Financial Risks (Market, Credit, Liquidity, Operational)',
                  'Basics of Risk Management & Hedging Strategies',
                  'Introduction to Financial Derivatives: Futures, Options, Swaps',
                ],
                handson: [
                  'Explore how options pricing works using an online options calculator',
                ],
              },
            ],
          },
          {
            title: 'Month 2: Investments, Markets, & Personal Finance',
            weeks: [
              {
                title: 'Investment Analysis & Portfolio Management',
                topics: [
                  'Asset Classes: Stocks, Bonds, Mutual Funds, ETFs, REITs',
                  'Diversification & Risk-Return Tradeoff',
                  'Basics of Modern Portfolio Theory (MPT)',
                ],
                handson: ['Compare risk and return of different asset classes'],
              },
              {
                title: 'Stock Market & Valuation Techniques',
                topics: [
                  'Fundamental vs. Technical Analysis',
                  'Stock Valuation Models: DCF, Dividend Discount Model (DDM), P/E Ratio',
                  'Understanding Market Trends & Economic Indicators',
                ],
                handson: [
                  'Evaluate a stock using fundamental analysis techniques',
                ],
              },
              {
                title: 'Personal Finance & Wealth Management',
                topics: [
                  'Budgeting, Saving, and Debt Management',
                  'Retirement Planning: 401(k), IRA, Pension Funds',
                  'Tax Planning & Insurance Basics',
                ],
                handson: ['Create a personal budget and savings plan'],
              },
              {
                title: 'Fintech & Emerging Trends in Finance',
                topics: [
                  'Introduction to Fintech: Digital Payments, Cryptocurrencies, Robo-Advisors',
                  'Blockchain & Decentralized Finance (DeFi)',
                  'Ethical Investing & ESG (Environmental, Social, Governance) Trends',
                ],
                handson: [
                  'Explore cryptocurrency price trends and market behavior',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'finance-c120',
    title: 'Fundamentals of Finance & Financial Management',
    description:
      'Learn the fundamentals of finance, including financial markets, corporate finance, and personal wealth management.',
    modules: [
      {
        title: 'Fundamentals of Finance & Financial Management',
        months: [
          {
            title: 'Month 1: Fundamentals of Finance & Financial Management',
            weeks: [
              {
                title: 'Introduction to Finance & Financial Systems',
                topics: [
                  'Overview of Finance: Corporate, Personal, and Public Finance',
                  'Financial Markets & Institutions (Banks, Stock Markets, Insurance)',
                  'Time Value of Money (TVM) Concepts',
                ],
                handson: [
                  'Solve simple TVM problems using a financial calculator',
                ],
              },
              {
                title: 'Financial Statements & Ratio Analysis',
                topics: [
                  'Understanding the Balance Sheet, Income Statement, and Cash Flow Statement',
                  'Key Financial Ratios: Liquidity, Profitability, Leverage, Efficiency',
                  'Financial Statement Analysis Techniques',
                ],
                handson: [
                  'Analyze financial ratios of a real company (e.g., Apple, Tesla)',
                ],
              },
              {
                title: 'Corporate Finance & Capital Budgeting',
                topics: [
                  'Capital Structure: Debt vs. Equity Financing',
                  'Cost of Capital & Weighted Average Cost of Capital (WACC)',
                  'Capital Budgeting Techniques: NPV, IRR, Payback Period',
                ],
                handson: [
                  'Calculate NPV and IRR for a sample investment decision',
                ],
              },
              {
                title: 'Risk Management & Financial Derivatives',
                topics: [
                  'Types of Financial Risks (Market, Credit, Liquidity, Operational)',
                  'Basics of Risk Management & Hedging Strategies',
                  'Introduction to Financial Derivatives: Futures, Options, Swaps',
                ],
                handson: [
                  'Explore how options pricing works using an online options calculator',
                ],
              },
            ],
          },
          {
            title: 'Month 2: Investments, Markets, & Personal Finance',
            weeks: [
              {
                title: 'Investment Analysis & Portfolio Management',
                topics: [
                  'Asset Classes: Stocks, Bonds, Mutual Funds, ETFs, REITs',
                  'Diversification & Risk-Return Tradeoff',
                  'Basics of Modern Portfolio Theory (MPT)',
                ],
                handson: ['Compare risk and return of different asset classes'],
              },
              {
                title: 'Stock Market & Valuation Techniques',
                topics: [
                  'Fundamental vs. Technical Analysis',
                  'Stock Valuation Models: DCF, Dividend Discount Model (DDM), P/E Ratio',
                  'Understanding Market Trends & Economic Indicators',
                ],
                handson: [
                  'Evaluate a stock using fundamental analysis techniques',
                ],
              },
              {
                title: 'Personal Finance & Wealth Management',
                topics: [
                  'Budgeting, Saving, and Debt Management',
                  'Retirement Planning: 401(k), IRA, Pension Funds',
                  'Tax Planning & Insurance Basics',
                ],
                handson: ['Create a personal budget and savings plan'],
              },
              {
                title: 'Fintech & Emerging Trends in Finance',
                topics: [
                  'Introduction to Fintech: Digital Payments, Cryptocurrencies, Robo-Advisors',
                  'Blockchain & Decentralized Finance (DeFi)',
                  'Ethical Investing & ESG (Environmental, Social, Governance) Trends',
                ],
                handson: [
                  'Explore cryptocurrency price trends and market behavior',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'digital-marketing-c77',
    title: 'Foundations of Digital Marketing',
    description:
      'Learn the fundamentals and advanced strategies of digital marketing, including SEO, PPC, content marketing, and analytics.',
    modules: [
      {
        title: 'Foundations of Digital Marketing',
        months: [
          {
            title: 'Month 1: Foundations of Digital Marketing',
            weeks: [
              {
                title: 'Introduction to Digital Marketing',
                topics: [
                  'What is Digital Marketing? Importance & Scope',
                  'Traditional vs. Digital Marketing',
                  'Digital Marketing Channels Overview (SEO, PPC, Social Media, Email, Content)',
                ],
                handson: ['Analyze a brand’s digital marketing strategy'],
              },
              {
                title: 'Search Engine Optimization (SEO) Basics',
                topics: [
                  'How Search Engines Work (Google Algorithm Basics)',
                  'On-Page SEO: Keywords, Meta Tags, Content Optimization',
                  'Off-Page SEO: Link Building, Guest Blogging, Social Signals',
                ],
                handson: [
                  'Perform basic keyword research using Google Keyword Planner',
                ],
              },
              {
                title: 'Content Marketing & Blogging',
                topics: [
                  'Importance of Content Marketing in Digital Strategy',
                  'Blog Writing: Structure, Tone, and SEO Optimization',
                  'Repurposing Content for Multiple Platforms',
                ],
                handson: ['Write and optimize a blog post for SEO'],
              },
              {
                title: 'Social Media Marketing (SMM)',
                topics: [
                  'Overview of Social Media Platforms (Facebook, Instagram, LinkedIn, Twitter, TikTok)',
                  'Social Media Engagement Strategies',
                  'Influencer Marketing & Brand Collaborations',
                ],
                handson: ['Create a social media content calendar'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Digital Marketing Techniques',
            weeks: [
              {
                title: 'Pay-Per-Click (PPC) & Google Ads',
                topics: [
                  'Introduction to Google Ads & PPC Marketing',
                  'Keyword Bidding Strategies & Ad Copywriting',
                  'Retargeting & Conversion Tracking',
                ],
                handson: ['Analyze a Google Ads campaign structure'],
              },
              {
                title: 'Email Marketing & Automation',
                topics: [
                  'Importance of Email Marketing for Customer Retention',
                  'Email Campaign Best Practices (Subject Lines, CTA, A/B Testing)',
                  'Email Automation & Drip Campaigns',
                ],
                handson: ['Design an email marketing sequence using Mailchimp'],
              },
              {
                title: 'Web Analytics & Performance Tracking',
                topics: [
                  'Google Analytics Basics: Understanding Website Traffic',
                  'Key Performance Indicators (KPIs) in Digital Marketing',
                  'Tracking ROI for Digital Campaigns',
                ],
                handson: [
                  'Interpret data from Google Analytics or a similar tool',
                ],
              },
              {
                title: 'Digital Marketing Trends & Strategy Planning',
                topics: [
                  'Emerging Trends: AI in Marketing, Voice Search, AR/VR Marketing',
                  'Growth Hacking Strategies',
                  'Creating a Full-Funnel Digital Marketing Strategy',
                ],
                handson: [
                  'Outline a digital marketing strategy for a hypothetical business',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'digital-marketing-c121',
    title: 'Foundations of Digital Marketing',
    description:
      'Learn the fundamentals and advanced strategies of digital marketing, including SEO, PPC, content marketing, and analytics.',
    modules: [
      {
        title: 'Foundations of Digital Marketing',
        months: [
          {
            title: 'Month 1: Foundations of Digital Marketing',
            weeks: [
              {
                title: 'Introduction to Digital Marketing',
                topics: [
                  'What is Digital Marketing? Importance & Scope',
                  'Traditional vs. Digital Marketing',
                  'Digital Marketing Channels Overview (SEO, PPC, Social Media, Email, Content)',
                ],
                handson: ['Analyze a brand’s digital marketing strategy'],
              },
              {
                title: 'Search Engine Optimization (SEO) Basics',
                topics: [
                  'How Search Engines Work (Google Algorithm Basics)',
                  'On-Page SEO: Keywords, Meta Tags, Content Optimization',
                  'Off-Page SEO: Link Building, Guest Blogging, Social Signals',
                ],
                handson: [
                  'Perform basic keyword research using Google Keyword Planner',
                ],
              },
              {
                title: 'Content Marketing & Blogging',
                topics: [
                  'Importance of Content Marketing in Digital Strategy',
                  'Blog Writing: Structure, Tone, and SEO Optimization',
                  'Repurposing Content for Multiple Platforms',
                ],
                handson: ['Write and optimize a blog post for SEO'],
              },
              {
                title: 'Social Media Marketing (SMM)',
                topics: [
                  'Overview of Social Media Platforms (Facebook, Instagram, LinkedIn, Twitter, TikTok)',
                  'Social Media Engagement Strategies',
                  'Influencer Marketing & Brand Collaborations',
                ],
                handson: ['Create a social media content calendar'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Digital Marketing Techniques',
            weeks: [
              {
                title: 'Pay-Per-Click (PPC) & Google Ads',
                topics: [
                  'Introduction to Google Ads & PPC Marketing',
                  'Keyword Bidding Strategies & Ad Copywriting',
                  'Retargeting & Conversion Tracking',
                ],
                handson: ['Analyze a Google Ads campaign structure'],
              },
              {
                title: 'Email Marketing & Automation',
                topics: [
                  'Importance of Email Marketing for Customer Retention',
                  'Email Campaign Best Practices (Subject Lines, CTA, A/B Testing)',
                  'Email Automation & Drip Campaigns',
                ],
                handson: ['Design an email marketing sequence using Mailchimp'],
              },
              {
                title: 'Web Analytics & Performance Tracking',
                topics: [
                  'Google Analytics Basics: Understanding Website Traffic',
                  'Key Performance Indicators (KPIs) in Digital Marketing',
                  'Tracking ROI for Digital Campaigns',
                ],
                handson: [
                  'Interpret data from Google Analytics or a similar tool',
                ],
              },
              {
                title: 'Digital Marketing Trends & Strategy Planning',
                topics: [
                  'Emerging Trends: AI in Marketing, Voice Search, AR/VR Marketing',
                  'Growth Hacking Strategies',
                  'Creating a Full-Funnel Digital Marketing Strategy',
                ],
                handson: [
                  'Outline a digital marketing strategy for a hypothetical business',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'digital-marketing-c77',
    title: 'Foundations of Digital Marketing',
    description:
      'Learn the fundamentals and advanced strategies of digital marketing, including SEO, PPC, content marketing, and analytics.',
    modules: [
      {
        title: 'Foundations of Digital Marketing',
        months: [
          {
            title: 'Month 1: Foundations of Digital Marketing',
            weeks: [
              {
                title: 'Introduction to Digital Marketing',
                topics: [
                  'What is Digital Marketing? Importance & Scope',
                  'Traditional vs. Digital Marketing',
                  'Digital Marketing Channels Overview (SEO, PPC, Social Media, Email, Content)',
                ],
                handson: ['Analyze a brand’s digital marketing strategy'],
              },
              {
                title: 'Search Engine Optimization (SEO) Basics',
                topics: [
                  'How Search Engines Work (Google Algorithm Basics)',
                  'On-Page SEO: Keywords, Meta Tags, Content Optimization',
                  'Off-Page SEO: Link Building, Guest Blogging, Social Signals',
                ],
                handson: [
                  'Perform basic keyword research using Google Keyword Planner',
                ],
              },
              {
                title: 'Content Marketing & Blogging',
                topics: [
                  'Importance of Content Marketing in Digital Strategy',
                  'Blog Writing: Structure, Tone, and SEO Optimization',
                  'Repurposing Content for Multiple Platforms',
                ],
                handson: ['Write and optimize a blog post for SEO'],
              },
              {
                title: 'Social Media Marketing (SMM)',
                topics: [
                  'Overview of Social Media Platforms (Facebook, Instagram, LinkedIn, Twitter, TikTok)',
                  'Social Media Engagement Strategies',
                  'Influencer Marketing & Brand Collaborations',
                ],
                handson: ['Create a social media content calendar'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Digital Marketing Techniques',
            weeks: [
              {
                title: 'Pay-Per-Click (PPC) & Google Ads',
                topics: [
                  'Introduction to Google Ads & PPC Marketing',
                  'Keyword Bidding Strategies & Ad Copywriting',
                  'Retargeting & Conversion Tracking',
                ],
                handson: ['Analyze a Google Ads campaign structure'],
              },
              {
                title: 'Email Marketing & Automation',
                topics: [
                  'Importance of Email Marketing for Customer Retention',
                  'Email Campaign Best Practices (Subject Lines, CTA, A/B Testing)',
                  'Email Automation & Drip Campaigns',
                ],
                handson: ['Design an email marketing sequence using Mailchimp'],
              },
              {
                title: 'Web Analytics & Performance Tracking',
                topics: [
                  'Google Analytics Basics: Understanding Website Traffic',
                  'Key Performance Indicators (KPIs) in Digital Marketing',
                  'Tracking ROI for Digital Campaigns',
                ],
                handson: [
                  'Interpret data from Google Analytics or a similar tool',
                ],
              },
              {
                title: 'Digital Marketing Trends & Strategy Planning',
                topics: [
                  'Emerging Trends: AI in Marketing, Voice Search, AR/VR Marketing',
                  'Growth Hacking Strategies',
                  'Creating a Full-Funnel Digital Marketing Strategy',
                ],
                handson: [
                  'Outline a digital marketing strategy for a hypothetical business',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'business-analytics-c78',
    title: 'Business Analytics',
    description:
      'Learn data-driven decision-making, statistical analysis, and business intelligence tools.',
    modules: [
      {
        title: 'Foundations of Business Analytics',
        months: [
          {
            title: 'Month 1: Foundations of Business Analytics',
            weeks: [
              {
                title: 'Introduction to Business Analytics',
                topics: [
                  'What is Business Analytics? Importance & Scope',
                  'Types of Analytics: Descriptive, Predictive, and Prescriptive',
                  'Role of Data in Decision-Making',
                ],
                handson: [
                  'Identify business problems that can be solved using analytics',
                ],
              },
              {
                title: 'Data Collection & Cleaning',
                topics: [
                  'Data Sources: Internal vs. External Data',
                  'Data Cleaning Techniques: Handling Missing Data, Removing Duplicates',
                  'Data Wrangling using Excel & SQL',
                ],
                handson: [
                  'Perform basic data cleaning in Excel or Google Sheets',
                ],
              },
              {
                title: 'Exploratory Data Analysis (EDA)',
                topics: [
                  'Understanding Data Types (Numerical, Categorical)',
                  'Descriptive Statistics: Mean, Median, Standard Deviation',
                  'Data Visualization: Charts, Graphs, and Dashboards',
                ],
                handson: [
                  'Create a basic data visualization in Excel or Tableau',
                ],
              },
              {
                title: 'Business Statistics & Hypothesis Testing',
                topics: [
                  'Probability Basics & Distribution Types',
                  'Hypothesis Testing: T-tests, Chi-Square, ANOVA',
                  'Confidence Intervals & Significance Levels',
                ],
                handson: [
                  'Conduct a basic hypothesis test using Excel or Python',
                ],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Analytics & Decision-Making',
            weeks: [
              {
                title: 'Predictive Analytics & Regression Analysis',
                topics: [
                  'Introduction to Predictive Modeling',
                  'Linear & Multiple Regression Analysis',
                  'Evaluating Model Performance (R², RMSE)',
                ],
                handson: ['Build a simple regression model in Excel or Python'],
              },
              {
                title: 'Data-Driven Decision Making & Optimization',
                topics: [
                  'Decision Trees & Business Scenarios',
                  'A/B Testing & Experimentation in Business Analytics',
                  'Introduction to Optimization Techniques',
                ],
                handson: ['Analyze an A/B test dataset for business insights'],
              },
              {
                title: 'Business Intelligence & Dashboarding',
                topics: [
                  'Introduction to BI Tools: Power BI, Tableau, Google Data Studio',
                  'Creating Interactive Dashboards',
                  'KPI Selection for Business Performance Monitoring',
                ],
                handson: [
                  'Build a basic business dashboard in Power BI or Tableau',
                ],
              },
              {
                title: 'Emerging Trends in Business Analytics',
                topics: [
                  'AI & Machine Learning in Business Analytics',
                  'Big Data & Cloud-Based Analytics',
                  'Ethical Considerations & Data Privacy Regulations (GDPR, CCPA)',
                ],
                handson: [
                  'Analyze a case study on AI-driven business decision',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'business-analytics-c122',
    title: 'Business Analytics',
    description:
      'Learn data-driven decision-making, statistical analysis, and business intelligence tools.',
    modules: [
      {
        title: 'Foundations of Business Analytics',
        months: [
          {
            title: 'Month 1: Foundations of Business Analytics',
            weeks: [
              {
                title: 'Introduction to Business Analytics',
                topics: [
                  'What is Business Analytics? Importance & Scope',
                  'Types of Analytics: Descriptive, Predictive, and Prescriptive',
                  'Role of Data in Decision-Making',
                ],
                handson: [
                  'Identify business problems that can be solved using analytics',
                ],
              },
              {
                title: 'Data Collection & Cleaning',
                topics: [
                  'Data Sources: Internal vs. External Data',
                  'Data Cleaning Techniques: Handling Missing Data, Removing Duplicates',
                  'Data Wrangling using Excel & SQL',
                ],
                handson: [
                  'Perform basic data cleaning in Excel or Google Sheets',
                ],
              },
              {
                title: 'Exploratory Data Analysis (EDA)',
                topics: [
                  'Understanding Data Types (Numerical, Categorical)',
                  'Descriptive Statistics: Mean, Median, Standard Deviation',
                  'Data Visualization: Charts, Graphs, and Dashboards',
                ],
                handson: [
                  'Create a basic data visualization in Excel or Tableau',
                ],
              },
              {
                title: 'Business Statistics & Hypothesis Testing',
                topics: [
                  'Probability Basics & Distribution Types',
                  'Hypothesis Testing: T-tests, Chi-Square, ANOVA',
                  'Confidence Intervals & Significance Levels',
                ],
                handson: [
                  'Conduct a basic hypothesis test using Excel or Python',
                ],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Analytics & Decision-Making',
            weeks: [
              {
                title: 'Predictive Analytics & Regression Analysis',
                topics: [
                  'Introduction to Predictive Modeling',
                  'Linear & Multiple Regression Analysis',
                  'Evaluating Model Performance (R², RMSE)',
                ],
                handson: ['Build a simple regression model in Excel or Python'],
              },
              {
                title: 'Data-Driven Decision Making & Optimization',
                topics: [
                  'Decision Trees & Business Scenarios',
                  'A/B Testing & Experimentation in Business Analytics',
                  'Introduction to Optimization Techniques',
                ],
                handson: ['Analyze an A/B test dataset for business insights'],
              },
              {
                title: 'Business Intelligence & Dashboarding',
                topics: [
                  'Introduction to BI Tools: Power BI, Tableau, Google Data Studio',
                  'Creating Interactive Dashboards',
                  'KPI Selection for Business Performance Monitoring',
                ],
                handson: [
                  'Build a basic business dashboard in Power BI or Tableau',
                ],
              },
              {
                title: 'Emerging Trends in Business Analytics',
                topics: [
                  'AI & Machine Learning in Business Analytics',
                  'Big Data & Cloud-Based Analytics',
                  'Ethical Considerations & Data Privacy Regulations (GDPR, CCPA)',
                ],
                handson: [
                  'Analyze a case study on AI-driven business decision',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'blockchain-c79',
    title: 'Blockchain',
    description:
      'Learn about blockchain technology, smart contracts, and decentralized applications.',
    modules: [
      {
        title: 'Foundations of Blockchain Technology',
        months: [
          {
            title: 'Month 1: Foundations of Blockchain Technology',
            weeks: [
              {
                title: 'Introduction to Blockchain',
                topics: [
                  'What is Blockchain? History & Evolution',
                  'Centralized vs. Decentralized Systems',
                  'Blockchain Components: Blocks, Chains, Nodes, Miners',
                ],
                handson: [
                  'Explore a blockchain explorer (e.g., Etherscan, Blockchain.com)',
                ],
              },
              {
                title: 'Cryptography & Security in Blockchain',
                topics: [
                  'Basics of Cryptography (Hash Functions, Public & Private Keys)',
                  'Digital Signatures & Encryption in Blockchain',
                  'Merkle Trees & Data Integrity',
                ],
                handson: [
                  'Generate and verify a hash using SHA-256 (Python, online tools)',
                ],
              },
              {
                title: 'Consensus Mechanisms & Blockchain Networks',
                topics: [
                  'Proof of Work (PoW) vs. Proof of Stake (PoS)',
                  'Other Consensus Mechanisms: Delegated PoS, Proof of Authority, PBFT',
                  'Public vs. Private Blockchains (Ethereum, Hyperledger, Corda)',
                ],
                handson: ['Compare Bitcoin & Ethereum’s consensus mechanisms'],
              },
              {
                title: 'Smart Contracts & Ethereum Basics',
                topics: [
                  'What are Smart Contracts?',
                  'Introduction to Ethereum & Solidity',
                  'How Smart Contracts Work (Gas Fees, Contract Execution)',
                ],
                handson: ['Write a simple smart contract on Remix IDE'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Blockchain Concepts & Applications',
            weeks: [
              {
                title: 'Decentralized Applications (DApps) & Web3',
                topics: [
                  'What are DApps?',
                  'Web3 & Decentralized Finance (DeFi)',
                  'Key DApp Platforms: Ethereum, Binance Smart Chain, Solana',
                ],
                handson: ['Explore a real DApp (e.g., Uniswap, OpenSea)'],
              },
              {
                title: 'Blockchain in Business & Supply Chain',
                topics: [
                  'Real-World Use Cases (Banking, Healthcare, Logistics, Voting)',
                  'Blockchain in Supply Chain (IBM Food Trust, VeChain)',
                  'Challenges in Enterprise Adoption',
                ],
                handson: [
                  'Analyze a case study on blockchain adoption in business',
                ],
              },
              {
                title: 'NFTs, Tokenomics & Cryptocurrency Markets',
                topics: [
                  'What are NFTs & How Do They Work?',
                  'Tokenomics & Utility Tokens vs. Security Tokens',
                  'Understanding Cryptocurrency Trading & Exchanges',
                ],
                handson: ['Review an NFT marketplace (e.g., OpenSea)'],
              },
              {
                title: 'Future Trends & Regulations in Blockchain',
                topics: [
                  'Layer 2 Solutions: Lightning Network, Rollups',
                  'Blockchain Scalability Issues & Solutions',
                  'Regulatory Landscape: GDPR, SEC, FATF Guidelines',
                ],
                handson: [
                  'Read and interpret a regulatory guideline related to blockchain',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'blockchain-c123',
    title: 'Blockchain',
    description:
      'Learn about blockchain technology, smart contracts, and decentralized applications.',
    modules: [
      {
        title: 'Foundations of Blockchain Technology',
        months: [
          {
            title: 'Month 1: Foundations of Blockchain Technology',
            weeks: [
              {
                title: 'Introduction to Blockchain',
                topics: [
                  'What is Blockchain? History & Evolution',
                  'Centralized vs. Decentralized Systems',
                  'Blockchain Components: Blocks, Chains, Nodes, Miners',
                ],
                handson: [
                  'Explore a blockchain explorer (e.g., Etherscan, Blockchain.com)',
                ],
              },
              {
                title: 'Cryptography & Security in Blockchain',
                topics: [
                  'Basics of Cryptography (Hash Functions, Public & Private Keys)',
                  'Digital Signatures & Encryption in Blockchain',
                  'Merkle Trees & Data Integrity',
                ],
                handson: [
                  'Generate and verify a hash using SHA-256 (Python, online tools)',
                ],
              },
              {
                title: 'Consensus Mechanisms & Blockchain Networks',
                topics: [
                  'Proof of Work (PoW) vs. Proof of Stake (PoS)',
                  'Other Consensus Mechanisms: Delegated PoS, Proof of Authority, PBFT',
                  'Public vs. Private Blockchains (Ethereum, Hyperledger, Corda)',
                ],
                handson: ['Compare Bitcoin & Ethereum’s consensus mechanisms'],
              },
              {
                title: 'Smart Contracts & Ethereum Basics',
                topics: [
                  'What are Smart Contracts?',
                  'Introduction to Ethereum & Solidity',
                  'How Smart Contracts Work (Gas Fees, Contract Execution)',
                ],
                handson: ['Write a simple smart contract on Remix IDE'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Blockchain Concepts & Applications',
            weeks: [
              {
                title: 'Decentralized Applications (DApps) & Web3',
                topics: [
                  'What are DApps?',
                  'Web3 & Decentralized Finance (DeFi)',
                  'Key DApp Platforms: Ethereum, Binance Smart Chain, Solana',
                ],
                handson: ['Explore a real DApp (e.g., Uniswap, OpenSea)'],
              },
              {
                title: 'Blockchain in Business & Supply Chain',
                topics: [
                  'Real-World Use Cases (Banking, Healthcare, Logistics, Voting)',
                  'Blockchain in Supply Chain (IBM Food Trust, VeChain)',
                  'Challenges in Enterprise Adoption',
                ],
                handson: [
                  'Analyze a case study on blockchain adoption in business',
                ],
              },
              {
                title: 'NFTs, Tokenomics & Cryptocurrency Markets',
                topics: [
                  'What are NFTs & How Do They Work?',
                  'Tokenomics & Utility Tokens vs. Security Tokens',
                  'Understanding Cryptocurrency Trading & Exchanges',
                ],
                handson: ['Review an NFT marketplace (e.g., OpenSea)'],
              },
              {
                title: 'Future Trends & Regulations in Blockchain',
                topics: [
                  'Layer 2 Solutions: Lightning Network, Rollups',
                  'Blockchain Scalability Issues & Solutions',
                  'Regulatory Landscape: GDPR, SEC, FATF Guidelines',
                ],
                handson: [
                  'Read and interpret a regulatory guideline related to blockchain',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'product-management-c80',
    title: 'Product Management',
    description:
      'Learn the fundamentals of product management, from strategy to execution.',
    modules: [
      {
        title: 'Foundations of Product Management',
        months: [
          {
            title: 'Month 1: Foundations of Product Management',
            weeks: [
              {
                title: 'Introduction to Product Management',
                topics: [
                  'What is Product Management? Roles & Responsibilities',
                  'Key Stakeholders in Product Development (Engineering, Design, Marketing)',
                  'Product Lifecycle: Idea to Launch',
                ],
                handson: [
                  'Analyze job descriptions for product managers to identify key skills',
                ],
              },
              {
                title: 'Understanding Customers & Market Research',
                topics: [
                  'User Research Methods (Surveys, Interviews, Focus Groups)',
                  'Market Analysis & Competitive Research',
                  'Creating User Personas & Customer Journey Mapping',
                ],
                handson: ['Develop a user persona based on market research'],
              },
              {
                title: 'Product Strategy & Vision',
                topics: [
                  'Defining Product Vision & Mission',
                  'Aligning Business Goals with Product Strategy',
                  'Feature Prioritization Frameworks (MoSCoW, RICE, Kano Model)',
                ],
                handson: ['Write a product vision statement'],
              },
              {
                title: 'Roadmap Planning & Agile Methodologies',
                topics: [
                  'Creating a Product Roadmap (Now-Next-Later, Timeline-Based)',
                  'Agile vs. Waterfall Development',
                  'Scrum, Kanban & Lean Product Development',
                ],
                handson: [
                  'Draft a basic product roadmap using a roadmap tool (e.g., Trello, Aha!)',
                ],
              },
            ],
          },
          {
            title: 'Month 2: Execution, Growth, and Analytics',
            weeks: [
              {
                title: 'Product Development & UX/UI Basics',
                topics: [
                  'Working with Engineering Teams (PRDs, Wireframes, MVPs)',
                  'Basics of UX/UI Design & Usability Testing',
                  'Writing Effective User Stories & Acceptance Criteria',
                ],
                handson: ['Write a simple PRD (Product Requirements Document)'],
              },
              {
                title: 'Go-to-Market (GTM) Strategy & Launch Planning',
                topics: [
                  'GTM Strategies: Market Segmentation & Positioning',
                  'Pricing Models: Freemium, Subscription, Pay-per-Use',
                  'Creating a Product Marketing Plan',
                ],
                handson: ['Draft a GTM strategy for a hypothetical product'],
              },
              {
                title: 'Product Metrics & Data-Driven Decision Making',
                topics: [
                  'Key Product Metrics: DAU, MAU, Churn, Retention, CAC, LTV',
                  'A/B Testing & Experimentation',
                  'Growth Strategies: Virality, Network Effects, Retention Loops',
                ],
                handson: ['Analyze a case study on product growth metrics'],
              },
              {
                title:
                  'Leadership, Soft Skills & Future Trends in Product Management',
                topics: [
                  'Stakeholder Management & Cross-Functional Collaboration',
                  'Communication & Presentation Skills for Product Managers',
                  'Emerging Trends: AI & Data-Driven Product Management',
                ],
                handson: ['Conduct a mock stakeholder meeting discussion'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'product-management-c124',
    title: 'Product Management',
    description:
      'Learn the fundamentals of product management, from strategy to execution.',
    modules: [
      {
        title: 'Foundations of Product Management',
        months: [
          {
            title: 'Month 1: Foundations of Product Management',
            weeks: [
              {
                title: 'Introduction to Product Management',
                topics: [
                  'What is Product Management? Roles & Responsibilities',
                  'Key Stakeholders in Product Development (Engineering, Design, Marketing)',
                  'Product Lifecycle: Idea to Launch',
                ],
                handson: [
                  'Analyze job descriptions for product managers to identify key skills',
                ],
              },
              {
                title: 'Understanding Customers & Market Research',
                topics: [
                  'User Research Methods (Surveys, Interviews, Focus Groups)',
                  'Market Analysis & Competitive Research',
                  'Creating User Personas & Customer Journey Mapping',
                ],
                handson: ['Develop a user persona based on market research'],
              },
              {
                title: 'Product Strategy & Vision',
                topics: [
                  'Defining Product Vision & Mission',
                  'Aligning Business Goals with Product Strategy',
                  'Feature Prioritization Frameworks (MoSCoW, RICE, Kano Model)',
                ],
                handson: ['Write a product vision statement'],
              },
              {
                title: 'Roadmap Planning & Agile Methodologies',
                topics: [
                  'Creating a Product Roadmap (Now-Next-Later, Timeline-Based)',
                  'Agile vs. Waterfall Development',
                  'Scrum, Kanban & Lean Product Development',
                ],
                handson: [
                  'Draft a basic product roadmap using a roadmap tool (e.g., Trello, Aha!)',
                ],
              },
            ],
          },
          {
            title: 'Month 2: Execution, Growth, and Analytics',
            weeks: [
              {
                title: 'Product Development & UX/UI Basics',
                topics: [
                  'Working with Engineering Teams (PRDs, Wireframes, MVPs)',
                  'Basics of UX/UI Design & Usability Testing',
                  'Writing Effective User Stories & Acceptance Criteria',
                ],
                handson: ['Write a simple PRD (Product Requirements Document)'],
              },
              {
                title: 'Go-to-Market (GTM) Strategy & Launch Planning',
                topics: [
                  'GTM Strategies: Market Segmentation & Positioning',
                  'Pricing Models: Freemium, Subscription, Pay-per-Use',
                  'Creating a Product Marketing Plan',
                ],
                handson: ['Draft a GTM strategy for a hypothetical product'],
              },
              {
                title: 'Product Metrics & Data-Driven Decision Making',
                topics: [
                  'Key Product Metrics: DAU, MAU, Churn, Retention, CAC, LTV',
                  'A/B Testing & Experimentation',
                  'Growth Strategies: Virality, Network Effects, Retention Loops',
                ],
                handson: ['Analyze a case study on product growth metrics'],
              },
              {
                title:
                  'Leadership, Soft Skills & Future Trends in Product Management',
                topics: [
                  'Stakeholder Management & Cross-Functional Collaboration',
                  'Communication & Presentation Skills for Product Managers',
                  'Emerging Trends: AI & Data-Driven Product Management',
                ],
                handson: ['Conduct a mock stakeholder meeting discussion'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'supply-chain-management-c81',
    title: 'Supply Chain Management',
    description:
      'Learn the fundamentals of supply chain management, from procurement to logistics.',
    modules: [
      {
        title: 'Fundamentals of Supply Chain Management',
        months: [
          {
            title: 'Month 1: Foundations of Supply Chain Management',
            weeks: [
              {
                title: 'Introduction to Supply Chain Management',
                topics: [
                  'Definition & Importance of Supply Chain Management',
                  'Key Components: Procurement, Logistics, Inventory, Distribution',
                  'Supply Chain vs. Value Chain',
                ],
                handson: [
                  'Map a basic supply chain for a product (e.g., smartphone, clothing)',
                ],
              },
              {
                title: 'Procurement & Supplier Management',
                topics: [
                  'Procurement Process & Strategies',
                  'Supplier Selection & Relationship Management',
                  'Risk Management in Procurement',
                ],
                handson: [
                  'Evaluate supplier selection criteria for a business',
                ],
              },
              {
                title: 'Inventory & Warehouse Management',
                topics: [
                  'Types of Inventory (Raw Materials, WIP, Finished Goods)',
                  'Inventory Control Techniques (EOQ, JIT, Safety Stock)',
                  'Warehouse Layout & Optimization',
                ],
                handson: ['Calculate Economic Order Quantity (EOQ)'],
              },
              {
                title: 'Logistics & Transportation Management',
                topics: [
                  'Modes of Transportation: Road, Rail, Air, Sea',
                  'Freight & Carrier Selection',
                  'Last-Mile Delivery & Reverse Logistics',
                ],
                handson: [
                  'Analyze a real-world logistics challenge (e.g., Amazon, Walmart)',
                ],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Topics in Supply Chain Management',
            weeks: [
              {
                title: 'Demand Forecasting & Planning',
                topics: [
                  'Importance of Demand Forecasting in SCM',
                  'Forecasting Techniques: Time-Series, Regression, Machine Learning',
                  'Sales & Operations Planning (S&OP)',
                ],
                handson: ['Interpret a demand forecast dataset'],
              },
              {
                title: 'Lean & Agile Supply Chains',
                topics: [
                  'Lean Supply Chain Principles (Waste Reduction, Value Stream Mapping)',
                  'Agile Supply Chains & Flexibility',
                  'Hybrid Supply Chain Models',
                ],
                handson: ['Compare lean vs. agile supply chain strategies'],
              },
              {
                title: 'Technology & Digital Transformation in SCM',
                topics: [
                  'Role of IoT, AI, and Blockchain in Supply Chain',
                  'ERP & Supply Chain Management Software (SAP, Oracle)',
                  'Smart Warehouses & Automation',
                ],
                handson: ['Explore blockchain applications in SCM'],
              },
              {
                title: 'Sustainability & Risk Management in Supply Chain',
                topics: [
                  'Green Supply Chain Practices',
                  'Ethical Sourcing & Corporate Social Responsibility',
                  'Managing Supply Chain Disruptions (COVID-19 Case Study)',
                ],
                handson: [
                  'Identify sustainability improvements for a supply chain',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'supply-chain-management-c125',
    title: 'Supply Chain Management',
    description:
      'Learn the fundamentals of supply chain management, from procurement to logistics.',
    modules: [
      {
        title: 'Fundamentals of Supply Chain Management',
        months: [
          {
            title: 'Month 1: Foundations of Supply Chain Management',
            weeks: [
              {
                title: 'Introduction to Supply Chain Management',
                topics: [
                  'Definition & Importance of Supply Chain Management',
                  'Key Components: Procurement, Logistics, Inventory, Distribution',
                  'Supply Chain vs. Value Chain',
                ],
                handson: [
                  'Map a basic supply chain for a product (e.g., smartphone, clothing)',
                ],
              },
              {
                title: 'Procurement & Supplier Management',
                topics: [
                  'Procurement Process & Strategies',
                  'Supplier Selection & Relationship Management',
                  'Risk Management in Procurement',
                ],
                handson: [
                  'Evaluate supplier selection criteria for a business',
                ],
              },
              {
                title: 'Inventory & Warehouse Management',
                topics: [
                  'Types of Inventory (Raw Materials, WIP, Finished Goods)',
                  'Inventory Control Techniques (EOQ, JIT, Safety Stock)',
                  'Warehouse Layout & Optimization',
                ],
                handson: ['Calculate Economic Order Quantity (EOQ)'],
              },
              {
                title: 'Logistics & Transportation Management',
                topics: [
                  'Modes of Transportation: Road, Rail, Air, Sea',
                  'Freight & Carrier Selection',
                  'Last-Mile Delivery & Reverse Logistics',
                ],
                handson: [
                  'Analyze a real-world logistics challenge (e.g., Amazon, Walmart)',
                ],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Topics in Supply Chain Management',
            weeks: [
              {
                title: 'Demand Forecasting & Planning',
                topics: [
                  'Importance of Demand Forecasting in SCM',
                  'Forecasting Techniques: Time-Series, Regression, Machine Learning',
                  'Sales & Operations Planning (S&OP)',
                ],
                handson: ['Interpret a demand forecast dataset'],
              },
              {
                title: 'Lean & Agile Supply Chains',
                topics: [
                  'Lean Supply Chain Principles (Waste Reduction, Value Stream Mapping)',
                  'Agile Supply Chains & Flexibility',
                  'Hybrid Supply Chain Models',
                ],
                handson: ['Compare lean vs. agile supply chain strategies'],
              },
              {
                title: 'Technology & Digital Transformation in SCM',
                topics: [
                  'Role of IoT, AI, and Blockchain in Supply Chain',
                  'ERP & Supply Chain Management Software (SAP, Oracle)',
                  'Smart Warehouses & Automation',
                ],
                handson: ['Explore blockchain applications in SCM'],
              },
              {
                title: 'Sustainability & Risk Management in Supply Chain',
                topics: [
                  'Green Supply Chain Practices',
                  'Ethical Sourcing & Corporate Social Responsibility',
                  'Managing Supply Chain Disruptions (COVID-19 Case Study)',
                ],
                handson: [
                  'Identify sustainability improvements for a supply chain',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'operations-management-c82',
    title: 'Operations Management',
    description:
      'Learn the fundamentals of operations management, from process design to quality control.',
    modules: [
      {
        title: 'Fundamentals of Operations Management',
        months: [
          {
            title: 'Month 1: Foundations of Operations Management',
            weeks: [
              {
                title: 'Introduction to Operations Management',
                topics: [
                  'Definition & Importance of Operations Management',
                  'Key Functions: Planning, Organizing, Directing, Controlling',
                  'Operations vs. Supply Chain vs. Logistics',
                ],
                handson: [
                  'Analyze the operations workflow of a company (e.g., retail, manufacturing)',
                ],
              },
              {
                title: 'Process Design & Optimization',
                topics: [
                  'Types of Processes (Job Shop, Batch, Mass, Continuous)',
                  'Process Mapping & Bottleneck Analysis',
                  'Lean Operations & Waste Reduction (5S, Kaizen, Six Sigma)',
                ],
                handson: [
                  'Draw a process flowchart and identify inefficiencies',
                ],
              },
              {
                title: 'Capacity Planning & Facility Layout',
                topics: [
                  'Understanding Capacity Utilization & Constraints',
                  'Facility Layout Design & Location Selection',
                  'Strategies for Demand & Capacity Management',
                ],
                handson: [
                  'Calculate capacity utilization for a production unit',
                ],
              },
              {
                title: 'Inventory & Supply Chain Coordination',
                topics: [
                  'Types of Inventory: Raw Materials, WIP, Finished Goods',
                  'Inventory Control Techniques: EOQ, JIT, ABC Analysis',
                  'Bullwhip Effect & Supply Chain Coordination',
                ],
                handson: ['Perform an ABC inventory classification'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Topics in Operations Management',
            weeks: [
              {
                title: 'Quality Management & Process Improvement',
                topics: [
                  'Total Quality Management (TQM) & ISO Standards',
                  'Six Sigma & Statistical Process Control (SPC)',
                  'Root Cause Analysis (5 Whys, Fishbone Diagram)',
                ],
                handson: ['Apply the 5 Whys method to a process issue'],
              },
              {
                title: 'Project & Risk Management in Operations',
                topics: [
                  'Introduction to Project Management (PERT, CPM)',
                  'Risk Assessment & Mitigation Strategies',
                  'Business Continuity & Disaster Recovery Planning',
                ],
                handson: [
                  'Conduct a simple risk assessment for an operational process',
                ],
              },
              {
                title: 'Technology & Innovation in Operations',
                topics: [
                  'Role of Automation, IoT, & AI in Operations',
                  'Enterprise Resource Planning (ERP) Systems (SAP, Oracle)',
                  'Digital Twins & Smart Factories',
                ],
                handson: [
                  'Explore an ERP dashboard (SAP demo, Oracle NetSuite)',
                ],
              },
              {
                title: 'Sustainability & Future Trends in Operations',
                topics: [
                  'Green Operations & Circular Economy',
                  'Ethical Sourcing & Corporate Social Responsibility',
                  'Emerging Trends: Industry 4.0, Blockchain, Servitization',
                ],
                handson: [
                  'Identify sustainability improvements in a real-world operation',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'operations-management-c126',
    title: 'Operations Management',
    description:
      'Learn the fundamentals of operations management, from process design to quality control.',
    modules: [
      {
        title: 'Fundamentals of Operations Management',
        months: [
          {
            title: 'Month 1: Foundations of Operations Management',
            weeks: [
              {
                title: 'Introduction to Operations Management',
                topics: [
                  'Definition & Importance of Operations Management',
                  'Key Functions: Planning, Organizing, Directing, Controlling',
                  'Operations vs. Supply Chain vs. Logistics',
                ],
                handson: [
                  'Analyze the operations workflow of a company (e.g., retail, manufacturing)',
                ],
              },
              {
                title: 'Process Design & Optimization',
                topics: [
                  'Types of Processes (Job Shop, Batch, Mass, Continuous)',
                  'Process Mapping & Bottleneck Analysis',
                  'Lean Operations & Waste Reduction (5S, Kaizen, Six Sigma)',
                ],
                handson: [
                  'Draw a process flowchart and identify inefficiencies',
                ],
              },
              {
                title: 'Capacity Planning & Facility Layout',
                topics: [
                  'Understanding Capacity Utilization & Constraints',
                  'Facility Layout Design & Location Selection',
                  'Strategies for Demand & Capacity Management',
                ],
                handson: [
                  'Calculate capacity utilization for a production unit',
                ],
              },
              {
                title: 'Inventory & Supply Chain Coordination',
                topics: [
                  'Types of Inventory: Raw Materials, WIP, Finished Goods',
                  'Inventory Control Techniques: EOQ, JIT, ABC Analysis',
                  'Bullwhip Effect & Supply Chain Coordination',
                ],
                handson: ['Perform an ABC inventory classification'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Topics in Operations Management',
            weeks: [
              {
                title: 'Quality Management & Process Improvement',
                topics: [
                  'Total Quality Management (TQM) & ISO Standards',
                  'Six Sigma & Statistical Process Control (SPC)',
                  'Root Cause Analysis (5 Whys, Fishbone Diagram)',
                ],
                handson: ['Apply the 5 Whys method to a process issue'],
              },
              {
                title: 'Project & Risk Management in Operations',
                topics: [
                  'Introduction to Project Management (PERT, CPM)',
                  'Risk Assessment & Mitigation Strategies',
                  'Business Continuity & Disaster Recovery Planning',
                ],
                handson: [
                  'Conduct a simple risk assessment for an operational process',
                ],
              },
              {
                title: 'Technology & Innovation in Operations',
                topics: [
                  'Role of Automation, IoT, & AI in Operations',
                  'Enterprise Resource Planning (ERP) Systems (SAP, Oracle)',
                  'Digital Twins & Smart Factories',
                ],
                handson: [
                  'Explore an ERP dashboard (SAP demo, Oracle NetSuite)',
                ],
              },
              {
                title: 'Sustainability & Future Trends in Operations',
                topics: [
                  'Green Operations & Circular Economy',
                  'Ethical Sourcing & Corporate Social Responsibility',
                  'Emerging Trends: Industry 4.0, Blockchain, Servitization',
                ],
                handson: [
                  'Identify sustainability improvements in a real-world operation',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'ai-c91',
    title: 'AI & Machine Learning',
    description:
      'Learn the fundamentals and advanced topics of AI & Machine Learning, including hands-on projects.',
    modules: [
      {
        title: 'Fundamentals of AI & Machine Learning',
        months: [
          {
            title: 'Month 1: Fundamentals of AI & Machine Learning',
            weeks: [
              {
                title: 'Introduction to AI & Machine Learning',
                topics: [
                  'What is AI? Types of AI (Narrow, General, Super AI)',
                  'Supervised vs Unsupervised vs Reinforcement Learning',
                  'AI applications (Computer Vision, NLP, Robotics)',
                ],
                handson: [
                  'Set up Python, Jupyter Notebook, install libraries (NumPy, Pandas, Matplotlib, Scikit-Learn, TensorFlow/PyTorch)',
                ],
              },
              {
                title: 'Python, Data Science, & Preprocessing',
                topics: [
                  'NumPy, Pandas (Data Manipulation)',
                  'Data visualization (Matplotlib, Seaborn)',
                  'Handling missing data, feature scaling, one-hot encoding',
                ],
                handson: ['Load and explore datasets (Iris, Titanic, MNIST)'],
              },
              {
                title: 'Supervised Learning (Regression & Classification)',
                topics: [
                  'Linear Regression, Logistic Regression',
                  'Decision Trees & Random Forest',
                  'Model evaluation (MSE, Accuracy, Precision, Recall, F1-score)',
                  'Overfitting & Regularization',
                ],
                handson: [
                  'Train and evaluate Regression & Classification models',
                ],
              },
              {
                title: 'Unsupervised Learning & Feature Engineering',
                topics: [
                  'Clustering (K-Means, Hierarchical, DBSCAN)',
                  'Dimensionality Reduction (PCA, t-SNE)',
                  'Feature Selection & Engineering Techniques',
                ],
                handson: ['Apply clustering and feature engineering'],
              },
            ],
          },
          {
            title: 'Month 2: Deep Learning & AI Applications',
            weeks: [
              {
                title: 'Neural Networks & Deep Learning Basics',
                topics: [
                  'Perceptron, Activation Functions',
                  'Feedforward Neural Networks (FNN)',
                  'Backpropagation & Gradient Descent',
                ],
                handson: [
                  'Implement a simple neural network using TensorFlow/PyTorch',
                ],
              },
              {
                title:
                  'Convolutional Neural Networks (CNNs) & Image Processing',
                topics: [
                  'CNN Layers (Convolution, Pooling, Fully Connected)',
                  'Image Classification (MNIST, CIFAR-10)',
                  'Transfer Learning & Pre-trained Models',
                ],
                handson: ['Train a CNN for image recognition'],
              },
              {
                title: 'Natural Language Processing (NLP) & Transformers',
                topics: [
                  'Text Preprocessing (Tokenization, Stopword Removal, Stemming/Lemmatization)',
                  'Word Embeddings (Word2Vec, GloVe)',
                  'Introduction to Transformers (BERT, GPT)',
                ],
                handson: ['Sentiment Analysis using Hugging Face Transformers'],
              },
              {
                title: 'AI Deployment & Future Learning',
                topics: [
                  'AI Ethics & Bias in AI',
                  'Deploy models using Flask / FastAPI / Streamlit',
                  'Future Learning Paths: Reinforcement Learning, GANs, AutoML',
                  'Overview of MLOps & Model Deployment',
                ],
                handson: ['Deploy a simple AI model using Flask or Streamlit'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'ml-c92',
    title: 'Machine Learning Fundamentals',
    description:
      'Learn the foundations of Machine Learning, including hands-on projects and model deployment.',
    modules: [
      {
        title: 'Fundamentals of Machine Learning',
        months: [
          {
            title: 'Month 1: Machine Learning Fundamentals',
            weeks: [
              {
                title: 'Introduction to Machine Learning',
                topics: [
                  'What is Machine Learning?',
                  'Types of ML: Supervised, Unsupervised, Reinforcement Learning',
                  'ML Workflow: Data Collection, Preprocessing, Model Training, Evaluation',
                ],
                handson: [
                  'Set up Python, Jupyter Notebook, install ML libraries (NumPy, Pandas, Matplotlib, Scikit-Learn)',
                ],
              },
              {
                title: 'Data Preprocessing & Feature Engineering',
                topics: [
                  'Handling missing data (mean, median, imputation)',
                  'Feature Scaling (Normalization vs Standardization)',
                  'Encoding categorical data (One-Hot Encoding, Label Encoding)',
                  'Feature Selection Techniques',
                ],
                handson: ['Apply preprocessing techniques using Scikit-Learn'],
              },
              {
                title: 'Supervised Learning – Regression',
                topics: [
                  'Linear Regression, Polynomial Regression',
                  'Gradient Descent & Cost Function',
                  'Model evaluation (MSE, RMSE, R² Score)',
                  'Overfitting & Regularization (L1, L2)',
                ],
                handson: ['Train and evaluate regression models'],
              },
              {
                title: 'Supervised Learning – Classification',
                topics: [
                  'Logistic Regression, Decision Trees, Random Forest',
                  'Support Vector Machines (SVM)',
                  'Model evaluation (Accuracy, Precision, Recall, F1-score, Confusion Matrix)',
                  'ROC Curve & AUC',
                ],
                handson: ['Train and evaluate classification models'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced ML & Model Optimization',
            weeks: [
              {
                title:
                  'Unsupervised Learning – Clustering & Dimensionality Reduction',
                topics: [
                  'K-Means Clustering, Hierarchical Clustering, DBSCAN',
                  'PCA, t-SNE for Dimensionality Reduction',
                ],
                handson: ['Apply clustering and PCA techniques'],
              },
              {
                title: 'Ensemble Learning & Model Optimization',
                topics: [
                  'Bagging (Random Forest), Boosting (AdaBoost, Gradient Boosting, XGBoost)',
                  'Hyperparameter Tuning (Grid Search, Random Search)',
                  'Cross-Validation Techniques',
                ],
                handson: ['Improve model performance using ensemble methods'],
              },
              {
                title: 'Neural Networks & Deep Learning Basics',
                topics: [
                  'Introduction to Perceptron & Artificial Neural Networks',
                  'Activation Functions (ReLU, Sigmoid, Softmax)',
                  'Forward & Backpropagation',
                ],
                handson: [
                  'Implement a simple neural network using TensorFlow/PyTorch',
                ],
              },
              {
                title: 'Model Deployment & MLOps Overview',
                topics: [
                  'Saving & Loading Models (Pickle, Joblib)',
                  'Introduction to Model Deployment (Flask, FastAPI)',
                  'Basics of MLOps (CI/CD, Model Monitoring)',
                  'Future Learning Paths: Reinforcement Learning, Generative AI',
                ],
                handson: ['Deploy a simple ML model using Flask or FastAPI'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'data-science-c93',
    title: 'Foundations of Data Science & Analytics',
    description:
      'Learn the foundations of Data Science and Analytics, including hands-on projects and model deployment.',
    modules: [
      {
        title: 'Fundamentals of Data Science & Analytics',
        months: [
          {
            title: 'Month 1: Foundations of Data Science & Analytics',
            weeks: [
              {
                title: 'Introduction to Data Science & Analytics',
                topics: [
                  'What is Data Science? Key Concepts',
                  'Difference between Data Science, Data Analytics, and Machine Learning',
                  'Real-world Applications (Finance, Healthcare, Marketing, etc.)',
                ],
                handson: [
                  'Set up Python, Jupyter Notebook, install libraries (NumPy, Pandas, Matplotlib, Seaborn)',
                ],
              },
              {
                title: 'Data Wrangling & Preprocessing',
                topics: [
                  'Data Collection (CSV, APIs, Databases)',
                  'Handling Missing Data (Imputation, Dropping)',
                  'Feature Engineering & Scaling',
                  'Encoding Categorical Variables (One-Hot, Label Encoding)',
                ],
                handson: ['Data preprocessing using Pandas & Scikit-learn'],
              },
              {
                title: 'Exploratory Data Analysis (EDA)',
                topics: [
                  'Summary Statistics (Mean, Median, Mode, Standard Deviation)',
                  'Data Visualization (Histograms, Boxplots, Scatterplots)',
                  'Correlation Analysis',
                  'Outlier Detection & Treatment',
                ],
                handson: [
                  'Perform EDA on a real-world dataset using Seaborn & Matplotlib',
                ],
              },
              {
                title: 'Statistics & Probability for Data Science',
                topics: [
                  'Probability Distributions (Normal, Binomial, Poisson)',
                  'Hypothesis Testing (T-tests, Chi-Square, ANOVA)',
                  'Confidence Intervals & P-Values',
                  'A/B Testing Basics',
                ],
                handson: ['Apply statistical tests using SciPy'],
              },
            ],
          },
          {
            title: 'Month 2: Machine Learning & Business Analytics',
            weeks: [
              {
                title: 'Introduction to Machine Learning',
                topics: [
                  'Types of Machine Learning: Supervised, Unsupervised',
                  'Linear Regression & Logistic Regression',
                  'Model Evaluation Metrics (MSE, R², Accuracy, Precision, Recall)',
                ],
                handson: ['Implement basic ML models in Scikit-learn'],
              },
              {
                title: 'Business Analytics & Decision Making',
                topics: [
                  'Key Business Metrics (Revenue, Retention, Churn)',
                  'Data-Driven Decision Making',
                  'Time Series Analysis Basics',
                ],
                handson: ['Analyze business data with Pandas'],
              },
              {
                title: 'Advanced Analytics Techniques',
                topics: [
                  'Clustering (K-Means, Hierarchical)',
                  'Dimensionality Reduction (PCA, t-SNE)',
                  'Sentiment Analysis Basics',
                ],
                handson: ['Implement clustering & sentiment analysis'],
              },
              {
                title: 'Data Science Deployment & Future Learning',
                topics: [
                  'Introduction to Data Engineering (ETL, Pipelines)',
                  'Deploying Data Science Models (Flask, Streamlit)',
                  'MLOps & Model Monitoring',
                  'Future Learning Paths: Deep Learning, Big Data, AI Ethics',
                ],
                handson: [
                  'Deploy a simple data science model using Flask or Streamlit',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'full-stack-web-development-c94',
    title: 'Full Stack Web Development',
    description:
      'Learn the fundamentals of frontend and backend development with hands-on projects and real-world applications.',
    modules: [
      {
        title: 'Frontend Development (HTML, CSS, JavaScript, React)',
        months: [
          {
            title:
              'Month 1: Frontend Development(HTML, CSS, JavaScript, React)',
            weeks: [
              {
                title: 'Introduction to Web Development & HTML/CSS',
                topics: [
                  'What is Full Stack Development?',
                  'Understanding Frontend vs Backend vs Full Stack',
                  'HTML Basics (Tags, Forms, Tables, Semantic HTML)',
                  'CSS Fundamentals (Selectors, Box Model, Flexbox, Grid)',
                ],
                handson: ['Build simple web pages with HTML & CSS'],
              },
              {
                title: 'JavaScript Basics',
                topics: [
                  'JavaScript Fundamentals (Variables, Data Types, Loops, Functions)',
                  'DOM Manipulation (Selecting Elements, Event Listeners)',
                  'ES6+ Features (Arrow Functions, Spread, Destructuring)',
                ],
                handson: [
                  'Build interactive elements (like dropdowns, modals)',
                ],
              },
              {
                title: 'Advanced JavaScript & Introduction to React',
                topics: [
                  'Asynchronous JavaScript (Callbacks, Promises, Async/Await)',
                  'Fetch API & RESTful APIs',
                  'Introduction to React (Components, JSX, Props)',
                ],
                handson: ['Create simple React components'],
              },
              {
                title: 'React Fundamentals & State Management',
                topics: [
                  'React Hooks (useState, useEffect)',
                  'Handling Forms in React',
                  'State Management with Context API',
                ],
                handson: ['Build a small interactive React app'],
              },
            ],
          },
          {
            title: 'Month 2: Backend Development & Deployment',
            weeks: [
              {
                title: 'Introduction to Backend (Node.js & Express.js)',
                topics: [
                  'What is a Backend? How Web Servers Work',
                  'Introduction to Node.js & NPM',
                  'Setting up an Express.js Server',
                ],
                handson: ['Create basic routes and middleware'],
              },
              {
                title: 'Databases & Authentication',
                topics: [
                  'Introduction to Databases (SQL vs NoSQL)',
                  'CRUD Operations with MongoDB',
                  'Authentication Basics (JWT, Sessions)',
                ],
                handson: ['Connect a Node.js backend to a database'],
              },
              {
                title: 'RESTful APIs & Advanced Backend Concepts',
                topics: [
                  'Building RESTful APIs with Express.js',
                  'Error Handling & Middleware',
                  'Deployment Basics (Hosting on Vercel, Netlify)',
                ],
                handson: ['Test APIs using Postman'],
              },
              {
                title: 'Full Stack Integration & Deployment',
                topics: [
                  'Connecting React Frontend to Node.js Backend',
                  'Environment Variables & Security Best Practices',
                  'Introduction to DevOps & CI/CD Basics',
                  'Future Learning Paths (Next.js, GraphQL, Docker)',
                ],
                handson: ['Deploy a basic full-stack application'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'qa-testing-c95',
    title: 'QA & Software Testing',
    description:
      'Learn the fundamentals of software quality assurance, manual testing, and test automation with hands-on projects.',
    modules: [
      {
        title: 'Fundamentals of QA & Manual Testing',
        months: [
          {
            title: 'Month 1: Fundamentals of QA & Manual Testing',
            weeks: [
              {
                title: 'Introduction to QA & Software Testing',
                topics: [
                  'What is Software Testing? Importance of QA',
                  'SDLC vs STLC (Software Testing Life Cycle)',
                  'Types of Testing (Functional, Non-Functional, Regression, Smoke, Sanity)',
                ],
                handson: ['Explore test cases in a real-world application'],
              },
              {
                title: 'Test Case Design & Bug Tracking',
                topics: [
                  'Test Scenarios vs Test Cases',
                  'Writing Effective Test Cases',
                  'Defect Life Cycle & Bug Reporting',
                ],
                handson: ['Write test cases and report defects in JIRA'],
              },
              {
                title: 'Agile Testing & Test Management',
                topics: [
                  'Agile & Scrum in Testing',
                  'Writing Test Plans & Test Strategies',
                  'Test Management Tools (JIRA, TestRail)',
                ],
                handson: ['Create test scenarios in an Agile workflow'],
              },
              {
                title: 'API Testing with Postman',
                topics: [
                  'Introduction to APIs & HTTP Methods',
                  'Testing RESTful APIs using Postman',
                  'Validating API Responses & Automating Tests',
                ],
                handson: ['Perform API tests using Postman'],
              },
            ],
          },
          {
            title: 'Month 2: Test Automation & CI/CD',
            weeks: [
              {
                title: 'Introduction to Automation Testing (Selenium & Python)',
                topics: [
                  'Why Automation Testing?',
                  'Introduction to Selenium WebDriver',
                  'Setting up Selenium with Python',
                ],
                handson: ['Write simple Selenium test scripts'],
              },
              {
                title: 'Advanced Selenium & Web Automation',
                topics: [
                  'Locators (XPath, CSS Selectors)',
                  'Handling Alerts, Frames, Windows',
                  'Implicit & Explicit Waits',
                ],
                handson: ['Automate a web login form'],
              },
              {
                title: 'CI/CD & Test Automation Frameworks',
                topics: [
                  'Introduction to Jenkins & Continuous Integration',
                  'TestNG/PyTest Framework for Automated Testing',
                  'Generating Test Reports',
                ],
                handson: ['Run automated tests in Jenkins'],
              },
              {
                title: 'Performance Testing & Future Learning',
                topics: [
                  'Introduction to Performance Testing',
                  'JMeter Basics & Load Testing',
                  'Security Testing Overview',
                  'Future Learning Paths: AI in Testing, API Automation, DevOps',
                ],
                handson: ['Run a basic performance test in JMeter'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'power-bi-c96',
    title: 'Power BI Fundamentals & Data Transformation',
    description:
      'Master Power BI for data visualization, analysis, and business intelligence with hands-on projects.',
    modules: [
      {
        title: 'Power BI Fundamentals & Data Transformation',
        months: [
          {
            title: 'Month 1: Power BI Fundamentals & Data Transformation',
            weeks: [
              {
                title: 'Introduction to Power BI',
                topics: [
                  'What is Power BI? Key Features & Architecture',
                  'Power BI Components (Power Query, Power Pivot, Power View, Power BI Service)',
                  'Installing & Setting Up Power BI Desktop',
                ],
                handson: ['Connect Power BI to Excel and CSV data'],
              },
              {
                title: 'Data Import & Cleaning in Power Query',
                topics: [
                  'Connecting to Various Data Sources (Excel, SQL, Web, APIs)',
                  'Data Cleaning Techniques (Removing Duplicates, Handling Missing Data)',
                  'Transforming Data (Splitting, Merging, Changing Data Types)',
                ],
                handson: ['Load and clean data using Power Query'],
              },
              {
                title: 'Data Modeling & DAX Basics',
                topics: [
                  'Introduction to Data Modeling (Relationships, Star Schema)',
                  'Understanding Measures & Calculated Columns',
                  'Introduction to DAX (SUM, AVERAGE, COUNT, IF, RELATED)',
                ],
                handson: ['Create a simple data model with relationships'],
              },
              {
                title: 'Creating Basic Visualizations',
                topics: [
                  'Bar Charts, Line Charts, Pie Charts, Tables & Matrix',
                  'Filtering & Slicing Data (Slicers, Filters, Drill-through)',
                  'Formatting & Customizing Visuals',
                ],
                handson: ['Create interactive charts and use slicers'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Power BI & Dashboard Building',
            weeks: [
              {
                title: 'Advanced DAX & Calculations',
                topics: [
                  'Time Intelligence Functions (YTD, MTD, QTD, SAMEPERIODLASTYEAR)',
                  'Conditional Measures & Advanced Calculated Columns',
                  'Using Variables in DAX',
                ],
                handson: ['Implement advanced DAX calculations'],
              },
              {
                title: 'Advanced Visualizations & Custom Charts',
                topics: [
                  'Custom Visuals (KPI, Waterfall, TreeMap, Heatmaps)',
                  'Tooltips & Drillthrough Pages',
                  'Using Conditional Formatting',
                ],
                handson: ['Build a report using advanced visualizations'],
              },
              {
                title: 'Power BI Service & Data Refresh',
                topics: [
                  'Publishing Reports to Power BI Service',
                  'Creating Dashboards & Sharing Reports',
                  'Scheduled Data Refresh & Gateway Setup',
                ],
                handson: ['Publish and share reports in Power BI Service'],
              },
              {
                title: 'Power BI Best Practices & Future Learning',
                topics: [
                  'Performance Optimization in Power BI',
                  'Security & Row-Level Security (RLS)',
                  'Introduction to Power Automate & Power Apps',
                  'Future Learning: AI Visuals, Paginated Reports, Embedded Analytics',
                ],
                handson: ['Apply best practices to optimize reports'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'cloud-computing-c97',
    title: 'DevOps Fundamentals & Automation',
    description:
      'Master DevOps practices, automation, and CI/CD with hands-on projects.',
    modules: [
      {
        title: 'DevOps Fundamentals & Automation',
        months: [
          {
            title: 'Month 1: DevOps Fundamentals & Automation',
            weeks: [
              {
                title: 'Introduction to DevOps & Version Control',
                topics: [
                  'What is DevOps? DevOps Lifecycle & Benefits',
                  'Key DevOps Tools & Technologies Overview',
                  'Understanding Git & GitHub',
                ],
                handson: [
                  'Install Git, configure repositories, and use basic Git commands',
                ],
              },
              {
                title: 'Linux Basics & Shell Scripting for DevOps',
                topics: [
                  'Linux Commands & File System',
                  'User Management & Permissions',
                  'Shell Scripting (Loops, Variables, Functions)',
                ],
                handson: ['Write basic automation scripts'],
              },
              {
                title: 'CI/CD with Jenkins',
                topics: [
                  'Understanding CI/CD Pipelines',
                  'Installing & Configuring Jenkins',
                  'Writing Basic Pipelines (Freestyle & Declarative Pipelines)',
                ],
                handson: ['Create a simple CI/CD pipeline in Jenkins'],
              },
              {
                title: 'Configuration Management (Ansible)',
                topics: [
                  'Introduction to Configuration Management & Infrastructure as Code (IaC)',
                  'Ansible Playbooks & Roles',
                  'Automating Server Configuration with Ansible',
                ],
                handson: ['Write Ansible playbooks for server setup'],
              },
            ],
          },
          {
            title: 'Month 2: Cloud, Containers & Monitoring',
            weeks: [
              {
                title: 'Docker & Containerization',
                topics: [
                  'What is Docker? Why use Containers?',
                  'Docker Installation & Commands',
                  'Creating & Managing Docker Containers',
                ],
                handson: ['Build and run a Docker container'],
              },
              {
                title: 'Kubernetes & Container Orchestration',
                topics: [
                  'Understanding Kubernetes Architecture',
                  'Deploying Applications with Kubectl',
                  'Kubernetes Services & Networking',
                ],
                handson: ['Deploy a pod and service in Kubernetes'],
              },
              {
                title: 'Cloud & Infrastructure as Code (Terraform)',
                topics: [
                  'Introduction to AWS/GCP/Azure Basics',
                  'Infrastructure as Code (Terraform Basics)',
                  'Writing Terraform Scripts for Cloud Deployment',
                ],
                handson: ['Deploy cloud infrastructure using Terraform'],
              },
              {
                title: 'Monitoring, Logging & DevSecOps',
                topics: [
                  'Introduction to Monitoring (Prometheus, Grafana)',
                  'Logging with ELK Stack (Elasticsearch, Logstash, Kibana)',
                  'Security in DevOps (SAST, DAST, DevSecOps Principles)',
                ],
                handson: ['Set up basic monitoring using Prometheus'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'cyber-security-c98',
    title: 'Cybersecurity Fundamentals & Ethical Hacking',
    description:
      'Learn cybersecurity principles, ethical hacking techniques, and security best practices with hands-on experience.',
    modules: [
      {
        title: 'Cybersecurity Fundamentals & Ethical Hacking Basics',
        months: [
          {
            title:
              'Month 1: Cybersecurity Fundamentals & Ethical Hacking Basics',
            weeks: [
              {
                title: 'Introduction to Cybersecurity & Ethical Hacking',
                topics: [
                  'What is Cybersecurity? Key Concepts & CIA Triad',
                  'Cyber Threats & Attack Types (Phishing, Ransomware, DDoS)',
                  'Ethical Hacking vs Black Hat Hacking',
                ],
                handson: ['Set up a virtual lab using VirtualBox/VMware'],
              },
              {
                title: 'Networking & Security Fundamentals',
                topics: [
                  'OSI & TCP/IP Models',
                  'Network Protocols (HTTP, HTTPS, DNS, FTP, SSH)',
                  'Firewalls, IDS & IPS',
                ],
                handson: ['Use Wireshark to capture network traffic'],
              },
              {
                title: 'Linux & Windows Security Basics',
                topics: [
                  'Linux Command Line for Security Professionals',
                  'Windows Security & PowerShell Basics',
                  'Privilege Escalation Techniques',
                ],
                handson: ['Configure basic firewall rules & analyze logs'],
              },
              {
                title: 'Reconnaissance & Vulnerability Assessment',
                topics: [
                  'Passive & Active Reconnaissance',
                  'Google Dorking & OSINT Techniques',
                  'Vulnerability Scanning (Nmap, Nessus, OpenVAS)',
                ],
                handson: ['Perform basic scanning using Nmap'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Hacking Techniques & Security Measures',
            weeks: [
              {
                title: 'Web Application Security & Exploitation',
                topics: [
                  'Common Web Vulnerabilities (SQL Injection, XSS, CSRF)',
                  'OWASP Top 10 Overview',
                  'Web Application Firewalls (WAF)',
                ],
                handson: ['Use Burp Suite to analyze HTTP requests'],
              },
              {
                title: 'Password Cracking & Cryptography',
                topics: [
                  'Hashing & Encryption Basics (AES, RSA, SHA)',
                  'Password Cracking Techniques (Brute Force, Dictionary Attacks)',
                  'Secure Authentication Methods (MFA, OAuth)',
                ],
                handson: ['Crack a hashed password using John the Ripper'],
              },
              {
                title: 'Malware Analysis & Digital Forensics',
                topics: [
                  'Understanding Malware Types (Trojan, Worms, Ransomware)',
                  'Basics of Reverse Engineering Malware',
                  'Introduction to Digital Forensics & Incident Response',
                ],
                handson: ['Analyze a malicious file in a sandbox environment'],
              },
              {
                title: 'Security Best Practices & Future Learning',
                topics: [
                  'Security Hardening for Systems & Networks',
                  'Introduction to Penetration Testing',
                  'Cybersecurity Careers & Certifications (CEH, OSCP, CISSP)',
                ],
                handson: ['Secure a system by applying best practices'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'mobile-app-development-c99',
    title: 'Mobile App Development Fundamentals',
    description:
      'Learn to build mobile applications for Android and iOS using industry-standard tools and frameworks.',
    modules: [
      {
        title: 'Mobile App Development Fundamentals',
        months: [
          {
            title: 'Month 1: Mobile App Development Fundamentals',
            weeks: [
              {
                title: 'Introduction to Mobile App Development',
                topics: [
                  'Overview of Mobile App Ecosystem (Android vs iOS)',
                  'Native vs Hybrid vs Cross-Platform Development',
                  'Setting Up Development Environment',
                  'Android: Install Android Studio, Emulator Setup',
                  'iOS: Install Xcode (Mac Users)',
                ],
                handson: ["Create a basic 'Hello World' app"],
              },
              {
                title: 'UI/UX Design & Navigation',
                topics: [
                  'Understanding Mobile UI/UX Principles',
                  'Layouts & Views (ConstraintLayout, Jetpack Compose for Android, SwiftUI for iOS)',
                  'Buttons, TextFields, Images, Lists',
                  'Navigation & Routing (Activities, Fragments, Navigation Controller)',
                ],
                handson: ['Design basic UI components'],
              },
              {
                title: 'Working with User Input & Forms',
                topics: [
                  'Handling User Input (Forms, TextFields, Buttons)',
                  'Validations & Error Handling',
                  'Using Local Storage (Shared Preferences, UserDefaults)',
                ],
                handson: ['Build a simple form with validation'],
              },
              {
                title: 'State Management & Basic API Calls',
                topics: [
                  'Understanding State in Mobile Apps',
                  'RESTful APIs & HTTP Requests (Retrofit for Android, URLSession for iOS)',
                  'JSON Parsing & Data Binding',
                ],
                handson: ['Fetch and display data from an API'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Topics & Deployment',
            weeks: [
              {
                title: 'Working with Databases',
                topics: [
                  'Introduction to Mobile Databases',
                  'SQLite & Room Database (Android)',
                  'CoreData (iOS)',
                ],
                handson: ['Store and retrieve data from a local database'],
              },
              {
                title: 'Notifications & Background Tasks',
                topics: [
                  'Push Notifications (Firebase Cloud Messaging, APNs)',
                  'Background Services & Multithreading',
                ],
                handson: ['Implement local notifications'],
              },
              {
                title: 'Authentication & Security',
                topics: [
                  'User Authentication (Firebase Auth, OAuth)',
                  'Secure Data Storage (Keychain, Encrypted SharedPreferences)',
                ],
                handson: ['Implement basic authentication'],
              },
              {
                title: 'App Deployment & Best Practices',
                topics: [
                  'Preparing an App for Deployment',
                  'Publishing to Google Play Store & Apple App Store',
                  'App Performance Optimization & Debugging',
                  'Future Learning Paths (Flutter, React Native, Swift vs Kotlin)',
                ],
                handson: ['Test and optimize an app for release'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'robotics-c101',
    title: 'Robotics Fundamentals & Hardware Components',
    description:
      'Learn the fundamentals of robotics, including hardware components, control systems, and AI integration.',
    modules: [
      {
        title: 'Robotics Fundamentals & Hardware Components',
        months: [
          {
            title: 'Month 1: Robotics Fundamentals & Hardware Components',
            weeks: [
              {
                title: 'Introduction to Robotics',
                topics: [
                  'What is Robotics? Applications & Types of Robots',
                  'Components of a Robot (Sensors, Actuators, Controllers)',
                  'Introduction to Microcontrollers & Single-Board Computers (Arduino, Raspberry Pi)',
                ],
                handson: ['Set up Arduino/Raspberry Pi & run a basic program'],
              },
              {
                title: 'Sensors & Actuators in Robotics',
                topics: [
                  'Types of Sensors (Ultrasonic, IR, LIDAR, IMU, Camera)',
                  'Types of Actuators (Servo, DC Motors, Stepper Motors)',
                  'Signal Processing Basics',
                ],
                handson: ['Interface a basic sensor & actuator with Arduino'],
              },
              {
                title: 'Kinematics & Motion Control',
                topics: [
                  'Forward & Inverse Kinematics',
                  'Degrees of Freedom (DOF) & Coordinate Systems',
                  'Motion Planning Algorithms (A*, Dijkstra’s Algorithm)',
                ],
                handson: ['Simulate kinematics using Python (SymPy, NumPy)'],
              },
              {
                title: 'Microcontrollers & Embedded Systems',
                topics: [
                  'Microcontroller Basics (Arduino, ESP32)',
                  'Communication Protocols (I2C, SPI, UART)',
                  'Real-Time Operating Systems (RTOS)',
                ],
                handson: ['Control multiple devices using I2C/SPI'],
              },
            ],
          },
          {
            title: 'Month 2: Control Systems, AI, and Advanced Robotics',
            weeks: [
              {
                title: 'Control Systems in Robotics',
                topics: [
                  'PID Controllers (Proportional, Integral, Derivative)',
                  'Open-Loop vs Closed-Loop Control',
                  'Stability & Response Time in Control Systems',
                ],
                handson: ['Implement a basic PID controller in Python'],
              },
              {
                title: 'Introduction to AI & Machine Learning in Robotics',
                topics: [
                  'Basics of Machine Learning for Robotics',
                  'Computer Vision (OpenCV for Object Detection)',
                  'Reinforcement Learning in Robotics',
                ],
                handson: [
                  'Train a basic image classification model for robots',
                ],
              },
              {
                title: 'Robot Operating System (ROS) & Simulation',
                topics: [
                  'Introduction to ROS & Gazebo',
                  'ROS Topics, Nodes & Services',
                  'Simulating a Robot in ROS',
                ],
                handson: ['Write a basic ROS node'],
              },
              {
                title: 'Robotics Applications & Future Learning',
                topics: [
                  'Autonomous Vehicles & Drones',
                  'Humanoid & Assistive Robots',
                  'Ethics in Robotics & Safety Considerations',
                ],
                handson: ['Test and optimize simple robotic function'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'ar-vr-c102',
    title: 'AR & VR Fundamentals & Development Tools',
    description:
      'Learn the fundamentals of Augmented Reality (AR) and Virtual Reality (VR), including development tools, interactions, and applications.',
    modules: [
      {
        title: 'AR & VR Fundamentals & Development Tools',
        months: [
          {
            title: 'Month 1: AR & VR Fundamentals & Development Tools',
            weeks: [
              {
                title: 'Introduction to AR & VR',
                topics: [
                  'Difference Between AR, VR & MR (Mixed Reality)',
                  'Applications of AR & VR (Gaming, Healthcare, Education, Industry)',
                  'Types of VR (Non-Immersive, Semi-Immersive, Fully Immersive)',
                  'AR vs. Marker-Based & Markerless Tracking',
                ],
                handson: [
                  'Explore AR & VR apps (Google ARCore, Meta Quest, etc.)',
                ],
              },
              {
                title: 'AR & VR Development Tools Overview',
                topics: [
                  'Overview of AR SDKs (ARCore, ARKit, Vuforia)',
                  'Overview of VR Platforms (Unity, Unreal Engine, WebXR)',
                  'Introduction to Unity & Unreal Engine',
                ],
                handson: [
                  'Install Unity/Unreal Engine and explore sample AR/VR projects',
                ],
              },
              {
                title: 'AR Development Basics',
                topics: [
                  'Understanding ARCore (Android) & ARKit (iOS)',
                  'Image & Object Recognition in AR',
                  'AR Foundation in Unity',
                ],
                handson: ['Create a simple marker-based AR app in Unity'],
              },
              {
                title: 'VR Development Basics',
                topics: [
                  'Introduction to VR Headsets (Oculus, HTC Vive, PSVR)',
                  'Understanding VR Controllers & Tracking Systems',
                  'Creating a Basic VR Scene in Unity',
                ],
                handson: ['Set up a VR environment in Unity'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced AR/VR Interactions & Applications',
            weeks: [
              {
                title: '3D Models & UI/UX in AR/VR',
                topics: [
                  'Basics of 3D Modeling (Blender, Maya)',
                  'Optimizing 3D Models for AR/VR Performance',
                  'UI/UX Design Principles for AR/VR Interfaces',
                ],
                handson: ['Import and manipulate a 3D model in Unity/Unreal'],
              },
              {
                title: 'Interaction & Physics in AR/VR',
                topics: [
                  'User Interaction in AR/VR (Hand Tracking, Gaze, Controllers)',
                  'Implementing Physics & Collision in AR/VR',
                  'Haptic Feedback & Audio Integration',
                ],
                handson: ['Add interaction mechanics in a VR scene'],
              },
              {
                title: 'Spatial Mapping & AI in AR/VR',
                topics: [
                  'Environment Mapping & SLAM (Simultaneous Localization & Mapping)',
                  'AI in AR/VR (Object Detection, Gesture Recognition)',
                ],
                handson: [
                  'Use spatial mapping to interact with real-world objects in AR',
                ],
              },
              {
                title: 'AR/VR Deployment & Future Trends',
                topics: [
                  'Deploying AR/VR Apps (Mobile, WebXR, Standalone VR)',
                  'Future Trends in AR/VR (Metaverse, AI Integration, Cloud XR)',
                  'Exploring AR/VR Career Paths & Certifications',
                ],
                handson: ['Package and test a simple AR/VR experience'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'ai-c103',
    title: 'Artificial Intelligence & Machine Learning',
    description:
      'A comprehensive curriculum covering the fundamentals, deep learning, and practical applications of AI and ML.',
    modules: [
      {
        title: 'Artificial Intelligence & Machine Learning',
        months: [
          {
            title: 'Month 1: Fundamentals of AI & Machine Learning',
            weeks: [
              {
                title: 'Introduction to AI & Machine Learning',
                topics: [
                  'What is AI? Types of AI (Narrow, General, Super AI)',
                  'Supervised vs Unsupervised vs Reinforcement Learning',
                  'AI applications (Computer Vision, NLP, Robotics)',
                ],
                handson: [
                  'Set up Python, Jupyter Notebook, install libraries (NumPy, Pandas, Matplotlib, Scikit-Learn, TensorFlow/PyTorch)',
                ],
              },
              {
                title: 'Python, Data Science, & Preprocessing',
                topics: [
                  'NumPy, Pandas (Data Manipulation)',
                  'Data visualization (Matplotlib, Seaborn)',
                  'Handling missing data, feature scaling, one-hot encoding',
                ],
                handson: ['Load and explore datasets (Iris, Titanic, MNIST)'],
              },
              {
                title: 'Supervised Learning (Regression & Classification)',
                topics: [
                  'Linear Regression, Logistic Regression',
                  'Decision Trees & Random Forest',
                  'Model evaluation (MSE, Accuracy, Precision, Recall, F1-score)',
                  'Overfitting & Regularization',
                ],
                handson: [
                  'Train and evaluate Regression & Classification models',
                ],
              },
              {
                title: 'Unsupervised Learning & Feature Engineering',
                topics: [
                  'Clustering (K-Means, Hierarchical, DBSCAN)',
                  'Dimensionality Reduction (PCA, t-SNE)',
                  'Feature Selection & Engineering Techniques',
                ],
                handson: ['Apply clustering and feature engineering'],
              },
            ],
          },
          {
            title: 'Month 2: Deep Learning & AI Applications',
            weeks: [
              {
                title: 'Neural Networks & Deep Learning Basics',
                topics: [
                  'Perceptron, Activation Functions',
                  'Feedforward Neural Networks (FNN)',
                  'Backpropagation & Gradient Descent',
                ],
                handson: [
                  'Implement a simple neural network using TensorFlow/PyTorch',
                ],
              },
              {
                title:
                  'Convolutional Neural Networks (CNNs) & Image Processing',
                topics: [
                  'CNN Layers (Convolution, Pooling, Fully Connected)',
                  'Image Classification (MNIST, CIFAR-10)',
                  'Transfer Learning & Pre-trained Models',
                ],
                handson: ['Train a CNN for image recognition'],
              },
              {
                title: 'Natural Language Processing (NLP) & Transformers',
                topics: [
                  'Text Preprocessing (Tokenization, Stopword Removal, Stemming/Lemmatization)',
                  'Word Embeddings (Word2Vec, GloVe)',
                  'Introduction to Transformers (BERT, GPT)',
                ],
                handson: ['Sentiment Analysis using Hugging Face Transformers'],
              },
              {
                title: 'AI Deployment & Future Learning',
                topics: [
                  'AI Ethics & Bias in AI',
                  'Deploy models using Flask / FastAPI / Streamlit',
                  'Future Learning Paths: Reinforcement Learning, GANs, AutoML',
                  'Overview of MLOps & Model Deployment',
                ],
                handson: [''],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'nano-science-c104',
    title: 'Nanotechnology & Nanomaterials',
    description:
      'A comprehensive curriculum covering the fundamentals, synthesis, applications, and future trends in nanotechnology.',
    modules: [
      {
        title: 'Nanotechnology & Nanomaterials',
        months: [
          {
            title: 'Month 1: Fundamentals & Synthesis of Nanomaterials',
            weeks: [
              {
                title: 'Introduction to Nanoscience & Nanotechnology',
                topics: [
                  'Definition & Scope of Nanoscience and Nanotechnology',
                  'Historical Development & Key Discoveries (Feynman, Drexler, etc.)',
                  'Unique Properties of Nanomaterials (Size Effects, Quantum Effects)',
                ],
                handson: ['Explore nanotech applications in daily life'],
              },
              {
                title: 'Types & Classification of Nanomaterials',
                topics: [
                  'Zero, One, Two, and Three-Dimensional Nanomaterials',
                  'Carbon-Based Nanomaterials (Fullerenes, Carbon Nanotubes, Graphene)',
                  'Metal, Metal-Oxide, and Polymer-Based Nanomaterials',
                ],
                handson: [
                  'Compare properties of bulk vs. nano-sized materials',
                ],
              },
              {
                title: 'Synthesis Methods of Nanomaterials',
                topics: [
                  'Top-Down Approaches: Lithography, Ball Milling, Etching',
                  'Bottom-Up Approaches: Sol-Gel, Chemical Vapor Deposition (CVD), Self-Assembly',
                  'Green Nanotechnology & Eco-Friendly Synthesis Methods',
                ],
                handson: [
                  'Study images of nanomaterial structures from research papers',
                ],
              },
              {
                title: 'Characterization Techniques in Nanotechnology',
                topics: [
                  'Microscopy Techniques (SEM, TEM, AFM)',
                  'Spectroscopy Techniques (XRD, FTIR, UV-Vis, Raman)',
                  'Thermal & Electrical Property Measurement Techniques',
                ],
                handson: ['Interpret SEM/TEM images from published research'],
              },
            ],
          },
          {
            title: 'Month 2: Applications, Challenges & Future Trends',
            weeks: [
              {
                title: 'Nanotechnology in Electronics & Energy',
                topics: [
                  'Nanoelectronics (Transistors, Quantum Dots, Memory Devices)',
                  'Nanotechnology in Solar Cells & Batteries (Lithium-Ion, Supercapacitors)',
                ],
                handson: ['Review real-world nano-based energy applications'],
              },
              {
                title: 'Biomedical & Environmental Applications',
                topics: [
                  'Nanomedicine (Drug Delivery, Cancer Therapy, Biosensors)',
                  'Antimicrobial Nanoparticles & Water Purification',
                  'Nanotoxicology & Biocompatibility Concerns',
                ],
                handson: ['Analyze case studies on nanomedicine breakthroughs'],
              },
              {
                title: 'Industrial & Commercial Applications of Nanotechnology',
                topics: [
                  'Nanotechnology in Food & Agriculture (Nano-fertilizers, Smart Packaging)',
                  'Nano-Coatings, Smart Textiles & Cosmetics',
                  'Nanomanufacturing & Scale-Up Challenges',
                ],
                handson: [
                  'Identify nano-based commercial products & their benefits',
                ],
              },
              {
                title:
                  'Ethical, Regulatory, and Future Perspectives in Nanotechnology',
                topics: [
                  'Ethical Concerns & Environmental Impact',
                  'Nanotechnology Regulations (FDA, EPA, ISO Standards)',
                  'Emerging Trends: Quantum Computing, AI in Nanotech, Self-Replicating Nanobots',
                ],
                handson: [
                  'Discuss potential risks and ethical dilemmas in nanotechnology',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'research-development-c105',
    title: 'Agricultural Research & Innovation',
    description:
      'A comprehensive curriculum covering the fundamentals, advanced technologies, and future trends in agricultural research and innovation.',
    modules: [
      {
        title: 'Agricultural Research & Innovation',
        months: [
          {
            title:
              'Month 1: Fundamentals of Agricultural Research & Innovation',
            weeks: [
              {
                title: 'Introduction to Agricultural R&D',
                topics: [
                  'Importance of R&D in Agriculture',
                  'Historical Advancements & Green Revolution',
                  'Key Organizations in Agri R&D (FAO, ICAR, CGIAR, USDA)',
                ],
                handson: [
                  'Analyze a case study on a breakthrough in agricultural R&D',
                ],
              },
              {
                title: 'Crop Improvement & Breeding Techniques',
                topics: [
                  'Conventional vs. Modern Plant Breeding',
                  'Hybridization & Genetic Variability',
                  'Role of Biotechnology & Genetically Modified Crops (GMOs)',
                ],
                handson: ['Compare traditional vs. GMO crop characteristics'],
              },
              {
                title: 'Soil Science & Nutrient Management',
                topics: [
                  'Soil Classification & Fertility Management',
                  'Organic vs. Chemical Fertilizers',
                  'Precision Nutrient Management Techniques',
                ],
                handson: [
                  'Analyze soil test reports and recommend improvements',
                ],
              },
              {
                title: 'Water Management & Irrigation Innovations',
                topics: [
                  'Water Conservation Strategies in Agriculture',
                  'Drip & Sprinkler Irrigation Technologies',
                  'Rainwater Harvesting & Watershed Management',
                ],
                handson: [
                  'Evaluate different irrigation methods based on efficiency',
                ],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Technologies & Sustainable Agriculture',
            weeks: [
              {
                title: 'Sustainable Agriculture & Climate-Resilient Farming',
                topics: [
                  'Agroecology & Organic Farming Practices',
                  'Climate Change & Its Impact on Agriculture',
                  'Carbon Sequestration & Regenerative Agriculture',
                ],
                handson: [
                  'Assess climate adaptation strategies for a specific crop',
                ],
              },
              {
                title: 'Precision Agriculture & Smart Farming',
                topics: [
                  'Remote Sensing, GIS & IoT in Agriculture',
                  'Role of AI & Big Data in Farm Decision-Making',
                  'Drones & Automated Machinery in Farming',
                ],
                handson: [
                  'Explore satellite data for farm productivity analysis',
                ],
              },
              {
                title: 'Pest & Disease Management in Crops',
                topics: [
                  'Integrated Pest Management (IPM) Strategies',
                  'Role of Bio-Pesticides & Natural Predators',
                  'AI & Machine Learning for Disease Detection',
                ],
                handson: ['Identify common pests & suggest IPM solutions'],
              },
              {
                title: 'Future Trends in Agricultural R&D',
                topics: [
                  'Vertical Farming & Urban Agriculture Innovations',
                  'Gene Editing (CRISPR) in Crop Improvement',
                  'Role of Policy & Funding in Agricultural R&D',
                ],
                handson: [
                  'Discuss potential impacts of CRISPR on global agriculture',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'genetics-c106',
    title: 'Agricultural Genetics',
    description:
      'A structured curriculum covering the fundamentals and advanced topics in agricultural genetics, including molecular tools, biotechnology, and future trends.',
    modules: [
      {
        title: 'Agricultural Genetics',
        months: [
          {
            title: 'Month 1: Fundamentals of Agricultural Genetics',
            weeks: [
              {
                title: 'Introduction to Agricultural Genetics',
                topics: [
                  'Basics of Genetics: DNA, Genes, Chromosomes',
                  'Mendelian Genetics & Laws of Inheritance',
                  'Role of Genetics in Crop & Livestock Improvement',
                ],
                handson: [
                  'Analyze Punnett squares for basic trait inheritance',
                ],
              },
              {
                title: 'Plant Genetics & Crop Improvement',
                topics: [
                  'Genetic Variation & Mutation in Plants',
                  'Hybridization Techniques & Heterosis',
                  'Polyploidy & Its Role in Crop Development',
                ],
                handson: ['Compare hybrid vs. open-pollinated crop varieties'],
              },
              {
                title: 'Animal Genetics & Livestock Breeding',
                topics: [
                  'Genetic Principles in Animal Breeding',
                  'Artificial Selection & Crossbreeding Strategies',
                  'Role of Genomics in Livestock Improvement',
                ],
                handson: ['Study pedigree charts for cattle breeding'],
              },
              {
                title: 'Molecular Genetics & Genomic Tools',
                topics: [
                  'DNA Sequencing & Genetic Markers',
                  'Genetic Mapping & Quantitative Trait Loci (QTL)',
                  'Introduction to Bioinformatics in Agricultural Genetics',
                ],
                handson: [
                  'Explore genetic marker databases for crops/livestock',
                ],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Topics in Agricultural Genetics',
            weeks: [
              {
                title: 'Biotechnology in Agriculture',
                topics: [
                  'Genetic Modification (GMOs) & Their Applications',
                  'Gene Cloning & Genetic Transformation in Crops',
                  'Regulation & Safety of GM Crops',
                ],
                handson: ['Analyze a case study on a GMO crop'],
              },
              {
                title: 'CRISPR & Gene Editing in Agriculture',
                topics: [
                  'Basics of CRISPR-Cas9 & Genome Editing',
                  'Applications in Disease-Resistant Crops & Livestock',
                  'Ethical & Regulatory Considerations in Gene Editing',
                ],
                handson: ['Review research on CRISPR-modified plants'],
              },
              {
                title: 'Epigenetics & Stress Adaptation in Crops',
                topics: [
                  'Role of Epigenetics in Plant Growth & Stress Tolerance',
                  'Environmental Influence on Gene Expression',
                  'Applications in Climate-Resilient Crops',
                ],
                handson: ['Examine a study on drought-resistant crop genetics'],
              },
              {
                title: 'Future of Agricultural Genetics',
                topics: [
                  'Synthetic Biology & Future Crops',
                  'Personalized Agriculture: DNA-Based Precision Breeding',
                  'Role of AI & Big Data in Agricultural Genetics',
                ],
                handson: ['Discuss potential of synthetic biology in farming'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'Medical-Coding-c13',
    title: 'Medical Coding Fundamentals',
    description:
      'A structured curriculum covering the fundamentals and advanced topics in medical coding, including compliance, billing, and certification preparation.',
    modules: [
      {
        title: 'Medical Coding',
        months: [
          {
            title: 'Month 1: Medical Coding Fundamentals',
            weeks: [
              {
                title: 'Introduction to Medical Coding & Healthcare System',
                topics: [
                  'Overview of Medical Coding & Its Importance',
                  'Healthcare System Structure (Providers, Payers, Regulations)',
                  'Coding Systems: ICD, CPT, HCPCS Overview',
                ],
                handson: ['Familiarize with coding books (ICD-10, CPT, HCPCS)'],
              },
              {
                title: 'Medical Terminology & Anatomy for Coders',
                topics: [
                  'Basic Medical Terminology (Prefixes, Suffixes, Root Words)',
                  'Human Body Systems Overview',
                  'Common Diseases & Conditions (Diagnostic Terms)',
                ],
                handson: ['Practice decoding medical terms using word parts'],
              },
              {
                title: 'ICD-10-CM (Diagnosis Coding)',
                topics: [
                  'Introduction to ICD-10-CM Structure',
                  'Guidelines for Assigning Codes',
                  'Coding for Common Diagnoses (Infectious Diseases, Cardiology, Orthopedics)',
                ],
                handson: ['Assign ICD-10-CM codes for sample diagnoses'],
              },
              {
                title: 'CPT (Procedural Coding) Basics',
                topics: [
                  'Understanding CPT Code Categories',
                  'Modifiers in CPT Coding',
                  'Coding for Surgeries, Office Visits, & Medical Procedures',
                ],
                handson: ['Assign CPT codes for sample procedures'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Coding & Compliance',
            weeks: [
              {
                title: 'HCPCS Level II & Drug Coding',
                topics: [
                  'Introduction to HCPCS Level II',
                  'Durable Medical Equipment (DME) Coding',
                  'Medication & Supply Coding',
                ],
                handson: ['Assign HCPCS codes for medical supplies & drugs'],
              },
              {
                title: 'Medical Billing, Reimbursement & Insurance',
                topics: [
                  'Medical Billing Process & Revenue Cycle Management',
                  'Insurance Plans (Medicare, Medicaid, Private Insurers)',
                  'Claim Submission, Denials, & Appeals',
                ],
                handson: ['Review sample medical claims'],
              },
              {
                title: 'Compliance, Auditing & Ethical Guidelines',
                topics: [
                  'HIPAA & Patient Confidentiality',
                  'Fraud & Abuse (Upcoding, Unbundling, Stark Law)',
                  'Internal Audits & Compliance Programs',
                ],
                handson: ['Identify coding errors & compliance violations'],
              },
              {
                title: 'Career Preparation & Certification Overview',
                topics: [
                  'Medical Coding Career Paths & Certifications (CPC, CCS, CCA)',
                  'Exam Preparation Strategies (AAPC & AHIMA)',
                  'Practice Questions & Mock Coding Exercises',
                ],
                handson: ['Complete a practice coding exam'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'SAS-Programming-c14',
    title: 'SAS Fundamentals & Data Manipulation',
    description:
      'A structured curriculum covering the fundamentals and advanced topics in SAS Programming & Clinical SAS, data manipulation, and statistical analysis.',
    modules: [
      {
        title: 'SAS Programming & Clinical SAS',
        months: [
          {
            title: 'Month 1: SAS Fundamentals & Data Manipulation',
            weeks: [
              {
                title: 'Introduction to SAS & Basics',
                topics: [
                  'What is SAS? Applications in Data Analysis & Business Intelligence',
                  'Installing SAS (SAS University Edition, SAS OnDemand)',
                  'SAS Interface & Components (SAS Editor, Log, Output Window)',
                  'Writing & Running Basic SAS Programs',
                ],
                handson: ['Write & execute a simple SAS program'],
              },
              {
                title: 'Data Input, Import & Export',
                topics: [
                  'Reading Data in SAS (DATALINES, INFILE, IMPORT)',
                  'Importing Data from Excel, CSV, & Databases',
                  'Exporting Data to Different Formats',
                ],
                handson: ['Import & export datasets in SAS'],
              },
              {
                title: 'Data Manipulation & Cleaning',
                topics: [
                  'Understanding SAS Datasets (Observations & Variables)',
                  'Using DATA Step for Data Cleaning & Transformation',
                  'Conditional Processing (IF-THEN-ELSE, CASE Statements)',
                  'Handling Missing Data',
                ],
                handson: ['Clean and modify a dataset using SAS'],
              },
              {
                title: 'Data Sorting, Filtering, & Combining',
                topics: [
                  'Sorting Data (PROC SORT)',
                  'Filtering Data (WHERE, IF conditions)',
                  'Merging & Joining Datasets (SET, MERGE, PROC SQL JOIN)',
                ],
                handson: ['Merge two datasets & filter based on conditions'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Data Analysis & Reporting',
            weeks: [
              {
                title: 'Statistical Analysis in SAS',
                topics: [
                  'Descriptive Statistics (PROC MEANS, PROC UNIVARIATE)',
                  'Frequency Tables & Cross-tabulations (PROC FREQ)',
                  'Correlation & Regression (PROC CORR, PROC REG)',
                ],
                handson: ['Perform basic statistical analysis on sample data'],
              },
              {
                title: 'Data Visualization & Reporting',
                topics: [
                  'Creating Reports using PROC PRINT & PROC REPORT',
                  'Generating Graphs & Charts (PROC SGPLOT, PROC GCHART)',
                  'Formatting Output (ODS, PDF, HTML, RTF)',
                ],
                handson: ['Generate a formatted report with charts'],
              },
              {
                title: 'SAS Macros & Automation',
                topics: [
                  'Introduction to Macros & Macro Variables',
                  'Writing Macro Programs (Defining & Calling Macros)',
                  'Automating Repetitive Tasks in SAS',
                ],
                handson: ['Write a basic SAS macro for automation'],
              },
              {
                title: 'SQL in SAS & Optimization',
                topics: [
                  'Introduction to PROC SQL',
                  'Querying & Summarizing Data',
                  'Optimizing SAS Code for Efficiency',
                ],
                handson: ['Write & execute SQL queries in SAS'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'Pharmacovigilance-c15',
    title: 'Fundamentals of Pharmacovigilance',
    description:
      'A structured curriculum covering the fundamentals and advanced topics in Pharmacovigilance, drug safety monitoring, and regulatory frameworks.',
    modules: [
      {
        title: 'Pharmacovigilance',
        months: [
          {
            title: 'Month 1: Fundamentals of Pharmacovigilance',
            weeks: [
              {
                title: 'Introduction to Pharmacovigilance',
                topics: [
                  'Definition, Scope, and Importance of Pharmacovigilance',
                  'History and Development of Drug Safety Monitoring',
                  'Key Stakeholders (Regulatory Agencies, Pharma Companies, WHO)',
                ],
                handson: ['Review case studies of major drug recalls'],
              },
              {
                title: 'Drug Development & Regulatory Frameworks',
                topics: [
                  'Phases of Clinical Trials (Preclinical to Post-Marketing Surveillance)',
                  'International Regulatory Bodies (FDA, EMA, MHRA, CDSCO, ICH, WHO)',
                  'Overview of Good Pharmacovigilance Practices (GVP)',
                ],
                handson: ['Compare regulatory requirements across countries'],
              },
              {
                title: 'Adverse Drug Reactions (ADR) & Signal Detection',
                topics: [
                  'Types of Adverse Drug Reactions (ADR) (Type A & B)',
                  'Identifying & Assessing ADRs',
                  'Signal Detection & Risk-Benefit Analysis',
                ],
                handson: ['Analyze ADR case reports'],
              },
              {
                title: 'Adverse Event (AE) Reporting & Case Processing',
                topics: [
                  'Individual Case Safety Reports (ICSR) – Structure & Importance',
                  'MedDRA Coding System for ADRs',
                  'AE Reporting Systems (FAERS, EudraVigilance, VigiBase)',
                ],
                handson: ['Familiarize with MedDRA terminology'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Topics in Pharmacovigilance',
            weeks: [
              {
                title: 'Periodic Safety Reports & Risk Management Plans (RMPs)',
                topics: [
                  'Periodic Safety Update Reports (PSUR) & Periodic Benefit-Risk Evaluation Reports (PBRER)',
                  'Risk Management Plans (RMPs) & Post-Marketing Safety Studies (PMSS)',
                ],
                handson: ['Review a sample RMP'],
              },
              {
                title: 'Pharmacovigilance in Special Populations',
                topics: [
                  'Pediatric & Geriatric Pharmacovigilance',
                  'Drug Safety in Pregnancy & Lactation',
                  'Pharmacovigilance for Herbal & Biologic Products',
                ],
                handson: [
                  'Analyze safety concerns for a specific drug in a special population',
                ],
              },
              {
                title: 'Compliance, Audits & Pharmacovigilance Inspections',
                topics: [
                  'Good Pharmacovigilance Practices (GVP) Compliance',
                  'Audit & Inspection Process (FDA, EMA, MHRA)',
                  'Common Findings & Corrective Actions in PV Audits',
                ],
                handson: ['Conduct a mock compliance checklist review'],
              },
              {
                title: 'Career Pathways & Future Trends in Pharmacovigilance',
                topics: [
                  'Roles in Pharmacovigilance (Drug Safety Associate, PV Officer, Risk Management)',
                  'AI & Big Data in Pharmacovigilance',
                  'Emerging Trends (Pharmacogenomics, Personalized Medicine)',
                ],
                handson: [
                  'Explore online PV databases & certification options',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'Nano-Science-Nano-Technology-c16',
    title: 'Fundamentals & Applications of Nanotechnology',
    description:
      'A structured curriculum covering the fundamentals, synthesis, applications, and future trends in nanotechnology.',
    modules: [
      {
        title: 'Nanotechnology',
        months: [
          {
            title: 'Month 1: Fundamentals & Synthesis of Nanomaterials',
            weeks: [
              {
                title: 'Introduction to Nanoscience & Nanotechnology',
                topics: [
                  'Definition & Scope of Nanoscience and Nanotechnology',
                  'Historical Development & Key Discoveries (Feynman, Drexler, etc.)',
                  'Unique Properties of Nanomaterials (Size Effects, Quantum Effects)',
                ],
                handson: ['Explore nanotech applications in daily life'],
              },
              {
                title: 'Types & Classification of Nanomaterials',
                topics: [
                  'Zero, One, Two, and Three-Dimensional Nanomaterials',
                  'Carbon-Based Nanomaterials (Fullerenes, Carbon Nanotubes, Graphene)',
                  'Metal, Metal-Oxide, and Polymer-Based Nanomaterials',
                ],
                handson: [
                  'Compare properties of bulk vs. nano-sized materials',
                ],
              },
              {
                title: 'Synthesis Methods of Nanomaterials',
                topics: [
                  'Top-Down Approaches: Lithography, Ball Milling, Etching',
                  'Bottom-Up Approaches: Sol-Gel, Chemical Vapor Deposition (CVD), Self-Assembly',
                  'Green Nanotechnology & Eco-Friendly Synthesis Methods',
                ],
                handson: [
                  'Study images of nanomaterial structures from research papers',
                ],
              },
              {
                title: 'Characterization Techniques in Nanotechnology',
                topics: [
                  'Microscopy Techniques (SEM, TEM, AFM)',
                  'Spectroscopy Techniques (XRD, FTIR, UV-Vis, Raman)',
                  'Thermal & Electrical Property Measurement Techniques',
                ],
                handson: ['Interpret SEM/TEM images from published research'],
              },
            ],
          },
          {
            title: 'Month 2: Applications, Challenges & Future Trends',
            weeks: [
              {
                title: 'Nanotechnology in Electronics & Energy',
                topics: [
                  'Nanoelectronics (Transistors, Quantum Dots, Memory Devices)',
                  'Nanotechnology in Solar Cells & Batteries (Lithium-Ion, Supercapacitors)',
                ],
                handson: ['Review real-world nano-based energy applications'],
              },
              {
                title: 'Biomedical & Environmental Applications',
                topics: [
                  'Nanomedicine (Drug Delivery, Cancer Therapy, Biosensors)',
                  'Antimicrobial Nanoparticles & Water Purification',
                  'Nanotoxicology & Biocompatibility Concerns',
                ],
                handson: ['Analyze case studies on nanomedicine breakthroughs'],
              },
              {
                title: 'Industrial & Commercial Applications of Nanotechnology',
                topics: [
                  'Nanotechnology in Food & Agriculture (Nano-fertilizers, Smart Packaging)',
                  'Nano-Coatings, Smart Textiles & Cosmetics',
                  'Nanomanufacturing & Scale-Up Challenges',
                ],
                handson: [
                  'Identify nano-based commercial products & their benefits',
                ],
              },
              {
                title:
                  'Ethical, Regulatory, and Future Perspectives in Nanotechnology',
                topics: [
                  'Ethical Concerns & Environmental Impact',
                  'Nanotechnology Regulations (FDA, EPA, ISO Standards)',
                  'Emerging Trends: Quantum Computing, AI in Nanotech, Self-Replicating Nanobots',
                ],
                handson: [
                  'Discuss potential risks and ethical dilemmas in nanotechnology',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'Artificial-Intelligence-c17',
    title: 'Fundamentals of AI & Machine Learning',
    description:
      'A structured curriculum covering the fundamentals, deep learning, and AI applications.',
    modules: [
      {
        title: 'AI & Machine Learning',
        months: [
          {
            title: 'Month 1: Fundamentals of AI & Machine Learning',
            weeks: [
              {
                title: 'Introduction to AI & Machine Learning',
                topics: [
                  'What is AI? Types of AI (Narrow, General, Super AI)',
                  'Supervised vs Unsupervised vs Reinforcement Learning',
                  'AI applications (Computer Vision, NLP, Robotics)',
                ],
                handson: [
                  'Set up Python, Jupyter Notebook, install libraries (NumPy, Pandas, Matplotlib, Scikit-Learn, TensorFlow/PyTorch)',
                ],
              },
              {
                title: 'Python, Data Science, & Preprocessing',
                topics: [
                  'NumPy, Pandas (Data Manipulation)',
                  'Data visualization (Matplotlib, Seaborn)',
                  'Handling missing data, feature scaling, one-hot encoding',
                ],
                handson: ['Load and explore datasets (Iris, Titanic, MNIST)'],
              },
              {
                title: 'Supervised Learning (Regression & Classification)',
                topics: [
                  'Linear Regression, Logistic Regression',
                  'Decision Trees & Random Forest',
                  'Model evaluation (MSE, Accuracy, Precision, Recall, F1-score)',
                  'Overfitting & Regularization',
                ],
                handson: [
                  'Train and evaluate Regression & Classification models',
                ],
              },
              {
                title: 'Unsupervised Learning & Feature Engineering',
                topics: [
                  'Clustering (K-Means, Hierarchical, DBSCAN)',
                  'Dimensionality Reduction (PCA, t-SNE)',
                  'Feature Selection & Engineering Techniques',
                ],
                handson: ['Apply clustering and feature engineering'],
              },
            ],
          },
          {
            title: 'Month 2: Deep Learning & AI Applications',
            weeks: [
              {
                title: 'Neural Networks & Deep Learning Basics',
                topics: [
                  'Perceptron, Activation Functions',
                  'Feedforward Neural Networks (FNN)',
                  'Backpropagation & Gradient Descent',
                ],
                handson: [
                  'Implement a simple neural network using TensorFlow/PyTorch',
                ],
              },
              {
                title:
                  'Convolutional Neural Networks (CNNs) & Image Processing',
                topics: [
                  'CNN Layers (Convolution, Pooling, Fully Connected)',
                  'Image Classification (MNIST, CIFAR-10)',
                  'Transfer Learning & Pre-trained Models',
                ],
                handson: ['Train a CNN for image recognition'],
              },
              {
                title: 'Natural Language Processing (NLP) & Transformers',
                topics: [
                  'Text Preprocessing (Tokenization, Stopword Removal, Stemming/Lemmatization)',
                  'Word Embeddings (Word2Vec, GloVe)',
                  'Introduction to Transformers (BERT, GPT)',
                ],
                handson: ['Sentiment Analysis using Hugging Face Transformers'],
              },
              {
                title: 'AI Deployment & Future Learning',
                topics: [
                  'AI Ethics & Bias in AI',
                  'Deploy models using Flask / FastAPI / Streamlit',
                  'Future Learning Paths: Reinforcement Learning, GANs, AutoML',
                  'Overview of MLOps & Model Deployment',
                ],
                handson: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'Regulatory-Affairs-c18',
    title: 'Fundamentals of Regulatory Affairs',
    description:
      'A structured curriculum covering regulatory frameworks, compliance, and global regulations.',
    modules: [
      {
        title: 'Regulatory Affairs',
        months: [
          {
            title: 'Month 1: Fundamentals of Regulatory Affairs',
            weeks: [
              {
                title: 'Introduction to Regulatory Affairs',
                topics: [
                  'Role & Importance of Regulatory Affairs in Healthcare',
                  'Overview of Regulatory Agencies (FDA, EMA, MHRA, CDSCO, WHO, ICH)',
                  'Drug Development Lifecycle & Regulatory Requirements',
                ],
                handson: ['Compare regulatory agencies across countries'],
              },
              {
                title: 'Drug Development & Clinical Trial Regulations',
                topics: [
                  'Phases of Drug Development (Preclinical to Post-Marketing)',
                  'Good Clinical Practice (GCP) & Clinical Trial Regulations',
                  'IND, NDA, ANDA, BLA Submissions (US FDA)',
                ],
                handson: ['Review a sample clinical trial protocol'],
              },
              {
                title: 'Regulatory Submissions & Dossier Preparation',
                topics: [
                  'Common Technical Document (CTD) & eCTD Format',
                  'Regulatory Submission Process (IND, NDA, MAA, ANDA)',
                  'Labeling Requirements & Package Inserts',
                ],
                handson: ['Identify key sections of an eCTD dossier'],
              },
              {
                title:
                  'Good Manufacturing Practices (GMP) & Quality Compliance',
                topics: [
                  'Good Manufacturing Practices (GMP) Guidelines',
                  'Quality by Design (QbD) & Process Validation',
                  'Regulatory Inspections & Audits (FDA 483, Warning Letters)',
                ],
                handson: ['Analyze a GMP compliance case study'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Regulatory Affairs & Global Regulations',
            weeks: [
              {
                title: 'Regulatory Affairs in Biologics & Medical Devices',
                topics: [
                  'Biologics & Biosimilars Regulations (BLA, EMA Guidelines)',
                  'Medical Device Regulations (EU MDR, US FDA 510(k), PMA)',
                  'Combination Products & In Vitro Diagnostics (IVDs)',
                ],
                handson: [
                  'Compare biologics vs. small molecule drug approval pathways',
                ],
              },
              {
                title: 'Global Regulatory Frameworks & Drug Safety',
                topics: [
                  'US FDA, European EMA, Japan PMDA, India CDSCO Regulations',
                  'Post-Marketing Surveillance & Pharmacovigilance (ICH E2E)',
                  'Adverse Event Reporting (MedWatch, EudraVigilance, FAERS)',
                ],
                handson: ['Review a sample pharmacovigilance report'],
              },
              {
                title: 'Regulatory Strategies for Market Access & Compliance',
                topics: [
                  'Orphan Drug Regulations & Fast Track Approvals',
                  'Pricing & Reimbursement Strategies (HTA, Market Access)',
                  'Life Cycle Management & Post-Approval Changes (Variations)',
                ],
                handson: [
                  'Analyze expedited approval pathways (Fast Track, Breakthrough Therapy)',
                ],
              },
              {
                title:
                  'Ethics, Legal Aspects & Future Trends in Regulatory Affairs',
                topics: [
                  'Ethical Considerations in Drug Development',
                  'Intellectual Property Rights (Patents, Exclusivity)',
                  'Digital Health, AI in Regulatory Affairs & Future Trends',
                ],
                handson: ['Discuss key ethical challenges in drug regulation'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'Bioinformatics-c19',
    title: 'Fundamentals of Bioinformatics',
    description:
      'A structured curriculum covering bioinformatics principles, computational tools, and applications in genomics and proteomics.',
    modules: [
      {
        title: 'Bioinformatics',
        months: [
          {
            title: 'Month 1: Fundamentals of Bioinformatics',
            weeks: [
              {
                title: 'Introduction to Bioinformatics',
                topics: [
                  'What is Bioinformatics? Importance & Applications',
                  'Overview of Biological Databases (NCBI, EMBL, DDBJ, UniProt)',
                  'Central Dogma of Molecular Biology & Data Representation',
                ],
                handson: ['Explore NCBI GenBank and UniProt databases'],
              },
              {
                title: 'Sequence Alignment & Analysis',
                topics: [
                  'DNA, RNA, & Protein Sequence Formats (FASTA, GenBank)',
                  'Pairwise Sequence Alignment (BLAST, Needleman-Wunsch, Smith-Waterman)',
                  'Multiple Sequence Alignment (Clustal Omega, MUSCLE)',
                ],
                handson: ['Perform BLAST search and analyze results'],
              },
              {
                title: 'Genomics & Next-Generation Sequencing (NGS)',
                topics: [
                  'Introduction to Genomics & Genome Assembly',
                  'Next-Generation Sequencing (NGS) Technologies',
                  'Quality Control & Preprocessing of NGS Data',
                ],
                handson: ['Explore NGS datasets in NCBI SRA'],
              },
              {
                title: 'Structural Bioinformatics & Protein Modeling',
                topics: [
                  'Protein Structure Basics (Primary to Quaternary Structure)',
                  'Protein Databases (PDB, SwissProt) & Molecular Visualization Tools (PyMOL, Chimera)',
                  'Protein Structure Prediction & Homology Modeling',
                ],
                handson: ['Visualize a protein structure in PyMOL'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Bioinformatics & Computational Tools',
            weeks: [
              {
                title: 'Phylogenetics & Evolutionary Analysis',
                topics: [
                  'Concepts of Molecular Evolution & Phylogenetics',
                  'Phylogenetic Tree Construction (UPGMA, Neighbor-Joining, Maximum Likelihood)',
                  'Tools for Phylogenetic Analysis (MEGA, PhyML)',
                ],
                handson: ['Construct a phylogenetic tree using MEGA'],
              },
              {
                title: 'Systems Biology & Pathway Analysis',
                topics: [
                  'Introduction to Systems Biology & Biological Networks',
                  'Metabolic Pathways (KEGG, Reactome)',
                  'Gene Ontology (GO) & Functional Enrichment Analysis',
                ],
                handson: ['Analyze metabolic pathways using KEGG'],
              },
              {
                title: 'Machine Learning & AI in Bioinformatics',
                topics: [
                  'Basics of AI & Machine Learning in Bioinformatics',
                  'Applications in Drug Discovery, Genomics & Disease Prediction',
                  'Tools & Libraries (Biopython, scikit-learn for Bioinformatics)',
                ],
                handson: ['Use Biopython for sequence analysis'],
              },
              {
                title:
                  'Ethical Considerations & Future Trends in Bioinformatics',
                topics: [
                  'Ethical Issues in Genomic Data Analysis',
                  'Personalized Medicine & Precision Healthcare',
                  'Future Trends: Quantum Computing, AI, Synthetic Biology',
                ],
                handson: ['Discuss ethical concerns in genomic research'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'Molecular-Biology-Genetics-c20',
    title: 'Fundamentals of Molecular Biology',
    description:
      'A structured curriculum covering molecular biology principles, genetics, and biotechnology applications.',
    modules: [
      {
        title: 'Molecular Biology',
        months: [
          {
            title: 'Month 1: Fundamentals of Molecular Biology',
            weeks: [
              {
                title: 'Introduction to Molecular Biology & Genetics',
                topics: [
                  'Central Dogma of Molecular Biology (DNA → RNA → Protein)',
                  'Structure & Function of DNA, RNA, and Proteins',
                  'Types of RNA (mRNA, tRNA, rRNA, miRNA) & Their Roles',
                ],
                handson: ['Explore DNA sequences using NCBI GenBank'],
              },
              {
                title: 'DNA Replication, Transcription & Translation',
                topics: [
                  'DNA Replication: Mechanism, Enzymes, and Regulation',
                  'Transcription: RNA Polymerase, Promoters, and Enhancers',
                  'Translation: Ribosomes, tRNA, and Protein Synthesis',
                ],
                handson: [
                  'Identify key transcription factors from research papers',
                ],
              },
              {
                title: 'Gene Regulation & Expression',
                topics: [
                  'Operon Model (Lac & Trp Operons) in Prokaryotes',
                  'Epigenetics & DNA Methylation in Eukaryotic Gene Regulation',
                  'RNA Interference (siRNA, miRNA) & Post-Transcriptional Regulation',
                ],
                handson: ['Analyze gene expression data from public databases'],
              },
              {
                title: 'Mutations & DNA Repair Mechanisms',
                topics: [
                  'Types of Mutations (Point, Frameshift, Silent, Missense, Nonsense)',
                  'DNA Damage & Repair Pathways (Base Excision, Nucleotide Excision, Mismatch Repair)',
                  'Role of Mutations in Genetic Diseases & Cancer',
                ],
                handson: ['Identify mutation types in real genetic sequences'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Genetics & Biotechnology',
            weeks: [
              {
                title: 'Principles of Genetics & Inheritance Patterns',
                topics: [
                  'Mendelian vs. Non-Mendelian Inheritance',
                  'Chromosomal Aberrations (Aneuploidy, Translocations)',
                  'Polygenic Traits & Multifactorial Inheritance',
                ],
                handson: ['Analyze pedigree charts for genetic disorders'],
              },
              {
                title: 'Recombinant DNA Technology & Genetic Engineering',
                topics: [
                  'Cloning Vectors (Plasmids, BACs, YACs)',
                  'CRISPR-Cas9 & Gene Editing Techniques',
                  'Polymerase Chain Reaction (PCR) & Applications',
                ],
                handson: ['Simulate restriction digestion patterns'],
              },
              {
                title: 'Genomics, Proteomics & Biotechnology Applications',
                topics: [
                  'Human Genome Project & Whole Genome Sequencing',
                  'Functional Genomics & Gene Expression Profiling',
                  'Applications in Medicine, Agriculture & Synthetic Biology',
                ],
                handson: ['Explore genomic datasets from Ensembl'],
              },
              {
                title: 'Ethical Considerations & Future Trends',
                topics: [
                  'Ethical Issues in Genetic Engineering & GMOs',
                  'Personalized Medicine & Gene Therapy',
                  'Emerging Trends: Synthetic Biology, Epigenomics, AI in Genetics',
                ],
                handson: ['Debate ethical dilemmas in genetic research'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'AutoCAD-c21',
    title: 'AutoCAD Fundamentals & 2D Drafting',
    description:
      'A structured curriculum covering AutoCAD fundamentals, 2D drafting, and 3D modeling.',
    modules: [
      {
        title: 'AutoCAD',
        months: [
          {
            title: 'Month 1: AutoCAD Fundamentals & 2D Drafting',
            weeks: [
              {
                title: 'Introduction to AutoCAD & Basic Drawing Tools',
                topics: [
                  'Overview of AutoCAD Interface, Commands, and Workspaces',
                  'Basic Drawing Commands (Line, Circle, Rectangle, Arc, Polyline)',
                  'Coordinate Systems (Absolute, Relative, Polar)',
                ],
                handson: ['Create simple 2D shapes and modify them'],
              },
              {
                title: 'Modifying & Editing Tools in 2D Drafting',
                topics: [
                  'Modify Tools (Move, Copy, Rotate, Mirror, Scale, Trim, Extend)',
                  'Object Snaps, Grids, and Guidelines',
                  'Layers, Line Types, and Object Properties',
                ],
                handson: ['Modify and organize drawing elements using layers'],
              },
              {
                title: 'Annotation & Dimensioning',
                topics: [
                  'Text & Multiline Text (MText) in AutoCAD',
                  'Dimensioning Tools (Linear, Angular, Radius, Diameter, Ordinate)',
                  'Leaders, Tables, and Hatching',
                ],
                handson: ['Create fully dimensioned technical drawings'],
              },
              {
                title: 'Blocks, Templates, and Plotting',
                topics: [
                  'Creating and Using Blocks & Attributes',
                  'External References (XRefs) and Title Blocks',
                  'Printing & Plotting: Layouts, Viewports, Paper Space vs. Model Space',
                ],
                handson: ['Create a reusable template with title block'],
              },
            ],
          },
          {
            title: 'Month 2: 3D Modeling & Advanced AutoCAD Tools',
            weeks: [
              {
                title: 'Introduction to 3D Modeling in AutoCAD',
                topics: [
                  '3D Workspaces & Navigation Tools',
                  'Basic 3D Shapes (Box, Cylinder, Sphere, Cone)',
                  'Extrude, Revolve, Loft, and Sweep Commands',
                ],
                handson: ['Create simple 3D objects'],
              },
              {
                title: 'Advanced 3D Modeling & Editing',
                topics: [
                  'Boolean Operations (Union, Subtract, Intersect)',
                  'Fillet, Chamfer, Shell & Offset in 3D',
                  'Using UCS (User Coordinate System) for Custom Views',
                ],
                handson: ['Modify complex 3D objects with Boolean operations'],
              },
              {
                title: 'Rendering, Materials & Visualization',
                topics: [
                  'Applying Materials & Textures in AutoCAD',
                  'Lighting & Shadows for 3D Models',
                  'Introduction to Rendering & Exporting High-Quality Images',
                ],
                handson: ['Render a 3D object with basic lighting'],
              },
              {
                title: 'Industry Applications & Best Practices',
                topics: [
                  'AutoCAD in Architecture, Mechanical, Electrical, and Civil Engineering',
                  'Customizing AutoCAD: Macros, Scripts & Plugins',
                  'Efficiency Tips: Shortcuts, Automation & Workflows',
                ],
                handson: [
                  'Practice industry-specific drawings based on interest',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'Construction-Management-c22',
    title: 'Fundamentals of Construction Planning',
    description:
      'A structured curriculum covering construction planning, scheduling, and management techniques.',
    modules: [
      {
        title: 'Construction Planning',
        months: [
          {
            title: 'Month 1: Fundamentals of Construction Planning',
            weeks: [
              {
                title: 'Introduction to Construction Planning',
                topics: [
                  'Overview of Construction Planning & Management',
                  'Types of Construction Projects (Residential, Commercial, Infrastructure)',
                  'Stages of a Construction Project (Pre-Planning to Closeout)',
                ],
                handson: ['Analyze a sample construction project lifecycle'],
              },
              {
                title: 'Work Breakdown Structure (WBS) & Scheduling Basics',
                topics: [
                  'Work Breakdown Structure (WBS) & Task Identification',
                  'Activity Sequencing & Dependencies',
                  'Introduction to Scheduling Techniques (Gantt Charts, CPM, PERT)',
                ],
                handson: ['Create a simple WBS for a small project'],
              },
              {
                title: 'Critical Path Method (CPM) & Network Diagrams',
                topics: [
                  'Understanding Critical Path Method (CPM)',
                  'Forward & Backward Pass Calculations',
                  'Float & Slack in Project Scheduling',
                ],
                handson: ['Determine the critical path for a given schedule'],
              },
              {
                title: 'Construction Cost Estimation & Budgeting',
                topics: [
                  'Types of Construction Costs (Direct, Indirect, Overheads)',
                  'Cost Estimation Methods (Preliminary, Detailed, Parametric)',
                  'Basics of Construction Budgeting & Cash Flow Management',
                ],
                handson: [
                  'Prepare a sample cost estimate for a building component',
                ],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Construction Planning & Management',
            weeks: [
              {
                title: 'Resource Allocation & Optimization',
                topics: [
                  'Labor, Equipment, and Material Planning',
                  'Resource Leveling & Smoothing',
                  'Construction Productivity & Optimization Techniques',
                ],
                handson: [
                  'Perform resource allocation for a construction schedule',
                ],
              },
              {
                title: 'Risk Management & Safety Planning',
                topics: [
                  'Common Risks in Construction (Delays, Cost Overruns, Design Changes)',
                  'Risk Assessment & Mitigation Strategies',
                  'Occupational Safety Standards (OSHA, ISO 45001)',
                ],
                handson: [
                  'Identify risks and suggest mitigation for a sample project',
                ],
              },
              {
                title: 'Contract Management & Legal Aspects',
                topics: [
                  'Types of Construction Contracts (Lump Sum, Unit Price, Cost-Plus)',
                  'Key Contractual Clauses (Scope, Payment Terms, Penalties)',
                  'Claims & Dispute Resolution in Construction',
                ],
                handson: ['Review a sample construction contract'],
              },
              {
                title: 'Modern Construction Techniques & Software Tools',
                topics: [
                  'BIM (Building Information Modeling) in Planning',
                  'Lean Construction & Prefabrication Techniques',
                  'Software for Construction Planning (MS Project, Primavera P6)',
                ],
                handson: ['Explore Primavera P6 or MS Project interface'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'Embedded-Systems-Design-c23',
    title: 'Fundamentals of Embedded Systems',
    description:
      'A structured curriculum covering embedded systems fundamentals, microcontrollers, and real-time applications.',
    modules: [
      {
        title: 'Embedded Systems',
        months: [
          {
            title: 'Month 1: Fundamentals of Embedded Systems',
            weeks: [
              {
                title: 'Introduction to Embedded Systems',
                topics: [
                  'Definition & Applications of Embedded Systems',
                  'Microcontrollers vs. Microprocessors',
                  'Embedded System Architecture (Harvard vs. Von Neumann)',
                ],
                handson: [
                  'Explore specifications of popular microcontrollers (e.g., ARM, AVR, PIC)',
                ],
              },
              {
                title: 'Microcontroller Basics & Programming',
                topics: [
                  'Understanding Microcontroller Components (CPU, Memory, I/O)',
                  'Introduction to Embedded C and Assembly Language',
                  'Writing and Flashing Firmware onto a Microcontroller',
                ],
                handson: [
                  "Write a simple 'Hello World' (LED Blinking) program",
                ],
              },
              {
                title: 'Peripherals & Interfacing',
                topics: [
                  'GPIO (General-Purpose Input/Output) and Pin Control',
                  'Timers, PWM (Pulse Width Modulation), and Interrupts',
                  'Serial Communication Protocols (UART, SPI, I2C)',
                ],
                handson: [
                  'Configure UART and transmit data between a microcontroller and PC',
                ],
              },
              {
                title: 'Memory & Power Management',
                topics: [
                  'Types of Memory: RAM, ROM, EEPROM, Flash',
                  'Memory Mapping & Addressing in Embedded Systems',
                  'Low Power Modes & Power Optimization Techniques',
                ],
                handson: ['Simulate memory allocation in an embedded system'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Embedded System Design',
            weeks: [
              {
                title: 'Real-Time Operating Systems (RTOS) Basics',
                topics: [
                  'Introduction to RTOS (FreeRTOS, VxWorks, RTEMS)',
                  'Tasks, Threads, and Scheduling in RTOS',
                  'Inter-Task Communication (Message Queues, Semaphores, Mutexes)',
                ],
                handson: ['Implement task switching in FreeRTOS'],
              },
              {
                title: 'Embedded Networking & IoT Concepts',
                topics: [
                  'Communication Protocols (CAN, Modbus, Zigbee, MQTT)',
                  'Embedded Ethernet & Wi-Fi (ESP8266/ESP32)',
                  'Introduction to IoT (Internet of Things) & Cloud Connectivity',
                ],
                handson: ['Send sensor data to a cloud platform via MQTT'],
              },
              {
                title: 'Embedded Security & Fault Tolerance',
                topics: [
                  'Security in Embedded Systems (Encryption, Authentication)',
                  'Secure Boot & Firmware Updates',
                  'Fault Tolerance & Watchdog Timers',
                ],
                handson: [
                  'Configure a watchdog timer to reset a system on failure',
                ],
              },
              {
                title: 'Testing, Debugging & Industry Trends',
                topics: [
                  'Debugging Techniques (JTAG, Serial Debugging, Logic Analyzers)',
                  'Software Development Best Practices for Embedded Systems',
                  'Industry Trends: AI in Embedded Systems, RISC-V Architecture',
                ],
                handson: [
                  'Debug a simple embedded program using a hardware debugger',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'Robotics-c24',
    title: 'Fundamentals of Robotics',
    description:
      'A structured curriculum covering robotics fundamentals, hardware components, and AI applications.',
    modules: [
      {
        title: 'Robotics',
        months: [
          {
            title: 'Month 1: Robotics Fundamentals & Hardware Components',
            weeks: [
              {
                title: 'Introduction to Robotics',
                topics: [
                  'What is Robotics? Applications & Types of Robots',
                  'Components of a Robot (Sensors, Actuators, Controllers)',
                  'Introduction to Microcontrollers & Single-Board Computers (Arduino, Raspberry Pi)',
                ],
                handson: ['Set up Arduino/Raspberry Pi & run a basic program'],
              },
              {
                title: 'Sensors & Actuators in Robotics',
                topics: [
                  'Types of Sensors (Ultrasonic, IR, LIDAR, IMU, Camera)',
                  'Types of Actuators (Servo, DC Motors, Stepper Motors)',
                  'Signal Processing Basics',
                ],
                handson: ['Interface a basic sensor & actuator with Arduino'],
              },
              {
                title: 'Kinematics & Motion Control',
                topics: [
                  'Forward & Inverse Kinematics',
                  'Degrees of Freedom (DOF) & Coordinate Systems',
                  'Motion Planning Algorithms (A*, Dijkstra’s Algorithm)',
                ],
                handson: ['Simulate kinematics using Python (SymPy, NumPy)'],
              },
              {
                title: 'Microcontrollers & Embedded Systems',
                topics: [
                  'Microcontroller Basics (Arduino, ESP32)',
                  'Communication Protocols (I2C, SPI, UART)',
                  'Real-Time Operating Systems (RTOS)',
                ],
                handson: ['Control multiple devices using I2C/SPI'],
              },
            ],
          },
          {
            title: 'Month 2: Control Systems, AI, and Advanced Robotics',
            weeks: [
              {
                title: 'Control Systems in Robotics',
                topics: [
                  'PID Controllers (Proportional, Integral, Derivative)',
                  'Open-Loop vs Closed-Loop Control',
                  'Stability & Response Time in Control Systems',
                ],
                handson: ['Implement a basic PID controller in Python'],
              },
              {
                title: 'Introduction to AI & Machine Learning in Robotics',
                topics: [
                  'Basics of Machine Learning for Robotics',
                  'Computer Vision (OpenCV for Object Detection)',
                  'Reinforcement Learning in Robotics',
                ],
                handson: [
                  'Train a basic image classification model for robots',
                ],
              },
              {
                title: 'Robot Operating System (ROS) & Simulation',
                topics: [
                  'Introduction to ROS & Gazebo',
                  'ROS Topics, Nodes & Services',
                  'Simulating a Robot in ROS',
                ],
                handson: ['Write a basic ROS node'],
              },
              {
                title: 'Robotics Applications & Future Learning',
                topics: [
                  'Autonomous Vehicles & Drones',
                  'Humanoid & Assistive Robots',
                  'Ethics in Robotics & Safety Considerations',
                ],
                handson: ['Test and optimize simple robotic functions'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'VLSI-Design-c25',
    title: 'Fundamentals of VLSI Design',
    description:
      'A structured curriculum covering VLSI fundamentals, semiconductor technology, and advanced design techniques.',
    modules: [
      {
        title: 'VLSI Design',
        months: [
          {
            title: 'Month 1: Fundamentals of VLSI Design',
            weeks: [
              {
                title: 'Introduction to VLSI & Semiconductor Technology',
                topics: [
                  'Overview of VLSI & its Applications',
                  'MOSFET Basics & Scaling Trends (Moore’s Law)',
                  'VLSI Design Flow (Front-end & Back-end)',
                ],
                handson: [
                  'Explore CMOS technology node trends (e.g., 7nm, 5nm)',
                ],
              },
              {
                title: 'CMOS Logic Design & Transistor Characteristics',
                topics: [
                  'CMOS Inverter Characteristics (Noise Margins, Power Dissipation)',
                  'Logic Gates using CMOS (AND, OR, NAND, NOR, XOR)',
                  'Static & Dynamic Power Consumption in CMOS Circuits',
                ],
                handson: ['Simulate CMOS logic gates in LTSpice/HSPICE'],
              },
              {
                title: 'Combinational & Sequential Circuit Design',
                topics: [
                  'Logic Minimization Techniques (Boolean Algebra, Karnaugh Maps)',
                  'Flip-Flops, Registers, and Counters',
                  'Clocking Strategies & Timing Issues in VLSI',
                ],
                handson: ['Implement and analyze a D flip-flop in Verilog'],
              },
              {
                title: 'VLSI Fabrication & Process Technology',
                topics: [
                  'Semiconductor Fabrication Steps (Oxidation, Lithography, Etching, Doping)',
                  'CMOS Process Flow & Design Rules',
                  'IC Packaging & Interconnects (Metal Layers, TSVs)',
                ],
                handson: [
                  'Study a standard CMOS process flow from foundries (e.g., TSMC, Intel)',
                ],
              },
            ],
          },
          {
            title: 'Month 2: Advanced VLSI Design & Testing',
            weeks: [
              {
                title: 'Verilog/VHDL for VLSI Design',
                topics: [
                  'HDL Basics: Verilog vs. VHDL',
                  'Structural vs. Behavioral Modeling',
                  'Synthesis vs. Simulation in ASIC/FPGA Design',
                ],
                handson: ['Simulate a basic arithmetic unit in Verilog'],
              },
              {
                title: 'Memory Design & Low-Power VLSI',
                topics: [
                  'SRAM & DRAM Architecture',
                  'Non-Volatile Memories (Flash, EEPROM)',
                  'Power Reduction Techniques (Clock Gating, Multi-Vt Design)',
                ],
                handson: ['Simulate a simple SRAM cell in Cadence Virtuoso'],
              },
              {
                title: 'Testing & Verification in VLSI',
                topics: [
                  'Design for Testability (DFT) & Built-In Self-Test (BIST)',
                  'Fault Modeling & ATPG (Automatic Test Pattern Generation)',
                  'Functional vs. Structural Testing',
                ],
                handson: [
                  'Implement basic testbenches in Verilog for verification',
                ],
              },
              {
                title: 'Industry Trends & Emerging Technologies',
                topics: [
                  'FinFETs & Beyond CMOS Technologies (TFETs, CNTs, Quantum Computing)',
                  'VLSI in AI & Edge Computing',
                  'Tools & EDA Software (Cadence, Synopsys, Mentor Graphics)',
                ],
                handson: [
                  'Explore open-source VLSI tools like Magic & OpenROAD',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'Wireless-Networks-c26',
    title: 'Fundamentals of Wireless Networks',
    description:
      'A structured curriculum covering wireless communication fundamentals, network technologies, and advanced security techniques.',
    modules: [
      {
        title: 'Wireless Networks',
        months: [
          {
            title: 'Month 1: Fundamentals of Wireless Networks',
            weeks: [
              {
                title: 'Introduction to Wireless Communication',
                topics: [
                  'Basics of Wireless Communication & Signal Propagation',
                  'Wireless Network Architecture & Components',
                  'Comparison: Wired vs. Wireless Networks',
                ],
                handson: [
                  'Analyze wireless signal characteristics using simulation tools',
                ],
              },
              {
                title: 'Wireless Communication Technologies & Standards',
                topics: [
                  'Frequency Spectrum & Modulation Techniques (AM, FM, PSK, QAM)',
                  'Cellular Networks (1G to 5G Evolution)',
                  'Wireless Standards: IEEE 802.11 (Wi-Fi), 802.15 (Bluetooth), 802.16 (WiMAX)',
                ],
                handson: [
                  'Study Wi-Fi and Bluetooth signal properties using Wireshark',
                ],
              },
              {
                title: 'Medium Access Control (MAC) & Wireless LANs',
                topics: [
                  'MAC Layer in Wireless Networks (CSMA/CA, TDMA, FDMA, OFDMA)',
                  'WLAN Architecture: Access Points, SSID, Channels',
                  'Performance Analysis of Wireless Networks',
                ],
                handson: ['Configure and analyze a basic Wi-Fi network setup'],
              },
              {
                title: 'Mobile Networks & Cellular Communication',
                topics: [
                  'Cellular Network Architecture (Base Stations, MSC, Handoff)',
                  'GSM, CDMA, LTE, and 5G NR Overview',
                  'Network Interference, QoS, and Traffic Management',
                ],
                handson: [
                  'Explore LTE and 5G coverage maps and analyze spectrum usage',
                ],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Wireless Networks & Security',
            weeks: [
              {
                title: 'Wireless Network Security & Threats',
                topics: [
                  'Wireless Security Protocols (WEP, WPA, WPA2, WPA3)',
                  'Threats in Wireless Networks (Eavesdropping, Man-in-the-Middle, DoS)',
                  'Secure Wireless Authentication & Encryption Methods',
                ],
                handson: [
                  'Analyze Wi-Fi security vulnerabilities using a network analyzer',
                ],
              },
              {
                title: 'IoT & Wireless Sensor Networks (WSN)',
                topics: [
                  'IoT Architecture & Communication Protocols (Zigbee, LoRa, NB-IoT)',
                  'Wireless Sensor Network Components & Applications',
                  'Challenges in IoT Security & Scalability',
                ],
                handson: [
                  'Study Zigbee/LoRa network behavior with a simulation tool',
                ],
              },
              {
                title: 'Ad-Hoc & Mesh Networks',
                topics: [
                  'Characteristics of Ad-Hoc & Mesh Networks',
                  'Routing Protocols: AODV, DSR, OLSR',
                  'Wireless MANETs & VANETs (Vehicular Networks)',
                ],
                handson: [
                  'Simulate ad-hoc network routing using NS-3 or OMNeT++',
                ],
              },
              {
                title: 'Future Trends in Wireless Networking',
                topics: [
                  '6G Vision & Research Directions',
                  'AI & ML in Wireless Networks',
                  'Green Wireless Communication & Energy-Efficient Networking',
                ],
                handson: ['Explore AI-driven network optimization techniques'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'embedded-systems-design-c111',
    title: 'Fundamentals of Embedded Systems',
    description:
      'A structured curriculum covering embedded systems, microcontrollers, and real-time applications.',
    modules: [
      {
        title: 'Embedded Systems',
        months: [
          {
            title: 'Month 1: Fundamentals of Embedded Systems',
            weeks: [
              {
                title: 'Introduction to Embedded Systems',
                topics: [
                  'Definition & Applications of Embedded Systems',
                  'Microcontrollers vs. Microprocessors',
                  'Embedded System Architecture (Harvard vs. Von Neumann)',
                ],
                handson: [
                  'Explore specifications of popular microcontrollers (e.g., ARM, AVR, PIC)',
                ],
              },
              {
                title: 'Microcontroller Basics & Programming',
                topics: [
                  'Understanding Microcontroller Components (CPU, Memory, I/O)',
                  'Introduction to Embedded C and Assembly Language',
                  'Writing and Flashing Firmware onto a Microcontroller',
                ],
                handson: [
                  "Write a simple 'Hello World' (LED Blinking) program",
                ],
              },
              {
                title: 'Peripherals & Interfacing',
                topics: [
                  'GPIO (General-Purpose Input/Output) and Pin Control',
                  'Timers, PWM (Pulse Width Modulation), and Interrupts',
                  'Serial Communication Protocols (UART, SPI, I2C)',
                ],
                handson: [
                  'Configure UART and transmit data between a microcontroller and PC',
                ],
              },
              {
                title: 'Memory & Power Management',
                topics: [
                  'Types of Memory: RAM, ROM, EEPROM, Flash',
                  'Memory Mapping & Addressing in Embedded Systems',
                  'Low Power Modes & Power Optimization Techniques',
                ],
                handson: ['Simulate memory allocation in an embedded system'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Embedded System Design',
            weeks: [
              {
                title: 'Real-Time Operating Systems (RTOS) Basics',
                topics: [
                  'Introduction to RTOS (FreeRTOS, VxWorks, RTEMS)',
                  'Tasks, Threads, and Scheduling in RTOS',
                  'Inter-Task Communication (Message Queues, Semaphores, Mutexes)',
                ],
                handson: ['Implement task switching in FreeRTOS'],
              },
              {
                title: 'Embedded Networking & IoT Concepts',
                topics: [
                  'Communication Protocols (CAN, Modbus, Zigbee, MQTT)',
                  'Embedded Ethernet & Wi-Fi (ESP8266/ESP32)',
                  'Introduction to IoT (Internet of Things) & Cloud Connectivity',
                ],
                handson: ['Send sensor data to a cloud platform via MQTT'],
              },
              {
                title: 'Embedded Security & Fault Tolerance',
                topics: [
                  'Security in Embedded Systems (Encryption, Authentication)',
                  'Secure Boot & Firmware Updates',
                  'Fault Tolerance & Watchdog Timers',
                ],
                handson: [
                  'Configure a watchdog timer to reset a system on failure',
                ],
              },
              {
                title: 'Testing, Debugging & Industry Trends',
                topics: [
                  'Debugging Techniques (JTAG, Serial Debugging, Logic Analyzers)',
                  'Software Development Best Practices for Embedded Systems',
                  'Industry Trends: AI in Embedded Systems, RISC-V Architecture',
                ],
                handson: [
                  'Debug a simple embedded program using a hardware debugger',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'control-systems-c112',
    title: 'Fundamentals of Control Systems',
    description:
      'A comprehensive curriculum covering control systems theory, analysis, and modern control techniques.',
    modules: [
      {
        title: 'Control Systems',
        months: [
          {
            title: 'Month 1: Fundamentals of Control Systems',
            weeks: [
              {
                title: 'Introduction to Control Systems',
                topics: [
                  'Definition & Importance of Control Systems',
                  'Open-Loop vs. Closed-Loop Control Systems',
                  'Examples of Control Systems in Engineering & Industry',
                ],
                handson: [
                  'Identify open-loop & closed-loop systems in real-life applications',
                ],
              },
              {
                title: 'Mathematical Modeling of Dynamic Systems',
                topics: [
                  'Transfer Functions & Laplace Transform Basics',
                  'Block Diagrams & Signal Flow Graphs',
                  'State-Space Representation',
                ],
                handson: [
                  'Derive the transfer function of a mechanical/electrical system',
                ],
              },
              {
                title: 'Time-Domain Analysis of Control Systems',
                topics: [
                  'First-Order & Second-Order System Responses',
                  'Transient & Steady-State Response Analysis',
                  'Time-Domain Specifications (Rise Time, Settling Time, Overshoot)',
                ],
                handson: [
                  'Simulate a step response of a second-order system in MATLAB',
                ],
              },
              {
                title: 'Stability Analysis in Control Systems',
                topics: [
                  'Concept of Stability (BIBO Stability)',
                  'Routh-Hurwitz Criterion & Root Locus Method',
                  'Pole-Zero Analysis & System Response',
                ],
                handson: ["Analyze stability using MATLAB's root locus tool"],
              },
            ],
          },
          {
            title:
              'Month 2: Advanced Control Techniques & Modern Control Systems',
            weeks: [
              {
                title: 'Frequency-Domain Analysis',
                topics: [
                  'Bode Plots & Gain/Phase Margins',
                  'Nyquist & Nichols Plots',
                  'Resonance & Bandwidth in Frequency Response',
                ],
                handson: ['Plot a Bode diagram for a given transfer function'],
              },
              {
                title: 'Controllers & Compensation Techniques',
                topics: [
                  'PID Controllers (Proportional, Integral, Derivative)',
                  'Lead, Lag, and Lead-Lag Compensation',
                  'PID Tuning Methods (Ziegler-Nichols, Cohen-Coon)',
                ],
                handson: ['Implement a PID controller in MATLAB/Simulink'],
              },
              {
                title: 'State-Space Analysis & Modern Control Systems',
                topics: [
                  'Controllability & Observability',
                  'State Feedback & Pole Placement',
                  'Introduction to Optimal Control (LQR)',
                ],
                handson: [
                  'Design a state feedback controller using pole placement',
                ],
              },
              {
                title: 'Nonlinear & Digital Control Systems',
                topics: [
                  'Nonlinear System Behavior (Limit Cycles, Chaos)',
                  'Introduction to Digital Control Systems (Z-Transform, Discretization)',
                  'Adaptive & Robust Control Techniques',
                ],
                handson: [
                  'Simulate a digital control system in MATLAB/Simulink',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'renewable-energy-systems-c113',
    title: 'Fundamentals of Renewable Energy',
    description:
      'A comprehensive curriculum covering renewable energy sources, storage systems, grid integration, and future trends.',
    modules: [
      {
        title: 'Renewable Energy',
        months: [
          {
            title: 'Month 1: Fundamentals of Renewable Energy',
            weeks: [
              {
                title: 'Introduction to Renewable Energy Systems',
                topics: [
                  'Overview of Renewable vs. Non-Renewable Energy',
                  'Global Energy Scenario & Sustainable Development',
                  'Energy Policies & Regulations for Renewables',
                ],
                handson: [
                  'Compare renewable energy adoption in different countries',
                ],
              },
              {
                title: 'Solar Energy Systems',
                topics: [
                  'Principles of Solar Radiation & Photovoltaics (PV)',
                  'Types of Solar Panels (Monocrystalline, Polycrystalline, Thin Film)',
                  'Solar Thermal Systems & Concentrated Solar Power (CSP)',
                ],
                handson: [
                  'Calculate solar panel efficiency for different conditions',
                ],
              },
              {
                title: 'Wind Energy Systems',
                topics: [
                  'Wind Energy Basics & Aerodynamics of Wind Turbines',
                  'Horizontal vs. Vertical Axis Wind Turbines',
                  'Wind Power Calculation & Site Selection',
                ],
                handson: [
                  'Analyze wind speed data for potential energy output',
                ],
              },
              {
                title: 'Hydropower & Biomass Energy',
                topics: [
                  'Principles of Hydropower Generation (Dams, Tidal, Run-of-River)',
                  'Biomass Energy Conversion (Biogas, Biofuels, Waste-to-Energy)',
                  'Environmental Impact & Sustainability Considerations',
                ],
                handson: [
                  'Evaluate energy potential from local biomass sources',
                ],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Renewable Energy & Integration',
            weeks: [
              {
                title: 'Energy Storage Systems',
                topics: [
                  'Battery Technologies (Lithium-Ion, Flow Batteries, Sodium-Ion)',
                  'Hydrogen as an Energy Carrier & Fuel Cells',
                  'Pumped Hydro, Flywheels, and Supercapacitors',
                ],
                handson: [
                  'Compare energy storage options for solar and wind farms',
                ],
              },
              {
                title: 'Grid Integration & Smart Grids',
                topics: [
                  'Challenges in Renewable Energy Grid Integration',
                  'Microgrids & Distributed Energy Resources (DERs)',
                  'Demand Response & Smart Grid Technologies',
                ],
                handson: [
                  'Simulate grid stability with different renewable energy mixes',
                ],
              },
              {
                title: 'Geothermal & Emerging Renewable Technologies',
                topics: [
                  'Basics of Geothermal Energy & Power Plants',
                  'Ocean Energy (Tidal, Wave, OTEC) & Emerging Technologies',
                  'Future Trends in Renewable Energy (AI, Blockchain, Advanced Materials)',
                ],
                handson: [
                  'Assess geothermal potential in different geographical locations',
                ],
              },
              {
                title: 'Economics, Policies & Future of Renewable Energy',
                topics: [
                  'Levelized Cost of Energy (LCOE) for Renewables',
                  'Government Incentives & Carbon Credits',
                  'Role of AI & IoT in Renewable Energy Management',
                ],
                handson: [
                  'Analyze cost-benefit comparisons for renewable vs. fossil fuel energy',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'power-electronics-c101',
    title: 'Fundamentals of Power Electronics',
    description:
      'A comprehensive curriculum covering power electronic devices, converters, motor drives, and applications in renewable energy.',
    modules: [
      {
        title: 'Power Electronics',
        months: [
          {
            title: 'Month 1: Fundamentals of Power Electronics',
            weeks: [
              {
                title: 'Introduction to Power Electronics',
                topics: [
                  'Overview of Power Electronics & Applications',
                  'Characteristics of Power Electronic Circuits',
                  'Basics of Electrical Power & Energy Conversion',
                ],
                handson: ['Analyze power flow in basic AC-DC circuits'],
              },
              {
                title: 'Power Semiconductor Devices',
                topics: [
                  'Power Diodes, SCRs (Thyristors), Triacs',
                  'MOSFETs & IGBTs (Insulated Gate Bipolar Transistors)',
                  'Switching Characteristics & Losses',
                ],
                handson: [
                  'Compare MOSFET vs. IGBT switching behavior in a circuit simulator',
                ],
              },
              {
                title: 'AC-DC Converters (Rectifiers)',
                topics: [
                  'Uncontrolled vs. Controlled Rectifiers',
                  'Single-Phase & Three-Phase Rectifiers',
                  'Harmonics & Power Factor Improvement',
                ],
                handson: [
                  'Simulate a controlled rectifier circuit in MATLAB/PSIM',
                ],
              },
              {
                title: 'DC-DC Converters (Choppers)',
                topics: [
                  'Buck, Boost, and Buck-Boost Converters',
                  'Continuous vs. Discontinuous Conduction Mode',
                  'Applications in DC Motor Drives & Renewable Energy Systems',
                ],
                handson: [
                  'Design a step-down DC-DC converter using simulation tools',
                ],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Power Electronics & Applications',
            weeks: [
              {
                title: 'DC-AC Inverters',
                topics: [
                  'Single-Phase & Three-Phase Inverters',
                  'Pulse Width Modulation (PWM) Techniques',
                  'Voltage & Frequency Control in Inverters',
                ],
                handson: ['Implement SPWM in an inverter circuit simulation'],
              },
              {
                title: 'AC-AC Converters (Cycloconverters & Matrix Converters)',
                topics: [
                  'AC Voltage Controllers (Using Thyristors & Triacs)',
                  'Cycloconverters & Their Industrial Applications',
                  'Matrix Converters & Their Advantages',
                ],
                handson: ['Study phase control in AC voltage controllers'],
              },
              {
                title: 'Electric Drives & Power Electronics in Motor Control',
                topics: [
                  'Introduction to Electric Drives (DC & AC Drives)',
                  'Speed Control of DC Motors Using Power Electronics',
                  'Variable Frequency Drives (VFDs) for AC Motors',
                ],
                handson: ['Simulate a motor drive system in MATLAB/Simulink'],
              },
              {
                title: 'Renewable Energy & Emerging Applications',
                topics: [
                  'Power Electronics in Solar PV & Wind Energy Systems',
                  'Smart Grids & Power Quality Improvement',
                  'EV Charging Systems & Wireless Power Transfer',
                ],
                handson: [
                  'Study MPPT (Maximum Power Point Tracking) in solar inverter',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'power-electronics-c114',
    title: 'Fundamentals of Power Electronics',
    description:
      'A comprehensive curriculum covering power electronic devices, converters, motor drives, and applications in renewable energy.',
    modules: [
      {
        title: 'Power Electronics',
        months: [
          {
            title: 'Month 1: Fundamentals of Power Electronics',
            weeks: [
              {
                title: 'Introduction to Power Electronics',
                topics: [
                  'Overview of Power Electronics & Applications',
                  'Characteristics of Power Electronic Circuits',
                  'Basics of Electrical Power & Energy Conversion',
                ],
                handson: ['Analyze power flow in basic AC-DC circuits'],
              },
              {
                title: 'Power Semiconductor Devices',
                topics: [
                  'Power Diodes, SCRs (Thyristors), Triacs',
                  'MOSFETs & IGBTs (Insulated Gate Bipolar Transistors)',
                  'Switching Characteristics & Losses',
                ],
                handson: [
                  'Compare MOSFET vs. IGBT switching behavior in a circuit simulator',
                ],
              },
              {
                title: 'AC-DC Converters (Rectifiers)',
                topics: [
                  'Uncontrolled vs. Controlled Rectifiers',
                  'Single-Phase & Three-Phase Rectifiers',
                  'Harmonics & Power Factor Improvement',
                ],
                handson: [
                  'Simulate a controlled rectifier circuit in MATLAB/PSIM',
                ],
              },
              {
                title: 'DC-DC Converters (Choppers)',
                topics: [
                  'Buck, Boost, and Buck-Boost Converters',
                  'Continuous vs. Discontinuous Conduction Mode',
                  'Applications in DC Motor Drives & Renewable Energy Systems',
                ],
                handson: [
                  'Design a step-down DC-DC converter using simulation tools',
                ],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Power Electronics & Applications',
            weeks: [
              {
                title: 'DC-AC Inverters',
                topics: [
                  'Single-Phase & Three-Phase Inverters',
                  'Pulse Width Modulation (PWM) Techniques',
                  'Voltage & Frequency Control in Inverters',
                ],
                handson: ['Implement SPWM in an inverter circuit simulation'],
              },
              {
                title: 'AC-AC Converters (Cycloconverters & Matrix Converters)',
                topics: [
                  'AC Voltage Controllers (Using Thyristors & Triacs)',
                  'Cycloconverters & Their Industrial Applications',
                  'Matrix Converters & Their Advantages',
                ],
                handson: ['Study phase control in AC voltage controllers'],
              },
              {
                title: 'Electric Drives & Power Electronics in Motor Control',
                topics: [
                  'Introduction to Electric Drives (DC & AC Drives)',
                  'Speed Control of DC Motors Using Power Electronics',
                  'Variable Frequency Drives (VFDs) for AC Motors',
                ],
                handson: ['Simulate a motor drive system in MATLAB/Simulink'],
              },
              {
                title: 'Renewable Energy & Emerging Applications',
                topics: [
                  'Power Electronics in Solar PV & Wind Energy Systems',
                  'Smart Grids & Power Quality Improvement',
                  'EV Charging Systems & Wireless Power Transfer',
                ],
                handson: [
                  'Study MPPT (Maximum Power Point Tracking) in solar inverter',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'autocad-c107',
    title: 'AutoCAD Fundamentals & 3D Modeling',
    description:
      'A comprehensive curriculum covering 2D drafting, 3D modeling, annotation, and industry applications in AutoCAD.',
    modules: [
      {
        title: 'AutoCAD',
        months: [
          {
            title: 'Month 1: AutoCAD Fundamentals & 2D Drafting',
            weeks: [
              {
                title: 'Introduction to AutoCAD & Basic Drawing Tools',
                topics: [
                  'Overview of AutoCAD Interface, Commands, and Workspaces',
                  'Basic Drawing Commands (Line, Circle, Rectangle, Arc, Polyline)',
                  'Coordinate Systems (Absolute, Relative, Polar)',
                ],
                handson: ['Create simple 2D shapes and modify them'],
              },
              {
                title: 'Modifying & Editing Tools in 2D Drafting',
                topics: [
                  'Modify Tools (Move, Copy, Rotate, Mirror, Scale, Trim, Extend)',
                  'Object Snaps, Grids, and Guidelines',
                  'Layers, Line Types, and Object Properties',
                ],
                handson: ['Modify and organize drawing elements using layers'],
              },
              {
                title: 'Annotation & Dimensioning',
                topics: [
                  'Text & Multiline Text (MText) in AutoCAD',
                  'Dimensioning Tools (Linear, Angular, Radius, Diameter, Ordinate)',
                  'Leaders, Tables, and Hatching',
                ],
                handson: ['Create fully dimensioned technical drawings'],
              },
              {
                title: 'Blocks, Templates, and Plotting',
                topics: [
                  'Creating and Using Blocks & Attributes',
                  'External References (XRefs) and Title Blocks',
                  'Printing & Plotting: Layouts, Viewports, Paper Space vs. Model Space',
                ],
                handson: ['Create a reusable template with title block'],
              },
            ],
          },
          {
            title: 'Month 2: 3D Modeling & Advanced AutoCAD Tools',
            weeks: [
              {
                title: 'Introduction to 3D Modeling in AutoCAD',
                topics: [
                  '3D Workspaces & Navigation Tools',
                  'Basic 3D Shapes (Box, Cylinder, Sphere, Cone)',
                  'Extrude, Revolve, Loft, and Sweep Commands',
                ],
                handson: ['Create simple 3D objects'],
              },
              {
                title: 'Advanced 3D Modeling & Editing',
                topics: [
                  'Boolean Operations (Union, Subtract, Intersect)',
                  'Fillet, Chamfer, Shell & Offset in 3D',
                  'Using UCS (User Coordinate System) for Custom Views',
                ],
                handson: ['Modify complex 3D objects with Boolean operations'],
              },
              {
                title: 'Rendering, Materials & Visualization',
                topics: [
                  'Applying Materials & Textures in AutoCAD',
                  'Lighting & Shadows for 3D Models',
                  'Introduction to Rendering & Exporting High-Quality Images',
                ],
                handson: ['Render a 3D object with basic lighting'],
              },
              {
                title: 'Industry Applications & Best Practices',
                topics: [
                  'AutoCAD in Architecture, Mechanical, Electrical, and Civil Engineering',
                  'Customizing AutoCAD: Macros, Scripts & Plugins',
                  'Efficiency Tips: Shortcuts, Automation & Workflows',
                ],
                handson: [
                  'Practice industry-specific drawings based on interest',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'autocad-c115',
    title: 'AutoCAD Fundamentals & 3D Modeling',
    description:
      'A comprehensive curriculum covering 2D drafting, 3D modeling, annotation, and industry applications in AutoCAD.',
    modules: [
      {
        title: 'AutoCAD',
        months: [
          {
            title: 'Month 1: AutoCAD Fundamentals & 2D Drafting',
            weeks: [
              {
                title: 'Introduction to AutoCAD & Basic Drawing Tools',
                topics: [
                  'Overview of AutoCAD Interface, Commands, and Workspaces',
                  'Basic Drawing Commands (Line, Circle, Rectangle, Arc, Polyline)',
                  'Coordinate Systems (Absolute, Relative, Polar)',
                ],
                handson: ['Create simple 2D shapes and modify them'],
              },
              {
                title: 'Modifying & Editing Tools in 2D Drafting',
                topics: [
                  'Modify Tools (Move, Copy, Rotate, Mirror, Scale, Trim, Extend)',
                  'Object Snaps, Grids, and Guidelines',
                  'Layers, Line Types, and Object Properties',
                ],
                handson: ['Modify and organize drawing elements using layers'],
              },
              {
                title: 'Annotation & Dimensioning',
                topics: [
                  'Text & Multiline Text (MText) in AutoCAD',
                  'Dimensioning Tools (Linear, Angular, Radius, Diameter, Ordinate)',
                  'Leaders, Tables, and Hatching',
                ],
                handson: ['Create fully dimensioned technical drawings'],
              },
              {
                title: 'Blocks, Templates, and Plotting',
                topics: [
                  'Creating and Using Blocks & Attributes',
                  'External References (XRefs) and Title Blocks',
                  'Printing & Plotting: Layouts, Viewports, Paper Space vs. Model Space',
                ],
                handson: ['Create a reusable template with title block'],
              },
            ],
          },
          {
            title: 'Month 2: 3D Modeling & Advanced AutoCAD Tools',
            weeks: [
              {
                title: 'Introduction to 3D Modeling in AutoCAD',
                topics: [
                  '3D Workspaces & Navigation Tools',
                  'Basic 3D Shapes (Box, Cylinder, Sphere, Cone)',
                  'Extrude, Revolve, Loft, and Sweep Commands',
                ],
                handson: ['Create simple 3D objects'],
              },
              {
                title: 'Advanced 3D Modeling & Editing',
                topics: [
                  'Boolean Operations (Union, Subtract, Intersect)',
                  'Fillet, Chamfer, Shell & Offset in 3D',
                  'Using UCS (User Coordinate System) for Custom Views',
                ],
                handson: ['Modify complex 3D objects with Boolean operations'],
              },
              {
                title: 'Rendering, Materials & Visualization',
                topics: [
                  'Applying Materials & Textures in AutoCAD',
                  'Lighting & Shadows for 3D Models',
                  'Introduction to Rendering & Exporting High-Quality Images',
                ],
                handson: ['Render a 3D object with basic lighting'],
              },
              {
                title: 'Industry Applications & Best Practices',
                topics: [
                  'AutoCAD in Architecture, Mechanical, Electrical, and Civil Engineering',
                  'Customizing AutoCAD: Macros, Scripts & Plugins',
                  'Efficiency Tips: Shortcuts, Automation & Workflows',
                ],
                handson: [
                  'Practice industry-specific drawings based on interest',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'hybrid-and-electric-vehicles-c108',
    title: 'Fundamentals of Hybrid & Electric Vehicles',
    description:
      'A structured curriculum covering hybrid and electric vehicle fundamentals, powertrains, battery technologies, charging infrastructure, and future trends.',
    modules: [
      {
        title: 'Hybrid & Electric Vehicles',
        months: [
          {
            title: 'Month 1: Fundamentals of Hybrid & Electric Vehicles',
            weeks: [
              {
                title: 'Introduction to Hybrid & Electric Vehicles',
                topics: [
                  'Overview of Vehicle Electrification & Market Trends',
                  'EV vs. Hybrid vs. Fuel Cell Vehicles',
                  'History & Evolution of Electric Mobility',
                ],
                handson: [
                  'Compare energy consumption of ICE vs. EV using real-world data',
                ],
              },
              {
                title: 'EV Powertrains & Architecture',
                topics: [
                  'Components of EV Powertrain (Motors, Inverters, Controllers)',
                  'Series, Parallel, and Series-Parallel Hybrid Configurations',
                  'Comparison of BEVs, PHEVs, and FCEVs',
                ],
                handson: [
                  'Analyze power flow in different EV powertrain architectures',
                ],
              },
              {
                title: 'Electric Motors & Power Electronics in EVs',
                topics: [
                  'Types of Electric Motors Used in EVs (Induction, PMSM, BLDC)',
                  'Role of Power Electronics (Inverters, Converters)',
                  'Regenerative Braking & Energy Recovery',
                ],
                handson: ['Simulate motor efficiency using MATLAB/Simulink'],
              },
              {
                title: 'Battery Technologies & Energy Storage for EVs',
                topics: [
                  'Lithium-Ion Battery Chemistry & Performance Parameters',
                  'Battery Management Systems (BMS) & Thermal Management',
                  'Battery Charging Cycles, Degradation & Lifecycle Analysis',
                ],
                handson: [
                  'Compare different battery chemistries for EV applications',
                ],
              },
            ],
          },
          {
            title:
              'Month 2: Advanced EV Technologies & Charging Infrastructure',
            weeks: [
              {
                title: 'Charging Technologies & Infrastructure',
                topics: [
                  'EV Charging Levels (Level 1, Level 2, DC Fast Charging)',
                  'Wireless Charging & Battery Swapping Technologies',
                  'Grid Impact & Smart Charging Strategies',
                ],
                handson: [
                  'Analyze charging time for different EV battery capacities',
                ],
              },
              {
                title: 'Hybrid Vehicle Control Strategies',
                topics: [
                  'Energy Management Strategies in Hybrid Vehicles',
                  'Fuel Efficiency Optimization & Drive Mode Selection',
                  'Case Studies: Toyota Prius, Tesla Model S, Chevrolet Volt',
                ],
                handson: [
                  'Evaluate energy distribution in a hybrid vehicle simulation',
                ],
              },
              {
                title: 'EV Grid Integration & Smart Transportation',
                topics: [
                  'Vehicle-to-Grid (V2G) & Bi-Directional Charging',
                  'Impact of EVs on Power Grids & Renewable Energy Integration',
                  'EV Fleet Management & Public Transportation Electrification',
                ],
                handson: [
                  'Simulate grid load variation with high EV penetration',
                ],
              },
              {
                title: 'Future Trends & Emerging Technologies in EVs',
                topics: [
                  'Hydrogen Fuel Cell Vehicles & Solid-State Batteries',
                  'AI & IoT in EVs: Autonomous Driving & Predictive Maintenance',
                  'Policies, Regulations & Incentives for EV Adoption',
                ],
                handson: ['Compare future energy storage technologies for EVs'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'hybrid-and-electric-vehicles-c116',
    title: 'Fundamentals of Hybrid & Electric Vehicles',
    description:
      'A structured curriculum covering hybrid and electric vehicle fundamentals, powertrains, battery technologies, charging infrastructure, and future trends.',
    modules: [
      {
        title: 'Hybrid & Electric Vehicles',
        months: [
          {
            title: 'Month 1: Fundamentals of Hybrid & Electric Vehicles',
            weeks: [
              {
                title: 'Introduction to Hybrid & Electric Vehicles',
                topics: [
                  'Overview of Vehicle Electrification & Market Trends',
                  'EV vs. Hybrid vs. Fuel Cell Vehicles',
                  'History & Evolution of Electric Mobility',
                ],
                handson: [
                  'Compare energy consumption of ICE vs. EV using real-world data',
                ],
              },
              {
                title: 'EV Powertrains & Architecture',
                topics: [
                  'Components of EV Powertrain (Motors, Inverters, Controllers)',
                  'Series, Parallel, and Series-Parallel Hybrid Configurations',
                  'Comparison of BEVs, PHEVs, and FCEVs',
                ],
                handson: [
                  'Analyze power flow in different EV powertrain architectures',
                ],
              },
              {
                title: 'Electric Motors & Power Electronics in EVs',
                topics: [
                  'Types of Electric Motors Used in EVs (Induction, PMSM, BLDC)',
                  'Role of Power Electronics (Inverters, Converters)',
                  'Regenerative Braking & Energy Recovery',
                ],
                handson: ['Simulate motor efficiency using MATLAB/Simulink'],
              },
              {
                title: 'Battery Technologies & Energy Storage for EVs',
                topics: [
                  'Lithium-Ion Battery Chemistry & Performance Parameters',
                  'Battery Management Systems (BMS) & Thermal Management',
                  'Battery Charging Cycles, Degradation & Lifecycle Analysis',
                ],
                handson: [
                  'Compare different battery chemistries for EV applications',
                ],
              },
            ],
          },
          {
            title:
              'Month 2: Advanced EV Technologies & Charging Infrastructure',
            weeks: [
              {
                title: 'Charging Technologies & Infrastructure',
                topics: [
                  'EV Charging Levels (Level 1, Level 2, DC Fast Charging)',
                  'Wireless Charging & Battery Swapping Technologies',
                  'Grid Impact & Smart Charging Strategies',
                ],
                handson: [
                  'Analyze charging time for different EV battery capacities',
                ],
              },
              {
                title: 'Hybrid Vehicle Control Strategies',
                topics: [
                  'Energy Management Strategies in Hybrid Vehicles',
                  'Fuel Efficiency Optimization & Drive Mode Selection',
                  'Case Studies: Toyota Prius, Tesla Model S, Chevrolet Volt',
                ],
                handson: [
                  'Evaluate energy distribution in a hybrid vehicle simulation',
                ],
              },
              {
                title: 'EV Grid Integration & Smart Transportation',
                topics: [
                  'Vehicle-to-Grid (V2G) & Bi-Directional Charging',
                  'Impact of EVs on Power Grids & Renewable Energy Integration',
                  'EV Fleet Management & Public Transportation Electrification',
                ],
                handson: [
                  'Simulate grid load variation with high EV penetration',
                ],
              },
              {
                title: 'Future Trends & Emerging Technologies in EVs',
                topics: [
                  'Hydrogen Fuel Cell Vehicles & Solid-State Batteries',
                  'AI & IoT in EVs: Autonomous Driving & Predictive Maintenance',
                  'Policies, Regulations & Incentives for EV Adoption',
                ],
                handson: ['Compare future energy storage technologies for EVs'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'internal-combustion-engine-c109',
    title:
      'Fundamentals of Hybrid & Electric Vehicles & Internal Combustion Engines',
    description:
      'A structured curriculum covering hybrid and electric vehicle fundamentals, powertrains, battery technologies, charging infrastructure, and future trends, alongside internal combustion engine fundamentals and advanced technologies.',
    modules: [
      {
        title: 'Hybrid & Electric Vehicles',
        months: [
          {
            title: 'Month 1: Fundamentals of Hybrid & Electric Vehicles',
            weeks: [
              {
                title: 'Introduction to Hybrid & Electric Vehicles',
                topics: [
                  'Overview of Vehicle Electrification & Market Trends',
                  'EV vs. Hybrid vs. Fuel Cell Vehicles',
                  'History & Evolution of Electric Mobility',
                ],
                handson: [
                  'Compare energy consumption of ICE vs. EV using real-world data',
                ],
              },
              {
                title: 'EV Powertrains & Architecture',
                topics: [
                  'Components of EV Powertrain (Motors, Inverters, Controllers)',
                  'Series, Parallel, and Series-Parallel Hybrid Configurations',
                  'Comparison of BEVs, PHEVs, and FCEVs',
                ],
                handson: [
                  'Analyze power flow in different EV powertrain architectures',
                ],
              },
              {
                title: 'Electric Motors & Power Electronics in EVs',
                topics: [
                  'Types of Electric Motors Used in EVs (Induction, PMSM, BLDC)',
                  'Role of Power Electronics (Inverters, Converters)',
                  'Regenerative Braking & Energy Recovery',
                ],
                handson: ['Simulate motor efficiency using MATLAB/Simulink'],
              },
              {
                title: 'Battery Technologies & Energy Storage for EVs',
                topics: [
                  'Lithium-Ion Battery Chemistry & Performance Parameters',
                  'Battery Management Systems (BMS) & Thermal Management',
                  'Battery Charging Cycles, Degradation & Lifecycle Analysis',
                ],
                handson: [
                  'Compare different battery chemistries for EV applications',
                ],
              },
            ],
          },
          {
            title:
              'Month 2: Advanced EV Technologies & Charging Infrastructure',
            weeks: [
              {
                title: 'Charging Technologies & Infrastructure',
                topics: [
                  'EV Charging Levels (Level 1, Level 2, DC Fast Charging)',
                  'Wireless Charging & Battery Swapping Technologies',
                  'Grid Impact & Smart Charging Strategies',
                ],
                handson: [
                  'Analyze charging time for different EV battery capacities',
                ],
              },
              {
                title: 'Hybrid Vehicle Control Strategies',
                topics: [
                  'Energy Management Strategies in Hybrid Vehicles',
                  'Fuel Efficiency Optimization & Drive Mode Selection',
                  'Case Studies: Toyota Prius, Tesla Model S, Chevrolet Volt',
                ],
                handson: [
                  'Evaluate energy distribution in a hybrid vehicle simulation',
                ],
              },
              {
                title: 'EV Grid Integration & Smart Transportation',
                topics: [
                  'Vehicle-to-Grid (V2G) & Bi-Directional Charging',
                  'Impact of EVs on Power Grids & Renewable Energy Integration',
                  'EV Fleet Management & Public Transportation Electrification',
                ],
                handson: [
                  'Simulate grid load variation with high EV penetration',
                ],
              },
              {
                title: 'Future Trends & Emerging Technologies in EVs',
                topics: [
                  'Hydrogen Fuel Cell Vehicles & Solid-State Batteries',
                  'AI & IoT in EVs: Autonomous Driving & Predictive Maintenance',
                  'Policies, Regulations & Incentives for EV Adoption',
                ],
                handson: ['Compare future energy storage technologies for EVs'],
              },
            ],
          },
        ],
      },
      {
        title: 'Internal Combustion Engines',
        months: [
          {
            title: 'Month 1: Fundamentals of Internal Combustion Engines',
            weeks: [
              {
                title: 'Introduction to Internal Combustion Engines',
                topics: [
                  'Basics of IC Engines & Their Applications',
                  'Classification: SI vs. CI Engines, Two-Stroke vs. Four-Stroke',
                  'Engine Components & Their Functions',
                ],
                handson: [
                  'Identify different engine components from diagrams or real-life models',
                ],
              },
              {
                title: 'Thermodynamics & Working Cycles',
                topics: [
                  'Otto, Diesel, Dual, and Atkinson Cycles',
                  'Engine Efficiency & Performance Parameters',
                  'Heat Transfer & Combustion Processes',
                ],
                handson: [
                  'Calculate thermal efficiency for Otto & Diesel cycles',
                ],
              },
              {
                title: 'Fuel Supply Systems & Air Induction',
                topics: [
                  'Carburetors vs. Fuel Injection Systems (MPFI, GDI, CRDI)',
                  'Air Intake & Supercharging/Turbocharging',
                  'Fuel Properties & Combustion Chemistry',
                ],
                handson: [
                  'Compare fuel injection vs. carburetor engine performance',
                ],
              },
              {
                title: 'Combustion & Emissions',
                topics: [
                  'Stages of Combustion in SI & CI Engines',
                  'Knocking, Detonation, and Pre-Ignition',
                  'Emission Formation & Control Technologies (EGR, SCR, Catalytic Converters)',
                ],
                handson: [
                  'Analyze exhaust gas composition in different engine conditions',
                ],
              },
            ],
          },
          {
            title: 'Month 2: Advanced ICE Technologies & Performance Analysis',
            weeks: [
              {
                title: 'Lubrication & Cooling Systems',
                topics: [
                  'Types of Engine Lubrication Systems (Wet vs. Dry Sump)',
                  'Cooling Mechanisms: Air vs. Liquid Cooling',
                  'Heat Dissipation & Thermal Management',
                ],
                handson: [
                  'Compare cooling efficiencies of air-cooled vs. liquid-cooled engines',
                ],
              },
              {
                title: 'Transmission & Powertrain Systems',
                topics: [
                  'Engine Power, Torque, and Performance Curves',
                  'Manual vs. Automatic Transmission',
                  'Hybridization & Role of ICE in Hybrid Powertrains',
                ],
                handson: [
                  'Analyze powertrain efficiency for different vehicle types',
                ],
              },
              {
                title: 'Alternative Fuels & Future of ICE',
                topics: [
                  'Biofuels, Hydrogen, Natural Gas, and Synthetic Fuels',
                  'Electrification & Hybridization Trends',
                  'Regulations & Future Prospects of ICEs',
                ],
                handson: ['Compare emission levels of different fuel types'],
              },
              {
                title: 'Engine Testing & Performance Analysis',
                topics: [
                  'Engine Testing Methods & Performance Measurements',
                  'Dynamometer Testing & Efficiency Calculations',
                  'Noise, Vibration, and Harshness (NVH) Analysis',
                ],
                handson: ['Interpret an engine performance test report'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'internal-combustion-engine-c109',
    title:
      'Fundamentals of Hybrid & Electric Vehicles & Internal Combustion Engines',
    description:
      'A structured curriculum covering hybrid and electric vehicle fundamentals, powertrains, battery technologies, charging infrastructure, and future trends, alongside internal combustion engine fundamentals and advanced technologies.',
    modules: [
      {
        title: 'Hybrid & Electric Vehicles',
        months: [
          {
            title: 'Month 1: Fundamentals of Hybrid & Electric Vehicles',
            weeks: [
              {
                title: 'Introduction to Hybrid & Electric Vehicles',
                topics: [
                  'Overview of Vehicle Electrification & Market Trends',
                  'EV vs. Hybrid vs. Fuel Cell Vehicles',
                  'History & Evolution of Electric Mobility',
                ],
                handson: [
                  'Compare energy consumption of ICE vs. EV using real-world data',
                ],
              },
              {
                title: 'EV Powertrains & Architecture',
                topics: [
                  'Components of EV Powertrain (Motors, Inverters, Controllers)',
                  'Series, Parallel, and Series-Parallel Hybrid Configurations',
                  'Comparison of BEVs, PHEVs, and FCEVs',
                ],
                handson: [
                  'Analyze power flow in different EV powertrain architectures',
                ],
              },
              {
                title: 'Electric Motors & Power Electronics in EVs',
                topics: [
                  'Types of Electric Motors Used in EVs (Induction, PMSM, BLDC)',
                  'Role of Power Electronics (Inverters, Converters)',
                  'Regenerative Braking & Energy Recovery',
                ],
                handson: ['Simulate motor efficiency using MATLAB/Simulink'],
              },
              {
                title: 'Battery Technologies & Energy Storage for EVs',
                topics: [
                  'Lithium-Ion Battery Chemistry & Performance Parameters',
                  'Battery Management Systems (BMS) & Thermal Management',
                  'Battery Charging Cycles, Degradation & Lifecycle Analysis',
                ],
                handson: [
                  'Compare different battery chemistries for EV applications',
                ],
              },
            ],
          },
          {
            title:
              'Month 2: Advanced EV Technologies & Charging Infrastructure',
            weeks: [
              {
                title: 'Charging Technologies & Infrastructure',
                topics: [
                  'EV Charging Levels (Level 1, Level 2, DC Fast Charging)',
                  'Wireless Charging & Battery Swapping Technologies',
                  'Grid Impact & Smart Charging Strategies',
                ],
                handson: [
                  'Analyze charging time for different EV battery capacities',
                ],
              },
              {
                title: 'Hybrid Vehicle Control Strategies',
                topics: [
                  'Energy Management Strategies in Hybrid Vehicles',
                  'Fuel Efficiency Optimization & Drive Mode Selection',
                  'Case Studies: Toyota Prius, Tesla Model S, Chevrolet Volt',
                ],
                handson: [
                  'Evaluate energy distribution in a hybrid vehicle simulation',
                ],
              },
              {
                title: 'EV Grid Integration & Smart Transportation',
                topics: [
                  'Vehicle-to-Grid (V2G) & Bi-Directional Charging',
                  'Impact of EVs on Power Grids & Renewable Energy Integration',
                  'EV Fleet Management & Public Transportation Electrification',
                ],
                handson: [
                  'Simulate grid load variation with high EV penetration',
                ],
              },
              {
                title: 'Future Trends & Emerging Technologies in EVs',
                topics: [
                  'Hydrogen Fuel Cell Vehicles & Solid-State Batteries',
                  'AI & IoT in EVs: Autonomous Driving & Predictive Maintenance',
                  'Policies, Regulations & Incentives for EV Adoption',
                ],
                handson: ['Compare future energy storage technologies for EVs'],
              },
            ],
          },
        ],
      },
      {
        title: 'Internal Combustion Engines',
        months: [
          {
            title: 'Month 1: Fundamentals of Internal Combustion Engines',
            weeks: [
              {
                title: 'Introduction to Internal Combustion Engines',
                topics: [
                  'Basics of IC Engines & Their Applications',
                  'Classification: SI vs. CI Engines, Two-Stroke vs. Four-Stroke',
                  'Engine Components & Their Functions',
                ],
                handson: [
                  'Identify different engine components from diagrams or real-life models',
                ],
              },
              {
                title: 'Thermodynamics & Working Cycles',
                topics: [
                  'Otto, Diesel, Dual, and Atkinson Cycles',
                  'Engine Efficiency & Performance Parameters',
                  'Heat Transfer & Combustion Processes',
                ],
                handson: [
                  'Calculate thermal efficiency for Otto & Diesel cycles',
                ],
              },
              {
                title: 'Fuel Supply Systems & Air Induction',
                topics: [
                  'Carburetors vs. Fuel Injection Systems (MPFI, GDI, CRDI)',
                  'Air Intake & Supercharging/Turbocharging',
                  'Fuel Properties & Combustion Chemistry',
                ],
                handson: [
                  'Compare fuel injection vs. carburetor engine performance',
                ],
              },
              {
                title: 'Combustion & Emissions',
                topics: [
                  'Stages of Combustion in SI & CI Engines',
                  'Knocking, Detonation, and Pre-Ignition',
                  'Emission Formation & Control Technologies (EGR, SCR, Catalytic Converters)',
                ],
                handson: [
                  'Analyze exhaust gas composition in different engine conditions',
                ],
              },
            ],
          },
          {
            title: 'Month 2: Advanced ICE Technologies & Performance Analysis',
            weeks: [
              {
                title: 'Lubrication & Cooling Systems',
                topics: [
                  'Types of Engine Lubrication Systems (Wet vs. Dry Sump)',
                  'Cooling Mechanisms: Air vs. Liquid Cooling',
                  'Heat Dissipation & Thermal Management',
                ],
                handson: [
                  'Compare cooling efficiencies of air-cooled vs. liquid-cooled engines',
                ],
              },
              {
                title: 'Transmission & Powertrain Systems',
                topics: [
                  'Engine Power, Torque, and Performance Curves',
                  'Manual vs. Automatic Transmission',
                  'Hybridization & Role of ICE in Hybrid Powertrains',
                ],
                handson: [
                  'Analyze powertrain efficiency for different vehicle types',
                ],
              },
              {
                title: 'Alternative Fuels & Future of ICE',
                topics: [
                  'Biofuels, Hydrogen, Natural Gas, and Synthetic Fuels',
                  'Electrification & Hybridization Trends',
                  'Regulations & Future Prospects of ICEs',
                ],
                handson: ['Compare emission levels of different fuel types'],
              },
              {
                title: 'Engine Testing & Performance Analysis',
                topics: [
                  'Engine Testing Methods & Performance Measurements',
                  'Dynamometer Testing & Efficiency Calculations',
                  'Noise, Vibration, and Harshness (NVH) Analysis',
                ],
                handson: ['Interpret an engine performance test report'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'internal-combustion-engine-c117',
    title:
      'Fundamentals of Hybrid & Electric Vehicles & Internal Combustion Engines',
    description:
      'A structured curriculum covering hybrid and electric vehicle fundamentals, powertrains, battery technologies, charging infrastructure, and future trends, alongside internal combustion engine fundamentals and advanced technologies.',
    modules: [
      {
        title: 'Hybrid & Electric Vehicles',
        months: [
          {
            title: 'Month 1: Fundamentals of Hybrid & Electric Vehicles',
            weeks: [
              {
                title: 'Introduction to Hybrid & Electric Vehicles',
                topics: [
                  'Overview of Vehicle Electrification & Market Trends',
                  'EV vs. Hybrid vs. Fuel Cell Vehicles',
                  'History & Evolution of Electric Mobility',
                ],
                handson: [
                  'Compare energy consumption of ICE vs. EV using real-world data',
                ],
              },
              {
                title: 'EV Powertrains & Architecture',
                topics: [
                  'Components of EV Powertrain (Motors, Inverters, Controllers)',
                  'Series, Parallel, and Series-Parallel Hybrid Configurations',
                  'Comparison of BEVs, PHEVs, and FCEVs',
                ],
                handson: [
                  'Analyze power flow in different EV powertrain architectures',
                ],
              },
              {
                title: 'Electric Motors & Power Electronics in EVs',
                topics: [
                  'Types of Electric Motors Used in EVs (Induction, PMSM, BLDC)',
                  'Role of Power Electronics (Inverters, Converters)',
                  'Regenerative Braking & Energy Recovery',
                ],
                handson: ['Simulate motor efficiency using MATLAB/Simulink'],
              },
              {
                title: 'Battery Technologies & Energy Storage for EVs',
                topics: [
                  'Lithium-Ion Battery Chemistry & Performance Parameters',
                  'Battery Management Systems (BMS) & Thermal Management',
                  'Battery Charging Cycles, Degradation & Lifecycle Analysis',
                ],
                handson: [
                  'Compare different battery chemistries for EV applications',
                ],
              },
            ],
          },
          {
            title:
              'Month 2: Advanced EV Technologies & Charging Infrastructure',
            weeks: [
              {
                title: 'Charging Technologies & Infrastructure',
                topics: [
                  'EV Charging Levels (Level 1, Level 2, DC Fast Charging)',
                  'Wireless Charging & Battery Swapping Technologies',
                  'Grid Impact & Smart Charging Strategies',
                ],
                handson: [
                  'Analyze charging time for different EV battery capacities',
                ],
              },
              {
                title: 'Hybrid Vehicle Control Strategies',
                topics: [
                  'Energy Management Strategies in Hybrid Vehicles',
                  'Fuel Efficiency Optimization & Drive Mode Selection',
                  'Case Studies: Toyota Prius, Tesla Model S, Chevrolet Volt',
                ],
                handson: [
                  'Evaluate energy distribution in a hybrid vehicle simulation',
                ],
              },
              {
                title: 'EV Grid Integration & Smart Transportation',
                topics: [
                  'Vehicle-to-Grid (V2G) & Bi-Directional Charging',
                  'Impact of EVs on Power Grids & Renewable Energy Integration',
                  'EV Fleet Management & Public Transportation Electrification',
                ],
                handson: [
                  'Simulate grid load variation with high EV penetration',
                ],
              },
              {
                title: 'Future Trends & Emerging Technologies in EVs',
                topics: [
                  'Hydrogen Fuel Cell Vehicles & Solid-State Batteries',
                  'AI & IoT in EVs: Autonomous Driving & Predictive Maintenance',
                  'Policies, Regulations & Incentives for EV Adoption',
                ],
                handson: ['Compare future energy storage technologies for EVs'],
              },
            ],
          },
        ],
      },
      {
        title: 'Internal Combustion Engines',
        months: [
          {
            title: 'Month 1: Fundamentals of Internal Combustion Engines',
            weeks: [
              {
                title: 'Introduction to Internal Combustion Engines',
                topics: [
                  'Basics of IC Engines & Their Applications',
                  'Classification: SI vs. CI Engines, Two-Stroke vs. Four-Stroke',
                  'Engine Components & Their Functions',
                ],
                handson: [
                  'Identify different engine components from diagrams or real-life models',
                ],
              },
              {
                title: 'Thermodynamics & Working Cycles',
                topics: [
                  'Otto, Diesel, Dual, and Atkinson Cycles',
                  'Engine Efficiency & Performance Parameters',
                  'Heat Transfer & Combustion Processes',
                ],
                handson: [
                  'Calculate thermal efficiency for Otto & Diesel cycles',
                ],
              },
              {
                title: 'Fuel Supply Systems & Air Induction',
                topics: [
                  'Carburetors vs. Fuel Injection Systems (MPFI, GDI, CRDI)',
                  'Air Intake & Supercharging/Turbocharging',
                  'Fuel Properties & Combustion Chemistry',
                ],
                handson: [
                  'Compare fuel injection vs. carburetor engine performance',
                ],
              },
              {
                title: 'Combustion & Emissions',
                topics: [
                  'Stages of Combustion in SI & CI Engines',
                  'Knocking, Detonation, and Pre-Ignition',
                  'Emission Formation & Control Technologies (EGR, SCR, Catalytic Converters)',
                ],
                handson: [
                  'Analyze exhaust gas composition in different engine conditions',
                ],
              },
            ],
          },
          {
            title: 'Month 2: Advanced ICE Technologies & Performance Analysis',
            weeks: [
              {
                title: 'Lubrication & Cooling Systems',
                topics: [
                  'Types of Engine Lubrication Systems (Wet vs. Dry Sump)',
                  'Cooling Mechanisms: Air vs. Liquid Cooling',
                  'Heat Dissipation & Thermal Management',
                ],
                handson: [
                  'Compare cooling efficiencies of air-cooled vs. liquid-cooled engines',
                ],
              },
              {
                title: 'Transmission & Powertrain Systems',
                topics: [
                  'Engine Power, Torque, and Performance Curves',
                  'Manual vs. Automatic Transmission',
                  'Hybridization & Role of ICE in Hybrid Powertrains',
                ],
                handson: [
                  'Analyze powertrain efficiency for different vehicle types',
                ],
              },
              {
                title: 'Alternative Fuels & Future of ICE',
                topics: [
                  'Biofuels, Hydrogen, Natural Gas, and Synthetic Fuels',
                  'Electrification & Hybridization Trends',
                  'Regulations & Future Prospects of ICEs',
                ],
                handson: ['Compare emission levels of different fuel types'],
              },
              {
                title: 'Engine Testing & Performance Analysis',
                topics: [
                  'Engine Testing Methods & Performance Measurements',
                  'Dynamometer Testing & Efficiency Calculations',
                  'Noise, Vibration, and Harshness (NVH) Analysis',
                ],
                handson: ['Interpret an engine performance test report'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'hybrid-and-electric-vehicles-c108',
    title:
      'Fundamentals of Hybrid & Electric Vehicles & Internal Combustion Engines',
    description:
      'A structured curriculum covering hybrid and electric vehicle fundamentals, powertrains, battery technologies, charging infrastructure, and future trends, alongside internal combustion engine fundamentals and advanced technologies.',
    modules: [
      {
        title: 'Internal Combustion Engines',
        months: [
          {
            title: 'Month 1: Fundamentals of Internal Combustion Engines',
            weeks: [
              {
                title: 'Introduction to Internal Combustion Engines',
                topics: [
                  'Basics of IC Engines & Their Applications',
                  'Classification: SI vs. CI Engines, Two-Stroke vs. Four-Stroke',
                  'Engine Components & Their Functions',
                ],
                handson: [
                  'Identify different engine components from diagrams or real-life models',
                ],
              },
              {
                title: 'Thermodynamics & Working Cycles',
                topics: [
                  'Otto, Diesel, Dual, and Atkinson Cycles',
                  'Engine Efficiency & Performance Parameters',
                  'Heat Transfer & Combustion Processes',
                ],
                handson: [
                  'Calculate thermal efficiency for Otto & Diesel cycles',
                ],
              },
              {
                title: 'Fuel Supply Systems & Air Induction',
                topics: [
                  'Carburetors vs. Fuel Injection Systems (MPFI, GDI, CRDI)',
                  'Air Intake & Supercharging/Turbocharging',
                  'Fuel Properties & Combustion Chemistry',
                ],
                handson: [
                  'Compare fuel injection vs. carburetor engine performance',
                ],
              },
              {
                title: 'Combustion & Emissions',
                topics: [
                  'Stages of Combustion in SI & CI Engines',
                  'Knocking, Detonation, and Pre-Ignition',
                  'Emission Formation & Control Technologies (EGR, SCR, Catalytic Converters)',
                ],
                handson: [
                  'Analyze exhaust gas composition in different engine conditions',
                ],
              },
            ],
          },
          {
            title: 'Month 2: Advanced ICE Technologies & Performance Analysis',
            weeks: [
              {
                title: 'Lubrication & Cooling Systems',
                topics: [
                  'Types of Engine Lubrication Systems (Wet vs. Dry Sump)',
                  'Cooling Mechanisms: Air vs. Liquid Cooling',
                  'Heat Dissipation & Thermal Management',
                ],
                handson: [
                  'Compare cooling efficiencies of air-cooled vs. liquid-cooled engines',
                ],
              },
              {
                title: 'Transmission & Powertrain Systems',
                topics: [
                  'Engine Power, Torque, and Performance Curves',
                  'Manual vs. Automatic Transmission',
                  'Hybridization & Role of ICE in Hybrid Powertrains',
                ],
                handson: [
                  'Analyze powertrain efficiency for different vehicle types',
                ],
              },
              {
                title: 'Alternative Fuels & Future of ICE',
                topics: [
                  'Biofuels, Hydrogen, Natural Gas, and Synthetic Fuels',
                  'Electrification & Hybridization Trends',
                  'Regulations & Future Prospects of ICEs',
                ],
                handson: ['Compare emission levels of different fuel types'],
              },
              {
                title: 'Engine Testing & Performance Analysis',
                topics: [
                  'Engine Testing Methods & Performance Measurements',
                  'Dynamometer Testing & Efficiency Calculations',
                  'Noise, Vibration, and Harshness (NVH) Analysis',
                ],
                handson: ['Interpret an engine performance test report'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'car-designing-c110',
    title: 'Fundamentals of Car Design & Advanced Automotive Styling',
    description:
      'A structured curriculum covering car design fundamentals, sketching techniques, aerodynamics, digital modeling, materials, manufacturing, and future automotive trends.',
    modules: [
      {
        title: 'Fundamentals of Car Design',
        months: [
          {
            title: 'Month 1: Fundamentals of Car Design',
            weeks: [
              {
                title: 'Introduction to Car Design',
                topics: [
                  'Basics of Automotive Design & Industry Trends',
                  'Evolution of Car Design: Classic vs. Modern Cars',
                  'Role of Designers vs. Engineers in Car Development',
                ],
                handson: [
                  'Analyze different car body styles & their functions',
                ],
              },
              {
                title: 'Car Proportions & Sketching Techniques',
                topics: [
                  'Understanding Proportions: Wheelbase, Overhangs, Cabin Placement',
                  'Sketching Fundamentals: Side View, Perspective, and Line Flow',
                  'Shading & Rendering for Concept Presentation',
                ],
                handson: ['Practice freehand sketching of basic car profiles'],
              },
              {
                title: 'Aerodynamics & Vehicle Shape',
                topics: [
                  'Basics of Vehicle Aerodynamics & Drag Coefficient (Cd)',
                  'Active Aerodynamics: Spoilers, Diffusers, Air Vents',
                  'Impact of Shape on Speed, Fuel Efficiency & Stability',
                ],
                handson: [
                  'Compare aerodynamic profiles of sports cars vs. sedans',
                ],
              },
              {
                title: 'Exterior Design Elements',
                topics: [
                  'Design of Headlights, Taillights, Grilles & Bumpers',
                  'Integration of Brand Identity in Car Aesthetics',
                  'Car Paints, Coatings & Surface Treatments',
                ],
                handson: ['Sketch front and rear views of a car design'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Car Design & Digital Modeling',
            weeks: [
              {
                title: 'Interior & Ergonomic Design',
                topics: [
                  'Interior Layout: Dashboard, Seating, Infotainment Systems',
                  'Human Factors & Ergonomics in Vehicle Design',
                  'Materials & Textures Used in Car Interiors',
                ],
                handson: [
                  'Sketch a dashboard layout based on ergonomics principles',
                ],
              },
              {
                title: '3D Digital Modeling & Visualization',
                topics: [
                  'Introduction to CAD Software (Alias, Blender, SolidWorks)',
                  'Basics of 3D Modeling: Wireframes, Surfacing, Rendering',
                  'Virtual Reality (VR) in Car Design',
                ],
                handson: [
                  'Explore 3D modeling tools & create a basic car shape',
                ],
              },
              {
                title: 'Materials & Manufacturing for Car Design',
                topics: [
                  'Lightweight Materials: Carbon Fiber, Aluminum, Composites',
                  'Sustainable Design & Eco-Friendly Materials',
                  'Manufacturing Processes: Stamping, Molding, 3D Printing',
                ],
                handson: [
                  'Compare material properties for different car parts',
                ],
              },
              {
                title: 'Future Trends & Concept Car Design',
                topics: [
                  'Electric & Autonomous Vehicle Design',
                  'AI & Machine Learning in Car Styling',
                  'Future Mobility: Flying Cars, Hypercars & Sustainable Transport',
                ],
                handson: [
                  'Create a futuristic car sketch based on innovation trends',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'car-designing-c118',
    title: 'Fundamentals of Car Design & Advanced Automotive Styling',
    description:
      'A structured curriculum covering car design fundamentals, sketching techniques, aerodynamics, digital modeling, materials, manufacturing, and future automotive trends.',
    modules: [
      {
        title: 'Fundamentals of Car Design',
        months: [
          {
            title: 'Month 1: Fundamentals of Car Design',
            weeks: [
              {
                title: 'Introduction to Car Design',
                topics: [
                  'Basics of Automotive Design & Industry Trends',
                  'Evolution of Car Design: Classic vs. Modern Cars',
                  'Role of Designers vs. Engineers in Car Development',
                ],
                handson: [
                  'Analyze different car body styles & their functions',
                ],
              },
              {
                title: 'Car Proportions & Sketching Techniques',
                topics: [
                  'Understanding Proportions: Wheelbase, Overhangs, Cabin Placement',
                  'Sketching Fundamentals: Side View, Perspective, and Line Flow',
                  'Shading & Rendering for Concept Presentation',
                ],
                handson: ['Practice freehand sketching of basic car profiles'],
              },
              {
                title: 'Aerodynamics & Vehicle Shape',
                topics: [
                  'Basics of Vehicle Aerodynamics & Drag Coefficient (Cd)',
                  'Active Aerodynamics: Spoilers, Diffusers, Air Vents',
                  'Impact of Shape on Speed, Fuel Efficiency & Stability',
                ],
                handson: [
                  'Compare aerodynamic profiles of sports cars vs. sedans',
                ],
              },
              {
                title: 'Exterior Design Elements',
                topics: [
                  'Design of Headlights, Taillights, Grilles & Bumpers',
                  'Integration of Brand Identity in Car Aesthetics',
                  'Car Paints, Coatings & Surface Treatments',
                ],
                handson: ['Sketch front and rear views of a car design'],
              },
            ],
          },
          {
            title: 'Month 2: Advanced Car Design & Digital Modeling',
            weeks: [
              {
                title: 'Interior & Ergonomic Design',
                topics: [
                  'Interior Layout: Dashboard, Seating, Infotainment Systems',
                  'Human Factors & Ergonomics in Vehicle Design',
                  'Materials & Textures Used in Car Interiors',
                ],
                handson: [
                  'Sketch a dashboard layout based on ergonomics principles',
                ],
              },
              {
                title: '3D Digital Modeling & Visualization',
                topics: [
                  'Introduction to CAD Software (Alias, Blender, SolidWorks)',
                  'Basics of 3D Modeling: Wireframes, Surfacing, Rendering',
                  'Virtual Reality (VR) in Car Design',
                ],
                handson: [
                  'Explore 3D modeling tools & create a basic car shape',
                ],
              },
              {
                title: 'Materials & Manufacturing for Car Design',
                topics: [
                  'Lightweight Materials: Carbon Fiber, Aluminum, Composites',
                  'Sustainable Design & Eco-Friendly Materials',
                  'Manufacturing Processes: Stamping, Molding, 3D Printing',
                ],
                handson: [
                  'Compare material properties for different car parts',
                ],
              },
              {
                title: 'Future Trends & Concept Car Design',
                topics: [
                  'Electric & Autonomous Vehicle Design',
                  'AI & Machine Learning in Car Styling',
                  'Future Mobility: Flying Cars, Hypercars & Sustainable Transport',
                ],
                handson: [
                  'Create a futuristic car sketch based on innovation trends',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
