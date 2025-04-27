import './Container.module.css';

interface ContainerProps {
  title: string;
  children?: React.ReactNode;
}

export default function Container({ title, children }: ContainerProps) {
  return (
    <div className="container">
      <h1 className="title">{title}</h1>
      <div className="content">
        {children}
      </div>
    </div>
  )
}