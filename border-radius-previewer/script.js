
/*
 * Border Radius Previewer
 * Atualiza os cantos de um elemento e gera o CSS correspondente.
 */

// Associa cada canto ao seu controle deslizante e campo numérico.
const corners = [
    {
        name: "topLeft",
        css: "border-top-left-radius"
    },
    {
        name: "topRight",
        css: "border-top-right-radius"
    },
    {
        name: "bottomRight",
        css: "border-bottom-right-radius"
    },
    {
        name: "bottomLeft",
        css: "border-bottom-left-radius"
    }
];

// Elementos principais da interface.
const previewBox = document.getElementById("previewBox");
const cssCode = document.getElementById("cssCode");
const copyButton = document.getElementById("copyButton");
const copyMessage = document.getElementById("copyMessage");
const resetButton = document.getElementById("resetButton");

// Guarda os valores iniciais para a função de restauração.
const initialValues = {
    topLeft: 20,
    topRight: 20,
    bottomRight: 20,
    bottomLeft: 20
};

// Atualiza o preview e o código CSS.
function updatePreview() {
    const declarations = [];

    corners.forEach((corner) => {
        const range = document.getElementById(corner.name);
        const number = document.getElementById(
            corner.name + "Value"
        );

        // Lê o valor do controle deslizante.
        const value = Number(range.value);

        // Mantém o campo numérico sincronizado.
        number.value = value;

        // Aplica o valor ao canto correspondente.
        previewBox.style.setProperty(
            corner.css,
            `${value}px`
        );

        // Prepara a linha de CSS a ser exibida.
        declarations.push(`  ${corner.css}: ${value}px;`);
    });

    // Monta o código completo.
    cssCode.textContent = `.preview-box {\n${declarations.join("\n")}\n}`;

    // Limpa a mensagem anterior de cópia.
    copyMessage.textContent = "";
}

// Conecta os campos numéricos e sliders.
corners.forEach((corner) => {
    const range = document.getElementById(corner.name);
    const number = document.getElementById(
        corner.name + "Value"
    );

    // Ao mover o slider, atualiza a interface.
    range.addEventListener("input", updatePreview);

    // Ao digitar um número, atualiza o slider.
    number.addEventListener("input", () => {
        if (number.value === "") {
            return;
        }

        const value = Number(number.value);

        if (!Number.isFinite(value)) {
            return;
        }

        // Limita o valor ao intervalo de 0 a 100.
        const safeValue = Math.min(100, Math.max(0, value));

        range.value = safeValue;
        number.value = safeValue;

        updatePreview();
    });

    // Ao sair do campo vazio, restaura o valor atual.
    number.addEventListener("change", () => {
        if (number.value === "") {
            number.value = range.value;
        }

        updatePreview();
    });
});

// Aplica um valor igual aos quatro cantos.
function applyPreset(value) {
    corners.forEach((corner) => {
        document.getElementById(corner.name).value = value;
        document.getElementById(
            corner.name + "Value"
        ).value = value;
    });

    updatePreview();
}

// Botões de formatos predefinidos.
document.querySelectorAll("[data-radius]").forEach((button) => {
    button.addEventListener("click", () => {
        const value = Number(button.dataset.radius);
        applyPreset(value);
    });
});

// Restaura os valores iniciais.
resetButton.addEventListener("click", () => {
    corners.forEach((corner) => {
        const value = initialValues[corner.name];

        document.getElementById(corner.name).value = value;
        document.getElementById(
            corner.name + "Value"
        ).value = value;
    });

    updatePreview();
});

// Copia o código CSS para a área de transferência.
copyButton.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(cssCode.textContent);
        copyMessage.textContent = "CSS copiado com sucesso!";
    } catch (error) {
        copyMessage.textContent =
            "Não foi possível copiar automaticamente. Selecione o código e copie manualmente.";
    }
});

// Inicializa a interface ao carregar a página.
updatePreview();
