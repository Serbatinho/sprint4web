import styles from '../styles/layout/app/home/home.module.scss';


import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className={`${styles["full-content-container"]}`}>
        <div className={`${styles["mid-content-container"]}`}>
          <h1>Um aplicativo de acionamento de seguro para veículos pesados de forma rápida e efetiva</h1>
          <p className={`${styles["hidden-text-home"]}`}>O projeto é um software de atendimento para emergências, logo o
            atendimento deve ser amplo, alcançando telefones via ligação,
            smartphones via app, desktops via sites e para o atendente via
            interface. Claro, tudo da maneira mais visualmente agradável o
            possível, com um grande foco no design da hud tanto para o cliente
            quanto para o atendente para que não haja erros por parte do usuário
            e as informações sejam compreendidas rapidamente pelo service
            desk</p>
          <Link href='/saiba-mais' className="dynamic-border btn">SAIBA MAIS</Link>
          <Image src='/img/homecar.png' alt="Carro Proteção Pesada" className={`${styles["image-home"]}`} width={416} height={338} />
        </div>
      </main>
    </>
  )
}

