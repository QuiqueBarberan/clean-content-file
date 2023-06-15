# clean-content-file
Contiene un action que quita duplicados y reordena los datos

## Parametros
inputs:
  input_file:
    description: 'Ruta del archivo de entrada'
    required: true
  output_file:
    description: 'Ruta del archivo de salida'
    required: true
  sort:
    description: 'Indica si se debe ordenar alfabéticamente (true/false)'
    required: true
    default: 'false'
  remove_duplicates:
    description: 'Indica si se deben quitar líneas duplicadas (true/false)'
    required: true
    default: 'false'
