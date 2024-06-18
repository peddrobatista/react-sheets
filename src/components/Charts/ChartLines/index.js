import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart } from '@mui/x-charts/LineChart';

const ChartLines = () => {
  const [chartData, setChartData] = useState({ xAxis: [], series: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/rows');
        const data = response.data.values;

        // Suponhamos que seus dados de interesse estejam na primeira linha após o cabeçalho
        const headers = data[1];
        const rows = data.slice(1);

        // Vamos transformar os dados em formato adequado para o LineChart
        const xAxisData = headers.slice(1).map((header) => ({ data: header })); // Eixo X com categorias
        const seriesData = [];

        // Itera sobre as linhas para criar séries de dados para o gráfico
        rows.forEach((row) => {
          const series = {
            name: row[0], // Nome da série (supondo que a primeira coluna seja o nome da série)
            data: row.slice(1).map((value) => parseFloat(value)), // Converte valores para números
          };
          seriesData.push(series);
        });

        // Define o estado com os dados formatados para o gráfico
        setChartData({ xAxis: xAxisData, series: seriesData });
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {chartData.xAxis.length > 0 && chartData.series.length > 0 ? (
        <LineChart
          xAxis={chartData.xAxis}
          series={chartData.series}
          width={800}
          height={400}
        />
      ) : (
        <div>Carregando...</div>
      )}
    </div>
  );
};

export default ChartLines;
