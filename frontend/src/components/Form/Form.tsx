import './Form.css';

interface FormProps {
  loading?: boolean;
  videoUrl?: string;
  placeholder?: string;
  message?: string;
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Form({ loading, videoUrl, placeholder, message, onClick, onChange }: FormProps) {
  return (
    <div className="form-container">
      <input
        type="text"
        placeholder={placeholder}
        value={videoUrl}
        onChange={onChange}
        className="input"
      />
      <button onClick={onClick} className="button" disabled={loading}>
        {loading ? "Baixando..." : "Baixar"}
        {loading && <span className="spinner"></span>}
      </button>
      {message && <p className="message">{message}</p>}
    </div>
  );
}
