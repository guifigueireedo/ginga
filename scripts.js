document.addEventListener('DOMContentLoaded', () => {
    // Lógica do Carrossel (Apenas 1 por vez)
    const track = document.getElementById('carousel-track');
    
    if (track) {
        const items = track.querySelectorAll('.carousel-item');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        
        let currentIndex = 0;
        let autoPlayInterval;

        // Atualiza a posição do wrapper flex no eixo X
        const updateCarousel = () => {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        };

        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        };

        const prevSlide = () => {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            updateCarousel();
        };

        // Eventos dos botões
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });

        // Configuração de timer de 5 segundos
        const startInterval = () => {
            autoPlayInterval = setInterval(nextSlide, 5000);
        };

        const resetInterval = () => {
            clearInterval(autoPlayInterval);
            startInterval();
        };

        // Inicia o autoplay na primeira carga
        startInterval();
    }
});

// --- LÓGICA DO CATÁLOGO (Filtro por Categorias) ---
document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');
    
    // Se estivermos na página de catálogo, roda esse script
    if (productGrid) {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const products = document.querySelectorAll('.product-card');

        // Pega a categoria da URL (ex: se vier do index por 'catalog.html?category=top')
        const urlParams = new URLSearchParams(window.location.search);
        let activeFilter = urlParams.get('category') || 'all';

        const applyFilter = (category) => {
            // Atualiza o visual dos botões
            filterBtns.forEach(btn => {
                if(btn.dataset.filter === category) {
                    btn.classList.add('bg-secondary', 'text-on-secondary', 'border-secondary');
                    btn.classList.remove('bg-transparent', 'text-on-surface', 'border-outline-variant/30');
                } else {
                    btn.classList.remove('bg-secondary', 'text-on-secondary', 'border-secondary');
                    btn.classList.add('bg-transparent', 'text-on-surface', 'border-outline-variant/30');
                }
            });

            // Esconde/Mostra os produtos do grid de forma limpa
            products.forEach(prod => {
                if (category === 'all' || prod.dataset.category === category) {
                    prod.style.display = 'flex';
                } else {
                    prod.style.display = 'none';
                }
            });
        };

        // Roda o filtro na primeira vez que a página abre
        applyFilter(activeFilter);

        // Atribui o evento de clique pra cada botão
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const selected = e.target.dataset.filter;
                
                // Muda o link lá em cima na barra do navegador sem precisar recarregar a tela
                const newUrl = new URL(window.location);
                if (selected === 'all') {
                    newUrl.searchParams.delete('category');
                } else {
                    newUrl.searchParams.set('category', selected);
                }
                window.history.pushState({}, '', newUrl);

                // Dispara o filtro
                applyFilter(selected);
            });
        });
    }
});

