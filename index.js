const fs = require('fs');

async function run() {
  try {
    const inputFilePath = process.env.INPUT_INPUT_FILE;
    const outputFilePath = process.env.INPUT_OUTPUT_FILE;
    const sort = process.env.INPUT_SORT === 'true';
    const removeDuplicates = process.env.INPUT_REMOVE_DUPLICATES === 'true';

    // Leer el contenido del archivo de entrada
    const inputContent = fs.readFileSync(inputFilePath, 'utf8');

    // Eliminar líneas duplicadas y líneas en blanco, y ordenar alfabéticamente
    const lines = inputContent.split('\n');
    const processedLines = [];

    for (let line of lines) {
      if (!removeDuplicates || !processedLines.includes(line)) {
        processedLines.push(line);
      }
    }

    const sortedLines = sort ? processedLines.sort() : processedLines;
    const outputContent = sortedLines.join('\n');

    // Escribir el contenido procesado en el archivo de salida
    fs.writeFileSync(outputFilePath, outputContent, 'utf8');

    console.log('Archivo procesado exitosamente.');
    process.exit(0);
  } catch (error) {
    console.error('Error al procesar el archivo:', error);
    process.exit(1);
  }
}

run();
