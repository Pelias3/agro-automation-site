import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer className="bg-background border-t border-white/5 py-12">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              © 2026 Agro automotion. {t('footer_rights')}
            </span>
          </div>
          
          <div className="flex gap-6">
            <Link 
              to={`/${i18n.language}/privacy`} 
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {t('footer_privacy')}
            </Link>
            <Link 
              to={`/${i18n.language}/personal-data`} 
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {t('footer_data')}
            </Link>
          </div>
          
          <div className="text-xs text-muted-foreground">
            Telegram: <a href="https://t.me/baranovgregory" className="hover:text-primary">@baranovgregory</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;