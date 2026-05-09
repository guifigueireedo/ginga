// ==========================================
// 1. BANCO DE DADOS GLOBAL (Cores e Produtos)
// ==========================================

const V = {
    terracota: { name: "Marrom (Terracota)", hex: "#713422" },
    lima: { name: "Amarelo Manteiga", hex: "#f7f198" },
    offwhite: { name: "Off White", hex: "#eaccae" },
    preto: { name: "Preto", hex: "#000000" }, // Simplificado sem o fio no nome
    verde: { name: "Verde Musgo", hex: "#506333" } // Simplificado sem o fio no nome
};

// HELPER: Função que atrela a imagem e o placeholder à variante
const vImg = (baseColor, imgPath, placeholderOf = null) => ({
    ...baseColor,
    img: imgPath,
    placeholder: placeholderOf
});

const productsDB = {
    // CONJUNTOS
    "maria-bonita-chic": { 
        name: "Maria Bonita Chic", cat: "Conjunto", gender: "Feminino", img: "img/maria-bonita-chic.jpg", price: 280.00,
        yarn: "Anne 100% Algodão",
        desc: "Conjunto clássico e atemporal. A união perfeita entre técnica tradicional e caimento moderno. Conjunto feito com fio Anne.",
        variants: [
            vImg(V.terracota, "img/maria-bonita-chic.jpg"),
            vImg(V.offwhite, "img/maria-bonita-chic-offwhite.jpg"),
            vImg(V.verde, "img/maria-bonita-chic-verde.jpg")
        ] 
    },
    "glow-arraial": { 
        name: "Glow Arraial", cat: "Conjunto", gender: "Feminino", img: "img/glow-arraial.jpg", price: 199.90,
        yarn: "Anne 100% Algodão",
        desc: "Trama aberta e respirável, garantindo um visual leve e praiano para qualquer ocasião. Conjunto feito com fio Anne.",
        variants: [
            vImg(V.verde, "img/glow-arraial.jpg"),
            vImg(V.terracota, "img/glow-arraial-terracota.jpg"),
            vImg(V.offwhite, "img/glow-arraial-offwhite.jpg")
        ] 
    },
    "luar-do-sertao": { 
        name: "Luar do Sertão", cat: "Conjunto", gender: "Feminino", img: "img/luar-do-sertao.jpg", price: 255.00,
        yarn: "Anne e Cordonê",
        desc: "Design arrojado com fendas táticas. Ideal para os dias mais quentes do verão. Conjunto feito com fio Anne e Cordonê.",
        variants: [
            vImg(V.lima, "img/luar-do-sertao.jpg"),
            vImg(V.terracota, "img/luar-do-sertao-terracota.jpg",),
            vImg(V.offwhite, "img/luar-do-sertao-offwhite.jpg",),
            vImg(V.verde, "img/luar-do-sertao-verde.jpg",)
        ] 
    },
    
    // TOPS
    "trama-maria": { 
        name: "Trama Maria", cat: "Top", gender: "Feminino", img: "img/trama-maria.jpg", price: 140.00,
        yarn: "Anne 100% Algodão",
        desc: "Minimalista e essencial. O top perfeito para composições. Top feito com fio Anne.",
        variants: [
            vImg(V.terracota, "img/trama-maria.jpg"),
            vImg(V.lima, "img/trama-maria-lima.jpg"),
            vImg(V.offwhite, "img/trama-maria-offwhite.jpg"), 
            vImg(V.preto, "img/trama-maria-preto.jpg")
        ] 
    },
    "perola-do-agreste": { 
        name: "Pérola do Agreste", cat: "Top", gender: "Feminino", img: "img/perola-do-agreste.jpg", price: 140.00,
        yarn: "Anne 100% Algodão",
        desc: "Detalhes delicados na amarração. Pode ser usado como peça principal ou sobreposição. Top feito com fio Anne.",
        variants: [
            vImg(V.offwhite, "img/perola-do-agreste.jpg"),
            vImg(V.terracota, "img/perola-do-agreste-terracota.jpg"),
            vImg(V.lima, "img/perola-do-agreste-lima.jpg"),
            vImg(V.preto, "img/perola-do-agreste-preto.jpg")
        ] 
    },
    "ponto-de-fogo": { 
        name: "Ponto de Fogo", cat: "Top", gender: "Feminino", img: "img/ponto-de-fogo.jpg", price: 165.00,
        yarn: "Anne 100% Algodão",
        desc: "Modelagem cropped com suporte firme e textura rica aos olhos e ao toque. Top feito com fio Anne.",
        variants: [
            vImg(V.terracota, "img/ponto-de-fogo.jpg"),
            vImg(V.lima, "img/ponto-de-fogo-lima.jpg"),
            vImg(V.preto, "img/ponto-de-fogo-preto.jpg"),
            vImg(V.offwhite, "img/ponto-de-fogo-offwhite.jpg")
        ] 
    },

    // SAIAS
    "ventanias-do-arraial": { 
        name: "Ventanias do Arraial", cat: "Saia", gender: "Feminino", img: "img/ventanias-do-arraial.jpg", price: 225.00,
        yarn: "Anne e Cordonê",
        desc: "Volume estratégico e transparência na medida certa. Saia feita com fio Anne e Cordonê.",
        variants: [
            vImg(V.verde, "img/ventanias-do-arraial.jpg"),
            vImg(V.preto, "img/ventanias-do-arraial-preto.jpg"),
            vImg(V.offwhite, "img/ventanias-do-arraial-offwhite.jpg"),
            vImg(V.terracota, "img/ventanias-do-arraial-terracota.jpg")
        ] 
    },
    "trama-canelada": { 
        name: "Trama Canelada", cat: "Saia", gender: "Feminino", img: "img/trama-canelada.jpg", price: 135.00,
        yarn: "Anne 100% Algodão",
        desc: "Caimento fluido e alongado. As texturas verticais valorizam a silhueta. Saia feita com fio Anne.",
        variants: [
            vImg(V.offwhite, "img/trama-canelada.jpg"),
            vImg(V.terracota, "img/trama-canelada-terracota.jpg"),
            vImg(V.preto, "img/trama-canelada-preto.jpg",),
            vImg(V.verde, "img/trama-canelada-verde.jpg",)
        ] 
    },
    "ondas-velho-chico": { 
        name: "Ondas Velho Chico", cat: "Saia", gender: "Feminino", img: "img/ondas-velho-chico.jpg", price: 135.00,
        yarn: "Anne e Cordonê",
        desc: "Inspirada no balanço das águas, essa saia traz um movimento único a cada passo. Saia feita com fio Anne e Cordonê.",
        variants: [
            vImg(V.terracota, "img/ondas-velho-chico.jpg"),
            vImg(V.offwhite, "img/ondas-velho-chico-offwhite.jpg"),
            vImg(V.preto, "img/ondas-velho-chico-preto.jpg"),
            vImg(V.verde, "img/ondas-velho-chico-verde.jpg")
        ] 
    },

    // CAMISETAS
    "mosaico-junino": {
        name: "Mosaico Junino", cat: "Camiseta", gender: "Masculino", img: "img/camisa-mosaico.jpg", price: 320.00,
        yarn: "Anne 100% Algodão",
        desc: "Padronagem exclusiva que homenageia as festividades nordestinas, com caimento perfeito. Camiseta feita com fio Anne.",
        variants: [
            vImg(V.offwhite, "img/camisa-mosaico.jpg"),
            vImg(V.lima, "img/camisa-mosaico-lima.jpg"), 
            vImg(V.terracota, "img/camisa-mosaico-terracota.jpg"),
            vImg(V.verde, "img/camisa-mosaico-verde.jpg"), 
            vImg(V.preto, "img/camisa-mosaico-preto.jpg") 
        ] 
    },
    "sertao": {
        name: "Sertão", cat: "Camiseta", gender: "Masculino", img: "img/camisa-sertao.jpg", price: 299.90,
        yarn: "Anne 100% Algodão",
        desc: "Corte reto e estruturado. A trama em crochê traz uma releitura rústica e sofisticada da camisa clássica. Camiseta feita com fio Anne.",
        variants: [
            vImg(V.terracota, "img/camisa-sertao.jpg"),
            vImg(V.lima, "img/camisa-sertao-lima.jpg"),
            vImg(V.verde, "img/camisa-sertao-verde.jpg"),
            vImg(V.preto, "img/camisa-sertao-preto.jpg"),
            vImg(V.offwhite, "img/camisa-sertao-offwhite.jpg",)
        ] 
    },
    "chama-nordestina": {
        name: "Chama Nordestina", cat: "Camiseta", gender: "Masculino", img: "img/camisa-chama.jpg", price: 280.00,
        yarn: "Anne 100% Algodão",
        desc: "Frescor e personalidade. Uma peça com vazados estratégicos para quem tem atitude. Camiseta feita com fio Anne.",
        variants: [
            vImg(V.offwhite, "img/camisa-chama.jpg"),
            vImg(V.lima, "img/camisa-chama-lima.jpg"), 
            vImg(V.terracota, "img/camisa-chama-terracota.jpg"), 
            vImg(V.verde, "img/camisa-chama-verde.jpg"), 
            vImg(V.preto, "img/camisa-chama-preto.jpg") 
        ] 
    }
};

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 2. LÓGICA DO INDEX (Carrossel)
    // ==========================================
    const track = document.getElementById('carousel-track');
    if (track) {
        const items = track.querySelectorAll('.carousel-item');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        let currentIndex = 0;
        let autoPlayInterval;

        const updateCarousel = () => { track.style.transform = `translateX(-${currentIndex * 100}%)`; };
        const nextSlide = () => { currentIndex = (currentIndex + 1) % items.length; updateCarousel(); };
        const prevSlide = () => { currentIndex = (currentIndex - 1 + items.length) % items.length; updateCarousel(); };

        nextBtn.addEventListener('click', () => { nextSlide(); resetInterval(); });
        prevBtn.addEventListener('click', () => { prevSlide(); resetInterval(); });

        const startInterval = () => { autoPlayInterval = setInterval(nextSlide, 5000); };
        const resetInterval = () => { clearInterval(autoPlayInterval); startInterval(); };
        startInterval();
    }

    // ==========================================
    // 3. LÓGICA DO CATÁLOGO (Filtros Inteligentes e Dinâmicos)
    // ==========================================
    const productGrid = document.getElementById('product-grid');
    if (productGrid) {
        let currentGender = 'todos';
        let currentCat = 'todos';

        // Dicionário de Categorias permitidas por Gênero
        const catMap = {
            'todos': [
                { id: 'todos', label: 'Todas as Peças' },
                { id: 'Top', label: 'Top' },
                { id: 'Conjunto', label: 'Conjunto' },
                { id: 'Saia', label: 'Saia' },
                { id: 'Camiseta', label: 'Camiseta' }
            ],
            'Feminino': [
                { id: 'todos', label: 'Todas as Peças' },
                { id: 'Top', label: 'Top' },
                { id: 'Conjunto', label: 'Conjunto' },
                { id: 'Saia', label: 'Saia' }
            ],
            'Masculino': [
                { id: 'todos', label: 'Todas as Peças' },
                { id: 'Camiseta', label: 'Camiseta' }
            ]
        };

        const renderAllItems = () => {
            productGrid.innerHTML = ''; 

            Object.entries(productsDB).forEach(([id, prod]) => {
                let dotsHtml = '';
                prod.variants.forEach(variant => {
                    dotsHtml += `<span class="w-4 h-4 rounded-full ring-1 ring-offset-1 ring-surface ring-outline/30" style="background-color: ${variant.hex};" title="${variant.name}"></span>\n`;
                });

                const cardHTML = `
                <a href="product.html?id=${id}" data-gender="${prod.gender}" data-cat="${prod.cat}" class="product-item product-card group relative flex flex-col gap-4 cursor-pointer transition-all duration-300 transform opacity-100 scale-100 origin-top">
                    <div class="aspect-[3/4] bg-surface-variant rounded overflow-hidden relative">
                        <img alt="${prod.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="${prod.img}" onerror="this.src='https://via.placeholder.com/400x600?text=Sem+Foto'"/>
                        <div class="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500"></div>
                        <div class="absolute top-4 left-4 bg-surface/90 backdrop-blur-md px-3 py-1 rounded text-[10px] font-label uppercase tracking-widest text-primary">${prod.cat}</div>
                    </div>
                    <div class="flex flex-col gap-1 px-2">
                        <div class="flex justify-between items-start">
                            <h3 class="font-headline text-xl text-primary">${prod.name}</h3>
                            <div class="flex gap-1 pt-1 flex-wrap justify-end max-w-[50%]">
                                ${dotsHtml}
                            </div>
                        </div>
                        <p class="font-label text-xs uppercase text-outline tracking-wider">${prod.gender}</p>
                        <span class="mt-4 self-start font-body text-sm text-primary border-b border-primary/30 pb-0.5 group-hover:border-primary transition-colors">Ver mais</span>
                    </div>
                </a>`;
                
                productGrid.insertAdjacentHTML('beforeend', cardHTML);
            });
        };

        // Função que gerencia as animações de entrada e saída
        const applyFilters = () => {
            const items = document.querySelectorAll('.product-item');
            
            items.forEach(item => {
                const matchGender = currentGender === 'todos' || item.dataset.gender === currentGender;
                const matchCat = currentCat === 'todos' || item.dataset.cat === currentCat;

                if (matchGender && matchCat) {
                    item.style.display = 'flex';
                    setTimeout(() => {
                        item.classList.remove('opacity-0', 'scale-95');
                        item.classList.add('opacity-100', 'scale-100');
                    }, 10);
                } else {
                    item.classList.remove('opacity-100', 'scale-100');
                    item.classList.add('opacity-0', 'scale-95');
                    setTimeout(() => {
                        if (item.classList.contains('opacity-0')) {
                            item.style.display = 'none';
                        }
                    }, 300);
                }
            });
        };

        // Função para redesenhar os botões de categoria conforme o gênero selecionado
        const renderCategoryBtns = () => {
            const catContainer = document.getElementById('category-filters');
            catContainer.innerHTML = ''; 

            catMap[currentGender].forEach(cat => {
                const isActive = currentCat === cat.id;
                const activeClass = isActive ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-primary';
                
                const btnHTML = `<button data-cat="${cat.id}" class="cat-btn border-b-2 ${activeClass} font-body text-xs uppercase tracking-wider px-2 py-1 transition-all duration-300">${cat.label}</button>`;
                catContainer.insertAdjacentHTML('beforeend', btnHTML);
            });

            // Atrela o evento de clique aos botões recém-criados
            const catBtns = document.querySelectorAll('.cat-btn');
            catBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    currentCat = e.target.dataset.cat;
                    renderCategoryBtns(); // Atualiza a linha embaixo do botão ativo
                    applyFilters(); // Roda a animação das peças
                });
            });
        };

        // Inicialização
        renderAllItems();
        renderCategoryBtns(); 
        applyFilters();

        // Lógica dos Botões de Gênero
        const genderBtns = document.querySelectorAll('.gender-btn');
        genderBtns.forEach(btn => {
            btn.classList.add('transition-all', 'duration-300');
            
            btn.addEventListener('click', (e) => {
                currentGender = e.target.dataset.gender;
                currentCat = 'todos'; // O PULO DO GATO: Reseta a categoria pra evitar a tela vazia
                
                genderBtns.forEach(b => {
                    b.classList.remove('bg-primary', 'text-white', 'shadow-sm');
                    b.classList.add('text-on-surface-variant');
                });
                e.target.classList.add('bg-primary', 'text-white', 'shadow-sm');
                e.target.classList.remove('text-on-surface-variant');
                
                renderCategoryBtns(); // Atualiza quais categorias aparecem
                applyFilters(); // Atualiza o grid
            });
        });
    }

    // ==========================================
    // 4. LÓGICA DO PRODUTO INDIVIDUAL
    // ==========================================
    const productPage = document.getElementById('product-page');
    if (productPage) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        const product = productsDB[productId];

        if (!product) {
            document.getElementById('prod-title').innerText = "Peça não encontrada";
            document.getElementById('prod-desc').innerText = "Verifique o link ou retorne ao catálogo.";
            return;
        }

        let selectedColor = null;
        let selectedSize = null;

        document.getElementById('prod-title').innerText = product.name;
        document.getElementById('prod-category').innerText = `${product.gender} • ${product.cat}`;
        document.getElementById('prod-desc').innerText = product.desc;
        document.getElementById('prod-image-main').src = product.img;
        document.getElementById('prod-price').innerText = `R$ ${product.price},00`;

        const colorContainer = document.getElementById('color-options');
        product.variants.forEach((variant, index) => {
            const btn = document.createElement('button');
            btn.className = `w-10 h-10 rounded-full ring-1 ring-offset-2 ring-offset-surface ring-transparent shadow-sm hover:scale-110 transition-all duration-300 color-btn`;
            btn.style.backgroundColor = variant.hex;
            btn.title = variant.name;
            btn.dataset.index = index;

            btn.addEventListener('click', () => {
                document.querySelectorAll('.color-btn').forEach(b => b.classList.replace('ring-primary', 'ring-transparent'));
                btn.classList.replace('ring-transparent', 'ring-primary');
                
                selectedColor = variant;
                document.getElementById('selected-color-name').innerText = variant.name;
                document.getElementById('yarn-info').innerText = variant.yarn;
                document.getElementById('yarn-info').classList.remove('text-on-surface-variant', 'italic');
                
                const mainImg = document.getElementById('prod-image-main');
                const warningDiv = document.getElementById('placeholder-warning');
                const warningText = document.getElementById('placeholder-msg-text');
                
                mainImg.classList.add('opacity-40');
                setTimeout(() => {
                    mainImg.src = variant.img;
                    mainImg.classList.remove('opacity-40');
                }, 200);

                if (variant.placeholder) {
                    warningText.innerHTML = `Sem foto disponível nesta cor. Mostrando peça na cor <strong>${variant.placeholder}</strong>.`;
                    warningDiv.classList.remove('hidden');
                } else {
                    warningDiv.classList.add('hidden');
                }
                
                checkReady();
            });

            colorContainer.appendChild(btn);

            if(index === 0) { btn.click(); }
        });

        const sizeBtns = document.querySelectorAll('.size-btn');
        sizeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                sizeBtns.forEach(b => {
                    b.classList.remove('bg-primary', 'text-white', 'border-primary');
                    b.classList.add('bg-transparent', 'text-on-surface', 'border-outline-variant/50');
                });
                btn.classList.add('bg-primary', 'text-white', 'border-primary');
                btn.classList.remove('bg-transparent', 'text-on-surface', 'border-outline-variant/50');

                selectedSize = btn.dataset.size;
                document.getElementById('selected-size-name').innerText = selectedSize;
                checkReady();
            });
        });

        const wppBtn = document.getElementById('whatsapp-btn');
        const errorMsg = document.getElementById('error-msg');

        const checkReady = () => {
            if (selectedColor && selectedSize) {
                wppBtn.classList.remove('opacity-50', 'cursor-not-allowed');
                errorMsg.classList.add('hidden');
            }
        };

        wppBtn.addEventListener('click', () => {
            if (!selectedColor || !selectedSize) {
                errorMsg.classList.remove('hidden');
                return;
            }
            const message = `Olá! Eu tenho interesse na peça ${product.name} de cor ${selectedColor.name} e tamanho ${selectedSize}. Podemos alinhar as medidas, o valor e o prazo?`;
            const wppUrl = `https://wa.me/5581995800702?text=${encodeURIComponent(message)}`;
            window.open(wppUrl, '_blank');
        });

        // ==========================================
        // LÓGICA DO MODAL DE PRECIFICAÇÃO
        // ==========================================
        const pricingModal = document.getElementById('pricing-modal');
        if (pricingModal) {
            const openBtn = document.getElementById('open-pricing-modal');
            const closeBtn = document.getElementById('close-pricing-modal');
            const backdrop = document.getElementById('pricing-backdrop');
            const understoodBtn = document.getElementById('btn-understood');
            const modalContent = document.getElementById('pricing-content');

            // Função para abrir com animação
            const openModal = () => {
                pricingModal.classList.remove('opacity-0', 'pointer-events-none');
                modalContent.classList.remove('scale-95');
                modalContent.classList.add('scale-100');
            };

            // Função para fechar com animação
            const closeModal = () => {
                pricingModal.classList.add('opacity-0', 'pointer-events-none');
                modalContent.classList.remove('scale-100');
                modalContent.classList.add('scale-95');
            };

            // Eventos de Clique
            if (openBtn) openBtn.addEventListener('click', openModal);
            if (closeBtn) closeBtn.addEventListener('click', closeModal);
            if (backdrop) backdrop.addEventListener('click', closeModal);
            if (understoodBtn) understoodBtn.addEventListener('click', closeModal);
        }
    }
});