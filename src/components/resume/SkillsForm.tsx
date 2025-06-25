
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Plus, X, Code } from 'lucide-react';

interface SkillsFormProps {
  skills: string[];
  onUpdate: (skills: string[]) => void;
}

const SkillsForm = ({ skills, onUpdate }: SkillsFormProps) => {
  const [newSkill, setNewSkill] = useState('');

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      onUpdate([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    onUpdate(skills.filter(skill => skill !== skillToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill();
    }
  };

  const suggestedSkills = [
    'JavaScript', 'Python', 'React', 'Node.js', 'TypeScript', 'HTML/CSS',
    'SQL', 'Git', 'AWS', 'Docker', 'Project Management', 'Communication',
    'Leadership', 'Problem Solving', 'Team Collaboration', 'Data Analysis'
  ];

  const availableSuggestions = suggestedSkills.filter(skill => !skills.includes(skill));

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
        <Code className="h-5 w-5" />
        Skills
      </h3>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="newSkill">Add Skills</Label>
          <div className="flex gap-2 mt-1">
            <Input
              id="newSkill"
              placeholder="Enter a skill (e.g., JavaScript, Project Management)"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button 
              onClick={addSkill}
              disabled={!newSkill.trim()}
              size="sm"
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {skills.length > 0 && (
          <div>
            <Label className="text-sm font-medium">Your Skills</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                  {skill}
                  <button
                    onClick={() => removeSkill(skill)}
                    className="ml-1 hover:bg-gray-300 rounded-full p-0.5"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>
        )}

        {availableSuggestions.length > 0 && (
          <div>
            <Label className="text-sm font-medium">Suggested Skills</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {availableSuggestions.slice(0, 12).map((skill) => (
                <Badge 
                  key={skill} 
                  variant="outline" 
                  className="cursor-pointer hover:bg-blue-50 hover:border-blue-300"
                  onClick={() => onUpdate([...skills, skill])}
                >
                  {skill}
                  <Plus className="h-3 w-3 ml-1" />
                </Badge>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-1">Click to add suggested skills</p>
          </div>
        )}

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">💡 ATS Tips for Skills</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Include keywords from the job description</li>
            <li>• Mix technical and soft skills</li>
            <li>• Use industry-standard terms</li>
            <li>• Keep it relevant to your target role</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsForm;
