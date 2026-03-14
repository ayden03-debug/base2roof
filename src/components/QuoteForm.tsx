
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useSubmitQuote } from '@/hooks/useSubmitQuote';

interface QuoteFormProps {
  variant?: 'default' | 'light';
}

const QuoteForm = ({ variant = 'default' }: QuoteFormProps) => {
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
        {variant === 'light' ? (
          <Button className="bg-background text-foreground hover:bg-background/90 px-8 py-6 text-sm font-medium tracking-wide rounded-xl transition-all duration-500">
            Schedule a Consultation
          </Button>
        ) : (
          <Button className="bg-foreground text-background hover:bg-foreground/90 px-6 py-2.5 text-sm font-medium rounded-xl transition-all duration-300">
            Get Free Quote
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-light text-foreground text-architectural">Get Your Free Quote</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-xs font-medium text-muted-foreground tracking-wide uppercase">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                className="mt-1.5 border-border focus:border-foreground"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-xs font-medium text-muted-foreground tracking-wide uppercase">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="mt-1.5 border-border focus:border-foreground"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="phone" className="text-xs font-medium text-muted-foreground tracking-wide uppercase">Phone</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="mt-1.5 border-border focus:border-foreground"
            />
          </div>

          <div>
            <Label htmlFor="project_type" className="text-xs font-medium text-muted-foreground tracking-wide uppercase">Project Type *</Label>
            <Select onValueChange={(value) => handleInputChange('project_type', value)} required>
              <SelectTrigger className="mt-1.5 border-border">
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
            <Label htmlFor="budget" className="text-xs font-medium text-muted-foreground tracking-wide uppercase">Budget Range</Label>
            <Select onValueChange={(value) => handleInputChange('budget', value)}>
              <SelectTrigger className="mt-1.5 border-border">
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-100k">Under AED 100K</SelectItem>
                <SelectItem value="100k-250k">AED 100K – 250K</SelectItem>
                <SelectItem value="250k-500k">AED 250K – 500K</SelectItem>
                <SelectItem value="500k-1m">AED 500K – 1M</SelectItem>
                <SelectItem value="over-1m">Over AED 1M</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message" className="text-xs font-medium text-muted-foreground tracking-wide uppercase">Project Details</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className="mt-1.5 border-border focus:border-foreground"
              rows={3}
              placeholder="Tell us about your project requirements..."
            />
          </div>

          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-foreground text-background hover:bg-foreground/90 py-3 rounded-xl text-sm font-medium tracking-wide transition-all duration-300"
          >
            {isPending ? 'Submitting...' : 'Submit Quote Request'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteForm;
