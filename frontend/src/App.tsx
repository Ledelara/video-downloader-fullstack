import { useState } from "react";
import Container from "./components/container/Container";
import Form from "./components/Form/Form";
import { useMutation } from "@tanstack/react-query";
import { downloadVideo } from "./services/api";

function App() {
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { mutate: handleDownload, isPending, error, isSuccess } = useMutation({
    mutationFn: downloadVideo,
    onMutate: () => {
      setLoading(true);
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
    if (!videoUrl) {
      setMessage("Por favor, insira a URL de um vídeo.");
      return;
    }
    handleDownload(videoUrl);
  };

  return (
    <Container title="Donwloader">
      <Form 
        loading={isPending || loading}
        videoUrl={videoUrl}
        placeholder="Cole a URL do vídeo aqui"
        message={isSuccess ? message : error ? message : ""}
        onClick={handleSubmit}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
    </Container>
  );
}

export default App;
