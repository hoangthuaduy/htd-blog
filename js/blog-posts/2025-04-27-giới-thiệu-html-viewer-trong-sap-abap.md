---
title: Giới thiệu HTML Viewer trong SAP ABAP
date: 2025-04-27T02:08:01.339Z
thumbnail: /assets/images/uploads/screenshot-2025-04-27-091055.png
---
## Giới thiệu

HTML Viewer là công cụ tuyệt vời giúp hiển thị nội dung HTML trong SAP ABAP.

![Test ALT Text](/assets/images/uploads/screenshot-2025-04-27-091055.png "Test Title")

## Các cách sử dụng

1. Build HTML trực tiếp trong code.

   ```html
   <!-- Project: HTD Blog - Website cá nhân -->
   <!DOCTYPE html>
   <html lang="en">

   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta name="description" content="HTD Blog - Chia sẻ kiến thức SAP ABAP, lập trình, kỹ năng mềm và cuộc sống.">
       <title>HTD Blog</title>
       <link rel="icon" href="assets/favicon.ico" type="image/x-icon">

       <!-- Bootstrap 5 CSS -->
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

       <!-- Your custom CSS -->
       <link rel="stylesheet" href="css/style.css">
   </head>

   <body>
       <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
           <div class="container-fluid">
               <a class="navbar-brand" href="#">
                   <img src="assets/logo-htd.svg" alt="HTD Logo" class="logo-img" style="width:40px; height:40px;">
               </a>
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                   aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   <span class="navbar-toggler-icon"></span>
               </button>

               <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                   <ul class="navbar-nav">
                       <li class="nav-item">
                           <a class="nav-link" href="#about">About</a>
                       </li>
                       <li class="nav-item">
                           <a class="nav-link" href="#blog">Blog</a>
                       </li>
                       <li class="nav-item">
                           <a class="nav-link" href="#videos">Videos</a>
                       </li>
                       <li class="nav-item">
                           <a class="nav-link" href="#contact">Contact</a>
                       </li>
                   </ul>
               </div>
           </div>
       </nav>

       <section id="hero">
           <h1>Welcome to HTD Blog</h1>
           <p id="typing-text"></p>
       </section>

       <section id="about" class="py-5 bg-dark">
           <div class="container text-center">
               <h2>About Me</h2>
               <p>This is a placeholder for a short introduction. (You can update this later with your avatar and personal
                   description.)</p>
           </div>
       </section>

       <section id="blog" class="py-5 bg-dark">
           <div class="container my-5 text-center">
               <h2>Blog</h2>
               <div class="row g-4">
                   <div class="col-md-6 col-lg-4">
                       <div class="card bg-dark text-white h-100">
                           <div class="card-body">
                               <h5 class="card-title">Giới thiệu cơ bản về SAP ABAP</h5>
                               <p class="card-text">ABAP là ngôn ngữ lập trình cốt lõi của hệ thống SAP ERP...</p>
                               <a href="pages/blogs/blog-post.html?id=1" class="btn btn-primary">Read More</a>
                           </div>
                       </div>
                   </div>

                   <div class="col-md-6 col-lg-4">
                       <div class="card bg-dark text-white h-100">
                           <div class="card-body">
                               <h5 class="card-title">5 Tips để code ABAP clean và hiệu quả</h5>
                               <p class="card-text">Viết code ABAP sạch và dễ bảo trì là một kỹ năng quan trọng. Cùng khám
                                   phá 5 mẹo nhỏ giúp bạn cải
                                   thiện trình độ lập trình...</p>
                               <a href="pages/blogs/blog-post.html?id=2" class="btn btn-primary">Read More</a>
                           </div>
                       </div>
                   </div>

                   <div class="col-md-6 col-lg-4">
                       <div class="card bg-dark text-white h-100">
                           <div class="card-body">
                               <h5 class="card-title">Unit Test trong ABAP: Hướng dẫn chi tiết</h5>
                               <p class="card-text">Unit Test giúp kiểm thử chương trình ABAP tự động. Bài viết này hướng
                                   dẫn cách tạo, chạy và tối ưu
                                   hóa Unit Test cho ABAP...</p>
                               <a href="pages/blogs/blog-post.html?id=4" class="btn btn-primary">Read More</a>
                           </div>
                       </div>
                   </div>
                   <!-- Thêm nhiều bài viết tương tự -->
               </div>
           </div>

           </div>
       </section>

       <section id="videos" class="py-5 bg-dark">
           <div class="container text-center">
               <h2>Featured Videos</h2>
               <div class="ratio ratio-16x9 mt-4">
                   <iframe width="560" height="315"
                       src="https://www.youtube.com/embed/videoseries?list=PLl_MEz33D2N0qf9Q-UDstSei-O6J2BwCN"
                       frameborder="0" allowfullscreen></iframe>
               </div>
               <div class="ratio ratio-16x9 mt-4">
                   <iframe width="560" height="315" src="https://www.youtube.com/embed/vl-_ODY0zHk" frameborder="0"
                       allowfullscreen></iframe>
               </div>
               <div class="ratio ratio-16x9 mt-4">
                   <iframe src="https://www.youtube.com/embed/vl-_ODY0zHk" frameborder="0" allowfullscreen></iframe>
               </div>
           </div>
       </section>

       <section id="contact" class="py-5 bg-dark">
           <div class="container text-center">
               <h2>Contact</h2>
               <p>You can add your contact form or social media links here later.</p>
               <a href="mailto:your-email@example.com" class="btn btn-outline-primary mt-3">Email Me</a>
           </div>
       </section>

       <footer class="bg-dark text-center text-white py-4 mt-5">
           <div class="container">
               <p class="mb-0">&copy; 2025 HTD Blog. All rights reserved.</p>
           </div>
       </footer>


       <!-- Bootstrap 5 JS Bundle (includes Popper) -->
       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
       <script src="https://unpkg.com/scrollreveal"></script>

       <script src="js/script.js"></script>
   </body>

   </html>
   ```
2. Upload file HTML bằng SMW0.

   ```javascript
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
           const thumbnail = postData.attributes.thumbnail || "assets/images/default-thumbnail.jpg";

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
   ```
3. Đọc file HTML từ Application Server.
```abap
DATA lv_name TYPE string.
lv_name = 'HTD Blog'.
WRITE: / lv_name.
```
## Kết luận

Việc chọn phương pháp đúng sẽ giúp giao diện SAP thêm sinh động và dễ bảo trì.