import React from 'react';
import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useContactForm } from './useContactForm';
import { Input } from '@/components/ui/Input';

export default function ContactForm() {
  const { formData, isSubmitting, handleSubmit, handleChange } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <Input
        label="Subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        required
      />
      
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={cn(
            "w-full px-4 py-3 rounded-lg",
            "bg-black/40 border border-white/10",
            "focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50",
            "placeholder-gray-400 text-white",
            "transition-all duration-200"
          )}
          placeholder="Your message..."
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "w-full bg-gradient-to-r from-purple-600 to-blue-600",
          "text-white py-3 px-6 rounded-lg",
          "flex items-center justify-center gap-2",
          "hover:opacity-90 transition-opacity",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        )}
      >
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}