import React from 'react';

// FIX: Added explicit types for props to resolve TypeScript errors.
const BlogPostCard = ({ title, category, author, imgSrc }: { title: string, category: string, author: string, imgSrc: string }) => (
    <div className="group reveal">
        <div className="overflow-hidden rounded-2xl mb-6 shadow-md">
            <img src={imgSrc} alt={title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"/>
        </div>
        <p className="text-sm text-gray-500 mb-2">{category} / {author}</p>
        <h3 className="text-xl font-bold text-brand-text group-hover:text-brand-orange transition-colors duration-200">
            <a href="#">{title}</a>
        </h3>
    </div>
);


const Blog: React.FC = () => {
    const posts = [
        { title: "Building a Brand That from Market Leaders", category: "Business Solution", author: "invena", imgSrc: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2787&auto=format&fit=crop" },
        { title: "Transforming Your Best Of Approach to Business", category: "Business Solution", author: "invena", imgSrc: "https://images.unsplash.com/photo-1556156158-750395714abc?q=80&w=2787&auto=format&fit=crop" },
        { title: "The quick settle tips of the new", category: "Business Solution", author: "invena", imgSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c710?q=80&w=2940&auto=format=fit&crop" },
    ];
    return (
        <section className="py-20 sm:py-28 bg-brand-gray">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="reveal">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Blog & News</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-text mt-4 mb-16">Recent blog post</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-10 text-left">
                    {posts.map(post => <BlogPostCard key={post.title} {...post}/>)}
                </div>
            </div>
        </section>
    );
};

export default Blog;