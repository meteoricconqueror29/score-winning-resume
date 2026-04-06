
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PersonalInfo } from '@/pages/Index';

interface PersonalInfoFormProps {
  personalInfo: PersonalInfo;
  onUpdate: (info: PersonalInfo) => void;
}

const PersonalInfoForm = ({ personalInfo, onUpdate }: PersonalInfoFormProps) => {
  const [formData, setFormData] = useState<PersonalInfo>({
    fullName: 'Dipayan Majumdar',
    email: 'dipayan.majumdar22@gmail.com',
    phone: '8851462360',
    location: '',
    linkedin: 'linkedin.com/in/dipayan-majumdar',
    website: 'krnlreaper.dev',
    github: 'github.com/MeteoricConqueror29',
    summary: 'Full Stack Developer with hands-on experience building modern web applications using the TALL stack and JavaScript frameworks. Proven track record in developing secure payment systems and real-time features, with professional experience across both e-commerce marketplaces and fintech platforms. Currently leading the development of multi-channel inventory and order management systems. Previously contributed to PCI-DSS Level 1 compliant payment solutions at Paytia, focusing on backend architecture and data security with DevOps practices.'
  });

  useEffect(() => {
    onUpdate(formData);
  }, []);

  const handleChange = (field: keyof PersonalInfo, value: string) => {
    const updatedData = { ...formData, [field]: value };
    setFormData(updatedData);
    onUpdate(updatedData);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            placeholder="john.doe@email.com"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            placeholder="(555) 123-4567"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            placeholder="City, State (optional)"
            value={formData.location}
            onChange={(e) => handleChange('location', e.target.value)}
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="linkedin">LinkedIn Profile</Label>
          <Input
            id="linkedin"
            placeholder="linkedin.com/in/username"
            value={formData.linkedin}
            onChange={(e) => handleChange('linkedin', e.target.value)}
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="website">Website/Portfolio</Label>
          <Input
            id="website"
            placeholder="www.yoursite.com"
            value={formData.website}
            onChange={(e) => handleChange('website', e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="github">GitHub Profile</Label>
          <Input
            id="github"
            placeholder="github.com/username"
            value={formData.github}
            onChange={(e) => handleChange('github', e.target.value)}
            className="mt-1"
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="summary">Professional Summary</Label>
        <Textarea
          id="summary"
          placeholder="Brief summary of your professional background and key achievements..."
          value={formData.summary}
          onChange={(e) => handleChange('summary', e.target.value)}
          className="mt-1 min-h-[120px]"
        />
        <p className="text-sm text-gray-500 mt-1">2-4 sentences highlighting your key qualifications</p>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
