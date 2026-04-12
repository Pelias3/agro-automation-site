import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { TrendingUp, Clock, BarChart3, ShieldCheck, Droplets } from "lucide-react";

const StatsSection = () => {
  const { t } = useTranslation();

  const stats = [
    { text: t("stat_routine"), icon: TrendingUp },
    { text: t("stat_instant"), icon: Clock },
    { text: t("stat_analytics"), icon: BarChart3 },
    { text: t("stat_loss"), icon: ShieldCheck },
    { text: t("stat_optimization"), icon: Droplets }
  ];

  return (
    <section className="py-24 md:py-32 light-section bg-warm-white relative overflow-hidden">
      {/* Subtle green decorative accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30" style={{ background: 'radial-gradient(circle, hsl(142 55% 45% / 0.1) 0%, transparent 70%)' }} />

      <div className="container-narrow relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-16 text-graphite"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("stats_title")}
        </motion.h2>

        <div className="space-y-0">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="py-6 border-b border-graphite/10 first:border-t flex items-center gap-4 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-lg md:text-xl text-graphite/90 font-light">
                  {stat.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          className="mt-12 text-sm text-graphite/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {t("stats_footer")}
        </motion.p>
      </div>
    </section>
  );
};

export default StatsSection;