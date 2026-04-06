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
  description: string[];
  tech: string[];
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
      website: 'krnlreaper.dev',
      github: 'github.com/MeteoricConqueror29',
      summary: '' // removed from preview
    },
    experience: [
      {
        id: '1',
        company: 'LetUsCode Systems Pvt. Ltd.',
        position: 'Full Stack Developer | Applied AI Engineer',
        location: '',
        startDate: '2025-01',
        endDate: '',
        current: true,
        description: [
          'Built a production **RAG + agentic AI** platform using **OpenAI tool/function calling, LangChain, Pinecone (vector DB), and LLM workflows** for document Q&A and real-time actions (APIs, DB ops, workflows).',
          'Implemented an **ingestion + embedding** pipeline: **Firecrawl** and **LangChain** (auto-cleaning, chunking) → **text-3-embedding-large** → **Pinecone** for high-quality vector indexing.',
          'Implemented **hybrid retrieval + reranking** (semantic + keyword) with tuned Pinecone indexing, improving answer relevance and reducing hallucinations.',
          'Designed structured-data querying with **DuckDB + LangChain SQL Agent** (NL→SQL) over CSV/Excel via S3, enabling precise financial and operational answers in chat.',
          'Implemented Dockerization and **CI/CD** pipelines using GitHub Actions for automated deployment of AI and backend services.',
          'Delivered a **document parsing and order automation** pipeline using **Docling + NuExtract 8B** to map invoices/orders into canonical JSON and trigger ERP order creation.',
          'Shipped the automation system in **~6 working days** and replaced **3–4 manual analysts**; **lower cost** than managed OCR (**Amazon Textract**) while maintaining high extraction accuracy.',
          'Deployed GPU-based **microservices** (Docling, NuExtract 8B) on AWS (g5.4xlarge), exposing **FastAPI** endpoints and integrating with Python backend for scalable document processing',
          'Built a **Laravel + Filament** multi-marketplace platform integrating **Shopify, Amazon, Walmart, Wayfair, Houzz, and eBay** for synchronized product and order workflows.',
          'Optimized backend reliability using **Redis queues/workers/cron**, reducing marketplace sync errors by **60%**.',
          'Deployed and maintained production systems on **AWS (EC2, RDS, S3)** with **Nginx, Redis, Supervisor, and HTTPS** across AI and full-stack products.'
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
          'Developed secure backend modules for a fintech platform (**PCI-DSS Level 1**), implementing encryption and tokenization for sensitive data.',
          'Integrated payment gateways (**Stripe, PayPal, Braintree**) enabling reliable and secure transactions.',
          'Implemented Twilio-based SMS payments and WebRTC for real-time secure communication.'
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
          'Developed modular real-time gaming UIs using **ReactJS** and **WebSockets**.',
          'Improved rendering performance by optimizing memory-intensive components.',
          'Collaborated with design and QA teams to enhance user experience and stability.'
        ]
      }
    ],
    education: [
      {
        id: '1',
        institution: 'UTU',
        degree: 'B.Tech',
        field: 'Computer Science & Engineering',
        location: '',
        graduationDate: '2023-12',
        gpa: '6.7'
      },
      {
        id: '2',
        institution: 'MMVV Vidya Mandir',
        degree: 'Higher Secondary (10+2)',
        field: 'WBCHSE',
        location: '',
        graduationDate: '2019-05',
        gpa: '8.72'
      },
      // {
      //   id: '3',
      //   institution: 'MMVV Vidya Mandir',
      //   degree: 'Secondary (10th)',
      //   field: 'WBBSE',
      //   location: '',
      //   graduationDate: '2017-05',
      //   gpa: '8.33'
      // }
    ],
    skills: [
      'RAG', 'LLMs', 'OpenAI', 'LangChain', 'Pinecone', 'OpenRouter', 'Prompt Engineering',
      'PHP', 'Laravel', 'CodeIgniter', 'Node.js', 'Express', 'FastAPI', 'Flask', 'Filament', 'Livewire',
      'ReactJS', 'JavaScript', 'TypeScript', 'Inertia.js', 'Alpine.js', 'HTML', 'CSS', 'Tailwind',
      'MySQL', 'Redis', 'DuckDB', 'Amazon RDS', 'S3',
      'REST APIs', 'Webhooks', 'Shopify API', 'Amazon SP-API', 'Walmart', 'Wayfair', 'Houzz', 'eBay', 'Amazon Textract', 'Clerk Auth',
      'Stripe', 'PayPal', 'Twilio', 'WebRTC',
      'Git', 'AWS', 'Docker', 'Nginx', 'Supervisor', 'Linux', 'Postman', 'GitHub Actions', 'Cursor'
    ],
    projects: [
      {
        id: '1',
        name: 'KrishiMart (Freelance Project)',
        description: [
          'Built and deployed a live e-commerce platform used by real customers (**URL:** [krishimart.in](https://krishimart.in/)) using **Laravel**.',
          'Implemented end-to-end workflows including product catalog, order management, and payment processing.',
          'Developed and published a companion **Flutter** app integrated with backend services.'
        ],
        tech: ['Laravel', 'Flutter']
      },
      {
        id: '2',
        name: 'AxesInExcess (Freelance Project)',
        description: [
          'Developed a custom e-commerce platform and admin panel for a live client (**URL:** [axesinexcess.com](https://www.axesinexcess.com)) using **Laravel**.',
          'Built features for product management, order workflows, and backend operations with a scalable architecture.',
          'Implemented secure APIs and optimized performance for smooth user and admin experience.'
        ],
        tech: ['Laravel', 'REST APIs']
      },
      {
        id: '3',
        name: 'Real-Time Chat Application',
        description: [
          'Built a real-time messaging system with **WebSockets** (instant messaging, groups, file sharing).',
          'Implemented async jobs and a scalable backend using **Laravel + Redis**.'
        ],
        tech: ['ReactJS', 'Laravel', 'WebSockets', 'Redis']
      },
      {
        id: '4',
        name: 'Multi-Vendor E-commerce Marketplace',
        description: [
          'Developed a full-stack marketplace with vendor dashboard and role-based access.',
          'Integrated Stripe payments and SSR using **Laravel + React (TypeScript)**.'
        ],
        tech: ['Laravel', 'React (TypeScript)', 'Inertia.js v2', 'Filament', 'Stripe']
      },
      {
        id: '5',
        name: 'Social Media Website',
        description: [
          'Built a social platform with timelines, posts, and interactions.',
          'Implemented backend using **Laravel** and frontend with **Vue.js + Inertia.js**.'
        ],
        tech: ['Laravel', 'Vue.js', 'Inertia.js', 'Tailwind CSS']
      },
      // {
      //   id: '4',
      //   name: 'Car Selling Website',
      //   description: 'Simple car listing/selling platform built with **Laravel**, supporting user-friendly submissions and browsing.',
      //   tech: ['Laravel']
      // }
    ]
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <ResumePreview resumeData={resumeData} />
    </div>
  );
};

export default Index;
