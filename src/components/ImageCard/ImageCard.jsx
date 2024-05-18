import css from './ImageCard.module.css';

export default function ImageCard({ small, regular, description, onClick }) {
  const handleClick = () => {
    onClick(regular);
  };

  return (
    <div>
      <img src={small} alt={description} onClick={handleClick} />
    </div>
  );
}
