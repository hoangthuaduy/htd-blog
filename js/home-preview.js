
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

async function loadRecentBlogs() {
    const container = document.getElementById('home-blog-preview');
    const res = await fetch('js/blog-posts/index.json');
    const files = await res.json();
    const latest = files.slice(-3).reverse();

    for (let file of latest) {
        const base = file.replace('.md', '');
        const title = decodeURIComponent(base.replace(/-/g, ' '));
        const link = `pages/blog-post.html?id=${encodeURIComponent(file)}`;
        container.innerHTML += `
        <div class="col-md-4 mb-3">
          <div class="card h-100 bg-secondary text-light">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <a href="${link}" class="btn btn-primary">Đọc tiếp</a>
            </div>
          </div>
        </div>
      `;
    }
}
window.addEventListener('load', loadRecentBlogs);
