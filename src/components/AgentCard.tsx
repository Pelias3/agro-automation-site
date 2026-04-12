import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface AgentCardProps {
  title: string;
  description: string;
  index: number;
  image: string;
}

const AgentCard = ({ title, description, index, image }: AgentCardProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="flex-shrink-0 w-80 rounded-xl gradient-card subtle-border overflow-hidden group"
      initial={{ opacity: 0, y: 30, rotate: -1 }}
      whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? 1 : -1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -5, rotate: 0, transition: { duration: 0.2 } }}
    >
      <div className="h-44 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="green-pulse-dot" />
          <h3 className="text-lg font-medium text-foreground">{title}</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
        <p className="text-xs text-primary font-medium">
          {t('agent_card_footer')}
        </p>
      </div>
    </motion.div>
  );
};

export default AgentCard;