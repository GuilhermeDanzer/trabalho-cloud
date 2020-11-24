import React from "react";
import { Titulo, Container, Texto } from "../info/index";
import ReactPlayer from "react-player";
import styled from "styled-components";

const VideoContainer = styled.div`
  height: 700px;
`;
export const Video = () => {
  return (
    <Container>
      <Titulo>
        Qual o futuro da computação nas nuvens e da computação em Clusters?
      </Titulo>
      <Texto>
        A computação em nuvem mudou significativamente nesta última década,
        existem muitos mais provedores que lotaram de serviços com suas ofertas,
        mas também sua infraestrutura que aumentou em larga escala, aqui falarei
        sobre as tendências que irão dominar o futuro da computação em nuvem e
        nisso iremos começar com a infraestrutura e em seguida tendências para o
        futuro da nuvem.
      </Texto>
      <Texto>
        Com certeza absoluta a infraestrutura irá aumentar dos provedores de
        cloud irá aumentar, de acordo com Varghese(2017, p.3) a nuvem múltipla,
        micro nuvem e nuvem, nuvem ad hoc e nuvem heterogênea são as tendências
        de mudança na infraestrutura da nuvem.
      </Texto>
      <Texto>
        As promessas da computação de nuvem é Volunteer Computing, Fog and
        Mobile Edge Computing, Serverless Computing e Software-Defined
        Computing.
      </Texto>
      <Texto>
        Volunteer Computing de acordo com Buyya(2017, p.7) pode assumir
        diferentes formas. Por exemplo, usuários de uma rede social podem
        compartilhar seus recursos de computação heterogêneos na forma de uma
        nuvem ad hoc.Isso é conhecido como ‘Computação em nuvem social’.
        Proprietários mais confiáveis são recompensados por meio de um marcador
        de reputação dentro do rede social.
      </Texto>
      <Texto>
        Fog and Mobile Edge Computing de acordo com Buyya(2017, p.8)este termo é
        usado na literatura , que é semelhante à fog computing em que a edge da
        rede é empregada.Neste modelo de computação, a abrangência rede de
        acesso pode ser compartilhada com o objetivo de reduzir o
        congestionamento da rede.
      </Texto>
      <Texto>
        Serverless Computing significa simplesmente que um servidor não é
        alugado como um servidor de nuvem como no cloud convencional.
      </Texto>
      <Texto>
        Software-Defined Computing é, de acordo com o Buyya(2017, p.7)uma
        abordagem de isolar o hardware na rede dos componentes que controlam o
        tráfego de dados . Esta abstração permite programação dos componentes de
        controle da rede para obter uma arquitetura de rede dinâmica.
      </Texto>
      <Texto>
        Indo para o assunto de cluster o futuro é promissor e não poderia ser
        diferente os clusters estão claramente aqui para ficar. Gostamos de
        construir e operar clusters e eles certamente fornecem um recurso de
        computação eficaz. A nasa utiliza muito os clusters para computação de
        alto de desempenho, Duffy(p.1) disse que nos últimos cinco anos, a NCCS
        implantou uma abordagem de cluster escalável para atender à aplicação
        requisitos para simulações climáticas em grande escala. Recentemente, a
        NCCS implantou uma unidade escalonável adicional consistindo em 14.400
        núcleos de processador Intel Xeon
      </Texto>
      <Texto>
        Westmere e 28,8 terabytes de memória distribuída, de tal modo essa
        afirmação só prova que conforme o tempo irá passando os investimentos em
        clusters em várias áreas só aumentarão, seja em realidades virtuais, em
        simulações climáticas ou pesquisas apontadas na CLUSTERS OF EUROPEAN
        PROJECTS ON CLOUD.
      </Texto>
      <VideoContainer>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=AGp7UFz6_es&feature=youtu.be"
          width="100%"
          height="100%"
        />
      </VideoContainer>
    </Container>
  );
};

export default Video;
