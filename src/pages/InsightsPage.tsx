import { Insights } from "@/components/Insights";
import { articles } from "@/data/articles";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function InsightsPage() {
  return (
    <div className="pt-16">
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sourcing Insights & Guides</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed with the latest trends, tips, and best practices for sourcing from China.
          </p>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((post) => (
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
      </div>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-12 shadow-sm border border-border">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-6">Stay Connected</h2>
              <p className="text-muted-foreground mb-8">
                Want to receive the latest sourcing tips and market updates? Send us an email to join our mailing list.
              </p>
              <div className="flex flex-col items-center gap-4">
                <a 
                  href="mailto:chuanhua453@gmail.com" 
                  className="text-2xl font-extrabold text-accent hover:text-primary transition-colors"
                >
                  chuanhua453@gmail.com
                </a>
                <p className="text-sm text-muted-foreground">
                  Click the email above to reach out directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
