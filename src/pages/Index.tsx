
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
      summary: 'Full Stack Developer with expertise in Laravel, React, and modern web technologies. Proven experience in e-commerce platforms, payment systems, and multi-marketplace integrations, contributed to PCI-DSS Level 1 compliant payment solutions at Paytia. Currently leading development of inventory management systems with AWS deployment experience.'
    },
    experience: [
      {
        id: '1',
        company: 'LetUsCode Systems Pvt. Ltd.',
        position: 'Full Stack Developer & Project Manager',
        location: '',
        startDate: '2025-01',
        endDate: '',
        current: true,
        description: [
          'Independently spearheading the end-to-end development lifecycle—from architecture and UI/UX design to development, deployment, and scaling—ensuring a unified and efficient system',
          'Leading the development of a Laravel-based e-commerce admin panel to manage products, orders, and suppliers across major marketplaces',
          'Built and integrated multi-marketplace sync systems for Shopify, Amazon, Walmart, Wayfair, Houzz, and eBay',
          'Improved backend performance with Redis queues, job workers, and automated scheduling using cron, used Webhook also in some of them',
          'Deployed scalable solutions on AWS EC2 with secure production setup including RDS, S3, Supervisor, Nginx, and HTTPS',
          'Developed admin interfaces using Filament, delivering clean and functional UI for internal users'
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
          'Built secure backend modules for Paytia, a PCI-DSS Level 1 fintech platform, with a focus on data encryption, tokenization, and compliance',
          'Integrated payment solutions using Stripe, PayPal, Braintree, and Twilio, including SMS-based payment processing',
          'Implemented WebRTC to enable secure real-time calls during transactions and support'
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
          'Developed responsive modular UIs using ReactJS for real-time multiplayer gaming platforms',
          'Used WebSockets for live gameplay interactions between players',
          'Identified and resolved performance bottlenecks in rendering and memory management',
          'Collaborated with designers and QA to fine-tune game logic and enhance user experience'
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
        graduationDate: '2019-12',
        gpa: '87.23%'
      },
      {
        id: '3',
        institution: 'MMVVdyaMandir',
        degree: 'Secondary (10th)',
        field: 'WBBSE',
        location: '',
        graduationDate: '2017-12',
        gpa: '83.27%'
      }
    ],
    skills: [
      'PHP', 'Laravel', 'CodeIgniter', 'Filament', 'Livewire', 'Blade',
      'React.js', 'JavaScript', 'Inertia.js', 'Alpine.js', 'HTML', 'CSS', 'Tailwind CSS',
      'MySQL', 'Redis', 'Amazon RDS', 'Amazon S3',
      'Shopify API', 'Amazon SP-API', 'Walmart API', 'Wayfair API', 'Houzz API', 'eBay API',
      'Stripe', 'PayPal', 'Twilio', 'WebRTC', 'Webhooks',
      'Git', 'AWS EC2', 'Nginx', 'Supervisor', 'Linux', 'Postman', 'VS Code'
    ]
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <ResumePreview resumeData={resumeData} />
    </div>
  );
};

export default Index;
