import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { fullTermsOfUse } from "@/lib/terms-data"; // или из того файла, куда сохранишь

const PersonalData = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language === 'en' ? 'en' : 'ru';
  const content = fullTermsOfUse[currentLang];

  return (
    <main className="min-h-screen gradient-dark-bg text-muted-foreground pb-20">
      <div className="container-narrow py-24">
        <Link to="/" className="text-primary hover:text-primary/80 transition-colors text-sm mb-8 inline-block">
          {t('privacy_back_home', '← На главную')}
        </Link>

        <h1 className="text-2xl md:text-4xl font-semibold mb-12 text-foreground leading-tight">
          {content.title}
        </h1>

        <div className="space-y-12">
          {content.sections.map((section, sIdx) => (
            <div key={sIdx} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-xl font-medium text-foreground mb-5 border-l-2 border-primary pl-4">
                {section.h}
              </h2>
              
              {section.p && section.p.map((paragraph, pIdx) => (
                <p key={pIdx} className="mb-4 text-sm md:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {section.items && (
                <ul className="list-disc pl-6 space-y-2">
                  {section.items.map((item, iIdx) => (
                    <li key={iIdx} className="text-sm md:text-base">{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PersonalData;