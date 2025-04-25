import { useState } from "react";
import "./App.css";

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!videoUrl) {
      setMessage("Por favor, insira a URL de um vídeo.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        `http://localhost:8080/download?url=${encodeURIComponent(videoUrl)}`
      );
      if (!response.ok) {
        throw new Error("Erro ao baixar o vídeo.");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "video-baixado.mp4";
      document.body.appendChild(a);
      a.click();
      a.remove();

      setMessage("Vídeo baixado com sucesso!");
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage("Erro inesperado.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Baixador de Vídeos</h1>
      <input
        type="text"
        placeholder="Cole a URL do vídeo aqui"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        className="input"
      />
      <button onClick={handleDownload} className="button" disabled={loading}>
        {loading ? "Baixando..." : "Baixar"}
        {loading && <span className="spinner"></span>}
      </button>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default App;
