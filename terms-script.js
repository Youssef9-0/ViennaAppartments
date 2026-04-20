window.onload = function() {
    const termsBox = document.getElementById('terms-box');

    // 1. طلب البيانات من السيرفر
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json()) // 2. تحويل الرد لنص مفهوم
        .then(data => {
            // 3. عرض العنوان والمحتوى في الصفحة
            termsBox.innerHTML = `
                <h3>${data.title}</h3>
                <p>${data.body}</p>
            `;
        })
        .catch(error => {
            // 4. في حالة وجود مشكلة
            termsBox.innerHTML = "Error loading terms.";
        });
};