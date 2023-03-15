import useCardState from './hooks/useCardState';

export default function Info() {
  const { description, title, icon, onClickIcon } = useCardState();

  return (
    <div className="flex justify-between p-5">
      <div className="card-info">
        <span className="card-info__description">{description}</span>
        <span className="card-info__title">{title}</span>
      </div>
      {icon && (
        <img
          alt="icon"
          src={icon}
          onClick={onClickIcon}
        />
      )}
    </div>
  );
}