import React from 'react';
import Provider from '../Provider';
import { useRouter } from 'next/router';

import { useToast } from '@chakra-ui/react';

import styles from './index.module.css';

export default function Product({ shirt }) {
  const productData = shirt && shirt;
  const tamanhos = productData.tamanhos_disponiveis.split(',');
  const cores = productData.cores_disponiveis.split(',');
  const [selectedData, setSelectedData] = React.useState({});
  const toast = useToast();
  const router = useRouter();

  const handleSubmit = event => {
    event.preventDefault();

    // If the user don't select some field
    if (!selectedData.tamanho || !selectedData.cor)
      return toast({
        isClosable: true,
        status: "warning",
        position: "bottom",
        title: "Escolha um tamanho e uma cor para continuar.",
        variant: "top-accent"
      });

    else if (selectedData.tamanho && selectedData.cor){
      // Object to configure color parameter
      const availableColors = {
        "#FDF9F9": "branca",
        "#020202": "preta",
        "#4B4B4B": "cinza"
      };

      // Set message parameters
      const phone = '5511910052395';
      const tamanho = selectedData.tamanho;
      const cor = availableColors[selectedData.cor] || selectedData.cor;
      const shirtName = productData.nome;
      const message = `Oi, Nuile! Quero falar sobre a camiseta ${shirtName.replace("#", " ")}. Você tem ela no tamanho ${tamanho} e na cor ${cor.replace("#", " ")}? Tenho interesse!`;
      const whatsAppLink = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;

      // Open whatsapp api on new tab
      return window && window.open(whatsAppLink, "_blank");
    }
  };

  const Description = () => (
    <div className={styles.description}>
      <h4>Sobre a sua nova camiseta:</h4>
      <p dangerouslySetInnerHTML={{ __html: productData.sobre }} />
      <p className={styles.descriptionTitle}>Descricao</p>
      <p dangerouslySetInnerHTML={{ __html: productData.descricao }} />
    </div>
  );

  const Tamanho = ({ children }) => (
    <div
      className={`
        ${styles.tamanho} 
        ${selectedData.tamanho && selectedData.tamanho === children ? styles.active : null}
      `}
      onClick={e => {
        setSelectedData({
          ...selectedData,
          tamanho: children,
        })
      }}
    >
      {children}
    </div>
  );

  const Cor = ({ hex }) => (
    <div
      className={`
        ${styles.cor}
        ${selectedData.cor && selectedData.cor === hex ? styles.active : null}
      `}
      onClick={e => {
        setSelectedData({
          ...selectedData,
          cor: hex,
        })
      }}

      style={{
        background: hex,
        borderRadius: "100%",
        width: "60px",
        height: "60px",
        border: hex === "#020202" ? "1px solid var(--white)" : "1px solid var(--black)",
        margin: "10px 20px 20px 0px"
      }}
    />
  );

  return (
    <div className={styles.product}>
      <Provider>
        <div className={styles.flexSection}>

          <div className={styles.flexItem}>
            <div className={styles.imageTitle}>
              <p>Camiseta</p>
              <p>Coleção <strong>{productData.categoria}</strong></p>
            </div>
            <img src={productData.foto_1} />
          </div>

          <div className={styles.flexItem}>
            <h2
              dangerouslySetInnerHTML={{ __html: productData.nome }}
              className={styles.title}
            />
            <p dangerouslySetInnerHTML={{ __html: productData.descricao_curta }} />
            <hr className={styles.separator} />

            <div className={styles.tamanhos}>
              <p>Selecione o tamanho:</p>
              <div className={styles.wrapper}>
                {tamanhos.map(item => <Tamanho key={item}>{item}</Tamanho>)}
              </div>
            </div>

            <div className={styles.cores}>
              <p>Selecione a cor:</p>
              <div className={styles.wrapper}>
                {cores.map(item => <Cor key={item} hex={item} />)}
              </div>
            </div>

            <p className={styles.preco}>
              <strong>
                {productData.preco}
              </strong>
              <small>
                {`ou ${productData.parcelado}`}
              </small>
            </p>

            <div className={styles.cta}>
              <button 
                className={styles.buttonPrimary}
                onClick={handleSubmit}
              >
                Comprar agora
              </button>

              <button 
                className={styles.buttonSecondary}
                onClick={e => {
                  e.preventDefault();
                  router.back();
                }}
              >
                Voltar
              </button>
            </div>
          </div>

        </div>

        <Description />
      </Provider>
    </div>
  );
};
