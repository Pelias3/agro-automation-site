import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Leaf } from "lucide-react";

const ContactSection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    industry: "",
    contact: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("company", formData.company);
      data.append("industry", formData.industry);
      data.append("contact", formData.contact);
      data.append("message", formData.message);

      const response = await fetch("/send.php", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        toast({
          title: t("contact_toast_success_title"),
          description: t("contact_toast_success_desc"),
        });
        setFormData({ name: "", company: "", industry: "", contact: "", message: "" });
      } else {
        throw new Error("Server error");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: t("contact_toast_error_title"),
        description: t("contact_toast_error_desc"),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 md:py-32 light-section bg-warm-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full opacity-40" style={{ background: 'radial-gradient(circle, hsl(142 55% 45% / 0.1) 0%, transparent 70%)' }} />

      <div className="container-narrow max-w-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-graphite text-balance">
            {t("contact_title")}
          </h2>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Input 
            name="name" 
            placeholder={t("contact_placeholder_name")} 
            value={formData.name} 
            onChange={handleChange} 
            required
            className="bg-white border-graphite/10 text-graphite placeholder:text-graphite/40 focus:border-primary focus:ring-primary/20" 
          />
          <Input 
            name="company" 
            placeholder={t("contact_placeholder_company")} 
            value={formData.company} 
            onChange={handleChange} 
            required
            className="bg-white border-graphite/10 text-graphite placeholder:text-graphite/40 focus:border-primary focus:ring-primary/20" 
          />
          <Input 
            name="industry" 
            placeholder={t("contact_placeholder_industry")} 
            value={formData.industry} 
            onChange={handleChange} 
            required
            className="bg-white border-graphite/10 text-graphite placeholder:text-graphite/40 focus:border-primary focus:ring-primary/20" 
          />
          <Input 
            name="contact" 
            placeholder={t("contact_placeholder_info")} 
            value={formData.contact} 
            onChange={handleChange} 
            required
            className="bg-white border-graphite/10 text-graphite placeholder:text-graphite/40 focus:border-primary focus:ring-primary/20" 
          />
          <Textarea 
            name="message" 
            placeholder={t("contact_placeholder_message")} 
            value={formData.message} 
            onChange={handleChange} 
            rows={4}
            className="bg-white border-graphite/10 text-graphite placeholder:text-graphite/40 focus:border-primary focus:ring-primary/20 resize-none" 
          />

          <Button type="submit" disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base font-medium transition-all duration-300 green-glow-soft">
            <Leaf className="w-4 h-4 mr-1" />
            {isSubmitting ? t("contact_btn_submitting") : t("contact_btn_submit")}
          </Button>

          <p className="text-center text-sm text-graphite/50">
            {t("contact_footer_note")}
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;