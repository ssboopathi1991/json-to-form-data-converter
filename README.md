# JSON to Form Data Converter

![GitHub stars](https://img.shields.io/github/stars/ssboopathi1991/json-to-form-data-converter?style=social)
![GitHub forks](https://img.shields.io/github/forks/ssboopathi1991/json-to-form-data-converter?style=social)

## Overview

The **JSON to Form Data Converter** is a lightweight and user-friendly web tool designed to simplify the process of converting JSON data into form data, making API testing and web development more efficient.

## Features

✅ **Instant Conversion** – Quickly transform JSON data into form-data format with a single click.
✅ **Easy-to-Use Interface** – Simple, intuitive UI designed for developers and testers.
✅ **API Testing Friendly** – Ideal for testing APIs that require form-data payloads.
✅ **Web Development Support** – Streamline your workflow with structured data conversion.
✅ **Nested Data Handling** – Supports converting nested JSON objects and arrays into form-data.
✅ **Fully Client-Side** – No data is sent to a server, ensuring privacy and security.

## How to Use

1. **Enter JSON Data** – Paste your raw JSON data into the input textarea.
2. **Click Convert** – Press the "Convert" button to transform the JSON into form-data.
3. **Copy Form Data Output** – Retrieve the converted form-data from the output textarea.
4. **Use in API Requests** – Copy and use the form-data in API testing tools like Postman.

## Example

### **JSON Input:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "address": {
    "city": "New York",
    "zip": "10001"
  },
  "hobbies": ["reading", "gaming"]
}
```

### **Form Data Output:**
```
name=John Doe
email=john@example.com
address[city]=New York
address[zip]=10001
hobbies[0]=reading
hobbies[1]=gaming
```

## Technologies Used

- **HTML** – Provides structure to the web page.
- **CSS** – Styles the interface for a clean and modern look.
- **JavaScript** – Handles JSON parsing and form-data conversion.

## Installation & Local Setup

To use this tool locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/ssboopathi1991/json-to-form-data-converter.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd json-to-form-data-converter
   ```

3. **Open `index.html` in a Browser:**
   Simply open the `index.html` file in your preferred web browser.

## Contributing

Contributions are welcome! If you'd like to improve this tool, feel free to submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Contact

For feedback or issues, please open a [GitHub Issue](https://github.com/ssboopathi1991/json-to-form-data-converter/issues).

---

🌟 **If you find this tool helpful, please consider giving it a star on GitHub!** 🚀

