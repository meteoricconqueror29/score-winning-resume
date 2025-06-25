
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, GraduationCap } from 'lucide-react';
import { Education } from '@/pages/Index';

interface EducationFormProps {
  education: Education[];
  onUpdate: (education: Education[]) => void;
}

const EducationForm = ({ education, onUpdate }: EducationFormProps) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      field: '',
      location: '',
      graduationDate: '',
      gpa: ''
    };
    onUpdate([...education, newEducation]);
    setExpandedCard(newEducation.id);
  };

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    const updated = education.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    );
    onUpdate(updated);
  };

  const removeEducation = (id: string) => {
    onUpdate(education.filter(edu => edu.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <GraduationCap className="h-5 w-5" />
          Education
        </h3>
        <Button onClick={addEducation} size="sm" className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-1" />
          Add Education
        </Button>
      </div>

      {education.map((edu) => (
        <Card key={edu.id} className="border-l-4 border-l-green-500">
          <CardHeader 
            className="cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => setExpandedCard(expandedCard === edu.id ? null : edu.id)}
          >
            <CardTitle className="text-base flex items-center justify-between">
              <span>{edu.degree || 'New Degree'} {edu.field && `in ${edu.field}`}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  removeEducation(edu.id);
                }}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          
          {expandedCard === edu.id && (
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor={`institution-${edu.id}`}>Institution *</Label>
                  <Input
                    id={`institution-${edu.id}`}
                    placeholder="University of Example"
                    value={edu.institution}
                    onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor={`degree-${edu.id}`}>Degree *</Label>
                  <Input
                    id={`degree-${edu.id}`}
                    placeholder="Bachelor of Science"
                    value={edu.degree}
                    onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor={`field-${edu.id}`}>Field of Study *</Label>
                  <Input
                    id={`field-${edu.id}`}
                    placeholder="Computer Science"
                    value={edu.field}
                    onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor={`location-${edu.id}`}>Location</Label>
                  <Input
                    id={`location-${edu.id}`}
                    placeholder="City, State"
                    value={edu.location}
                    onChange={(e) => updateEducation(edu.id, 'location', e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor={`graduationDate-${edu.id}`}>Graduation Date *</Label>
                  <Input
                    id={`graduationDate-${edu.id}`}
                    type="month"
                    value={edu.graduationDate}
                    onChange={(e) => updateEducation(edu.id, 'graduationDate', e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor={`gpa-${edu.id}`}>GPA (Optional)</Label>
                  <Input
                    id={`gpa-${edu.id}`}
                    placeholder="3.8"
                    value={edu.gpa}
                    onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                    className="mt-1"
                  />
                  <p className="text-xs text-gray-500 mt-1">Only include if 3.5 or higher</p>
                </div>
              </div>
            </CardContent>
          )}
        </Card>
      ))}

      {education.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <GraduationCap className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>No education added yet.</p>
          <p className="text-sm">Click "Add Education" to get started.</p>
        </div>
      )}
    </div>
  );
};

export default EducationForm;
