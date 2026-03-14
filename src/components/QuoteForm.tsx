
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
    message: '',
  });

  const { mutate: submitQuote, isPending } = useSubmitQuote();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.project_type) return;
    submitQuote(formData, {
      onSuccess: () => {
        setFormData({ name: '', email: '', phone: '', project_type: '', budget: '', message: '' });
        setOpen(false);
      },
    });
  };

  const handleInputChange = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const fields = [
    { id: 'name', label: 'Full Name', type: 'text', required: true, half: true },
    { id: 'email', label: 'Email Address', type: 'email', required: true, half: true },
    { id: 'phone', label: 'Phone Number', type: 'tel', required: false, half: false },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {variant === 'light' ? (
          <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-sm font-bold rounded-xl transition-all duration-300 shadow-lg">
            Schedule a Free Consultation
          </Button>
        ) : (
          <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 text-sm font-semibold rounded-xl shadow-red-soft hover:shadow-red-glow transition-all duration-300">
            Get Free Quote
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg border-0 shadow-2xl">
        {/* Red accent top bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-red-gradient rounded-t-lg" />

        <DialogHeader className="pt-2">
          <DialogTitle className="text-2xl font-black text-gray-900 heading-tight">
            Request a Free Quote
          </DialogTitle>
          <p className="text-sm text-gray-400 mt-1">
            Fill in your details and our team will get back to you within 24 hours.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-2 gap-4">
            {fields.filter(f => f.half).map((f) => (
              <div key={f.id}>
                <Label htmlFor={f.id} className="label-text text-gray-400 block mb-1.5">
                  {f.label} {f.required && <span className="text-red-500">*</span>}
                </Label>
                <Input
                  id={f.id}
                  type={f.type}
                  value={formData[f.id as keyof typeof formData]}
                  onChange={(e) => handleInputChange(f.id, e.target.value)}
                  required={f.required}
                  className="border-gray-200 focus:border-red-500 focus:ring-red-500/20 rounded-xl"
                />
              </div>
            ))}
          </div>

          <div>
            <Label htmlFor="phone" className="label-text text-gray-400 block mb-1.5">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="border-gray-200 focus:border-red-500 focus:ring-red-500/20 rounded-xl"
            />
          </div>

          <div>
            <Label className="label-text text-gray-400 block mb-1.5">
              Service Required <span className="text-red-500">*</span>
            </Label>
            <Select onValueChange={(v) => handleInputChange('project_type', v)} required>
              <SelectTrigger className="border-gray-200 rounded-xl focus:border-red-500">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="painting">Painting Works</SelectItem>
                <SelectItem value="cleaning">Cleaning Services</SelectItem>
                <SelectItem value="tiles">Tile Fixing Works</SelectItem>
                <SelectItem value="waterproofing">Water Proofing</SelectItem>
                <SelectItem value="plumbing">Plumbing & Electrical</SelectItem>
                <SelectItem value="carpentry">Carpentry Works</SelectItem>
                <SelectItem value="gypsum">Gypsum & Ceiling Work</SelectItem>
                <SelectItem value="multiple">Multiple Services</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="label-text text-gray-400 block mb-1.5">Budget Range</Label>
            <Select onValueChange={(v) => handleInputChange('budget', v)}>
              <SelectTrigger className="border-gray-200 rounded-xl focus:border-red-500">
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-10k">Under AED 10,000</SelectItem>
                <SelectItem value="10k-50k">AED 10,000 – 50,000</SelectItem>
                <SelectItem value="50k-100k">AED 50,000 – 100,000</SelectItem>
                <SelectItem value="100k-250k">AED 100,000 – 250,000</SelectItem>
                <SelectItem value="over-250k">Over AED 250,000</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message" className="label-text text-gray-400 block mb-1.5">Project Details</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className="border-gray-200 focus:border-red-500 focus:ring-red-500/20 rounded-xl resize-none"
              rows={3}
              placeholder="Describe your project — location, scope, timeline, and any specific requirements..."
            />
          </div>

          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-6 rounded-xl text-sm font-bold shadow-red-soft hover:shadow-red-glow transition-all duration-300"
          >
            {isPending ? 'Submitting...' : 'Submit Quote Request'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteForm;
