import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

export function Insights() {
  // Show only the first 3 articles on the home/landing section
  const featuredArticles = articles.slice(0, 3);

  return (
    <section id="insights" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Sourcing Insights</h2>
            <div className="w-20 h-1.5 bg-accent rounded-full mb-6" />
            <p className="text-lg text-muted-foreground">
              Expert advice and guides to help you navigate the complexities of importing from China.
            </p>
          </div>
          <Link to="/insights" className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors group">
            View All Articles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((post) => (
            <Link key={post.id} to={`/insights/${post.id}`}>
              <Card className="h-full overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold text-primary leading-tight group-hover:text-accent transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
