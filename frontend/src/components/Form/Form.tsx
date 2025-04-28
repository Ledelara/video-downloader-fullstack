import './Form.css';

interface FormProps {
  title: string;
  loading?: boolean;
  videoUrl: string;
  placeholder: string;
  message: string;
  isEmpty: boolean;
  onClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Form({ title, loading, videoUrl, placeholder, message, isEmpty, onClick, onChange }: FormProps) {
  return (
    <div className="form-container">
      <h1 className='title'>{title}</h1>
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
      {message && (
          <p className={isEmpty ? 'error-message' : 'message'}>{message}</p>
        )}
    </div>
  );
}
