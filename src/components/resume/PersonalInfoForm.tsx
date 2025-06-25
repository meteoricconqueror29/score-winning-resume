
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
  const [formData, setFormData] = useState<PersonalInfo>(personalInfo);

  useEffect(() => {
    setFormData(personalInfo);
  }, [personalInfo]);

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
            placeholder="City, State"
            value={formData.location}
            onChange={(e) => handleChange('location', e.target.value)}
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="linkedin">LinkedIn Profile</Label>
          <Input
            id="linkedin"
            placeholder="linkedin.com/in/johndoe"
            value={formData.linkedin}
            onChange={(e) => handleChange('linkedin', e.target.value)}
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="website">Website/Portfolio</Label>
          <Input
            id="website"
            placeholder="www.johndoe.com"
            value={formData.website}
            onChange={(e) => handleChange('website', e.target.value)}
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
          className="mt-1 min-h-[100px]"
        />
        <p className="text-sm text-gray-500 mt-1">2-3 sentences highlighting your key qualifications</p>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
