# Exercício 1 - Clima da Semana

Você planejou por 1 ano uma viagem para o Canadá pois era seu sonho ver a neve ☃️. Infelizmente, chegando lá, o clima estava mais quente que o normal e ficou assim até o último dia da sua viagem, não possibilitando a neve. Na próxima semana, a temperatura abaixou e a neve veio. Além disso, os lugares estavam muito lotados, parece que todo mundo decidiu viajar para lá na mesma época.

Para não sofrer mais com isso, você decidiu fazer um servidor utilizando o **Express** que retorna o clima da semana e quantas pessoas o visualizaram.

## Requisitos

O primeiro protótipo consiste em duas rotas:

### 1. `GET /forecast`

- **Descrição**: Esta rota soma uma visualização em todos os dias da semana e responde um JSON com o clima da semana.
- **Resposta** :
  ```json
  [
    { "day": 1, "temperature": "32 °C", "wind": "8 km/h", "views": 0 },
    { "day": 2, "temperature": "27 °C", "wind": "9 km/h", "views": 0 },
    { "day": 3, "temperature": "30 °C", "wind": "8 km/h", "views": 0 },
    { "day": 4, "temperature": "32 °C", "wind": "7 km/h", "views": 0 },
    { "day": 5, "temperature": "31 °C", "wind": "8 km/h", "views": 0 },
    { "day": 6, "temperature": "26 °C", "wind": "10 km/h", "views": 0 },
    { "day": 7, "temperature": "27 °C", "wind": "9 km/h", "views": 0 }
  ]

 ### 2. `GET /forecast/:day` 
- **Descrição**: Esta rota soma uma visualização no clima do dia recebido por parâmetro e responde um JSON com os dados atualizados do dia.
- **Resposta** :
 ```json
{ "day": 1, "temperature": "32 °C", "wind": "8 km/h", "views": 1 }
