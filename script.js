// 页面加载完成后执行
window.onload = function() {
    // 1. 平滑滚动效果（点击导航链接跳转到对应区域，无卡顿）
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 阻止默认锚点跳转的生硬效果
            e.preventDefault();
            // 获取目标区域的ID
            const targetId = this.getAttribute('href');
            // 获取目标区域元素
            const targetElement = document.querySelector(targetId);
            // 平滑滚动到目标区域
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
    // 2. 角色卡片点击高亮效果
    const characterCards = document.querySelectorAll('.character-card');
    characterCards.forEach(card => {
        card.addEventListener('click', function() {
            // 移除所有卡片的高亮样式
            characterCards.forEach(c => c.classList.remove('card-active'));
            // 给当前点击的卡片添加高亮样式
            this.classList.add('card-active');
        });
    });

    // 3. 页面滚动时，头部样式变化（增强视觉体验）
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = '#ffed4b';
            header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.backgroundColor = '#ffd700';
            header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        }
    });
};

// 补充：高亮样式（在JS中动态添加，与CSS配合）
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .card-active {
            border: 2px solid #ff4500;
            box-shadow: 0 5px 15px rgba(255, 69, 0, 0.2);
        }
    </style>
`);