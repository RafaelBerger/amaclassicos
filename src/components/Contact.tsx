import "../styles/contact.css";
import Card from "./Card";
import { WhatsappLogoIcon, EnvelopeIcon } from "@phosphor-icons/react";

function Contact() {
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
          comunicationInfo="(14) 98158-3077"
          buttonText="Mandar mensagem"
          href="https://wa.me/5514981583077"
        />
        <Card
          Icon={EnvelopeIcon}
          comunicationMethod="Email"
          comunicationInfo="contato@amaclassicos.com.br"
          buttonText="Mandar email"
          href="mailto:contato@amaclassicos.com.br"
        />
      </div>
    </div>
  );
}

export default Contact;
