import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Download, Eye, FileText } from 'lucide-react';
import PersonalInfoForm from '@/components/resume/PersonalInfoForm';
import ExperienceForm from '@/components/resume/ExperienceForm';
import EducationForm from '@/components/resume/EducationForm';
import SkillsForm from '@/components/resume/SkillsForm';
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
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: 'Dipayan Majumdar',
      email: 'dipayan.majumdar22@gmail.com',
      phone: '8851462360',
      location: '',
      linkedin: 'linkedin.com/in/dipayan-majumdar',
      website: 'dipayan-portfolio.dev',
      github: 'github.com/MeteoricConqueror29',
      summary: 'Full Stack Developer with hands-on experience building modern web applications using the TALL stack and JavaScript frameworks. Proven track record in developing secure payment systems and real-time features, with professional experience across both e-commerce marketplaces and fintech platforms. Currently leading the development of multi-channel inventory and order management systems. Previously contributed to PCI-DSS Level 1 compliant payment solutions at Paytia, focusing on backend architecture and data security with DevOps practices.'
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
  });

  const [activeTab, setActiveTab] = useState('personal');
  const [showPreview, setShowPreview] = useState(true);

  const updatePersonalInfo = (info: PersonalInfo) => {
    setResumeData(prev => ({ ...prev, personalInfo: info }));
  };

  const updateExperience = (experience: Experience[]) => {
    setResumeData(prev => ({ ...prev, experience }));
  };

  const updateEducation = (education: Education[]) => {
    setResumeData(prev => ({ ...prev, education }));
  };

  const updateSkills = (skills: string[]) => {
    setResumeData(prev => ({ ...prev, skills }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">ATS Resume Builder</h1>
          </div>
          <p className="text-lg text-gray-600">Create a professional, ATS-optimized resume that gets you noticed</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
                <CardTitle className="text-xl font-semibold">Build Your Resume</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-4 mb-6">
                    <TabsTrigger value="personal">Personal</TabsTrigger>
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="personal" className="space-y-4">
                    <PersonalInfoForm 
                      personalInfo={resumeData.personalInfo}
                      onUpdate={updatePersonalInfo}
                    />
                  </TabsContent>
                  
                  <TabsContent value="experience" className="space-y-4">
                    <ExperienceForm 
                      experience={resumeData.experience}
                      onUpdate={updateExperience}
                    />
                  </TabsContent>
                  
                  <TabsContent value="education" className="space-y-4">
                    <EducationForm 
                      education={resumeData.education}
                      onUpdate={updateEducation}
                    />
                  </TabsContent>
                  
                  <TabsContent value="skills" className="space-y-4">
                    <SkillsForm 
                      skills={resumeData.skills}
                      onUpdate={updateSkills}
                    />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Preview Section */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg sticky top-8">
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="text-xl font-semibold flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Preview
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <Button 
                    onClick={() => setShowPreview(!showPreview)}
                    variant="outline"
                    className="w-full"
                  >
                    {showPreview ? 'Hide Preview' : 'Show Preview'}
                  </Button>
                  
                  <Button 
                    onClick={handlePrint}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
                
                <div className="mt-4 border rounded-lg p-4 bg-white shadow-inner max-h-96 overflow-y-auto">
                  <ResumePreview resumeData={resumeData} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
