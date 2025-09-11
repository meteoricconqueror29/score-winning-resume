
import ResumePreview from '@/components/resume/ResumePreview';

export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  website: string;
  github: string;
  summary: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  // link?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  graduationDate: string;
  gpa?: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: string[];
  projects: Project[];
}

const Index = () => {
  const resumeData: ResumeData = {
    personalInfo: {
      fullName: 'Dipayan Majumdar',
      email: 'dipayan.majumdar22@gmail.com',
      phone: '8851462360',
      location: '',
      linkedin: 'linkedin.com/in/dipayan-majumdar',
      website: 'dipayan-portfolio.dev',
      github: 'github.com/MeteoricConqueror29',
      summary: 'Full Stack Developer specializing in Laravel & DevOps with proven experience.'
    },
    experience: [
      {
        id: '1',
        company: 'LetUsCode Systems Pvt. Ltd.',
        position: 'Full Stack Developer',
        location: '',
        startDate: '2025-01',
        endDate: '',
        current: true,
        description: [
          'Spearheaded end-to-end development lifecycle from architecture to deployment, ensuring scalable and secure solutions.',
          'Built a Laravel-based multi-marketplace admin panel for products, orders, and suppliers across Shopify, Amazon, Walmart, Wayfair, Houzz, and eBay.',
          'Improved backend efficiency with Redis queues, workers, and cron jobs, reducing marketplace sync errors by 60%',
          'Designed internal admin UIs with Filament, delivering clean and functional dashboards.',
          'Deployed production-grade systems on AWS EC2, RDS, S3, Nginx, Supervisor, HTTPS.',
          'Worked on Electronic Medical Records (EMR) platform integrated with Surescripts, enabling secure prescription workflows and healthcare data exchange.',
          'Currently building an AI-powered Form Builder: Frontend (React/Node.js): Dynamic input form and real-time result display. Backend (Python): AI-driven logic for intelligent form processing and recommendations.'
        ]
      },
      {
        id: '2',
        company: 'ProtechGenie',
        position: 'Backend Developer',
        location: '',
        startDate: '2024-01',
        endDate: '2024-12',
        current: false,
        description: [
          'Built secure backend modules for Paytia (PCI-DSS Level 1 fintech platform) with encryption and tokenization.',
          'Integrated payment gateways: Stripe, PayPal, Braintree, enabling secure digital transactions.',
          'IImplemented Twilio-based SMS payments and WebRTC for real-time secure calls.'
        ]
      },
      {
        id: '3',
        company: 'Mobzway Technology',
        position: 'Software Engineer',
        location: '',
        startDate: '2023-08',
        endDate: '2023-12',
        current: false,
        description: [
          'Developed modular, real-time gaming UIs using ReactJS and WebSockets.',
          'Improved rendering performance by optimizing memory-heavy components.',
          'ICollaborated with designers and QA to enhance player experience and stability.',
        ]
      }
    ],
    education: [
      {
        id: '1',
        institution: 'Dev Bhoomi Institute of Technology, Uttarakhand Technical University',
        degree: 'B.Tech',
        field: 'Computer Science & Engineering',
        location: '',
        graduationDate: '2023-12',
        gpa: '6.7'
      },
      {
        id: '2',
        institution: 'MMVVdyaMandir',
        degree: 'Higher Secondary (10+2)',
        field: 'WBCHSE',
        location: '',
        graduationDate: '2019-05',
        gpa: '8.72'
      },
      {
        id: '3',
        institution: 'MMVVdyaMandir',
        degree: 'Secondary (10th)',
        field: 'WBBSE',
        location: '',
        graduationDate: '2017-05',
        gpa: '8.33'
      }
    ],
    skills: [
      'PHP', 'Laravel', 'CodeIgniter', 'Filament', 'Livewire', 'Blade',
      'React.js', 'JavaScript', 'Inertia.js', 'Alpine.js', 'HTML', 'CSS', 'Tailwind CSS',
      'MySQL', 'Redis', 'Amazon RDS', 'Amazon S3',
      'Shopify API', 'Amazon SP-API', 'Walmart API', 'Wayfair API', 'Houzz API', 'eBay API',
      'Stripe', 'PayPal', 'Twilio', 'WebRTC', 'Webhooks',
      'Git', 'AWS EC2', 'Nginx', 'Supervisor', 'Linux', 'Postman', 'VS Code'
    ],
    projects: [
      {
        id: '1',
        name: 'Real-Time Chat Application',
        description: 'Built a full-featured messaging app with instant messaging, emoji/markdown support, file sharing, group management, and responsive UI. Used background jobs for async processing.',
        tech: ['ReactJS', 'Laravel', 'WebSockets', 'Redis'],
      },
      {
        id: '2',
        name: 'Multi-Vendor E-commerce Marketplace',
        description: 'Developed a full-stack system with vendor dashboard, real-time UI, SSR, role-based access, and integrated Stripe for payments.',
        tech: ['Laravel', 'React (TypeScript)', 'Inertia.js v2', 'FilamentPHP', 'Stripe'],
      },
      {
        id: '3',
        name: 'Social Media Website',
        description: 'Created a small social platform with timelines, posts, likes/comments using Laravel and Vue.js, deployed on shared hosting.',
        tech: ['Laravel', 'Vue.js', 'Inertia.js', 'Tailwind CSS'],
      },
      {
        id: '4',
        name: 'Car Selling Website',
        description: 'Simple car listing/selling site built with Laravel, supporting user-friendly submissions and browsing.',
        tech: ['Laravel'],
      }
    ]    
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <ResumePreview resumeData={resumeData} />
    </div>
  );
};

export default Index;
