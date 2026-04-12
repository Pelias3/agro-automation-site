import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const TimelineSection = () => {
  const { t } = useTranslation();

  const steps = [
    {
      number: "01",
      title: t("step1_title"),
      description: t("step1_desc")
    },
    {
      number: "02",
      title: t("step2_title"),
      description: t("step2_desc")
    },
    {
      number: "03",
      title: t("step3_title"),
      description: t("step3_desc")
    },
    {
      number: "04",
      title: t("step4_title"),
      description: t("step4_desc")
    },
    {
      number: "05",
      title: t("step5_title"),
      description: t("step5_desc")
    }
  ];

  return (
    <section className="py-24 md:py-32 light-section bg-warm-white">
      <div className="container-narrow">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-16 text-graphite"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("timeline_title")}
        </motion.h2>

        <div className="relative">
          {/* Green timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-primary/20" />
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative pl-12 md:pl-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute left-0 top-0 w-8 md:w-12 h-8 md:h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-xs md:text-sm font-semibold text-primary">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-medium text-graphite mb-2">
                  {step.title}
                </h3>
                <p className="text-graphite/60">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;