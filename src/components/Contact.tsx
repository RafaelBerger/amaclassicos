import { getInfos } from "../api/queries";
import "../styles/contact.css";
import { formatPhoneBR } from "../utils/formatPhone";
import Card from "./Card";
import { WhatsappLogoIcon, EnvelopeIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

function Contact() {
  const [infos, setInfos] = useState<Infos | null>(null);

  useEffect(() => {
    getInfos().then(setInfos);
  }, []);

  return (
    <div className="contact_container" id="contato">
      <div className="contact_text">
        <h1>CONTATE-NOS</h1>
        <p>
          Entre em contato com a gente, estamos prontos para colocar sua paixão
          em movimento.
        </p>
      </div>
      <div className="contact_card">
        <Card
          Icon={WhatsappLogoIcon}
          comunicationMethod="WhatsApp"
          comunicationInfo={formatPhoneBR(infos?.numeroDoWhatsapp)}
          buttonText="Mandar mensagem"
          href={`https://wa.me/${infos?.numeroDoWhatsapp}`}
        />
        <Card
          Icon={EnvelopeIcon}
          comunicationMethod="Email"
          comunicationInfo={infos?.emailDeContato}
          buttonText="Mandar email"
          href={`mailto:${infos?.emailDeContato}`}
        />
      </div>
    </div>
  );
}

export default Contact;
