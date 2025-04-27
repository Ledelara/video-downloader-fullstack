import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const downloadVideo = async (url: string): Promise<Blob> => {
  try {
    const response = await api.get('/download', {
      params: { url },
      responseType: 'blob',
    });

    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Erro ao baixar o vídeo: ${error.message}`);
    } else {
      throw new Error('Erro inesperado ao tentar baixar o vídeo.');
    }
  }
};
