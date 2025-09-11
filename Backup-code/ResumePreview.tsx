
import { ResumeData } from '@/pages/Index';
import { Mail, Phone, Linkedin, Globe, Github } from 'lucide-react';

interface ResumePreviewProps {
  resumeData: ResumeData;
}

const ResumePreview = ({ resumeData }: ResumePreviewProps) => {
  const { personalInfo, experience, education, skills, projects } = resumeData;

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString + '-01');
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  const formatLink = (url: string, prefix: string = '') => {
    if (!url) return '';
    const cleanUrl = url.replace(/^https?:\/\//, '').replace(/^www\./, '');
    return prefix ? `${prefix}${cleanUrl}` : cleanUrl;
  };

  const createClickableLink = (url: string, text: string) => {
    const fullUrl = url.startsWith('http') ? url : `https://${url}`;
    return (
      <a 
        href={fullUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-inherit hover:text-blue-600 transition-colors"
      >
        {text}
      </a>
    );
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg print:shadow-none print:p-0 text-base leading-normal" id="resume-preview">
    {/* Header */}
    <header className="border-b border-gray-300 pb-2 mb-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-wide">
        {personalInfo.fullName || 'Your Name'}
      </h1>

      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-700 leading-normal">
        {personalInfo.email && (
          <div className="flex items-center gap-1">
            <Mail className="h-3 w-3" />
            {createClickableLink(`mailto:${personalInfo.email}`, personalInfo.email)}
          </div>
        )}
        {personalInfo.phone && (
          <div className="flex items-center gap-1">
            <Phone className="h-3 w-3" />
            {createClickableLink(`tel:${personalInfo.phone}`, personalInfo.phone)}
          </div>
        )}
        {personalInfo.linkedin && (
          <div className="flex items-center gap-1">
            <Linkedin className="h-3 w-3" />
            {createClickableLink(personalInfo.linkedin, formatLink(personalInfo.linkedin))}
          </div>
        )}
        {personalInfo.github && (
          <div className="flex items-center gap-1">
            <Github className="h-3 w-3" />
            {createClickableLink(personalInfo.github, formatLink(personalInfo.github))}
          </div>
        )}
        {personalInfo.website && (
          <div className="flex items-center gap-1">
            <Globe className="h-3 w-3" />
            {createClickableLink(personalInfo.website, formatLink(personalInfo.website))}
          </div>
        )}
      </div>
    </header>

    {/* Summary */}
    {personalInfo.summary && (
      <section className="mb-4">
        <h2 className="text-lg font-bold text-gray-900 mb-2 border-b border-gray-300 pb-1 uppercase tracking-wide">
          Professional Summary
        </h2>
        <p className="text-sm text-gray-800 text-justify leading-[1.4]">
          {personalInfo.summary}
        </p>
      </section>
    )}

    {/* Skills */}
    {skills.length > 0 && (
      <section className="mb-4">
        <h2 className="text-lg font-bold text-gray-900 mb-2 border-b border-gray-300 pb-1 uppercase tracking-wide">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 gap-1">
          <div><strong>Backend & Frameworks:</strong> PHP, Laravel, CodeIgniter, Filament, Livewire, Blade</div>
          <div><strong>Frontend:</strong> React.js, JavaScript, Inertia.js, Alpine.js, HTML, CSS, Tailwind CSS</div>
          <div><strong>Database & Storage:</strong> MySQL, Redis, Amazon RDS, Amazon S3</div>
          <div><strong>APIs & Integrations:</strong> Shopify API, Amazon SP-API, Walmart API, Wayfair API, Houzz API, eBay API</div>
          <div><strong>Payment & Communication:</strong> Stripe, PayPal, Twilio, WebRTC, Webhooks</div>
          <div><strong>DevOps & Tools:</strong> Git, AWS EC2, Nginx, Supervisor, Linux, Postman, VS Code</div>
        </div>
      </section>
    )}

    {/* Experience */}
    {experience.length > 0 && (
      <section className="mb-4">
        <h2 className="text-lg font-bold text-gray-900 mb-2 border-b border-gray-300 pb-1 uppercase tracking-wide">
          Professional Experience
        </h2>
        <div className="space-y-4">
          {experience.map((exp) => (
            <div key={exp.id} className="page-break-inside-avoid">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{exp.position}</h3>
                  <p className="text-gray-800 font-medium">{exp.company}</p>
                </div>
                <div className="text-right text-sm text-gray-700 font-medium">
                  <p>{formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}</p>
                </div>
              </div>
              <ul className="list-disc ml-5 text-sm text-gray-800 space-y-[0.3rem] leading-[1.35]">
                {exp.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    )}

    {/* Projects */}
    {projects.length > 0 && (
      <section className="mb-4">
        <h2 className="text-lg font-bold text-gray-900 mb-2 border-b border-gray-300 pb-1 uppercase tracking-wide">
          Projects
        </h2>
        <div className="space-y-3">
          {projects.map((project) => (
            <div key={project.id}>
              <h3 className="text-base font-semibold text-gray-900">{project.name}</h3>
              <p className="text-sm text-gray-800">{project.description}</p>
              <p className="text-sm text-gray-600 italic">{project.tech.join(', ')}</p>
            </div>
          ))}
        </div>
      </section>
    )}

    {/* Education */}
    {education.length > 0 && (
      <section className="mb-4 break-inside-avoid">
        <h2 className="text-lg font-bold text-gray-900 mb-2 border-b border-gray-300 pb-1 uppercase tracking-wide">
          Education
        </h2>
        <div className="space-y-3 break-inside-avoid">
          {education.map((edu) => (
            <div key={edu.id} className="flex justify-between items-start">
              <div>
                <h3 className="text-base font-semibold text-gray-900">{edu.degree} {edu.field && `in ${edu.field}`}</h3>
                <p className="text-sm text-gray-800">{edu.institution}</p>
                {edu.gpa && <p className="text-sm text-gray-700">GPA: {edu.gpa}</p>}
              </div>
              <div className="text-right text-sm text-gray-700 font-medium">
                <p>{formatDate(edu.graduationDate)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )}
  </div>

  );
};

export default ResumePreview;
