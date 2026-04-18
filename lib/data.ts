import { BrainCircuit, BriefcaseBusiness, Building2, Cloud, Code2, Database, FileStack, Github, Layers3, LayoutDashboard, Linkedin, Mail, Rocket, ShieldCheck, Sparkles, TestTube2 } from 'lucide-react';
export const personalInfo = {
  name: "Bala D",
  role: 'Senior Software Developer | Java Backend | Microservices | Full Stack Developer | SDET',
  tagline: 'I build scalable microservices-based platforms, cloud-native backend services, and automation frameworks that enable fast, reliable, and high-quality software delivery.',
  description: 'Full Stack Java Developer with strong experience across enterprise and financial applications, backend APIs, microservices, automation, and cloud deployments.',
  email: 'baladaddali357@gmail.com',
  phone: '+1 (913) 243-5191',
  location: 'Denton, Texas, USA',
  linkedin: 'https://www.linkedin.com/in/your-linkedin',
  github: 'https://github.com/your-github',
  resumePath: '/resume/Bala_Resume.docx'
};
export const stats = [{ label:'Years of Experience', value:'6+' }, { label:'Enterprise Roles', value:'3' }, { label:'Core Projects Highlighted', value:'7' }, { label:'Focus Areas', value:'Full Stack · Backend · SDET' }];
export const highlights = ['Spring Boot microservices, secure REST APIs, and distributed backend systems', 'React and Angular interfaces built for usability, data-heavy workflows, and business dashboards', 'Automation coverage using Selenium, REST Assured, TestNG, JUnit, and PyTest', 'Cloud and delivery workflows using AWS, Docker, Kubernetes, Jenkins, and GitHub Actions'];
export const skillGroups = [
  { title:'Frontend Engineering', icon: LayoutDashboard, items:['React.js','Angular','TypeScript','JavaScript (ES6+)','Redux','HTML5','CSS3','Bootstrap'] },
  { title:'Backend & APIs', icon: Code2, items:['Java','Spring Boot','Spring MVC','Spring Security','Node.js','REST APIs','Microservices','JDBC'] },
  { title:'Data & Messaging', icon: Database, items:['PostgreSQL','MySQL','MongoDB','SQL','Kafka','RabbitMQ','JMS','Data Validation'] },
  { title:'Cloud & DevOps', icon: Cloud, items:['AWS','Azure','Docker','Kubernetes','Jenkins','GitHub Actions','CI/CD','CloudWatch'] },
  { title:'Quality Engineering', icon: TestTube2, items:['Selenium','TestNG','JUnit','PyTest','REST Assured','API Testing','Regression Testing','Automation Frameworks'] },
  { title:'AI & Productivity', icon: Sparkles, items:['Cursor IDE','GitHub Copilot','ChatGPT','Claude','Gemini','Prompt Engineering'] }
];
export const featureCards = [
  { title:'Backend Systems That Scale', description:'Built services around Spring Boot, microservices, message-driven workflows, and secure API design for enterprise applications.', icon: Layers3 },
  { title:'Quality Built Into Delivery', description:'I combine development with automation thinking, so quality becomes part of the release pipeline instead of a late-stage task.', icon: ShieldCheck },
  { title:'Business-Focused Engineering', description:'I focus on performance, maintainability, and measurable delivery impact rather than only writing code that works.', icon: BriefcaseBusiness }
];
export const projects = [
  { title:'AI-Powered Job Aggregation & Application Tracker', category:'Full Stack Platform', description:'Built a full-stack job aggregation platform integrating ATS sources like Greenhouse, Lever, and Workday to collect real-time job openings from 100+ companies. Added data normalization, deduplication, dynamic filters, and a Kanban-style application tracker.', impact:['Aggregated jobs from multiple ATS systems into one searchable workflow','Normalized messy location and role data into structured recruiter-friendly filters','Improved fetch efficiency with batching and parallel processing techniques'], stack:['React','TypeScript','Node.js','APIs','Data Normalization','Kanban UI'], accent:'from-indigo-500/20 to-cyan-500/20' },
  { title:'Digital Banking & Fraud Detection Platform', category:'Enterprise Microservices', description:'Designed around real-time transaction processing using Spring Boot microservices, Kafka-based streaming, secure authentication, cloud deployment, and React dashboards for financial operations visibility.', impact:['Improved scalability by isolating fraud scoring and validation workflows into microservices','Enabled real-time event processing for faster fraud detection insights','Strengthened delivery quality with automation across UI and API layers'], stack:['Java','Spring Boot','React','Kafka','PostgreSQL','MongoDB','AWS','Docker','Kubernetes'], accent:'from-emerald-500/20 to-sky-500/20' },
  { title:'Loan Management System', category:'Full Stack Web App', description:'Developed a secure full-stack application using Spring Boot and React.js to manage loan workflows, approvals, repayment tracking, and role-based access control through RESTful APIs.', impact:['Streamlined loan processing and approval workflow visibility','Introduced secure authentication and role-based access for controlled operations','Built reusable APIs for repayment tracking and process transparency'], stack:['Spring Boot','React.js','REST APIs','Authentication','RBAC'], accent:'from-violet-500/20 to-fuchsia-500/20' },
  { title:'Intelligent Medical Blog Generation & Classification', category:'NLP / AI', description:'Built an NLP-driven platform using clinical notes from MIMIC datasets to summarize medical content into patient-friendly blog style explanations and classify specialties using both transformer and classical ML models.', impact:['Converted complex clinical notes into simplified educational content','Used TextRank, T5, BART, and PEGASUS for summarization experiments','Applied SVM and Logistic Regression for medical specialty classification'], stack:['Python','NLP','T5','BART','PEGASUS','SVM','Logistic Regression'], accent:'from-rose-500/20 to-amber-500/20' },
  { title:'Drug-Bacteria Interaction Visualization for Antibiotic Resistance Trends', category:'Data Science / Visualization', description:'Created synthetic datasets and predictive pipelines using ML/DL models to analyze antibiotic resistance patterns over time, then translated outputs into visual stories for biological inference.', impact:['Modeled long-term resistance patterns using LSTM and Random Forest','Created high-clarity visualizations to support trend interpretation','Linked predictive outputs with domain-focused biological insights'], stack:['Python','LSTM','Random Forest','Data Visualization','Analytics'], accent:'from-cyan-500/20 to-blue-500/20' }
];
export const experience = [
  { company:'Citi', role:'Senior Software Developer', period:'Aug 2024 – Present', summary:'Worked on a digital banking and fraud detection platform with Spring Boot microservices, React dashboards, Kafka-based streaming, automation, and AWS-backed deployments.', points:['Enhanced React and Redux interfaces for data-heavy financial workflows','Built Spring Boot services for transaction validation and processing','Used Kafka for real-time streaming to reduce fraud detection latency','Improved deployment consistency through Docker, Kubernetes, and CI/CD pipelines'] },
  { company:'Calsoft Private Limited', role:'Software Development Engineer', period:'Jan 2021 – Jun 2023', summary:'Contributed to a cloud-based data management and storage validation platform using React, Spring Boot, Python, REST APIs, and containerized delivery workflows.', points:['Developed dashboards and backend services for large-scale distributed data workflows','Strengthened quality using Selenium, TestNG, PyTest, REST Assured, and Postman','Built Python data processing scripts for transformation and validation','Streamlined build and deployment with Docker, Jenkins, and GitHub Actions'] },
  { company:'HCLTech', role:'Associate Software Developer', period:'Feb 2019 – Dec 2020', summary:'Worked on an inventory and order management application using Angular, Spring Boot, Kafka, Azure, and automated release workflows.', points:['Built responsive UI workflows in Angular for operations teams','Created backend services and APIs for order and inventory management','Automated testing and improved regression quality with Selenium and JUnit','Supported secure access, Spring Batch jobs, and Azure-based deployments'] }
];
export const certifications = ['Google AI Professional Certificate','Claude 101 Certification – Anthropic','Claude Code in Action Certification – Anthropic','Generative AI: Prompt Engineering Basics – IBM','AWS Cloud Technical Essentials'];
export const recruiterFocus = [
  { title:'What recruiters see fast', items:['Clear backend engineering identity','Strong enterprise & financial experience','End-to-end system ownership','Modern microservices & API stack'] },
  { title:'What hiring managers care about', items:['System design & scalability thinking','Production-ready engineering practices','API, data workflows & distributed systems','Quality-focused engineering mindset'] },
  { title:'What this portfolio proves', items:['You can design scalable systems','You can build production-ready services','You can automate testing & workflows','You can deliver measurable impact'] }
];
export const socialLinks = [
  // { label:'GitHub', href: personalInfo.github, icon: Github },
  // { label:'LinkedIn', href: personalInfo.linkedin, icon: Linkedin },
  { label:'Email', href: `mailto:${personalInfo.email}`, icon: Mail }
];
export const architectureCards = [
  { title:'Microservices Delivery Mindset', icon: Building2, text:'Design modular microservices with clear API contracts, scalability, secure authentication, and independent deployment using containers and CI/CD pipelines.' },
  { title:'Event-Driven Thinking', icon: Rocket, text:'Implement Kafka-based event-driven architectures for real-time processing, asynchronous communication, reduced coupling, and improved scalability across distributed systems.' },
  { title:'Scalable Backend Design', icon: BrainCircuit, text:'Build high-performance backend APIs optimized for scalability, reliability, efficient data processing, and consistent performance under high transaction loads.' },
  { title:'Automation & Quality Engineering', icon: FileStack, text:'Develop automation frameworks and API validation with CI/CD pipelines to ensure reliable, tested, and production-ready software systems.' }
];
