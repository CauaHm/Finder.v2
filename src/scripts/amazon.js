document.getElementById('search-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = document.getElementById('search-input').value.trim();
    if (!query) return;

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '<p>Buscando...</p>';

    const url = 'https://real-time-amazon-data.p.rapidapi.com/search';
    const apiKey = '7a1ddbc53emshe062230528d1b46p10f924jsnd561853668fe';

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(`${url}?query=${encodeURIComponent(query)}&country=BR`, options);

        if (!response.ok) {
            resultsContainer.innerHTML = '<p>Erro ao buscar dados da API.</p>';
            console.error('Erro na requisição:', response.statusText);
            return;
        }

        const data = await response.json();
        console.log("Dados da API:", data);

        if (!data.data?.products || data.data.products.length === 0) {
            resultsContainer.innerHTML = '<p>Nenhum produto encontrado.</p>';
            return;
        }

        resultsContainer.innerHTML = data.data.products.map(product => {
            console.log("Produto:", product);
        
            // Acessando as propriedades corretas do objeto
            const image = product.product_photo ?? '';
            const title = product.product_title ?? '';
            const price = product.product_price ?? 'Preço não disponível';
            const vendas = product.sales_volume ?? '';
            const priceLater = product.product_original_price ?? '';
            const avaliation = product.product_star_rating ?? 'Avaliação indisponivel'
            
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
                <div class ="product-heart"><i class="fa-solid fa-heart"></i></div>
                <div class="product_infosImg">
                <img src="${image}" alt="${title}">
                <h2>${title}</h2>
                <p class="pPromotion"> ${priceLater}<p/>
                </div>
                <div class="product_infos">
                <p class ="price"><strong>${price}</strong></p>
                <p>${gerarEstrelas(avaliation)} (${avaliation})</p>
                <a href="${url}" target="_blank">Ver na Amazon</a>
                </div>
            </div>
        `;
    }).join('');

    } catch (error) {
        resultsContainer.innerHTML = '<p>Erro ao buscar produtos.</p>';
        console.error('Erro na requisição:', error);
    }
});

// Adiciona evento aos botões das categorias
document.getElementById('categories').addEventListener('click', (event) => {
    const category = event.target.dataset.category;
    if (!category) return; // Ignora se o clique não for em um botão com data-category

    // Define o valor da pesquisa como o nome da categoria
    document.getElementById('search-input').value = category;

    // Simula o envio do formulário de busca
    document.getElementById('search-form').dispatchEvent(new Event('submit'));

});

// Adiciona evento aos botões das categorias mobile
const categoriesMobile = document.getElementById('categoriesMobile');
if (categoriesMobile) {
    categoriesMobile.addEventListener('click', (event) => {
        const category = event.target.dataset.category;
        if (!category) return;
        document.getElementById('search-input').value = category;
        document.getElementById('search-form').dispatchEvent(new Event('submit'));
    });
}



