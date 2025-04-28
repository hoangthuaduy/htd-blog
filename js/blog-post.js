// Hàm đọc tham số URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Hàm tự viết parse FrontMatter
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

// Load bài viết
async function loadBlogPost() {
    const id = getQueryParam('id');

    if (!id) {
        document.getElementById('post-title').innerText = "Không tìm thấy bài viết.";
        return;
    }

    try {
        const res = await fetch('../../js/blog-posts/' + decodeURIComponent(id));
        const text = await res.text();

        const postData = parseFrontMatter(text);
        const title = postData.attributes.title || "Không tiêu đề";
        const date = postData.attributes.date || "";
        // marked.setOptions({
        //     highlight: function (code, lang) {
        //         const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        //         return hljs.highlight(code, { language }).value;
        //     }
        // });
        const bodyHTML = marked.parse(postData.body);

        document.getElementById('post-title').innerText = title;
        document.getElementById('post-date').innerText = date;
        document.getElementById('post-content').innerHTML = bodyHTML;

        hljs.registerLanguage('abap', window.hljsDefineSAP_ABAP);
        hljs.registerLanguage('language-abap', window.hljsDefineSAP_ABAP);

        hljs.highlightAll(); // <- tô màu syntax sau khi render xong
    } catch (error) {
        console.error(error);
        document.getElementById('post-title').innerText = "Không tải được bài viết.";
        document.getElementById('post-content').innerText = "Đã xảy ra lỗi khi tải bài viết.";
    }
}

// Gọi khi load trang
window.addEventListener('load', loadBlogPost);
