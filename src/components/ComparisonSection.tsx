import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { useTranslation } from "react-i18next";

const ComparisonSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-32 gradient-dark-bg relative overflow-hidden">
      {/* Green ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, hsl(142 55% 45% / 0.08) 0%, transparent 70%)' }} />

      <div className="container-narrow text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            {t('comp_title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-16">
            {t('comp_subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Типовые сервисы */}
          <div className="p-8 rounded-xl bg-secondary/30 subtle-border text-left">
            <div className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">
              {t('comp_generic_title')}
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <X className="w-4 h-4 text-destructive/70 mt-1 flex-shrink-0" />
                {t('comp_generic_item1')}
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <X className="w-4 h-4 text-destructive/70 mt-1 flex-shrink-0" />
                {t('comp_generic_item2')}
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <X className="w-4 h-4 text-destructive/70 mt-1 flex-shrink-0" />
                {t('comp_generic_item3')}
              </li>
            </ul>
          </div>

          {/* Наши решения */}
          <div className="p-8 rounded-xl gradient-card border border-primary/30 text-left green-glow-soft">
            <div className="text-sm text-primary mb-4 uppercase tracking-wider font-medium">
              {t('comp_custom_title')}
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-foreground">
                <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                {t('comp_custom_item1')}
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                {t('comp_custom_item2')}
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                {t('comp_custom_item3')}
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;