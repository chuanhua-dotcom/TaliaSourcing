import { useParams, Link } from "react-router-dom";
import { articles } from "@/data/articles";
import { ArrowLeft } from "lucide-react";

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h1 className="text-2xl font-bold text-primary mb-4">Article Not Found</h1>
        <Link to="/insights" className="text-accent font-bold hover:underline">
          Back to Insights
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Header */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              {article.title}
            </h1>
            <Link 
              to="/insights" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Insights
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div 
            className="prose prose-slate lg:prose-xl max-w-none text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="text-xl font-bold text-primary mb-6">Ready to source smarter?</h3>
            <p className="text-muted-foreground mb-8">
              If you're looking for a reliable partner on the ground in China to help you navigate these complexities, we're here to help.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-accent text-primary font-bold px-8 py-4 rounded-xl hover:bg-accent/90 transition-colors"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
