document.getElementById('search-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = document.getElementById('search-input').value.trim();
    if (!query) return;

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '<p>Buscando...</p>';

    const url = 'https://real-time-amazon-data.p.rapidapi.com/search';
    const apiKey = '35b41da415msh6ec701b11514ecep1037ccjsn4cab3add831c';

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
            const image = product.product_photo ?? 'Imagem não disponível';
            const title = product.product_title ?? 'Título não disponível';
            const price = product.product_price ?? 'Preço não disponível';
            const url = product.product_url ?? '#';
        
            return `
                <div class="product">
                    <img src="${image}" alt="${title}">
                    <h2>${title}</h2>
                    <p>Preço: ${price}</p>
                    <a href="${url}" target="_blank">Ver na Amazon</a>
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
