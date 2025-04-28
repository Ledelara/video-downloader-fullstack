import { useState } from "react";
import Container from "./components/container/Container";
import Form from "./components/Form/Form";
import { useMutation } from "@tanstack/react-query";
import { downloadVideo } from "./services/api";

function App() {
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false)

  const { mutate: handleDownload } = useMutation({
    mutationFn: downloadVideo,
    onMutate: () => {
      setLoading(true);
      setIsEmpty(false)
      setMessage("");
    },
    onSuccess: (data) => {
      const url = window.URL.createObjectURL(data);
      const a = document.createElement("a");
      a.href = url;
      a.download = "video-baixado.mp4";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setMessage("Vídeo baixado com sucesso!");
    },
    onError: (err: unknown) => {
      if (err instanceof Error) {
        setMessage(err.message);
      } else {
        setMessage("Erro inesperado.");
      }
    },
    onSettled: () => {
      setLoading(false);
    }
  });

  const handleSubmit = () => {
    if (!videoUrl || !/^https?:\/\/(www\.)?youtube\.com\/watch\?v=[a-zA-Z0-9_-]+/.test(videoUrl)) {
      setIsEmpty(true)
      setMessage("Por favor, insira uma URL válida do YouTube.");
      return;
    }

    handleDownload(videoUrl);
  };

  return (
    <Container>
      <Form 
        isEmpty={isEmpty}
        title="Dowloader"
        loading={loading}
        videoUrl={videoUrl}
        placeholder="Cole a URL do vídeo aqui"
        message={message}
        onClick={handleSubmit}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
    </Container>
  );
}

export default App;
