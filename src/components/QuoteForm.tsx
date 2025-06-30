
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useSubmitQuote } from '@/hooks/useSubmitQuote';

const QuoteForm = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project_type: '',
    budget: '',
    message: ''
  });

  const { mutate: submitQuote, isPending } = useSubmitQuote();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.project_type) {
      return;
    }
    
    submitQuote(formData, {
      onSuccess: () => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          project_type: '',
          budget: '',
          message: ''
        });
        setOpen(false);
      }
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
          Get Free Quote
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">Get Your Free Quote</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-sm font-medium text-gray-700">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="mt-1"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="project_type" className="text-sm font-medium text-gray-700">Project Type *</Label>
            <Select onValueChange={(value) => handleInputChange('project_type', value)} required>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="office">Office Fit-out</SelectItem>
                <SelectItem value="retail">Retail Interior</SelectItem>
                <SelectItem value="hospitality">Hospitality Design</SelectItem>
                <SelectItem value="healthcare">Healthcare Facilities</SelectItem>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="budget" className="text-sm font-medium text-gray-700">Budget Range</Label>
            <Select onValueChange={(value) => handleInputChange('budget', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-100k">Under AED 100K</SelectItem>
                <SelectItem value="100k-250k">AED 100K - 250K</SelectItem>
                <SelectItem value="250k-500k">AED 250K - 500K</SelectItem>
                <SelectItem value="500k-1m">AED 500K - 1M</SelectItem>
                <SelectItem value="over-1m">Over AED 1M</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="message" className="text-sm font-medium text-gray-700">Project Details</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className="mt-1"
              rows={3}
              placeholder="Tell us about your project requirements..."
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={isPending}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-all duration-300"
          >
            {isPending ? 'Submitting...' : 'Submit Quote Request'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteForm;
