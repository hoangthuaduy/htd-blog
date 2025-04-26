// Hàm đọc tham số URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

window.addEventListener('load', function() {
    const postId = getQueryParam('id');
    if (postId && blogPosts[postId]) {
        const post = blogPosts[postId];
        document.getElementById('post-title').innerText = post.title;
        document.getElementById('post-date').innerText = `Ngày đăng: ${post.date}`;
        document.getElementById('post-content').innerHTML = post.content;
    } else {
        document.getElementById('post-title').innerText = "Bài viết không tồn tại!";
        document.getElementById('post-content').innerHTML = "<p>Vui lòng quay lại trang Blog để chọn bài viết hợp lệ.</p>";
    }
});
