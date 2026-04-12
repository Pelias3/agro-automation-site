import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background text-white">
      {/* Упрощенная навигация для блога */}
      <nav className="p-6 flex justify-between items-center container mx-auto">
        <Link to="/" className="flex items-center gap-2 group">
          <Leaf className="w-6 h-6 text-primary" />
          <span className="text-xl font-bold tracking-tighter">Agro automotion</span>
        </Link>
        <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          ← На главную
        </Link>
      </nav>

      <main className="container mx-auto pt-20 pb-20 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-12">Блог Agro automotion</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group">
              <span className="text-primary text-sm font-medium">8 апреля, 2026</span>
              <h2 className="text-2xl font-bold mt-2 mb-4 group-hover:text-primary transition-colors">
                Будущее ИИ в сельском хозяйстве
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Как автономные агенты меняют подход к мониторингу урожая и оптимизации ресурсов...
              </p>
              <button className="mt-6 text-sm font-bold border-b border-primary text-primary pb-1">
                Читать полностью
              </button>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;