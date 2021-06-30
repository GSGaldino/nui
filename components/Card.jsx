import React from 'react';
import styles from './Card.module.css';

export default function Card({ shirt }) {
  const {
    nome,
    categoria,
    preco,
    parcelado,
    foto_1,
    artists
  } = shirt;

  return (
    <div className={styles.card}>

      <div className={styles.cardTitle}>
        <h4>{nome}</h4>
      </div>

      <div className={styles.cardCollection}>
        <p>{`Coleção: ${categoria} © ${artists ? artists : null}`}</p>
      </div>

      <div className={styles.cardImage}>
        <img src={foto_1} alt={nome} />
      </div>

      <div className={styles.cardPrice}>
        <strong>
          {preco}
        </strong>
        <span className={styles.parcelado}>OU {parcelado}</span>
      </div>

    </div>
  );
};