// --- LÓGICA DA PÁGINA DE PRODUTO INDIVIDUAL ---
document.addEventListener('DOMContentLoaded', () => {
    const productPage = document.getElementById('product-page');
    
    if (productPage) {
        // Dicionário de Cores e Fios baseados no inventário
        const V = {
            terracota: { name: "Marrom (Terracota)", hex: "#713422", yarn: "Anne 100% Algodão" },
            lima: { name: "Amarelo Manteiga", hex: "#f7f198", yarn: "Anne 100% Algodão" },
            offwhite: { name: "Off White", hex: "#eaccae", yarn: "Anne 100% Algodão" },
            pretoAnne: { name: "Preto", hex: "#000000", yarn: "Anne 100% Algodão" },
            pretoCordone: { name: "Preto Brilho", hex: "#1a1a1a", yarn: "Cordonê 100% Poliamida" }, // tom sutil p/ diferenciar
            verdeAnne: { name: "Verde Musgo", hex: "#506333", yarn: "Anne 100% Algodão" },
            verdeCordone: { name: "Verde Musgo Brilho", hex: "#3e4d27", yarn: "Cordonê 100% Poliamida" }
        };

        // Mini Banco de Dados de Produtos
        const productsDB = {
            // CONJUNTOS
            "maria-bonita-chic": { 
                name: "Maria Bonita Chic", cat: "Conjunto", img: "img/maria-bonita-chic.jpg",
                desc: "Conjunto clássico e atemporal. A união perfeita entre técnica tradicional e caimento moderno.",
                variants: [V.terracota, V.offwhite, V.verdeAnne, V.verdeCordone]
            },
            "luar-do-sertao": { 
                name: "Luar do Sertão", cat: "Conjunto", img: "img/luar-do-sertao.jpg",
                desc: "Design arrojado com fendas táticas. Ideal para os dias mais quentes do verão.",
                variants: [V.terracota, V.offwhite, V.verdeAnne, V.verdeCordone]
            },
            "glow-arraial": { 
                name: "Glow Arraial", cat: "Conjunto", img: "img/glow-arraial.jpg",
                desc: "Trama aberta e respirável, garantindo um visual leve e praiano para qualquer ocasião.",
                variants: [V.terracota, V.offwhite, V.verdeAnne, V.verdeCordone]
            },
            
            // TOPS
            "trama-maria": { 
                name: "Trama Maria", cat: "Top", img: "img/trama-maria.jpg",
                desc: "Minimalista e essencial. O top perfeito para composições, feito inteiramente à mão.",
                variants: [V.terracota, V.lima, V.offwhite, V.pretoAnne]
            },
            "perola-do-agreste": { 
                name: "Pérola do Agreste", cat: "Top", img: "img/perola-do-agreste.jpg",
                desc: "Detalhes delicados na amarração. Pode ser usado como peça principal ou sobreposição.",
                variants: [V.terracota, V.lima, V.offwhite, V.pretoAnne]
            },
            "ponto-de-fogo": { 
                name: "Ponto de Fogo", cat: "Top", img: "img/ponto-de-fogo.jpg",
                desc: "Modelagem cropped com suporte firme e textura rica aos olhos e ao toque.",
                variants: [V.terracota, V.lima, V.offwhite, V.pretoAnne]
            },

            // SAIAS
            "trama-canelada": { 
                name: "Trama Canelada", cat: "Saia", img: "img/trama-canelada.jpg",
                desc: "Caimento fluido e alongado. As texturas verticais valorizam a silhueta naturalmente.",
                variants: [V.terracota, V.offwhite, V.pretoAnne, V.pretoCordone, V.verdeAnne, V.verdeCordone]
            },
            "ondas-velho-chico": { 
                name: "Ondas Velho Chico", cat: "Saia", img: "img/ondas-velho-chico.jpg",
                desc: "Inspirada no balanço das águas, essa saia traz um movimento único a cada passo.",
                variants: [V.terracota, V.offwhite, V.pretoAnne, V.pretoCordone, V.verdeAnne, V.verdeCordone]
            },
            "ventanias-do-arraial": { 
                name: "Ventanias do Arraial", cat: "Saia", img: "img/ventanias-do-arraial.jpg",
                desc: "Volume estratégico e transparência na medida certa. Uma peça de destaque absoluto.",
                variants: [V.terracota, V.offwhite, V.pretoAnne, V.pretoCordone, V.verdeAnne, V.verdeCordone]
            }
        };

        // Pega ID da URL
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        const product = productsDB[productId];

        if (!product) {
            document.getElementById('prod-title').innerText = "Peça não encontrada";
            document.getElementById('prod-desc').innerText = "Verifique o link ou retorne ao catálogo.";
            return;
        }

        // Variáveis de Estado
        let selectedColor = null;
        let selectedSize = null;

        // Renderiza as Infos da Peça
        document.getElementById('prod-title').innerText = product.name;
        document.getElementById('prod-category').innerText = product.cat;
        document.getElementById('prod-desc').innerText = product.desc;
        document.getElementById('prod-image-main').src = product.img;

        // Renderiza os Botões de Cor dinamicamente
        const colorContainer = document.getElementById('color-options');
        product.variants.forEach((variant, index) => {
            const btn = document.createElement('button');
            btn.className = `w-10 h-10 rounded-full ring-1 ring-offset-2 ring-offset-surface ring-transparent shadow-sm hover:scale-110 transition-all duration-300 color-btn`;
            btn.style.backgroundColor = variant.hex;
            btn.title = variant.name;
            btn.dataset.index = index;

            btn.addEventListener('click', () => {
                // Atualiza UI dos botões de cor
                document.querySelectorAll('.color-btn').forEach(b => b.classList.replace('ring-primary', 'ring-transparent'));
                btn.classList.replace('ring-transparent', 'ring-primary');
                
                // Atualiza Estado e UI do texto
                selectedColor = variant;
                document.getElementById('selected-color-name').innerText = variant.name;
                document.getElementById('yarn-info').innerText = variant.yarn;
                document.getElementById('yarn-info').classList.remove('text-on-surface-variant', 'italic');
                
                checkReady();
            });

            colorContainer.appendChild(btn);
        });

        // Lógica dos Botões de Tamanho
        const sizeBtns = document.querySelectorAll('.size-btn');
        sizeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Atualiza UI dos botões
                sizeBtns.forEach(b => {
                    b.classList.remove('bg-primary', 'text-white', 'border-primary');
                    b.classList.add('bg-transparent', 'text-on-surface', 'border-outline-variant/50');
                });
                btn.classList.add('bg-primary', 'text-white', 'border-primary');
                btn.classList.remove('bg-transparent', 'text-on-surface', 'border-outline-variant/50');

                // Atualiza Estado
                selectedSize = btn.dataset.size;
                document.getElementById('selected-size-name').innerText = selectedSize;

                checkReady();
            });
        });

        // Validação e Ação do Botão do Zap
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

            // Formata a mensagem com as variáveis dinâmicas
            const message = `Olá! Eu tenho interesse na peça ${product.name} com cor ${selectedColor.name} (feita de fio ${selectedColor.yarn}) com tamanho ${selectedSize}. Podemos conversar sobre prazo e medidas e combinar o valor?`;
            
            // Substitua '5581999999999' pelo número da Ginga
            const wppUrl = `https://wa.me/5581995466508?text=${encodeURIComponent(message)}`;
            window.open(wppUrl, '_blank');
        });
    }
});