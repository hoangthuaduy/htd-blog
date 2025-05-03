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

function stripMarkdown(markdownText) {
    return markdownText
        .replace(/!\[.*?\]\(.*?\)/g, '')       // remove images
        .replace(/\[.*?\]\(.*?\)/g, '')         // remove links
        .replace(/(\*\*|__)(.*?)\1/g, '$2')     // bold
        .replace(/(\*|_)(.*?)\1/g, '$2')        // italic
        .replace(/~~(.*?)~~/g, '$1')            // strikethrough
        .replace(/`([^`]+)`/g, '$1')            // inline code
        .replace(/^>\s+/gm, '')                 // blockquotes
        .replace(/^#+\s+/gm, '')                // headings
        .replace(/-\s+/g, '')                   // list item
        .replace(/\n+/g, ' ')                   // newlines
        .trim();
}

async function loadBlogPosts() {
    const res = await fetch('js/blog-posts/index.json');
    const files = await res.json();

    const blogContainer = document.getElementById('blog-list');

    files.forEach(async (file) => {
        const postRes = await fetch('js/blog-posts/' + file);
        const postText = await postRes.text();

        const postData = parseFrontMatter(postText);
        // /const content = marked.parse(postData.body); // parse markdown to HTML

        const title = postData.attributes.title;
        //const date = postData.attributes.date;
        const thumbnail = postData.attributes.thumbnail || "assets/images/thumbnail-default.jpg";

        const plainText = stripMarkdown(postData.body);
        const excerpt = plainText.substring(0, 120) + '...';

        const postHTML = `
        <div class="col-md-6 col-lg-4">
            <div class="card bg-dark text-white h-100">
            <img src="${thumbnail}" class="card-img-top" alt="${title}">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${excerpt}</p>
                <a href="pages/blogs/blog-post.html?id=${encodeURIComponent(file)}" class="btn btn-primary">Đọc tiếp</a>
            </div>
            </div>
        </div>
        `;
        blogContainer.innerHTML += postHTML;
    });
}

// Tự viết hàm parseFrontMatter như đã thống nhất
function parseFrontMatter(markdown) {
    const frontmatterRegex = /^---\s*([\s\S]*?)\s*---\s*/;
    const match = markdown.match(frontmatterRegex);

    if (!match) {
        return { attributes: {}, body: markdown };
    }

    const frontmatter = match[1];
    const body = markdown.slice(match[0].length);

    const attributes = {};
    frontmatter.split('\n').forEach(line => {
        const [key, ...value] = line.split(':');
        attributes[key.trim()] = value.join(':').trim();
    });

    return { attributes, body };
}

window.addEventListener('load', function () {
    loadBlogPosts();
});
