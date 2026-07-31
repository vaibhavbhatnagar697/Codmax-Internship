const blogContainer = document.getElementById("blogContainer");

async function fetchBlogs() {

    try {

        const response = await fetch(
            "http://localhost:3200/blogs"
        );

        const blogs = await response.json();

        blogContainer.innerHTML = "";

        blogs.forEach(blog => {

            blogContainer.innerHTML += `
                <div class="blog-card">
                    <h3>${blog.title}</h3>
                    <p>${blog.content}</p>
                </div>
            `;

        });

    } catch (error) {
        console.log(error);
    }
}

fetchBlogs();