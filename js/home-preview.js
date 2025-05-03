
function startTypingSequence() {
    const resetLines = () => {
        document.getElementById("typed-line-1").innerHTML = "";
        document.getElementById("typed-line-2").innerHTML = "";
        document.getElementById("typed-line-3").innerHTML = "";
    };

    const typed1 = new Typed("#typed-line-1", {
        strings: ["Nơi chia sẻ kiến thức SAP ABAP"],
        typeSpeed: 40,
        backSpeed: 0,
        showCursor: false,
        onComplete: () => {
            const typed2 = new Typed("#typed-line-2", {
                strings: ["Kết nối đam mê công nghệ"],
                typeSpeed: 30,
                backSpeed: 0,
                showCursor: false,
                onComplete: () => {
                    const typed3 = new Typed("#typed-line-3", {
                        strings: ["Cảm hứng học tập và sáng tạo"],
                        typeSpeed: 25,
                        backSpeed: 0,
                        showCursor: false,
                        onComplete: () => {
                            // Đợi 2 giây, sau đó xóa và lặp lại
                            setTimeout(() => {
                                resetLines();
                                setTimeout(startTypingSequence, 500); // Gõ lại sau 0.5s
                            }, 2000);
                        }
                    });
                }
            });
        }
    });
}

document.addEventListener("DOMContentLoaded", startTypingSequence);

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

async function loadHomeBlogPosts() {
    const container = document.getElementById('home-blog-list');
    if (!container) return;

    try {
        const res = await fetch('js/blog-posts/index.json');
        const files = await res.json();

        // Lấy 3 bài mới nhất (tên file thường dạng yyyy-mm-dd-title.md)
        const latestFiles = files
            .sort((a, b) => b.localeCompare(a)) // sort theo tên giảm dần
            .slice(0, 3);

        for (const file of latestFiles) {
            const postRes = await fetch(`js/blog-posts/${file}`);
            const postText = await postRes.text();

            const postData = parseFrontMatter(postText);
            const title = postData.attributes.title || file.replace('.md', '');
            const thumbnail = postData.attributes.thumbnail || 'assets/images/default-thumbnail.jpg';
            const plainText = stripMarkdown(postData.body);
            const excerpt = plainText.substring(0, 120) + '...';

            const blogHTML = `
            <div class="col-md-4 mb-4">
                <div class="card bg-secondary text-light h-100">
                <img src="${thumbnail}" class="card-img-top" alt="${title}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${excerpt}</p>
                    <a href="pages/blog-post.html?id=${encodeURIComponent(file)}" class="btn btn-primary mt-auto">Đọc tiếp</a>
                </div>
                </div>
            </div>
            `;
            container.innerHTML += blogHTML;
        }

    } catch (error) {
        console.error('Lỗi khi tải bài viết gần đây:', error);
    }
}

window.addEventListener('load', loadHomeBlogPosts);
