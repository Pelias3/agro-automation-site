import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { fullPrivacyPolicy } from "@/lib/privacy-data";
import { EnglishGDPR } from "@/lib/EnglishGDPR"; // Импортируем твой новый компонент

const Privacy = () => {
  const { t, i18n } = useTranslation();
  
  // Определяем текущий язык
  const currentLang = i18n.language === 'en' ? 'en' : 'ru';
  const content = fullPrivacyPolicy[currentLang];

  return (
    <main className="min-h-screen gradient-dark-bg text-muted-foreground pb-20">
      <div className="container-narrow py-24">
        {/* Кнопка "Назад" общая для обоих языков */}
        <Link to="/" className="text-primary hover:text-primary/80 transition-colors text-sm mb-8 inline-block">
          {t('privacy_back_home', '← На главную')}
        </Link>

        {currentLang === 'en' ? (
          /* АНГЛИЙСКАЯ ВЕРСИЯ: Рендерим новый компонент целиком */
          <EnglishGDPR />
        ) : (
          /* РУССКАЯ ВЕРСИЯ: Оставляем твою структуру с циклами */
          <>
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
                    <ul className="grid gap-3 mt-4">
                      {section.items.map((item, iIdx) => (
                        <li key={iIdx} className="text-sm md:text-base bg-white/5 p-3 rounded-sm border border-white/5">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Футер с контактами для RU версии */}
            <div className="mt-16 p-6 rounded-lg bg-primary/5 border border-primary/10">
              <p className="text-sm">
                {t('privacy_footer_contact')}{" "}
                <a href="mailto:Bar-anov-Gr@yandex.ru" className="text-primary underline">
                  Bar-anov-Gr@yandex.ru
                </a>
              </p>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Privacy;