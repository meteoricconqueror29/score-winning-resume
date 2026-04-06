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

  const renderDescription = (text: string) => {
    // Supports **bold** and [label](url) inline markup.
    const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }

      const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
      if (linkMatch) {
        return createClickableLink(linkMatch[2], linkMatch[1]);
      }

      return part;
    });
  };

  return (
    <div
      className="max-w-4xl mx-auto bg-white p-6 shadow-lg print:shadow-none print:p-0 text-base leading-normal print:text-[15px] print:leading-snug"
      id="resume-preview"
    >
      {/* Header */}
      <header className="border-b border-gray-300 pb-1 mb-3 print:mb-2">
        <h1 className="text-2xl font-bold text-gray-900 mb-1 tracking-wide">
          {personalInfo.fullName || 'Your Name'}
        </h1>

        <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-gray-700 leading-normal">
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

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-3 print:mb-2">
          <h2 className="text-lg font-bold text-gray-900 mb-1 border-b border-gray-300 pb-0.5 uppercase tracking-wide">
            Professional Experience
          </h2>
          <div className="space-y-2 print:space-y-1.5">
            {experience.map((exp) => (
              <div key={exp.id} className="page-break-inside-avoid">
                <div className="flex justify-between items-start mb-0.5">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">{exp.position}</h3>
                    <p className="text-gray-800">{exp.company}</p>
                  </div>
                  <div className="text-right text-sm text-gray-700 font-medium">
                    <p>
                      {formatDate(exp.startDate)} – {exp.current ? 'Present' : formatDate(exp.endDate)}
                    </p>
                  </div>
                </div>
                <ul className="list-disc ml-5 text-sm text-gray-800 space-y-1 leading-normal print:leading-snug">
                  {exp.description.map((desc, idx) => (
                    <li key={idx}>{renderDescription(desc)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-3 break-inside-avoid print:break-inside-avoid-page">
          <h2 className="text-lg font-bold text-gray-900 mb-1 border-b border-gray-300 pb-0.5 uppercase tracking-wide">
            Technical Skills
          </h2>
          <p className="text-sm text-gray-800 leading-snug">
            <strong>AI / ML:</strong> RAG, LLMs, OpenAI, LangChain, Pinecone (Vector DB), OpenRouter, Prompt Engineering
          </p>
          <p className="text-sm text-gray-800 leading-snug">
            <strong>Backend & Frameworks:</strong> PHP, Laravel, CodeIgniter, Node.js, Express, FastAPI, Flask, Filament, Livewire
          </p>
          <p className="text-sm text-gray-800 leading-snug">
            <strong>Frontend:</strong> ReactJS, JavaScript, TypeScript, Inertia.js, Alpine.js, HTML, CSS, Tailwind
          </p>
          <p className="text-sm text-gray-800 leading-snug">
            <strong>Database & Storage:</strong> MySQL, Redis, DuckDB, Amazon RDS, S3
          </p>
          <p className="text-sm text-gray-800 leading-snug">
            <strong>APIs & Integrations:</strong> REST APIs, Webhooks, Shopify API, Amazon SP-API, Walmart, Wayfair, Houzz, eBay, Amazon Textract, Clerk Auth
          </p>
          <p className="text-sm text-gray-800 leading-snug">
            <strong>Payments & Comms:</strong> Stripe, PayPal, Twilio, WebRTC
          </p>
          <p className="text-sm text-gray-800 leading-snug">
            <strong>DevOps & Tools:</strong> Git, AWS (EC2, S3, RDS, Lambda), Docker, Nginx, Supervisor, Linux, Postman, GitHub Actions, Cursor
          </p>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-4 print:break-before-page">
          <h2 className="text-lg font-bold text-gray-900 mb-1 border-b border-gray-300 pb-0.5 uppercase tracking-wide">
            Projects
          </h2>
          <ul className="text-sm text-gray-800 space-y-2 leading-normal">
            {projects.map((project) => (
              <li key={project.id} className="list-none">
                <p className="font-semibold text-gray-900">{project.name}</p>
                <ul className="list-disc ml-5 mt-0.5 space-y-1">
                  {project.description.map((point, idx) => (
                    <li key={`${project.id}-${idx}`}>{renderDescription(point)}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-1 break-inside-avoid">
          <h2 className="text-lg font-bold text-gray-900 mb-1 border-b border-gray-300 pb-0.5 uppercase tracking-wide">
            Education
          </h2>
          <ul className="list-disc ml-5 text-sm text-gray-800 space-y-1 leading-normal">
            {education.map((edu) => (
              <li key={edu.id}>
                <strong>{edu.degree} {edu.field && `in ${edu.field}`}</strong> – {edu.institution}
                {edu.gpa && ` | GPA: ${edu.gpa}`} ({formatDate(edu.graduationDate)})
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default ResumePreview;