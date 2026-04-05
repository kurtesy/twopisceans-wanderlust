import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import NotFound from "./NotFound";
import { Calendar, Clock, Badge } from "lucide-react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BlogDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return <NotFound />;
    }

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Navbar />
            <main className="flex-grow pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <Breadcrumb className="mb-8">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/">Home</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/blog">Blog</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>{post.title}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="max-w-4xl mx-auto">
                        <div className="mb-8">
                            <img 
                                src={post.image} 
                                alt={post.title} 
                                className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-xl"
                            />
                        </div>

                        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                            <span className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                {post.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                {post.readTime}
                            </span>
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                                {post.category}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                            {post.title}
                        </h1>

                        {post.content ? (
                            <div className="prose prose-lg max-w-none dark:prose-invert">
                                <p className="text-xl text-muted-foreground leading-relaxed mb-12 italic border-l-4 border-primary pl-6">
                                    {post.content.introduction}
                                </p>

                                <div className="space-y-12">
                                    {post.content.sections.map((section, index) => (
                                        <div key={index} className="space-y-4">
                                            <h2 className="text-3xl font-bold text-foreground">
                                                {section.title}
                                            </h2>
                                            <p className="text-lg text-muted-foreground leading-relaxed">
                                                {section.content}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-16 p-8 bg-secondary/30 rounded-2xl">
                                    <p className="text-xl text-foreground font-medium text-center italic">
                                        {post.content.conclusion}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="py-20 text-center bg-secondary/20 rounded-2xl">
                                <p className="text-xl text-muted-foreground">
                                    Content for this post is coming soon! Check back later.
                                </p>
                                <Link to="/blog">
                                    <button className="mt-6 text-primary hover:underline font-medium">
                                        Back to Blog
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default BlogDetail;
