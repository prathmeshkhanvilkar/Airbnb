const properties = [
    { title: "Skyline Penthouse", loc: "Worli, Mumbai", price: "₹12,500", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500" },
    { title: "Bohemian Loft", loc: "Bandra West", price: "₹6,800", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500" },
    { title: "Heritage Garden Villa", loc: "Colaba", price: "₹9,200", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500" },
    { title: "Modern Studio", loc: "BKC", price: "₹4,500", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500" },
    { title: "Beachside Hideaway", loc: "Juhu", price: "₹15,000", img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=500" },
    { title: "Tranquil 2BHK", loc: "Mulund West", price: "₹3,800", img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500" }
];

const grid = document.getElementById('propertyGrid');

properties.forEach(p => {
    grid.innerHTML += `
        <div class="card">
            <img src="${p.img}" alt="${p.title}">
            <div class="card-info">
                <h3>${p.title}</h3>
                <p class="loc">${p.loc}</p>
                <p class="price">${p.price} <span>/ night</span></p>
            </div>
        </div>
    `;
});