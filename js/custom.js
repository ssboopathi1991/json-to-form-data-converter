document.addEventListener('DOMContentLoaded', () => {
    const convertButton = document.querySelector('.convert-json');
    const jsonInput = document.querySelector('.jsonValues');
    const formDataOutput = document.querySelector('.formDataValues');

    convertButton.addEventListener('click', () => {
        convertJsonToFormData();
    });

    function convertJsonToFormData() {
        try {
            convertButton.textContent = 'Converting...';
            const jsonValues = jsonInput.value;
            const jsonObject = JSON.parse(jsonValues);
            let formDataString = '';

            for (const [key, value] of Object.entries(jsonObject)) {
                formDataString += formatKeyValuePair(key, value);
            }

            formDataOutput.value = formDataString;
        } catch (err) {
            if (err instanceof SyntaxError) {
                jsonInput.setCustomValidity('Invalid JSON');
                jsonInput.reportValidity();
                setTimeout(() => {
                    jsonInput.setCustomValidity("");
                }, 800);
            } else {
                alert('Unknown error, please create a github issue with your use case.');
            }
        } finally {
            setTimeout(() => {
                convertButton.textContent = 'Convert';
            }, 200);
        }
    }

    function formatKeyValuePair(key, value) {
        if (value instanceof Object) {
            return resolveObject(key, value);
        }
        if (Array.isArray(value)) {
            return resolveArray(key, value);
        }
        return `${key}:${value}\n`;
    }

    function resolveObject(name, object) {
        return Object.entries(object)
            .map(([key, value]) => formatKeyValuePair(`${name}[${key}]`, value))
            .join('');
    }

    function resolveArray(name, array) {
        return array.map((value, index) => formatKeyValuePair(`${name}[${index}]`, value)).join('');
    }
});