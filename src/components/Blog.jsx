

  

const Blog = () => {

    const posts = [
        {
          id: 1,
          title: 'A clone of a learning platform',
          href: '#',
          description:
            'Explore is a well-organized tool that helps you get the most out of LeetCode by providing structure to guide your progress towards the next step in your programming career.',
          date: 'Feb 17, 2023',
          datetime: '2020-03-16',
          category: { title: 'LeetCode', href: 'https://fergusonleetcode-clone.netlify.app/' },
          author: {
            name: 'Ferguson Tetteh',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
              'https://support.leetcode.com/hc/article_attachments/4409909829907/mceclip1.png',
          },
        },
        // More posts...
      ]

    return (  
        <>
        <div className="bg-white py-20 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="blog">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-60 w-96 rounded bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
        </>
    );
}
 
export default Blog;