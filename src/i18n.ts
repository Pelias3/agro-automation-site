import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    supportedLngs: ['ru', 'en'],
    detection: {
      order: ['path', 'cookie', 'localStorage'],
      lookupFromPathIndex: 0,
      checkWhitelist: true
    },
    resources: {
      ru: {
        translation: {
          // Hero & Nav
          "blog_link": "Блог",
          "hero_badge": "Технологии для агробизнеса",
          "hero_title": "ИИ и автоматизация",
          "hero_subtitle": "для агробизнеса",
          "hero_description": "Разрабатываем кастомных ИИ-агентов и системы автоматизации для аграрных компаний.",
          "hero_cta": "Запросить пилотный проект",
          "hero_bg_alt": "Пшеничное поле",
          
          // Agents Section
          "agents_section_title": "Применение ИИ в агробизнесе",
          "agents_section_subtitle": "Конкретные решения для повышения эффективности вашего хозяйства",
          "agent_plant_title": "Мониторинг растений",
          "agent_plant_desc": "Анализ фотографий растений, автоматическое выявление заболеваний и дефицита питательных веществ.",
          "agent_yield_title": "AI-аналитика урожайности",
          "agent_yield_desc": "Объединение данных о погоде, почве и спутниках для прогнозирования урожайности.",
          "agent_irrigation_title": "Автоматизация полива",
          "agent_irrigation_desc": "Автоматическое управление поливом на основе датчиков влажности и погодных данных.",
          "agent_livestock_title": "Мониторинг животных",
          "agent_livestock_desc": "Отслеживание состояния и активности животных, оптимизация кормления и управление стадом.",
          "agent_assistant_title": "AI-ассистент агронома",
          "agent_assistant_desc": "Ответы на вопросы, анализ данных хозяйства и рекомендации по уходу за культурами.",
          "agent_card_footer": "Настроено под ваше хозяйство",
          
          //Comparison
          "comp_title": "Не коробочное решение",
          "comp_subtitle": "Кастомные AI-системы под специфику вашего бизнеса",
          "comp_generic_title": "Типовые сервисы",
          "comp_generic_item1": "Универсальные шаблоны без учёта специфики",
          "comp_generic_item2": "Требуют ручной адаптации и настройки",
          "comp_generic_item3": "Не работают с внутренними данными",
          "comp_custom_title": "Наши ИИ-решения",
          "comp_custom_item1": "Адаптируются под ваши данные и регламенты",
          "comp_custom_item2": "Интегрируются с датчиками, системами и процессами",
          "comp_custom_item3": "Принимают решения и выполняют действия",
          //Contacts
            "contact_title": "Обсудим, какие задачи можно автоматизировать в вашем хозяйстве",
            "contact_placeholder_name": "Имя",
            "contact_placeholder_company": "Компания / Хозяйство",
            "contact_placeholder_industry": "Направление (растениеводство, животноводство и т.д.)",
            "contact_placeholder_info": "Email или Telegram",
            "contact_placeholder_message": "Какие задачи хотите автоматизировать? (опционально)",
            "contact_btn_submit": "Запросить пилотный проект",
            "contact_btn_submitting": "Отправка...",
            "contact_footer_note": "Без спама. Без навязчивых продаж. Мы ответим лично.",
            "contact_toast_success_title": "Заявка отправлена",
            "contact_toast_success_desc": "Мы свяжемся с вами в ближайшее время через Telegram или Email.",
            "contact_toast_error_title": "Ошибка отправки",
            "contact_toast_error_desc": "Не удалось отправить заявку. Пожалуйста, попробуйте позже.",

            //Ind
            "ind_title": "Для любого направления в агробизнесе",
            "ind_crop": "Растениеводство",
            "ind_livestock": "Животноводство",
            "ind_greenhouse": "Тепличные хозяйства",
            "ind_grain": "Зернопереработка",
            "ind_holding": "Агрохолдинги",
            "ind_farming": "Фермерские хозяйства",
            "ind_logistics": "Агрологистика",
            "ind_trading": "Агротрейдинг",
            "ind_footer": "Если в вашем хозяйстве есть процессы — ИИ-агент может взять часть на себя.",

            //Stats
            "stats_title": "Что это даёт на практике",
            "stat_routine": "Сокращение рутины сотрудников на 30–50%",
            "stat_instant": "Мгновенная работа с запросами 24/7",
            "stat_analytics": "Автоматизация аналитики, на которую раньше уходили часы",
            "stat_loss": "Снижение потерь урожая за счёт ранней диагностики",
            "stat_optimization": "Оптимизация расхода воды и удобрений",
            "stats_footer": "Результаты измерены в ходе пилотных внедрений в аграрных компаниях и фермерских хозяйствах.",

            //Timeline
            "timeline_title": "Как проходит работа",
            "step1_title": "Анализируем процессы",
            "step1_desc": "Изучаем рабочие процессы вашего хозяйства или компании, находим узкие места.",
            "step2_title": "Определяем точки роста",
            "step2_desc": "Выявляем, где ИИ и автоматизация дадут максимальный эффект — от аналитики до управления ресурсами.",
            "step3_title": "Разрабатываем пилотный инструмент",
            "step3_desc": "Создаём AI-решение под ваши конкретные задачи: мониторинг, аналитика, автоматизация процессов.",
            "step4_title": "Показываем результат",
            "step4_desc": "7-дневный пилот с чёткими KPI и отчётностью. Вы видите эффект до масштабирования.",
            "step5_title": "Масштабируем",
            "step5_desc": "Расширяем решение на новые процессы, добавляем агентов и интеграции.",

          // Footer
          "footer_rights": "Все права защищены.",
          "footer_privacy": "Политика конфиденциальности",
          "footer_data": "Пользовательское соглашение ",

          //Privacy
    
            "privacy_back_home": "← На главную",
            "privacy_footer_contact": "Адрес для связи с оператором по вопросам данных:"
                    }
      },
      en: {
        translation: {
          // Hero & Nav
          "blog_link": "Blog",
          "hero_badge": "AgTech Technologies",
          "hero_title": "AI and Automation",
          "hero_subtitle": "for Agribusiness",
          "hero_description": "We develop custom AI agents and automation systems for agricultural enterprises.",
          "hero_cta": "Request a pilot project",
          "hero_bg_alt": "Wheat field",
          
          // Agents Section
          "agents_section_title": "AI in Agribusiness",
          "agents_section_subtitle": "Specific solutions to increase your farm's efficiency",
          "agent_plant_title": "Plant Monitoring",
          "agent_plant_desc": "Analysis of plant photos, automatic detection of diseases and nutrient deficiencies.",
          "agent_yield_title": "AI Yield Analytics",
          "agent_yield_desc": "Combining weather, soil, and satellite data to forecast crop yields accurately.",
          "agent_irrigation_title": "Irrigation Automation",
          "agent_irrigation_desc": "Automatic irrigation management based on soil moisture sensors and weather data.",
          "agent_livestock_title": "Livestock Monitoring",
          "agent_livestock_desc": "Tracking animal health and activity, optimizing feeding and herd management.",
          "agent_assistant_title": "AI Agronomist Assistant",
          "agent_assistant_desc": "Answers to questions, farm data analysis, and crop care recommendations.",
          "agent_card_footer": "Customized for your farm",
          
            //Comparison
          "comp_title": "Not an Out-of-the-Box Solution",
          "comp_subtitle": "Custom AI systems tailored to your business specifics",
          "comp_generic_title": "Standard Services",
          "comp_generic_item1": "Universal templates ignoring specific needs",
          "comp_generic_item2": "Require manual adaptation and configuration",
          "comp_generic_item3": "Don't work with internal private data",
          "comp_custom_title": "Our AI Solutions",
          "comp_custom_item1": "Adapt to your data and business regulations",
          "comp_custom_item2": "Integrate with sensors, systems, and processes",
          "comp_custom_item3": "Make decisions and execute specific actions",

           //Contacts
            "contact_title": "Let's discuss which tasks can be automated on your farm",
            "contact_placeholder_name": "Name",
            "contact_placeholder_company": "Company / Farm",
            "contact_placeholder_industry": "Industry (crop production, livestock, etc.)",
            "contact_placeholder_info": "Email",
            "contact_placeholder_message": "What tasks do you want to automate? (optional)",
            "contact_btn_submit": "Request a pilot project",
            "contact_btn_submitting": "Sending...",
            "contact_footer_note": "No spam. No pushy sales. We will reply personally.",
            "contact_toast_success_title": "Request sent",
            "contact_toast_success_desc": "We will contact you shortly via Email.",
            "contact_toast_error_title": "Submission error",
            "contact_toast_error_desc": "Failed to send the request. Please try again later.",
            
            //ind
            "ind_title": "For every sector in agribusiness",
            "ind_crop": "Crop Farming",
            "ind_livestock": "Livestock",
            "ind_greenhouse": "Greenhouses",
            "ind_grain": "Grain Processing",
            "ind_holding": "Agro Holdings",
            "ind_farming": "Family Farms",
            "ind_logistics": "Agro Logistics",
            "ind_trading": "Agro Trading",
            "ind_footer": "If your farm has processes, an AI agent can take over the routine.",

            //Stats
            "stats_title": "Practical Benefits",
            "stat_routine": "30–50% reduction in routine tasks",
            "stat_instant": "Instant 24/7 request handling",
            "stat_analytics": "Automating analytics that previously took hours",
            "stat_loss": "Reducing crop losses through early diagnosis",
            "stat_optimization": "Optimization of water and fertilizer usage",
            "stats_footer": "Results measured during pilot implementations in agricultural companies and private farms.",

            //Timeline
            "timeline_title": "Workflow Process",
            "step1_title": "Process Analysis",
            "step1_desc": "We study your farm or company workflows to identify bottlenecks and inefficiencies.",
            "step2_title": "Identifying Growth Points",
            "step2_desc": "We determine where AI and automation will have the maximum impact — from analytics to resource management.",
            "step3_title": "Developing a Pilot Tool",
            "step3_desc": "We create a custom AI solution for your specific needs: monitoring, analytics, or process automation.",
            "step4_title": "Delivering Results",
            "step4_desc": "A 7-day pilot with clear KPIs and reporting. You see the impact before scaling up.",
            "step5_title": "Scaling",
            "step5_desc": "Expanding the solution to new processes, adding more agents and integrations.",

          // Footer
          "footer_rights": "All rights reserved.",
          "footer_privacy": "Privacy Policy",
          "footer_data": "Terms of Service",

          //Privacy
            "privacy_back_home": "← Back to Home",
            "privacy_footer_contact": "Contact address for data processing inquiries:"
                    }
      }
    },
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;