document.addEventListener('DOMContentLoaded', function() {
    function renderFavoritos() {
        const favoritosContainer = document.getElementById('favoritos-results');
        const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
        const produtos = JSON.parse(localStorage.getItem("produtos")) || [];

        if (favoritos.length === 0) {
            favoritosContainer.innerHTML = '<p>Você ainda não favoritou nenhum produto.</p>';
            return;
        }
        const favoritosProdutos = produtos.filter((product, index) => favoritos.includes(index.toString()));

        favoritosContainer.innerHTML = favoritosProdutos.map(product => {
            const image = product.product_photo ?? '';
            const title = product.product_title ?? '';
            const price = product.product_price ?? 'Preço não disponível';
            const priceLater = product.product_original_price ?? '';
            const avaliation = product.product_star_rating ?? 'Avaliação indisponível';
            const url = product.product_url ?? '#';

            function gerarEstrelas(avaliacao) {
                const totalEstrelas = 5;
                const estrelasCheias = Math.floor(avaliacao);
                const meiaEstrela = avaliacao % 1 >= 0.3 && avaliacao % 1 <= 0.7 ? 1 : 0;
                const estrelasVazias = totalEstrelas - estrelasCheias - meiaEstrela;

                return '★'.repeat(estrelasCheias) + (meiaEstrela ? '⯨' : '') + '☆'.repeat(estrelasVazias);
            }

            return `
                <div class="product">
                    <div class="product-heart product-heartClick"><i class="fa-solid fa-heart"></i></div>
                    <div class="product_infosImg">
                        <img src="${image}" alt="${title}">
                        <h2>${title}</h2>
                        <p class="pPromotion">${priceLater}</p>
                    </div>
                    <div class="product_infos">
                        <p class="price"><strong>${price}</strong></p>
                        <p>${gerarEstrelas(avaliation)} (${avaliation})</p>
                        <a href="${url}" target="_blank">Ver na Amazon</a>
                    </div>
                </div>
            `;
        }).join('');
    }

    renderFavoritos();
});
