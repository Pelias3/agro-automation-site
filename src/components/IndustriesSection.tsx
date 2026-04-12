import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Wheat, Beef, Warehouse, Factory, Building2, Tractor, Truck, TrendingUp } from "lucide-react";

const IndustriesSection = () => {
  const { t } = useTranslation();

  // Массив теперь внутри, чтобы использовать t() для названий
  const industries = [
    { name: t("ind_crop"), icon: Wheat },
    { name: t("ind_livestock"), icon: Beef },
    { name: t("ind_greenhouse"), icon: Warehouse },
    { name: t("ind_grain"), icon: Factory },
    { name: t("ind_holding"), icon: Building2 },
    { name: t("ind_farming"), icon: Tractor },
    { name: t("ind_logistics"), icon: Truck },
    { name: t("ind_trading"), icon: TrendingUp }
  ];

  return (
    <section className="py-24 md:py-32 gradient-dark-bg relative overflow-hidden">
      {/* Ambient green glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, hsl(142 55% 45% / 0.06) 0%, transparent 70%)' }} />

      <div className="container-narrow relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("ind_title")}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                className="py-5 px-4 text-center text-muted-foreground hover:text-primary transition-colors duration-300 rounded-lg hover:bg-primary/5 flex flex-col items-center gap-3 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Icon className="w-6 h-6 text-primary/50 group-hover:text-primary transition-colors duration-300" />
                <span className="text-sm md:text-base">{industry.name}</span>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          className="mt-16 text-lg text-muted-foreground text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t("ind_footer")}
        </motion.p>
      </div>
    </section>
  );
};

export default IndustriesSection;