import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AgentCard from "./AgentCard";
import cardPlant from "@/assets/card-plant-monitoring.jpg";
import cardYield from "@/assets/card-yield-analytics.jpg";
import cardIrrigation from "@/assets/card-irrigation.jpg";
import cardLivestock from "@/assets/card-livestock.jpg";
import cardAssistant from "@/assets/card-ai-assistant.jpg";

const AgentsSection = () => {
  const { t } = useTranslation();

  // Массив теперь внутри, чтобы иметь доступ к t()
  const agents = [
    {
      title: t("agent_plant_title"),
      description: t("agent_plant_desc"),
      image: cardPlant
    },
    {
      title: t("agent_yield_title"),
      description: t("agent_yield_desc"),
      image: cardYield
    },
    {
      title: t("agent_irrigation_title"),
      description: t("agent_irrigation_desc"),
      image: cardIrrigation
    },
    {
      title: t("agent_livestock_title"),
      description: t("agent_livestock_desc"),
      image: cardLivestock
    },
    {
      title: t("agent_assistant_title"),
      description: t("agent_assistant_desc"),
      image: cardAssistant
    }
  ];

  return (
    <section className="py-24 md:py-32 gradient-dark-bg overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-16">
        <motion.h2
          className="text-3xl md:text-5xl font-semibold mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("agents_section_title")}
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t("agents_section_subtitle")}
        </motion.p>
      </div>

      <div className="w-full px-4 md:px-10"> 
        <div 
          className="flex overflow-x-auto md:overflow-x-visible pb-12 gap-5 scrollbar-hide snap-x snap-mandatory md:flex-row md:justify-center md:flex-wrap lg:flex-nowrap"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {agents.map((agent, index) => (
            <div 
              key={index} 
              className="min-w-[85%] sm:min-w-[45%] md:min-w-[300px] lg:min-w-[0] lg:flex-1 snap-center"
            >
              <AgentCard 
                title={agent.title} 
                description={agent.description} 
                index={index} 
                image={agent.image} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;