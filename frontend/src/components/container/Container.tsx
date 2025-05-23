import './Container.css';

interface ContainerProps {
  children?: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="container">
      <div className="content">
        {children}
      </div>
    </div>
  )
}