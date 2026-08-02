const blogContainer =
    document.getElementById("blogContainer");

const titleInput =
    document.getElementById("title");

const contentInput =
    document.getElementById("content");

let selectedBlogId = null;

async function fetchBlogs() {

    const response =
        await fetch("http://localhost:3200/blogs");

    const blogs =
        await response.json();

    blogContainer.innerHTML = "";

    blogs.forEach(blog => {

        blogContainer.innerHTML += `
    <div class="blog-card">

        <h3>${blog.title}</h3>

        <p>${blog.content}</p>

        <button
        onclick="editBlog(
            ${blog.id},
            '${blog.title}',
            '${blog.content}'
        )">
            Edit
        </button>

        <button
        onclick="deleteBlog(${blog.id})">
            Delete
        </button>

    </div>
    `;
    });
}

function editBlog(
    id,
    title,
    content
) {

    selectedBlogId = id;

    titleInput.value = title;

    contentInput.value = content;
}

async function updateBlog() {

    if (!selectedBlogId) {
        alert("Select a blog first");
        return;
    }

    await fetch(
        `http://localhost:3200/blogs/${selectedBlogId}`,
        {
            method: "PUT",

            headers: {
                "Content-Type":
                    "application/json"
            },

            body: JSON.stringify({
                title: titleInput.value,
                content: contentInput.value
            })
        }
    );

    titleInput.value = "";
    contentInput.value = "";

    fetchBlogs();
}
async function deleteBlog(id) {

    const confirmDelete =
        confirm("Are you sure you want to delete this blog?");

    if (!confirmDelete) return;

    await fetch(
        `http://localhost:3200/blogs/${id}`,
        {
            method: "DELETE"
        }
    );

    fetchBlogs();
}
fetchBlogs();