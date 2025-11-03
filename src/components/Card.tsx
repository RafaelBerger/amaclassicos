import "../styles/card.css";
import type { IconProps } from "@phosphor-icons/react";

interface CardProps {
  Icon: React.FC<IconProps>;
  comunicationMethod: string;
  comunicationInfo: string;
  buttonText: string;
  href: string;
}

function Card({
  comunicationMethod,
  comunicationInfo,
  buttonText,
  href,
  Icon,
}: CardProps) {
  return (
    <>
      <main className="card_container">
        <div>{<Icon size={48} color="#962925" />}</div>
        <div className="card_text">
          <p>{comunicationMethod}</p>
          <p>{comunicationInfo}</p>
        </div>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {buttonText}
        </a>
      </main>
    </>
  );
}

export default Card;
