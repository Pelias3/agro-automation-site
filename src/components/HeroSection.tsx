import { useTranslation } from 'react-i18next';
import '../i18n';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Leaf, Globe } from "lucide-react";
import heroImage from "@/assets/hero-agro.jpg";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom"; 

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { lng } = useParams(); // Текущий язык из URL

  const toggleLanguage = (newLng: string) => {
    if (newLng === lng) return;
    
    // Заменяем сегмент языка в текущем пути (напр. /ru/blog -> /en/blog)
    const segments = pathname.split('/');
    segments[1] = newLng;
    const newPath = segments.join('/');
    
    i18n.changeLanguage(newLng);
    navigate(newPath);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* --- НАВИГАЦИЯ --- */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12">
        <Link to={`/${i18n.language}/`} className="flex items-center gap-2 group">
          <Leaf className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform" />
          <span className="text-xl font-bold tracking-tighter text-white">Agro Automotion</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link 
            to={`/${i18n.language}/blog`} 
            className="text-sm font-medium text-white/70 hover:text-primary transition-colors"
          >
            {t('blog_link')}
          </Link>
          
          <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            <Globe className="w-3.5 h-3.5 text-white/40" />
            <button 
              onClick={() => toggleLanguage('ru')}
              className={`text-[11px] font-bold transition-colors ${i18n.language === 'ru' ? 'text-primary' : 'text-white/40 hover:text-white'}`}
            >
              RU
            </button>
            <span className="text-white/20 text-[11px]">|</span>
            <button 
              onClick={() => toggleLanguage('en')}
              className={`text-[11px] font-bold transition-colors ${i18n.language === 'en' ? 'text-primary' : 'text-white/40 hover:text-white'}`}
            >
              EN
            </button>
          </div>
        </div>
      </nav>

      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt={t('hero_bg_alt')} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/50 to-background/95" />
      </div>

      <div className="relative z-10 container-narrow text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <motion.div className="mb-6 flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
            <Leaf className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">{t('hero_badge')}</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6 text-balance">
            {t('hero_title')}
            <br />
            <span className="text-primary">{t('hero_subtitle')}</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t('hero_description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="group relative px-8 py-6 text-base bg-primary text-primary-foreground hover:bg-primary/90 green-glow-soft"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Leaf className="w-4 h-4 mr-1" />
            <span className="relative z-10">{t('hero_cta')}</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;