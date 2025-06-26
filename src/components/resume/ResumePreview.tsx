
import { ResumeData } from '@/pages/Index';
import { Mail, Phone, Linkedin, Globe, Github } from 'lucide-react';

interface ResumePreviewProps {
  resumeData: ResumeData;
}

const ResumePreview = ({ resumeData }: ResumePreviewProps) => {
  const { personalInfo, experience, education, skills } = resumeData;

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
    <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg print:shadow-none print:p-0 text-sm leading-tight" id="resume-preview">
      {/* Header */}
      <header className="border-b-2 border-gray-300 pb-3 mb-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 tracking-wide">
          {personalInfo.fullName || 'Your Name'}
        </h1>
        
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-700">
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

      {/* Professional Summary */}
      {personalInfo.summary && (
        <section className="mb-4">
          <h2 className="text-base font-bold text-gray-900 mb-2 border-b border-gray-300 pb-1 uppercase tracking-wide">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-gray-800 leading-relaxed text-justify">{personalInfo.summary}</p>
        </section>
      )}

      {/* Technical Skills */}
      {skills.length > 0 && (
        <section className="mb-4">
          <h2 className="text-base font-bold text-gray-900 mb-2 border-b border-gray-300 pb-1 uppercase tracking-wide">
            TECHNICAL SKILLS
          </h2>
          <div className="grid grid-cols-1 gap-1">
            <div><strong>Backend &amp; Frameworks:</strong> PHP, Laravel, CodeIgniter, Filament, Livewire, Blade</div>
            <div><strong>Frontend:</strong> React.js, JavaScript, Inertia.js, Alpine.js, HTML, CSS, Tailwind CSS</div>
            <div><strong>Database &amp; Storage:</strong> MySQL, Redis, Amazon RDS, Amazon S3</div>
            <div><strong>APIs &amp; Integrations:</strong> Shopify API, Amazon SP-API, Walmart API, Wayfair API, Houzz API, eBay API</div>
            <div><strong>Payment &amp; Communication:</strong> Stripe, PayPal, Twilio, WebRTC, Webhooks</div>
            <div><strong>DevOps &amp; Tools:</strong> Git, AWS EC2, Nginx, Supervisor, Linux, Postman, VS Code</div>
          </div>
        </section>
      )}

      {/* Professional Experience */}
      {experience.length > 0 && (
        <section className="mb-4">
          <h2 className="text-base font-bold text-gray-900 mb-2 border-b border-gray-300 pb-1 uppercase tracking-wide">
            PROFESSIONAL EXPERIENCE
          </h2>
          <div className="space-y-3">
            {experience.map((exp) => (
              <div key={exp.id} className="page-break-inside-avoid">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">{exp.position}</h3>
                    <p className="text-gray-800 font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-right text-xs text-gray-700 font-medium">
                    <p>
                      {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                    </p>
                  </div>
                </div>
                <ul className="list-disc list-outside text-gray-800 space-y-0.5 ml-4 text-xs leading-relaxed">
                  {exp.description.filter(desc => desc.trim()).map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-4">
          <h2 className="text-base font-bold text-gray-900 mb-2 border-b border-gray-300 pb-1 uppercase tracking-wide">
            EDUCATION
          </h2>
          <div className="space-y-2">
            {education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold text-gray-900">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <p className="text-gray-800 text-xs">{edu.institution}</p>
                  {edu.gpa && <p className="text-xs text-gray-700">GPA: {edu.gpa}</p>}
                </div>
                <div className="text-right text-xs text-gray-700 font-medium">
                  <p>{formatDate(edu.graduationDate)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Empty State */}
      {!personalInfo.fullName && experience.length === 0 && education.length === 0 && skills.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p className="text-lg">Your resume preview will appear here</p>
          <p className="text-sm">Start by filling out your personal information</p>
        </div>
      )}
    </div>
  );
};

export default ResumePreview;
