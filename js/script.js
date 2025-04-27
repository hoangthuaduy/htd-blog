console.log("HTD Blog loaded successfully!");
// Hiệu ứng hiện dần phần hero khi load trang
window.addEventListener('load', function () {
    document.getElementById('hero').classList.add('visible');
    startTypingEffect();
});

// Hàm typing effect
function startTypingEffect() {
    const text = "SAP ABAP Developer | Sharing Knowledge | Lifelong Learner";
    const speed = 80; // tốc độ gõ (ms/1 ký tự)
    let i = 0;
    const typingTarget = document.getElementById('typing-text');

    function type() {
        if (i < text.length) {
            typingTarget.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// ScrollReveal hiệu ứng các section
ScrollReveal().reveal('section', {
    delay: 200,
    distance: '50px',
    duration: 800,
    easing: 'ease-out',
    origin: 'bottom',
    reset: false
});

async function loadBlogPosts() {
    const res = await fetch('js/blog-posts/index.json');
    const files = await res.json();

    const blogContainer = document.getElementById('blog-list');

    files.forEach(async (file) => {
        const postRes = await fetch('js/blog-posts/' + file);
        const postText = await postRes.text();

        const postData = matter(postText); // parse frontmatter
        const content = marked(postData.content); // parse markdown content

        const title = postData.data.title;
        const date = postData.data.date;
        const thumbnail = postData.data.thumbnail || "assets/images/default-thumbnail.jpg"; // fallback nếu chưa có thumbnail

        const excerpt = postData.content.substring(0, 200) + '...'; // Tóm tắt nhanh

        const postHTML = `
        <div class="card bg-dark text-white mb-4">
          <img src="${thumbnail}" class="card-img-top" alt="${title}">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${excerpt}</p>
            <a href="pages/blog-post.html?id=${encodeURIComponent(file)}" class="btn btn-primary">Đọc tiếp</a>
          </div>
        </div>
      `;
        blogContainer.innerHTML += postHTML;
    });
}

window.addEventListener('load', function () {
    loadBlogPosts();
});