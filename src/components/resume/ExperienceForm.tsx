
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, Briefcase } from 'lucide-react';
import { Experience } from '@/pages/Index';

interface ExperienceFormProps {
  experience: Experience[];
  onUpdate: (experience: Experience[]) => void;
}

const ExperienceForm = ({ experience, onUpdate }: ExperienceFormProps) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ['']
    };
    onUpdate([...experience, newExperience]);
    setExpandedCard(newExperience.id);
  };

  const updateExperience = (id: string, field: keyof Experience, value: any) => {
    const updated = experience.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    onUpdate(updated);
  };

  const removeExperience = (id: string) => {
    onUpdate(experience.filter(exp => exp.id !== id));
  };

  const addBulletPoint = (id: string) => {
    const updated = experience.map(exp => 
      exp.id === id 
        ? { ...exp, description: [...exp.description, ''] }
        : exp
    );
    onUpdate(updated);
  };

  const updateBulletPoint = (id: string, index: number, value: string) => {
    const updated = experience.map(exp => 
      exp.id === id 
        ? { 
            ...exp, 
            description: exp.description.map((desc, i) => i === index ? value : desc)
          }
        : exp
    );
    onUpdate(updated);
  };

  const removeBulletPoint = (id: string, index: number) => {
    const updated = experience.map(exp => 
      exp.id === id 
        ? { 
            ...exp, 
            description: exp.description.filter((_, i) => i !== index)
          }
        : exp
    );
    onUpdate(updated);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <Briefcase className="h-5 w-5" />
          Work Experience
        </h3>
        <Button onClick={addExperience} size="sm" className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-1" />
          Add Experience
        </Button>
      </div>

      {experience.map((exp) => (
        <Card key={exp.id} className="border-l-4 border-l-blue-500">
          <CardHeader 
            className="cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => setExpandedCard(expandedCard === exp.id ? null : exp.id)}
          >
            <CardTitle className="text-base flex items-center justify-between">
              <span>{exp.position || 'New Position'} {exp.company && `at ${exp.company}`}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  removeExperience(exp.id);
                }}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          
          {expandedCard === exp.id && (
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor={`position-${exp.id}`}>Job Title *</Label>
                  <Input
                    id={`position-${exp.id}`}
                    placeholder="Software Engineer"
                    value={exp.position}
                    onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor={`company-${exp.id}`}>Company *</Label>
                  <Input
                    id={`company-${exp.id}`}
                    placeholder="Tech Company Inc."
                    value={exp.company}
                    onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor={`location-${exp.id}`}>Location</Label>
                  <Input
                    id={`location-${exp.id}`}
                    placeholder="City, State"
                    value={exp.location}
                    onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor={`startDate-${exp.id}`}>Start Date *</Label>
                  <Input
                    id={`startDate-${exp.id}`}
                    type="month"
                    value={exp.startDate}
                    onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor={`endDate-${exp.id}`}>End Date</Label>
                  <Input
                    id={`endDate-${exp.id}`}
                    type="month"
                    value={exp.endDate}
                    onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                    className="mt-1"
                    disabled={exp.current}
                  />
                </div>
                
                <div className="flex items-center space-x-2 mt-6">
                  <Checkbox
                    id={`current-${exp.id}`}
                    checked={exp.current}
                    onCheckedChange={(checked) => {
                      updateExperience(exp.id, 'current', checked);
                      if (checked) updateExperience(exp.id, 'endDate', '');
                    }}
                  />
                  <Label htmlFor={`current-${exp.id}`}>Currently working here</Label>
                </div>
              </div>
              
              <div>
                <Label className="text-sm font-medium">Key Achievements & Responsibilities</Label>
                <div className="space-y-2 mt-2">
                  {exp.description.map((desc, index) => (
                    <div key={index} className="flex gap-2">
                      <Textarea
                        placeholder="• Increased team productivity by 30% through implementation of agile methodologies..."
                        value={desc}
                        onChange={(e) => updateBulletPoint(exp.id, index, e.target.value)}
                        className="flex-1 min-h-[60px]"
                      />
                      {exp.description.length > 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeBulletPoint(exp.id, index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => addBulletPoint(exp.id)}
                    className="mt-2"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add Bullet Point
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Use action verbs and quantify achievements when possible (e.g., "Increased sales by 25%")
                </p>
              </div>
            </CardContent>
          )}
        </Card>
      ))}

      {experience.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <Briefcase className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>No work experience added yet.</p>
          <p className="text-sm">Click "Add Experience" to get started.</p>
        </div>
      )}
    </div>
  );
};

export default ExperienceForm;
