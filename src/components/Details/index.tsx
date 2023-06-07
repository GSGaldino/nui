import React, { memo } from 'react';
import PropTypes from 'prop-types';

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Icon,
} from '@chakra-ui/react';
import { Typography } from '@/components';

import measurements from '@/constants/measurements.json';
import * as S from './styles';

export interface IDetails {
  type: 'camiseta' | 'cropped';
}

function Details({ type }: IDetails) {
  const measurement = measurements[type];

  const titles: any = {
    camiseta: 'Medidas das nossas camisetas',
    cropped: 'Medidas dos nossos croppeds',
  };

  return (
    <S.Container hasMeasurement={!!measurement}>
      <div>
        <S.History>
          <Typography variant="h3-normal">AS NOSSAS PEÇAS TEM UMA HISTÓRIA</Typography>
          <Typography>
            Todas as peças Nui são produzidas por nós do começo ao fim, então podemos dizer
            exatamente tudo sobre elas. Duvida? Então se liga só: primeiro, criamos os moldes
            junto com dois modelistas incríveis lá do Brás, a Jhudy e o Rudy. E quase na mesma
            rua está o local onde nós compramos as malhas. Que por sinal, são de extrema
            qualidade.
          </Typography>
          <Typography>
            A peça que você está prestes a adquirir é feita 100% de algodão penteado 30.1,
            suuuuuuuuuper macia e gostosa. Eu garanto! Ah, absolutamente todas as nossas peças
            seguem esse padrão de conforto, tá? Daí enviamos a malha devidamente cortada para o
            Marcelo, nosso fiel costureiro, que trabalha junto com a família, e que juntos,
            costuram esse monte de malha, formando assim, as peças da Nui. Eles costuram junto
            as duas etiquetas que acompanham a camiseta e o cropped: o clip com a carinha da
            ovelha Nuile na barra frontal e a etiqueta de composição interna, feita de cetim (e
            bem longe do pescoço, para o maior conforto de todos).
          </Typography>
          <Typography>
            E por último, mas não menos importante, enviamos nossas peças para a nossa
            estamparia parceira, que já tem todos os detalhes sobre as artes que serão
            estampadas, como tamanhos, cores e lugares de aplicação. Eles imprimem nossas
            estampas utilizando uma Kornit, a melhor máquina de estampas digitais do mundo, o
            que faz das nossas peças durarem MUITO mais.
          </Typography>
        </S.History>
      </div>

      <div>
        {measurement && (
          <Accordion
            background="var(--absolute-black)"
            borderRadius="var(--border-radius)"
            allowToggle
            colorScheme="blackAlpha"
            defaultIndex={[0]}
            p={0}
          >
            <AccordionItem>
              <AccordionButton display="flex" justifyContent="space-between">
                <Typography holdColor variant="h4-normal" color="light">
                  {titles[type as unknown as string] || ''}
                </Typography>

                <Icon as={AccordionIcon} fontWeight={400} fontSize="40px" color="white" />
              </AccordionButton>

              <AccordionPanel>
                <S.Panel>
                  <div>
                    {measurement.map((item: any) => (
                      <Typography holdColor key={item.label}>
                        {`${item.label} - Altura: ${item.height}, Largura: ${item.width}`}
                      </Typography>
                    ))}
                  </div>

                  <div>
                    <img src="/assets/nuile-medindo.svg" alt="" />
                  </div>
                </S.Panel>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        )}

        <S.ExclusiveWrapper>
          <img src="/assets/icons/exclusive-icon.svg" alt="" />
          <Typography variant="h4-normal">Todas as nossas peças são limitadas e exclusivas. Ou seja, após atingirem seu limite, não serão mais produzidas.</Typography>
        </S.ExclusiveWrapper>
      </div>
    </S.Container>
  );
}

Details.propTypes = {
  type: PropTypes.string,
};

Details.defaultProps = {
  type: '',
};

export default memo(Details);
