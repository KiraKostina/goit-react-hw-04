import css from './ImageCard.module.css';

export default function ImageCard({ small, description}) {
  return (
    <div>
          <img src={small} alt={description} />
    </div>
  );
}
